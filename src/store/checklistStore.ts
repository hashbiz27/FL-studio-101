import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ChecklistStore {
  checked: Record<string, boolean>
  toggle: (id: string) => void
  reset: () => void
}

export const useChecklistStore = create<ChecklistStore>()(
  persist(
    (set) => ({
      checked: {},
      toggle: (id) =>
        set((s) => ({
          checked: { ...s.checked, [id]: !s.checked[id] },
        })),
      reset: () => set({ checked: {} }),
    }),
    { name: 'mixing-checklist' },
  ),
)
