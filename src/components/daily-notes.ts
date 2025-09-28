import { LitElement, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('ssc-daily-notes')
export class SscDailyNotes extends LitElement {
  @property({ type: Array }) notes: string[] = []
  @property({ type: Boolean }) show: boolean = true
  @property({ type: Boolean }) expanded: boolean = false
  @property({ attribute: false }) t: (k: string) => string = (k) => k

  @state() private _expanded: boolean = this.expanded

  createRenderRoot() {
    return this
  }

  private _classifyNote(txt?: string): string {
    const s = String(txt || '').toLowerCase()
    if (s.includes('gesperrt') || s.includes('achtung') || s.includes('warnung')) return 'warning'
    if (s.includes('klassenarbeit') || s.includes('prüfung') || s.includes('klausur')) return 'info'
    return ''
  }

  private _setExpanded(v: boolean) {
    this._expanded = v
    const root = this as HTMLElement
    root.classList.toggle('expanded', v)
    root.classList.toggle('collapsed', !v)
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('expanded')) {
      this._setExpanded(!!this.expanded)
    }
  }

  private _onActivate = (ev: Event | KeyboardEvent) => {
    if ((ev as KeyboardEvent).type === 'keydown') {
      const key = (ev as KeyboardEvent).key
      if (key !== 'Enter' && key !== ' ' && key !== 'Spacebar') return
      ev.preventDefault()
    }
    this._setExpanded(!this._expanded)
  }

  private _renderNoteText(n?: string) {
    const raw = String(n || '')
    // Split on <br>, <br/>, <br /> (case-insensitive)
    const parts = raw.split(/<br\s*\/?\s*>/i)
    // Interleave parts with real <br> elements so only line breaks are allowed
    const out: any[] = []
    parts.forEach((p, idx) => {
      out.push(p)
      if (idx < parts.length - 1) out.push(html`<br>`)
    })
    return out
  }

  protected render() {
    if (!this.show) return nothing
    const hasNotes = Array.isArray(this.notes) && this.notes.length > 0

    return html`
      <div class="daily-notes ${this._expanded ? 'expanded' : 'collapsed'}">
        <div
          class="notes-title"
          role="button"
          tabindex="0"
          aria-expanded="${this._expanded ? 'true' : 'false'}"
          @click=${this._onActivate}
          @keydown=${this._onActivate}
        >
          <ha-icon icon="mdi:information-box-outline" class="notes-icon"></ha-icon>
          <span class="notes-text">${this.t('daily_notes')}</span>
          <ha-icon icon="mdi:chevron-down" class="notes-arrow"></ha-icon>
        </div>
        <div class="notes-list">
          ${hasNotes
            ? this.notes.map((n) => html`<div class="note-item ${this._classifyNote(n)}">${this._renderNoteText(n)}</div>`)
            : html`<div class="note-item empty">${this.t('no_notes')}</div>`}
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ssc-daily-notes': SscDailyNotes
  }
}
