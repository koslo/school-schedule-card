// Simple i18n helper for the School Schedule Card
// Detects language from Home Assistant (hass.language / hass.locale.language)

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
};

function pickLang(lang) {
  const ll = String(lang || '').toLowerCase();
  if (!ll) return 'en';
  // exact match
  if (DICTS[ll]) return ll;
  // match by base language (e.g., de-DE -> de)
  const base = ll.split('-')[0];
  if (DICTS[base]) return base;
  return 'en';
}

export function getLanguageFromHass(hass) {
  if (!hass) return 'en';
  const lang = hass.language || (hass.locale && hass.locale.language);
  return pickLang(lang);
}

export function createTranslator(lang) {
  const keyLang = pickLang(lang);
  const dict = DICTS[keyLang] || DICTS.en;
  return function t(key) {
    return (dict && dict[key]) || (DICTS.en && DICTS.en[key]) || key;
  };
}

export const SUPPORTED_LANGS = Object.keys(DICTS);
