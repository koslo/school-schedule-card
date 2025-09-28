import {html, LitElement, nothing} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {DayData} from '../types'
import {renderDayContent} from '../render'

// A lightweight child component rendering a single day card.
// Uses light DOM to reuse parent styles and avoid style duplication.
@customElement('ssc-day-card')
export class SscDayCard extends LitElement {
    @property({type: Object}) dobj!: DayData
    @property({type: Boolean}) show_date: boolean = true
    @property({type: Boolean}) show_footer_hints: boolean = true
    @property({type: Boolean}) dense: boolean = false
    @property({type: String}) view: 'day' | 'week' = 'week'
    @property({attribute: false}) subject_colors?: Record<string, { bg: string; fg: string }>
    @property({attribute: false}) t: (k: string) => string = (k) => k

    // Render in light DOM to share styles from parent card shadow root
    createRenderRoot() {
        return this
    }

    private _onToggleNotes = (ev: Event) => {
        const target = ev.currentTarget as HTMLElement | null
        const wrap = target?.closest('.daily-notes') as HTMLElement | null
        if (!wrap) return
        const expanded = wrap.classList.contains('expanded')
        wrap.classList.toggle('expanded', !expanded)
        wrap.classList.toggle('collapsed', expanded)
        const title = wrap.querySelector('.notes-title') as HTMLElement | null
        if (title) title.setAttribute('aria-expanded', !expanded ? 'true' : 'false')
    }

    protected render() {
        if (!this.dobj) return nothing
        return html`
            <ha-card>
                ${renderDayContent({
                    dobj: this.dobj,
                    show_date: this.show_date,
                    show_footer_hints: this.show_footer_hints,
                    dense: this.dense,
                    view: this.view,
                    subject_colors: this.subject_colors,
                    t: this.t,
                    onToggleNotes: this._onToggleNotes,
                })}
            </ha-card>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ssc-day-card': SscDayCard
    }
}
