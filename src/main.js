import {CARD_TAG} from './constants.js'
import {SchoolScheduleCard} from './card.js'

if (!window.customCards) window.customCards = []
window.customCards.push({
    type: CARD_TAG,
    name: 'School Schedule Card',
    description: 'Moderne, responsive Stundenplan-Karte für Home Assistant.',
})

if (!customElements.get(CARD_TAG)) {
    customElements.define(CARD_TAG, SchoolScheduleCard)
}
