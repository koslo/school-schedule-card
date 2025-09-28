import { CARD_TAG } from './constants'
import './card'
import pkg from '../package.json'

const VERSION = pkg?.version || '0.0.0'
try {
  console.info(
    `%c SCHOOL-SCHEDULE-CARD %c v${VERSION} `,
    'color:#fff;background:#03a9f4;border-radius:3px 0 0 3px;padding:2px 6px;',
    'color:#03a9f4;background:#fff;border-radius:0 3px 3px 0;padding:2px 6px;'
  )
} catch {}

// Home Assistant custom card registry entry
declare global {
  interface Window {
    customCards?: Array<{ type: string; name: string; description: string }>
  }
}

if (!window.customCards) window.customCards = []
window.customCards.push({
  type: CARD_TAG,
  name: 'School Schedule Card',
  description: 'Modern, responsive schedule card for Home Assistant.',
})

// Custom element definition is executed by importing './card' which uses @customElement
