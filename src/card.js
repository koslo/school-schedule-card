import {DEFAULTS} from './constants.js'
import {normalizeData, parseYmdToLocalDate, toISODateLocal, getMondayOfLocalWeek} from './utils.js'
import {renderDayContent} from './render.js'
import styles from './styles/styles.css'
import {createTranslator, getLanguageFromHass} from './i18n.js'

export class SchoolScheduleCard extends HTMLElement {
    setConfig(config) {
        this._config = {...DEFAULTS, ...config}
        if (!this._root) {
            this._root = this.attachShadow({mode: 'open'})
            this._card = document.createElement('ha-card')
            this._style = document.createElement('style')
            this._container = document.createElement('div')
            this._container.className = 'container'
            this._card.appendChild(this._style)
            this._card.appendChild(this._container)
            this._root.appendChild(this._card)
        }
        // initialize i18n (no hass yet -> default 'en')
        if (!this._lang) this._lang = 'en'
        this._t = createTranslator(this._lang)
        // Render placeholder if no hass yet
        if (!this._hass) {
            this._style.textContent = styles
            const t = this._t
            this._container.innerHTML = `<div class="school-schedule-card"><div class="header"><div class="day-title">${
                this._config.title || t('card_title')
            }</div><div class="date">${t('loading')}</div></div></div>`
        }
        this._lastDataSig = undefined
        this._maybeRender()
    }

    set hass(hass) {
        this._hass = hass
        // detect language and update translator
        const newLang = getLanguageFromHass(hass)
        if (newLang && newLang !== this._lang) {
            this._lang = newLang
            this._t = createTranslator(newLang)
            this._lastDataSig = undefined // force rerender on language change
        }
        this._maybeRender()
    }

    _getDataSignature() {
        const cfg = this._config || DEFAULTS
        const relevantCfg = {
            title: cfg.title,
            show_date: cfg.show_date,
            show_footer_hints: cfg.show_footer_hints,
            entity: cfg.entity ? String(cfg.entity) : undefined,
            has_inline_schedule: !!cfg.schedule,
            courses: Array.isArray(cfg.courses)
                ? cfg.courses.map((s) => String(s).toLowerCase().trim())
                : undefined,
            hide_subjects: Array.isArray(cfg.hide_subjects)
                ? cfg.hide_subjects.map((s) => String(s).toLowerCase().trim())
                : undefined,
            subject_colors: cfg.subject_colors || undefined,
        }
        return JSON.stringify({cfg: relevantCfg, days: this._parseData(), lang: this._lang || 'en'})
    }

    _maybeRender() {
        const sig = this._getDataSignature()
        if (sig === this._lastDataSig) return
        this._lastDataSig = sig

        const prevGrid = this._container ? this._container.querySelector('.grid') : null
        const prevScrollLeft = prevGrid ? prevGrid.scrollLeft : 0

        this._render()
        this._wireNotesToggle()

        const newGrid = this._container ? this._container.querySelector('.grid') : null
        if (newGrid && prevScrollLeft) {
            try {
                newGrid.scrollLeft = prevScrollLeft
            } catch (_) {
            }
        }
    }

    _parseData() {
        const cfg = this._config || {}

        const applyCourseFilter = (days) => {
            if (!Array.isArray(days)) return []
            const whitelist = Array.isArray(cfg.courses)
                ? cfg.courses.map((s) => String(s).toLowerCase().trim()).filter(Boolean)
                : null
            if (!whitelist || whitelist.length === 0) return days
            const extractCourseName = (l) => {
                const subj = String(l.subject || '')
                const info = String(l.info || '')
                if (!info) return subj
                const firstWord = info.trim().split(/\s+/)[0] || ''
                return firstWord || subj
            }
            const match = (subject) => whitelist.includes(String(subject || '').toLowerCase().trim())
            return days.map((d) => ({
                ...d,
                lessons: Array.isArray(d.lessons)
                    ? d.lessons.filter((l) => !l.isCourse || match(extractCourseName(l)))
                    : [],
            }))
        }

        const applyHideSubjectsFilter = (days) => {
            if (!Array.isArray(days)) return []
            const blacklist = Array.isArray(cfg.hide_subjects)
                ? cfg.hide_subjects.map((s) => String(s).toLowerCase().trim()).filter(Boolean)
                : null
            if (!blacklist || blacklist.length === 0) return days
            const extractName = (l) => {
                const subj = String(l.subject || '')
                if (subj && subj !== '---') return subj
                const info = String(l.info || '')
                const firstWord = info.trim().split(/\s+/)[0] || ''
                return firstWord || subj
            }
            const blocked = (subject) => blacklist.includes(String(subject || '').toLowerCase().trim())
            return days.map((d) => ({
                ...d,
                lessons: Array.isArray(d.lessons) ? d.lessons.filter((l) => !blocked(extractName(l))) : [],
            }))
        }

        if (cfg.schedule && Array.isArray(cfg.schedule.days)) {
            return applyHideSubjectsFilter(applyCourseFilter(normalizeData(cfg.schedule)))
        }

        const entId = cfg.entity
        if (this._hass && entId && this._hass.states && this._hass.states[entId]) {
            const stObj = this._hass.states[entId]
            const attrs = stObj.attributes || {}
            if (Array.isArray(attrs.days)) {
                return applyHideSubjectsFilter(applyCourseFilter(normalizeData(attrs)))
            }
        }
        return []
    }

    _render() {
        if (!this._root) return
        const cfg = this._config || DEFAULTS
        const {show_date, show_footer_hints, view, tomorrow_after, dense} = cfg

        if (view === 'week') {
            this._card.setAttribute('style', 'background: none;')
        }

        // styles
        this._style.textContent = styles
        const days = this._parseData()
        let day
        let targetDate

        const parseCutoff = (hhmm) => {
            const m = String(hhmm || '').match(/^(\d{1,2}):(\d{2})$/)
            const now = new Date()
            if (!m) return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
            const hh = Math.max(0, Math.min(23, parseInt(m[1], 10)))
            const mm = Math.max(0, Math.min(59, parseInt(m[2], 10)))
            return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm, 0)
        }
        const now = new Date()
        const cutoff = parseCutoff(tomorrow_after)
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const weekday = (today.getDay() + 6) % 7

        if (weekday === 5 || weekday === 6 || (weekday === 4 && now >= cutoff)) {
            targetDate = new Date(today.getTime() + (7 - weekday) * 86400000)
        } else if (now >= cutoff) {
            targetDate = new Date(today.getTime() + 86400000)
        } else {
            targetDate = today
        }

        if ((view || 'week') === 'day') {
            const byDate = (arr, dt) =>
                arr.find((d) => {
                    if (!d.date) return false
                    const dd = parseYmdToLocalDate(d.date)
                    if (!dd || isNaN(dd.getTime())) return false
                    return (
                        dd.getFullYear() === dt.getFullYear() &&
                        dd.getMonth() === dt.getMonth() &&
                        dd.getDate() === dt.getDate()
                    )
                })
            day = byDate(days, targetDate)
            if (!day) {
                const weekday = targetDate.toLocaleDateString(undefined, {weekday: 'long'})
                day = {name: weekday, date: toISODateLocal(targetDate), lessons: [], hints: []}
            }

            const contentHtml = renderDayContent({dobj: day, show_date, show_footer_hints, dense, view, subject_colors: cfg.subject_colors, t: this._t})
            this._container.innerHTML = `${contentHtml}`
        } else {
            const monday = getMondayOfLocalWeek(targetDate)
            const sunday = new Date(monday.getTime() + 6 * 86400000)

            const inWeek = (d) => {
                if (!d.date) return false
                const dd = parseYmdToLocalDate(d.date)
                if (!dd || isNaN(dd.getTime())) return false
                dd.setHours(0, 0, 0, 0)
                return dd >= monday && dd <= sunday
            }

            const weekDays = days.filter(inWeek).sort((a, b) => {
                const da = parseYmdToLocalDate(a.date)?.getTime() || 0
                const db = parseYmdToLocalDate(b.date)?.getTime() || 0
                return da - db
            })

            const toRender = weekDays.length > 0 ? weekDays : days

            const renderOne = (dobj) => renderDayContent({
                dobj,
                show_date,
                show_footer_hints,
                dense,
                view,
                subject_colors: cfg.subject_colors,
                t: this._t,
            })
            const gridHtml = `<div class="grid">${toRender.map(renderOne).join('')}</div>`
            this._container.innerHTML = `${gridHtml}`
        }
    }

    _wireNotesToggle() {
        const cfg = this._config || DEFAULTS
        const {view} = cfg
        if (!this._container) return
        const wrappers = this._container.querySelectorAll('.daily-notes')
        wrappers.forEach((wrap) => {
            const title = wrap.querySelector('.notes-title')
            const list = wrap.querySelector('.notes-list')
            if (!title || !list) return
            // remove previous listeners by cloning
            const newTitle = title.cloneNode(true)
            title.replaceWith(newTitle)

            const setState = (expanded) => {
                wrap.classList.toggle('expanded', expanded)
                wrap.classList.toggle('collapsed', !expanded)
                newTitle.setAttribute('aria-expanded', expanded ? 'true' : 'false')
            }
            setState(view === 'week')

            const onActivate = (ev) => {
                if (ev && ev.type === 'keydown') {
                    const key = ev.key
                    if (key !== 'Enter' && key !== ' ' && key !== 'Spacebar') return
                    ev.preventDefault()
                }
                const isExpanded = wrap.classList.contains('expanded')
                setState(!isExpanded)
            }
            newTitle.addEventListener('click', onActivate)
            newTitle.addEventListener('keydown', onActivate)
        })
    }
}
