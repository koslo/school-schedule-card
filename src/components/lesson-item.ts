import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { Lesson } from '../types'
import { SUBJECT_COLORS } from '../constants'

@customElement('ssc-lesson-item')
export class SscLessonItem extends LitElement {
  @property({ type: Object }) lesson!: Lesson
  @property({ attribute: false }) subject_colors?: Record<string, { bg: string; fg: string }>

  // Light DOM so existing CSS applies (.lesson, .subject, etc.)
  createRenderRoot() {
    return this
  }

  private _subjectStyle(subject?: string | null): string {
    const key = (subject || '').trim()
    const mapSrc = this.subject_colors && typeof this.subject_colors === 'object' ? { ...SUBJECT_COLORS, ...this.subject_colors } : SUBJECT_COLORS
    const map = (mapSrc as any)[key]
    if (map) return `background:${map.bg};color:${map.fg}`
    return ''
  }

  private _subjectAccent(subject?: string | null): string {
    const key = (subject || '').trim()
    const mapSrc = this.subject_colors && typeof this.subject_colors === 'object' ? { ...SUBJECT_COLORS, ...this.subject_colors } : SUBJECT_COLORS
    const map = (mapSrc as any)[key]
    return map ? map.bg : 'var(--primary-color)'
  }

  protected render() {
    const l = this.lesson
    if (!l) return nothing
    const sub = !!l.isSubstitution

    return html`
      <div class="lesson" style="--accent: ${this._subjectAccent(l.subject)}">
        <div class="lesson-main-content">
          <div class="lesson-number">${l.period || ''}</div>
          <div class="lesson-content">
            <div class="lesson-info">
              <div class="subject-teacher">
                <span class="subject ${l.subjectChanged ? 'changed' : ''}" style="${this._subjectStyle(l.subject)}">${(l.subject || '').trim()}</span>
                ${l.teacher ? html`<span class="teacher ${l.teacherChanged ? 'changed' : ''}">${l.teacher}</span>` : nothing}
              </div>
            </div>
            <div class="lesson-details">
              <div class="time">${l.time || ''}${l.end ? html` – ${l.end}` : nothing}</div>
              ${l.room ? html`<div class="room ${l.roomChanged ? 'changed' : ''}">${l.room}</div>` : nothing}
            </div>
          </div>
        </div>
        ${sub && l.info ? html`<div class="substitution-info">${l.info}</div>` : nothing}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ssc-lesson-item': SscLessonItem
  }
}
