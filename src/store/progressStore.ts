import { create } from 'zustand'
import { persist } from 'zustand/middleware'

function todayStr(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

interface ProgressStore {
  completed: Record<string, boolean>
  completionDates: Record<string, string> // lessonId → 'YYYY-MM-DD' (local date)
  markComplete: (lessonId: string) => void
  markIncomplete: (lessonId: string) => void
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set) => ({
      completed: {},
      completionDates: {},
      markComplete: (lessonId) =>
        set((s) => ({
          completed: { ...s.completed, [lessonId]: true },
          completionDates: { ...s.completionDates, [lessonId]: todayStr() },
        })),
      markIncomplete: (lessonId) =>
        set((s) => {
          const completed = { ...s.completed }
          const completionDates = { ...s.completionDates }
          delete completed[lessonId]
          delete completionDates[lessonId]
          return { completed, completionDates }
        }),
    }),
    { name: 'lesson-progress' }
  )
)
