import { DayData, DayDataRaw, Lesson, LessonRaw, ScheduleData } from './types'

export function isObject(v: any): v is Record<string, any> {
  return v && typeof v === 'object' && !Array.isArray(v)
}

export function tryJsonParse(str: string): any | null {
  try {
    return JSON.parse(str)
  } catch (_) {
    return null
  }
}

export function normalizeLessons(list: LessonRaw[] | any): Lesson[] {
  if (!Array.isArray(list)) return []
  const unwrapVal = (v: any): { text: string; changed: boolean } => {
    if (isObject(v)) {
      const text = (v as any)._ ?? (v as any)['#text'] ?? ''
      const hasDollarFlags = !!((v as any).$ && Object.keys((v as any).$).length)
      const hasAtFlags = Object.keys(v).some((k) => k.startsWith('@') && (v as any)[k] != null && String((v as any)[k]).length > 0)
      const changed = hasDollarFlags || hasAtFlags
      return { text: String(text || ''), changed }
    }
    return { text: String(v ?? ''), changed: false }
  }
  return list.map((it: LessonRaw) => {
    const subjRaw = (it as any).subject ?? (it as any).fa ?? (it as any).subj
    const teachRaw = (it as any).teacher ?? (it as any).le ?? (it as any).t
    const roomRaw = (it as any).room ?? (it as any).ra ?? (it as any).r ?? ''
    const subj = unwrapVal(subjRaw)
    const teach = unwrapVal(teachRaw)
    const room = unwrapVal(roomRaw)
    const info = (it as any).if ?? (it as any).info ?? (it as any).infoText ?? ''
    const kuRaw = (it as any).ku ?? (it as any).isCourse
    const isCourse = typeof kuRaw === 'boolean' ? kuRaw : String(kuRaw || '').toLowerCase() === 'true'
    const infoStr = String(info || '')
    const isSubstitution = infoStr.toLowerCase().includes('vertret') || !!subj.changed || !!teach.changed
    return {
      period: (it as any).period ?? (it as any).st ?? (it as any).hour ?? '',
      time: (it as any).time ?? (it as any).beginn ?? (it as any).start ?? '',
      end: (it as any).end ?? (it as any).ende ?? (it as any).until ?? '',
      subject: subj.text,
      subjectChanged: subj.changed,
      teacher: teach.text,
      teacherChanged: teach.changed,
      room: room.text,
      roomChanged: room.changed,
      info: infoStr,
      isCourse: isCourse,
      isSubstitution: isSubstitution,
    } as Lesson
  })
}

export function parseYmdToLocalDate(ymd?: string): Date | undefined {
  if (!ymd) return undefined
  const d = new Date(ymd)
  return isNaN(d.getTime()) ? undefined : d
}

export function toISODateLocal(d: Date): string {
  if (!(d instanceof Date) || isNaN(d.getTime())) return ''
  const y = d.getFullYear()
  const m = (d.getMonth() + 1).toString().padStart(2, '0')
  const da = d.getDate().toString().padStart(2, '0')
  return `${y}-${m}-${da}`
}

export function getMondayOfLocalWeek(d: Date): Date {
  const day = d.getDay() || 7
  const m = new Date(d)
  m.setHours(0, 0, 0, 0)
  m.setDate(m.getDate() - (day - 1))
  return m
}

export function normalizeHints(input: string[] | string | undefined | null): string[] {
  if (!input) return []
  const isMeaningful = (s: string) => {
    const t = String(s || '').trim()
    if (!t.length) return false
    const stripped = t.replace(/[_\-\s]/g, '')
    return stripped.length > 0
  }
  if (Array.isArray(input)) return input.map((x) => String(x)).filter(isMeaningful)
  if (typeof input === 'string') return isMeaningful(input) ? [input] : []
  return []
}

export function normalizeData(data: string | DayDataRaw | { days?: DayDataRaw[] } | null | undefined): DayData[] {
  if (!data) return []
  if (typeof data === 'string') {
    const p = tryJsonParse(data)
    if (p) data = p
  }
  if (!isObject(data) || !Array.isArray((data as any).days)) {
    return []
  }

  const firstDated = (data as any).days.find((x: any) => x.date && parseYmdToLocalDate(x.date))
  const refDate = firstDated ? (parseYmdToLocalDate(firstDated.date) as Date) : new Date()
  const monday = getMondayOfLocalWeek(refDate)

  const result: DayData[] = []
  for (let i = 0; i < 5; i++) {
    const base = ((data as any).days || [])[i]
    const dayDate = new Date(monday)
    dayDate.setDate(monday.getDate() + i)
    const iso = toISODateLocal(dayDate)
    const weekdayName = dayDate.toLocaleDateString('de-DE', { weekday: 'long' })

    if (base) {
      result.push({
        name: base.name ?? weekdayName,
        date: base.date ? toISODateLocal(parseYmdToLocalDate(base.date) as Date) : iso,
        lessons: normalizeLessons(base.lessons ?? []),
        hints: normalizeHints(base.hints),
        updated_at: (base as any).updated_at ?? (base as any).updatedAt ?? (base as any).last_update ?? undefined,
      })
    } else {
      result.push({ name: weekdayName, date: iso, lessons: [], hints: [] })
    }
  }

  return result
}

export function formatDateStr(dateStr?: string): string {
  if (!dateStr) return ''
  try {
    const d = parseYmdToLocalDate(dateStr)
    if (!d || isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  } catch {
    return dateStr
  }
}
