import { css, html, LitElement, PropertyValues, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { CARD_TAG, DEFAULTS } from './constants'
import stylesText from './styles/styles.css'
import { createTranslator, getLanguageFromHass } from './i18n'
import './components/day-card'
import { DayData, ScheduleConfig, HomeAssistant } from './types'
import { getMondayOfLocalWeek, normalizeData, parseYmdToLocalDate, toISODateLocal } from './utils'

@customElement(CARD_TAG)
export class SchoolScheduleCard extends LitElement {
  // HA will set this via property assignment
  @property({ attribute: false }) hass?: HomeAssistant

  @state() private _config: ScheduleConfig = { ...(DEFAULTS as ScheduleConfig) }
  @state() private _lang: string = 'en'
  @state() private _t = createTranslator('en')
  @state() private _lastDataSig?: string

  static styles = css`${unsafeCSS(stylesText)}`

  static getConfigElement() {
    // No editor yet
    return null
  }

  static getStubConfig(): Partial<ScheduleConfig> {
    return { view: 'week', show_date: true }
  }

  setConfig(config: ScheduleConfig): void {
    this._config = { ...(DEFAULTS as ScheduleConfig), ...(config || {}) }
    // reset signature to force re-render
    this._lastDataSig = undefined
  }

  protected willUpdate(changedProps: PropertyValues<this>): void {
    if (changedProps.has('hass')) {
      const newLang = getLanguageFromHass(this.hass)
      if (newLang && newLang !== this._lang) {
        this._lang = newLang
        this._t = createTranslator(newLang)
        this._lastDataSig = undefined
      }
    }
  }

  getCardSize(): number {
    const v = this._config?.view || 'week'
    return v === 'week' ? 5 : 1
  }

  private _getDataSignature(): string {
    const cfg = this._config
    const relevantCfg = {
      title: cfg.title,
      show_date: cfg.show_date,
      show_footer_hints: cfg.show_footer_hints,
      entity: cfg.entity ? String(cfg.entity) : undefined,
      has_inline_schedule: !!cfg.schedule,
      courses: Array.isArray(cfg.courses) ? cfg.courses.map((s) => String(s).toLowerCase().trim()) : undefined,
      hide_subjects: Array.isArray(cfg.hide_subjects) ? cfg.hide_subjects.map((s) => String(s).toLowerCase().trim()) : undefined,
      subject_colors: cfg.subject_colors || undefined,
    }
    return JSON.stringify({ cfg: relevantCfg, days: this._parseData(), lang: this._lang || 'en' })
  }

  private _parseData(): DayData[] {
    const cfg = this._config || {}

    const applyCourseFilter = (days: DayData[]): DayData[] => {
      if (!Array.isArray(days)) return []
      const whitelist = Array.isArray(cfg.courses)
        ? cfg.courses.map((s) => String(s).toLowerCase().trim()).filter(Boolean)
        : null
      if (!whitelist || whitelist.length === 0) return days
      const extractCourseName = (l: any) => {
        const subj = String(l.subject || '')
        const info = String(l.info || '')
        if (!info) return subj
        const firstWord = info.trim().split(/\s+/)[0] || ''
        return firstWord || subj
      }
      const match = (subject: string) => whitelist.includes(String(subject || '').toLowerCase().trim())
      return days.map((d) => ({
        ...d,
        lessons: Array.isArray(d.lessons) ? d.lessons.filter((l: any) => !l.isCourse || match(extractCourseName(l))) : [],
      }))
    }

    const applyHideSubjectsFilter = (days: DayData[]): DayData[] => {
      if (!Array.isArray(days)) return []
      const blacklist = Array.isArray(cfg.hide_subjects)
        ? cfg.hide_subjects.map((s) => String(s).toLowerCase().trim()).filter(Boolean)
        : null
      if (!blacklist || blacklist.length === 0) return days
      const extractName = (l: any) => {
        const subj = String(l.subject || '')
        if (subj && subj !== '---') return subj
        const info = String(l.info || '')
        const firstWord = info.trim().split(/\s+/)[0] || ''
        return firstWord || subj
      }
      const blocked = (subject: string) => blacklist.includes(String(subject || '').toLowerCase().trim())
      return days.map((d) => ({
        ...d,
        lessons: Array.isArray(d.lessons) ? d.lessons.filter((l: any) => !blocked(extractName(l))) : [],
      }))
    }

    if ((cfg as any).schedule && Array.isArray((cfg as any).schedule.days)) {
      return applyHideSubjectsFilter(applyCourseFilter(normalizeData((cfg as any).schedule as any)))
    }

    const entId = (cfg as any).entity
    if (this.hass && entId && (this.hass as any).states && (this.hass as any).states[entId]) {
      const stObj = (this.hass as any).states[entId]
      const attrs = stObj.attributes || {}
      if (Array.isArray(attrs.days)) {
        return applyHideSubjectsFilter(applyCourseFilter(normalizeData(attrs)))
      }
    }
    return []
  }

  protected render() {
    // prevent excessive renders by comparing signature
    const sig = this._getDataSignature()
    if (sig === this._lastDataSig) {
      // no content change; still render template to keep lit happy
    } else {
      this._lastDataSig = sig
    }

    const cfg = this._config
    const { show_date, show_footer_hints, view = 'week', tomorrow_after, dense } = cfg

    const days = this._parseData()
    let day: DayData | undefined
    let targetDate: Date

    const parseCutoff = (hhmm?: string) => {
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

    if (weekday === 5 || weekday === 6 || (weekday === 4 && now >= (cutoff as Date))) {
      targetDate = new Date(today.getTime() + (7 - weekday) * 86400000)
    } else if (now >= (cutoff as Date)) {
      targetDate = new Date(today.getTime() + 86400000)
    } else {
      targetDate = today
    }

    if ((view || 'week') === 'day') {
      const byDate = (arr: DayData[], dt: Date) =>
        arr.find((d) => {
          if (!d.date) return false
          const dd = parseYmdToLocalDate(d.date)
          if (!dd || isNaN(dd.getTime())) return false
          return dd.getFullYear() === dt.getFullYear() && dd.getMonth() === dt.getMonth() && dd.getDate() === dt.getDate()
        })
      day = byDate(days, targetDate)
      if (!day) {
        const weekdayName = targetDate.toLocaleDateString(undefined, { weekday: 'long' })
        day = { name: weekdayName, date: toISODateLocal(targetDate), lessons: [], hints: [] }
      }

      return html`<ssc-day-card
        class="view-${view}"
        .dobj=${day}
        .show_date=${show_date}
        .show_footer_hints=${show_footer_hints}
        .dense=${dense}
        .view=${view}
        .subject_colors=${cfg.subject_colors}
        .t=${this._t}
      ></ssc-day-card>`
    } else {
      const monday = getMondayOfLocalWeek(targetDate)
      const sunday = new Date(monday.getTime() + 6 * 86400000)

      const inWeek = (d: DayData) => {
        if (!d.date) return false
        const dd = parseYmdToLocalDate(d.date)
        if (!dd || isNaN(dd.getTime())) return false
        dd.setHours(0, 0, 0, 0)
        return dd >= monday && dd <= sunday
      }

      const weekDays = days
        .filter(inWeek)
        .sort((a, b) => {
          const da = parseYmdToLocalDate(a.date!)?.getTime() || 0
          const db = parseYmdToLocalDate(b.date!)?.getTime() || 0
          return da - db
        })

      const toRender = weekDays.length > 0 ? weekDays : days

      return html`
        <div class="grid">
          ${toRender.map(
            (dobj) => html`<ssc-day-card
              class="view-${view}"
              .dobj=${dobj}
              .show_date=${show_date}
              .show_footer_hints=${show_footer_hints}
              .dense=${dense}
              .view=${view}
              .subject_colors=${cfg.subject_colors}
              .t=${this._t}
            ></ssc-day-card>`
          )}
        </div>
      `
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: SchoolScheduleCard
  }
}
