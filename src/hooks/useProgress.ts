import { useMemo } from 'react'
import { useProgressStore } from '@/store/progressStore'
import { ALL_MODULE_CONTENT, getAllLessonsFlat } from '@/data/lessons'
import { MODULES, TOTAL_LESSONS } from '@/data/modules'
import type { LessonContent } from '@/types/content'

export interface ModuleProgress {
  slug: string
  completed: number
  total: number
  percent: number
}

function localDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function useCourseProgress() {
  const completed = useProgressStore((s) => s.completed)
  return useMemo(() => {
    const completedCount = getAllLessonsFlat().filter((l) => completed[l.id]).length
    return {
      completedCount,
      total: TOTAL_LESSONS,
      percent: TOTAL_LESSONS === 0 ? 0 : Math.round((completedCount / TOTAL_LESSONS) * 100),
    }
  }, [completed])
}

export function useAllModuleProgress(): Record<string, ModuleProgress> {
  const completed = useProgressStore((s) => s.completed)
  return useMemo(() => {
    const result: Record<string, ModuleProgress> = {}
    for (const meta of MODULES) {
      const content = ALL_MODULE_CONTENT.find((m) => m.slug === meta.slug)
      if (!content) {
        result[meta.slug] = { slug: meta.slug, completed: 0, total: meta.lessonCount, percent: 0 }
      } else {
        const count = content.lessons.filter((l) => completed[l.id]).length
        result[meta.slug] = {
          slug: meta.slug,
          completed: count,
          total: content.lessons.length,
          percent: count === 0 ? 0 : Math.round((count / content.lessons.length) * 100),
        }
      }
    }
    return result
  }, [completed])
}

export function useStreak(): number {
  const completionDates = useProgressStore((s) => s.completionDates)
  return useMemo(() => {
    const dateSet = new Set(Object.values(completionDates))
    if (dateSet.size === 0) return 0

    const today = new Date()
    const todayStr = localDateStr(today)
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = localDateStr(yesterday)

    if (!dateSet.has(todayStr) && !dateSet.has(yesterdayStr)) return 0

    let streak = 0
    const cursor = new Date(dateSet.has(todayStr) ? today : yesterday)
    while (dateSet.has(localDateStr(cursor))) {
      streak++
      cursor.setDate(cursor.getDate() - 1)
    }
    return streak
  }, [completionDates])
}

export function useActivityDays(count = 7): Array<{ dateStr: string; label: string; active: boolean }> {
  const completionDates = useProgressStore((s) => s.completionDates)
  return useMemo(() => {
    const dateSet = new Set(Object.values(completionDates))
    const days: Array<{ dateStr: string; label: string; active: boolean }> = []
    for (let i = count - 1; i >= 0; i--) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      const dateStr = localDateStr(d)
      days.push({
        dateStr,
        label: i === 0 ? 'Today' : i === 1 ? 'Yesterday' : d.toLocaleDateString('en', { weekday: 'short' }),
        active: dateSet.has(dateStr),
      })
    }
    return days
  }, [completionDates, count])
}

export function useNextLesson(): LessonContent | null {
  const completed = useProgressStore((s) => s.completed)
  return useMemo(() => {
    for (const module of ALL_MODULE_CONTENT) {
      for (const lesson of module.lessons) {
        if (!completed[lesson.id]) return lesson
      }
    }
    return null
  }, [completed])
}
