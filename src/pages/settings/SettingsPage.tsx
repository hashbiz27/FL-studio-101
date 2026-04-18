import { useState } from 'react'
import { Sun, Moon, RotateCcw, Trash2, Info } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'
import { useProgressStore } from '@/store/progressStore'
import { useChecklistStore } from '@/store/checklistStore'
import { TOTAL_LESSONS } from '@/data/modules'
import { CHECKLIST_ITEMS } from '@/data/cheatsheet'
import { cn } from '@/lib/utils'
import { usePageTitle } from '@/hooks/usePageTitle'

function SettingCard({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 space-y-4">
      <div>
        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}

export default function SettingsPage() {
  usePageTitle('Settings')
  const theme = useUIStore((s) => s.theme)
  const setTheme = useUIStore((s) => s.setTheme)
  const completed = useProgressStore((s) => s.completed)
  const checkedItems = useChecklistStore((s) => s.checked)

  const [confirmProgress, setConfirmProgress] = useState(false)
  const [confirmChecklist, setConfirmChecklist] = useState(false)

  const completedCount = Object.values(completed).filter(Boolean).length
  const checkedCount = Object.values(checkedItems).filter(Boolean).length

  function handleResetProgress() {
    if (!confirmProgress) { setConfirmProgress(true); return }
    useProgressStore.setState({ completed: {}, completionDates: {} })
    setConfirmProgress(false)
  }

  function handleResetChecklist() {
    if (!confirmChecklist) { setConfirmChecklist(true); return }
    useChecklistStore.getState().reset()
    setConfirmChecklist(false)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Settings</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Appearance and preferences.</p>
      </div>

      {/* Appearance */}
      <SettingCard title="Appearance" description="Choose how the interface looks.">
        <div className="flex gap-3">
          {(['light', 'dark'] as const).map((t) => {
            const isActive = theme === t
            return (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={cn(
                  'flex-1 flex flex-col items-center gap-2.5 rounded-xl border p-4 transition-colors',
                  isActive
                    ? 'border-studio-500 bg-studio-500/5'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600',
                )}
              >
                {t === 'light' ? (
                  <Sun className={cn('w-5 h-5', isActive ? 'text-studio-500' : 'text-gray-400')} />
                ) : (
                  <Moon className={cn('w-5 h-5', isActive ? 'text-studio-500' : 'text-gray-400')} />
                )}
                <span className={cn('text-xs font-medium capitalize', isActive ? 'text-studio-500' : 'text-gray-500 dark:text-gray-400')}>
                  {t}
                </span>
                {isActive && (
                  <span className="text-[9px] font-semibold text-studio-500 bg-studio-500/10 px-1.5 py-0.5 rounded">
                    Active
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </SettingCard>

      {/* Learning progress */}
      <SettingCard
        title="Learning Progress"
        description="Your progress is stored locally in your browser."
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300 tabular-nums">
              {completedCount} of {TOTAL_LESSONS} lessons completed
            </p>
            <div className="mt-2 w-48 h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-studio-500 transition-[width] duration-500"
                style={{ width: `${Math.round((completedCount / TOTAL_LESSONS) * 100)}%` }}
              />
            </div>
          </div>
          <button
            onClick={handleResetProgress}
            className={cn(
              'flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border transition-colors',
              confirmProgress
                ? 'bg-rose-50 dark:bg-rose-500/10 border-rose-300 dark:border-rose-500/30 text-rose-600 dark:text-rose-400'
                : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:border-gray-600 dark:hover:text-gray-200',
            )}
          >
            {confirmProgress ? (
              <>
                <Trash2 className="w-3.5 h-3.5" />
                Confirm reset
              </>
            ) : (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                Reset progress
              </>
            )}
          </button>
        </div>
        {confirmProgress && (
          <p className="text-xs text-rose-600 dark:text-rose-400">
            This will clear all {completedCount} completed lessons permanently.{' '}
            <button onClick={() => setConfirmProgress(false)} className="underline">
              Cancel
            </button>
          </p>
        )}
      </SettingCard>

      {/* Mixing checklist */}
      <SettingCard
        title="Mixing Checklist"
        description="The pre-bounce checklist state is stored locally in your browser."
      >
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700 dark:text-gray-300 tabular-nums">
            {checkedCount} of {CHECKLIST_ITEMS.length} items checked
          </p>
          <button
            onClick={handleResetChecklist}
            disabled={checkedCount === 0}
            className={cn(
              'flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border transition-colors',
              confirmChecklist
                ? 'bg-rose-50 dark:bg-rose-500/10 border-rose-300 dark:border-rose-500/30 text-rose-600 dark:text-rose-400'
                : checkedCount === 0
                ? 'border-gray-100 dark:border-gray-800 text-gray-300 dark:text-gray-700 cursor-default'
                : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:border-gray-600 dark:hover:text-gray-200',
            )}
          >
            {confirmChecklist ? (
              <>
                <Trash2 className="w-3.5 h-3.5" />
                Confirm reset
              </>
            ) : (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                Reset checklist
              </>
            )}
          </button>
        </div>
        {confirmChecklist && (
          <p className="text-xs text-rose-600 dark:text-rose-400">
            This will uncheck all {checkedCount} items.{' '}
            <button onClick={() => setConfirmChecklist(false)} className="underline">
              Cancel
            </button>
          </p>
        )}
      </SettingCard>

      {/* About */}
      <SettingCard title="About">
        <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-start gap-2">
            <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-400" />
            <p>
              FL Studio 101 is an independent learning platform. All lesson content uses stock FL Studio plugins available in the Producer Edition and above.
            </p>
          </div>
          <p className="pl-5 text-gray-400 dark:text-gray-600 tabular-nums">
            18 modules · 100+ lessons · 64 glossary terms
          </p>
        </div>
      </SettingCard>
    </div>
  )
}
