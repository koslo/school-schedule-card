export const CARD_TAG = 'school-schedule-card'

export const DEFAULTS = {
    title: 'Stundenplan',
    show_date: true,
    show_footer_hints: true,
    view: 'week',
    tomorrow_after: '16:00',
    courses: undefined,
    hide_subjects: undefined,
    dense: false,
    subject_colors: undefined,
}

export const SUBJECT_COLORS = {
    Mat: {bg: '#2196f3', fg: '#fff'},
    Deu: {bg: '#673ab7', fg: '#fff'},
    Eng: {bg: '#4caf50', fg: '#fff'},
    Bio: {bg: '#8bc34a', fg: '#fff'},
    Che: {bg: '#fb8c00', fg: '#fff'},
    Phy: {bg: '#03a9f4', fg: '#fff'},
    Ges: {bg: '#e91e63', fg: '#fff'},
    Geo: {bg: '#2e7d32', fg: '#fff'},
    Mus: {bg: '#fdd835', fg: '#212121'},
    Kun: {bg: '#7e57c2', fg: '#fff'},
    Spo: {bg: '#26a69a', fg: '#fff'},
    Rel: {bg: '#9e9e9e', fg: '#fff'},
    Eth: {bg: '#9e9e9e', fg: '#fff'},
    eth3: {bg: '#9e9e9e', fg: '#fff'},
    Inf: {bg: '#3f51b5', fg: '#fff'},
    Spa: {bg: '#ff5722', fg: '#fff'},
    Mlk: {bg: '#ff5722', fg: '#fff'},
}

// Currently not used for display replacement, but kept for future enhancements
export const SUBJECT_NAME_MAP = {
    Mat: 'Mathematik',
    Deu: 'Deutsch',
    Eng: 'Englisch',
    Bio: 'Biologie',
    Che: 'Chemie',
    Phy: 'Physik',
    Ges: 'Geschichte',
    Geo: 'Geografie',
    Mus: 'Musik',
    Kun: 'Kunst',
    Spo: 'Sport',
    Rel: 'Religion',
    Eth: 'Ethik',
    eth3: 'Ethik',
    Inf: 'Informatik',
    Spa: 'Spanisch',
}
