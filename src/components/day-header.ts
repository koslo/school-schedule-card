import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { DayData } from '../types'
import { formatDateStr, parseYmdToLocalDate } from '../utils'

@customElement('ssc-day-header')
export class SscDayHeader extends LitElement {
  @property({ type: Object }) dobj!: DayData
  @property({ type: Boolean }) show_date: boolean = true
  @property({ type: Boolean }) dense: boolean = false
  @property({ attribute: false }) t: (k: string) => string = (k) => k

  // Use light DOM so parent styles apply
  createRenderRoot() {
    return this
  }

  protected render() {
    if (!this.dobj) return nothing
    const dayDate = this.dobj.date ? formatDateStr(this.dobj.date) : ''
    const weekday = this.dobj.name || (this.dobj.date ? parseYmdToLocalDate(this.dobj.date)?.toLocaleDateString(undefined, { weekday: 'long' }) : '')

    if (this.dense) {
      return html`
        <div class="header">
          <div>
            <span class="day-title">${weekday}</span>
          </div>
          ${this.show_date
            ? html`<div>
                <div class="date">${dayDate}</div>
                ${this.dobj.updated_at
                  ? html`<div class="updated-date" title="${this.t('last_update_title')}">${this.t('last_update_prefix')} ${this.dobj.updated_at}</div>`
                  : nothing}
              </div>`
            : nothing}
        </div>
      `
    }

    return html`
      <div class="header">
        <div class="header-left">
          <div class="day-title">${weekday}</div>
        </div>
        ${this.show_date
          ? html`<div class="header-right">
              <div class="date">${dayDate}</div>
              ${this.dobj.updated_at
                ? html`<div class="date updated-date" title="${this.t('last_update_title')}">${this.t('last_update_prefix')} ${this.dobj.updated_at}</div>`
                : nothing}
            </div>`
          : nothing}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ssc-day-header': SscDayHeader
  }
}
