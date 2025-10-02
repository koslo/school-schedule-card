import { html, nothing, TemplateResult } from 'lit'
import { DayData } from './types'
import './components/day-header'
import './components/lesson-item'
import './components/daily-notes'


export function renderDayContent(args: {
  dobj: DayData
  show_date?: boolean
  show_footer_hints?: boolean
  dense?: boolean
  view: 'day' | 'week'
  subject_colors?: Record<string, { bg: string; fg: string }>
  t: (k: string) => string
  onToggleNotes?: (ev: Event) => void
}): TemplateResult {
  const { dobj, show_date, show_footer_hints, dense, view, subject_colors, t } = args
  const colorMap = subject_colors && typeof subject_colors === 'object' ? subject_colors : undefined
  const lessons = Array.isArray(dobj.lessons) ? dobj.lessons : []
  const hasLessons = lessons.length > 0

  const lessonsHtml = hasLessons
    ? lessons.map(
        (l) => html`<ssc-lesson-item .lesson=${l} .subject_colors=${colorMap}></ssc-lesson-item>`
      )
    : html`<div class="no-lessons">${t('no_lessons')}</div>`

  const notes = dobj.hints

  const notesHtml = show_footer_hints && hasLessons
    ? html`<ssc-daily-notes .notes=${notes} .show=${true} .expanded=${view === 'week'} .t=${t}></ssc-daily-notes>`
    : nothing

  const headerHtml = html`
    <ssc-day-header .dobj=${dobj} .show_date=${show_date} .dense=${dense} .t=${t}></ssc-day-header>
  `

  return html`
    <div class="school-schedule-card ${dense ? 'dense' : ''}">
      ${headerHtml}
      <div class="lessons-container">${lessonsHtml}</div>
      ${notesHtml}
    </div>
  `
}
