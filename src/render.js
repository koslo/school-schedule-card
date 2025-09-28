import {SUBJECT_COLORS} from './constants.js'
import {formatDateStr, parseYmdToLocalDate} from './utils.js'

export function subjectStyle(subject, colorMap) {
    const key = (subject || '').trim()
    const mapSrc = colorMap && typeof colorMap === 'object' ? {...SUBJECT_COLORS, ...colorMap} : SUBJECT_COLORS
    const map = mapSrc[key]
    if (map) return `background:${map.bg};color:${map.fg}`
    return ''
}

export function subjectAccent(subject, colorMap) {
    const key = (subject || '').trim()
    const mapSrc = colorMap && typeof colorMap === 'object' ? {...SUBJECT_COLORS, ...colorMap} : SUBJECT_COLORS
    const map = mapSrc[key]
    return map ? map.bg : 'var(--primary-color)'
}

export function renderDayContent({dobj, show_date, show_footer_hints, dense, view, subject_colors, t}) {
    const colorMap = subject_colors && typeof subject_colors === 'object' ? subject_colors : undefined
    const dayDate = dobj.date ? formatDateStr(dobj.date) : ''
    const lessons = Array.isArray(dobj.lessons) ? dobj.lessons : []
    const hasLessons = lessons.length > 0
    const lessonsHtml = hasLessons
        ? lessons
            .map((l) => {
                const sub = !!l.isSubstitution
                const infoText = sub ? l.info || '' : ''
                return `
          <div class="lesson" style="--accent: ${subjectAccent(l.subject, colorMap)}">
            <div class="lesson-main-content">
              <div class="lesson-number">${l.period || ''}</div>
              <div class="lesson-content">
                <div class="lesson-info">
                  <div class="subject-teacher">
                    <span class="subject ${l.subjectChanged ? 'changed' : ''}" style="${subjectStyle(l.subject, colorMap)}">${(l.subject || '').trim()}</span>
                    ${l.teacher ? `<span class="teacher ${l.teacherChanged ? 'changed' : ''}">${l.teacher}</span>` : ''}
                  </div>
                </div>
                <div class="lesson-details">
                  <div class="time">${l.time || ''}${l.end ? ' – ' + l.end : ''}</div>
                  ${l.room ? `<div class="room ${l.roomChanged ? 'changed' : ''}">${l.room}</div>` : ''}
                </div>
              </div>
            </div>
            ${sub && infoText ? `<div class="substitution-info">${infoText}</div>` : ''}
          </div>`
            })
            .join('')
        : `<div class="no-lessons">${t('no_lessons')}</div>`

    const notes = dobj.hints
    const classifyNote = (t) => {
        const s = (t || '').toLowerCase()
        if (s.includes('gesperrt') || s.includes('achtung') || s.includes('warnung')) return 'warning'
        if (s.includes('klassenarbeit') || s.includes('prüfung') || s.includes('klausur')) return 'info'
        return ''
    }
    const hasNotes = Array.isArray(notes) && notes.length > 0
    const notesHtml =
        show_footer_hints && hasLessons
            ? `
        <div class="daily-notes collapsed">
          <div class="notes-title" role="button" tabindex="0" aria-expanded="false">
            <ha-icon icon="mdi:information-box-outline" class="notes-icon"></ha-icon>
            <span class="notes-text">${t('daily_notes')}</span>
            <ha-icon icon="mdi:chevron-down" class="notes-arrow"></ha-icon>
          </div>
          <div class="notes-list">
            ${hasNotes ? notes.map((n) => `<div class="note-item ${classifyNote(n)}">${n}</div>`).join('') : `<div class="note-item empty">${t('no_notes')}</div>`}
          </div>
        </div>`
            : ''

    const headerHtml = dense ?
        `<div class="header">
            <div>
                <span class="day-title">${dobj.name || (dobj.date ? parseYmdToLocalDate(dobj.date)?.toLocaleDateString(undefined, {weekday: 'long'}) : '')}</span>
            </div>
            ${show_date ? `
            <div>
                <div class="date">${dayDate}</div>
                ${dobj.updated_at ? `<div class="updated-date" title="${t('last_update_title')}">${t('last_update_prefix')} ${dobj.updated_at}</div>` : ''}
            </div>`
            : ''}
          </div>` :
        `<div class="header">
            <div class="header-left"><div class="day-title">${dobj.name || (dobj.date ? parseYmdToLocalDate(dobj.date)?.toLocaleDateString(undefined, {weekday: 'long'}) : '')}</div></div>
            
            ${show_date ? `
            <div class="header-right">
              <div class="date">${dayDate}</div>
              ${dobj.updated_at ? `<div class="date updated-date" title="${t('last_update_title')}">${t('last_update_prefix')} ${dobj.updated_at}</div>` : ''}
            </div>`
            : ''}
          </div>`

    return `
        <div class="school-schedule-card ${dense ? 'dense' : ''} view-${view}">
          ${headerHtml}
          <div class="lessons-container">${lessonsHtml}</div>
          ${notesHtml}
        </div>`
}
