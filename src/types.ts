// TypeScript types for Home Assistant and the card data model

export interface LessonRaw {
  period?: string | number
  st?: string | number
  hour?: string | number
  time?: string
  beginn?: string
  start?: string
  end?: string
  ende?: string
  until?: string
  subject?: any
  fa?: any
  subj?: any
  teacher?: any
  le?: any
  t?: any
  room?: any
  ra?: any
  r?: any
  info?: string
  infoText?: string
  if?: string
  isCourse?: boolean | string
  ku?: boolean | string
}

export interface Lesson {
  period: string | number
  time: string
  end: string
  subject: string
  subjectChanged: boolean
  teacher: string
  teacherChanged: boolean
  room: string
  roomChanged: boolean
  info: string
  isCourse: boolean
  isSubstitution: boolean
}

export interface DayDataRaw {
  name?: string
  date?: string
  lessons?: LessonRaw[]
  hints?: string[] | string
  updated_at?: string
  updatedAt?: string
  last_update?: string
}

export interface DayData {
  name?: string
  date?: string
  lessons: Lesson[]
  hints: string[]
  updated_at?: string
}

export interface ScheduleDataRaw {
  days?: DayDataRaw[]
}

export interface ScheduleData {
  days: DayData[]
}

export interface ScheduleConfig {
  type?: string
  title?: string
  entity?: string
  schedule?: ScheduleDataRaw
  show_date?: boolean
  show_footer_hints?: boolean
  view?: 'day' | 'week'
  tomorrow_after?: string
  courses?: string[]
  hide_subjects?: string[]
  dense?: boolean
  subject_colors?: Record<string, { bg: string; fg: string }>
}

// Minimal Home Assistant typings used by this card
export interface HassEntity {
  entity_id: string
  state: string
  attributes: Record<string, any>
  last_changed?: string
  last_updated?: string
}

export interface HomeAssistant {
  states: Record<string, HassEntity>
  language?: string
  locale?: { language?: string }
}
