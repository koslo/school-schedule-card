// Simple i18n helper for the School Schedule Card (TypeScript)
import type { HomeAssistant } from './types'

const DICTS = {
  en: {
    card_title: 'Schedule',
    loading: 'Loading…',
    no_lessons: 'No lessons',
    daily_notes: 'Daily notes',
    no_notes: 'No notes',
    last_update_title: 'Last update',
    last_update_prefix: 'Updated:',
  },
  de: {
    card_title: 'Stundenplan',
    loading: 'Wird geladen …',
    no_lessons: 'Keine Stunden',
    daily_notes: 'Tägliche Hinweise',
    no_notes: 'Keine Hinweise',
    last_update_title: 'Letzte Aktualisierung',
    last_update_prefix: 'Stand:',
  },
} as const

type LangKey = keyof typeof DICTS

function pickLang(lang?: string | null): LangKey {
  const ll = String(lang || '').toLowerCase()
  if (!ll) return 'en'
  if (ll in DICTS) return ll as LangKey
  const base = ll.split('-')[0]
  if (base in DICTS) return base as LangKey
  return 'en'
}

export function getLanguageFromHass(hass?: HomeAssistant | null): LangKey {
  if (!hass) return 'en'
  const lang = hass.language || hass.locale?.language
  return pickLang(lang)
}

export function createTranslator(lang?: string | null) {
  const keyLang = pickLang(lang)
  const dict = DICTS[keyLang] || DICTS.en
  return function t(key: keyof typeof DICTS['en'] | string): string {
    // @ts-ignore index signature for safety
    return (dict as any)[key] || (DICTS.en as any)[key] || String(key)
  }
}

export const SUPPORTED_LANGS = Object.keys(DICTS) as LangKey[]
