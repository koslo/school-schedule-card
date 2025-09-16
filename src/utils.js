export function isObject(v) {
    return v && typeof v === 'object' && !Array.isArray(v)
}

export function tryJsonParse(str) {
    try {
        return JSON.parse(str)
    } catch (_) {
        return null
    }
}

export function normalizeLessons(list) {
    // Normalizes lesson objects supporting multiple shapes, including new sensor keys: { st, beginn, ende, fa, le, ra, if, ku }
    if (!Array.isArray(list)) return []
    const unwrapVal = (v) => {
        if (isObject(v)) {
            // Support multiple shapes:
            // - { _: 'Text', $: { ...flags } }  (xml-js)
            // - { '#text': 'Text', '@...': <flag> }  (xml2js or similar)
            const text = v._ ?? v['#text'] ?? ''
            const hasDollarFlags = !!(v.$ && Object.keys(v.$).length)
            const hasAtFlags = Object.keys(v).some((k) => k.startsWith('@') && v[k] != null && String(v[k]).length > 0)
            const changed = hasDollarFlags || hasAtFlags
            return {text: String(text || ''), changed}
        }
        return {text: String(v ?? ''), changed: false}
    }
    return list.map((it) => {
        const subjRaw = it.subject ?? it.fa ?? it.subj
        const teachRaw = it.teacher ?? it.le ?? it.t
        const roomRaw = it.room ?? it.ra ?? it.r ?? ''
        const subj = unwrapVal(subjRaw)
        const teach = unwrapVal(teachRaw)
        const room = unwrapVal(roomRaw)
        const info = it.if ?? it.info ?? it.infoText ?? ''
        const kuRaw = (it.ku ?? it.isCourse)
        const isCourse = typeof kuRaw === 'boolean' ? kuRaw : (String(kuRaw || '').toLowerCase() === 'true')
        const infoStr = String(info || '')
        const isSubstitution = infoStr.toLowerCase().includes('vertret') || !!subj.changed || !!teach.changed
        return {
            period: it.period ?? it.st ?? it.hour ?? '',
            time: it.time ?? it.beginn ?? it.start ?? '',
            end: it.end ?? it.ende ?? it.until ?? '',
            subject: subj.text,
            subjectChanged: subj.changed,
            teacher: teach.text,
            teacherChanged: teach.changed,
            room: room.text,
            info: infoStr,
            isCourse: isCourse,
            isSubstitution: isSubstitution,
        }
    })
}

export function parseYmdToLocalDate(ymd) {
    return new Date(ymd)
}

export function toISODateLocal(d) {
    if (!(d instanceof Date) || isNaN(d.getTime())) return ''
    const y = d.getFullYear()
    const m = (d.getMonth() + 1).toString().padStart(2, '0')
    const da = d.getDate().toString().padStart(2, '0')
    return `${y}-${m}-${da}`
}

export function getMondayOfLocalWeek(d) {
    const day = d.getDay() || 7
    const m = new Date(d)
    m.setHours(0, 0, 0, 0)
    m.setDate(m.getDate() - (day - 1))
    return m
}

export function normalizeHints(input) {
    if (!input) return []
    const isMeaningful = (s) => {
        const t = String(s || '').trim()
        if (!t.length) return false
        const stripped = t.replace(/[_\-\s]/g, '')
        return stripped.length > 0
    }
    if (Array.isArray(input)) return input.map((x) => String(x)).filter(isMeaningful)
    if (typeof input === 'string') return isMeaningful(input) ? [input] : []
    return []
}

export function inferDays(data) {
    if (!data) return []
    if (typeof data === 'string') {
        const p = tryJsonParse(data)
        if (p) data = p
    }
    if (isObject(data) && Array.isArray(data.days)) {
        const rawDays = (data.days || []).map((d) => ({
            name: d.name ?? undefined,
            date: d.date ?? undefined,
            lessons: normalizeLessons(d.lessons ?? []),
            hints: normalizeHints(d.hints),
            updated_at: d.updated_at ?? d.updatedAt ?? d.last_update ?? undefined,
        }))

        const weekdayIndex = (obj) => {
            if (obj && obj.date) {
                const dt = parseYmdToLocalDate(obj.date)
                if (!isNaN(dt)) {
                    const w = dt.getDay()
                    return w === 0 ? 7 : w
                }
            }
            const nm = (obj && obj.name ? String(obj.name) : '').toLowerCase()
            const map = {
                montag: 1,
                mo: 1,
                monday: 1,
                mon: 1,
                dienstag: 2,
                di: 2,
                tuesday: 2,
                tue: 2,
                tues: 2,
                mittwoch: 3,
                mi: 3,
                wednesday: 3,
                wed: 3,
                donnerstag: 4,
                do: 4,
                thursday: 4,
                thu: 4,
                thur: 4,
                thurs: 4,
                freitag: 5,
                fr: 5,
                friday: 5,
                fri: 5,
                samstag: 6,
                sa: 6,
                saturday: 6,
                sat: 6,
                sonntag: 7,
                so: 7,
                sunday: 7,
                sun: 7,
            }
            return map[nm] || undefined
        }

        const byWd = new Map()
        for (const d of rawDays) {
            const wd = weekdayIndex(d)
            if (!wd) continue
            const prev = byWd.get(wd)
            if (!prev) {
                byWd.set(wd, d)
                continue
            }
            const hasDatePrev = !!prev.date
            const hasDateNew = !!d.date
            byWd.set(wd, hasDateNew && !hasDatePrev ? d : prev)
        }

        const firstDated = rawDays.find((x) => x.date && parseYmdToLocalDate(x.date))
        const refDate = firstDated ? parseYmdToLocalDate(firstDated.date) : new Date()
        const monday = getMondayOfLocalWeek(refDate)

        const weekdayNames = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag']
        const result = []
        for (let i = 0; i < 5; i++) {
            const wd = i + 1
            const base = byWd.get(wd)
            const dayDate = new Date(monday)
            dayDate.setDate(monday.getDate() + i)
            const iso = toISODateLocal(dayDate)
            if (base) {
                result.push({
                    name: base.name ?? weekdayNames[i],
                    date: base.date ? toISODateLocal(parseYmdToLocalDate(base.date)) : iso,
                    lessons: Array.isArray(base.lessons) ? base.lessons : [],
                    hints: normalizeHints(base.hints),
                    updated_at: base.updated_at ?? undefined,
                })
            } else {
                result.push({name: weekdayNames[i], date: iso, lessons: [], hints: []})
            }
        }

        return result
    }
    return []
}

export function formatDateStr(dateStr) {
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
