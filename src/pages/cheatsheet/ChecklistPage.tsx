import { CHECKLIST_ITEMS, type ChecklistPhase } from '@/data/cheatsheet'
import { useChecklistStore } from '@/store/checklistStore'
import { cn } from '@/lib/utils'
import { RotateCcw, CheckCircle2 } from 'lucide-react'

const PHASES: ChecklistPhase[] = [
  'Gain Staging',
  'EQ & Frequency',
  'Dynamics',
  'Space & Effects',
  'Stereo & Width',
  'Balance & Translation',
  'Pre-Bounce',
]

const PHASE_COLORS: Record<ChecklistPhase, string> = {
  'Gain Staging': 'bg-sky-500',
  'EQ & Frequency': 'bg-violet-500',
  'Dynamics': 'bg-orange-500',
  'Space & Effects': 'bg-blue-500',
  'Stereo & Width': 'bg-teal-500',
  'Balance & Translation': 'bg-pink-500',
  'Pre-Bounce': 'bg-emerald-500',
}

export default function ChecklistPage() {
  const { checked, toggle, reset } = useChecklistStore()

  const total = CHECKLIST_ITEMS.length
  const completedCount = CHECKLIST_ITEMS.filter((item) => checked[item.id]).length
  const percent = Math.round((completedCount / total) * 100)
  const allDone = completedCount === total

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Pre-Bounce Checklist</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Run through this before every bounce. Tick each item as you confirm it.
          </p>
        </div>
        <button
          onClick={reset}
          title="Reset all items"
          className="shrink-0 flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {/* Progress bar */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 space-y-2.5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {allDone ? 'Ready to bounce!' : `${completedCount} of ${total} items checked`}
          </span>
          <span className="tabular-nums font-bold text-gray-900 dark:text-gray-50">{percent}%</span>
        </div>
        <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <div
            className={cn(
              'h-full rounded-full transition-[width] duration-500',
              allDone ? 'bg-emerald-500' : 'bg-studio-500',
            )}
            style={{ width: `${percent}%` }}
          />
        </div>
        {allDone && (
          <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 pt-0.5">
            <CheckCircle2 className="w-4 h-4" />
            All checks passed — you're good to go.
          </div>
        )}
      </div>

      {/* Phases */}
      <div className="space-y-6">
        {PHASES.map((phase) => {
          const items = CHECKLIST_ITEMS.filter((item) => item.phase === phase)
          const phaseChecked = items.filter((item) => checked[item.id]).length
          const phaseComplete = phaseChecked === items.length

          return (
            <section key={phase} className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              {/* Phase header */}
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                <div className={cn('w-2 h-2 rounded-full shrink-0', PHASE_COLORS[phase])} />
                <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex-1">
                  {phase}
                </h2>
                <span className={cn('text-xs font-medium tabular-nums', phaseComplete ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-600')}>
                  {phaseChecked}/{items.length}
                </span>
              </div>

              {/* Items */}
              <ul className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900">
                {items.map((item) => {
                  const isChecked = !!checked[item.id]
                  return (
                    <li key={item.id}>
                      <label className="flex items-start gap-3 px-4 py-3.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors group">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(item.id)}
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 dark:border-gray-600 text-studio-500 focus:ring-studio-500/30 cursor-pointer"
                        />
                        <div className="space-y-0.5 min-w-0">
                          <p className={cn('text-sm leading-snug transition-colors', isChecked ? 'text-gray-400 dark:text-gray-600 line-through' : 'text-gray-800 dark:text-gray-200')}>
                            {item.text}
                          </p>
                          {item.note && (
                            <p className="text-xs text-gray-400 dark:text-gray-600 italic">
                              {item.note}
                            </p>
                          )}
                        </div>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
