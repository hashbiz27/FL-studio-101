import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ProgressStore {
  completed: Record<string, boolean>
  markComplete: (lessonId: string) => void
  markIncomplete: (lessonId: string) => void
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set) => ({
      completed: {},
      markComplete: (lessonId) =>
        set((s) => ({ completed: { ...s.completed, [lessonId]: true } })),
      markIncomplete: (lessonId) =>
        set((s) => {
          const next = { ...s.completed }
          delete next[lessonId]
          return { completed: next }
        }),
    }),
    { name: 'lesson-progress' }
  )
)
