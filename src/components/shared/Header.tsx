import { Menu, Moon, Sun, BookOpen, Flame } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useUIStore } from '@/store/uiStore'
import { useCourseProgress, useStreak } from '@/hooks/useProgress'

export default function Header() {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar)
  const toggleTheme = useUIStore((s) => s.toggleTheme)
  const theme = useUIStore((s) => s.theme)

  const { completedCount, total, percent } = useCourseProgress()
  const streak = useStreak()

  return (
    <header className="shrink-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center h-14 px-4 gap-3">
        {/* Mobile hamburger */}
        <button
          onClick={toggleSidebar}
          className={cn(
            'md:hidden flex items-center justify-center w-8 h-8 rounded-lg',
            'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
            'dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800',
            'transition-colors',
          )}
          aria-label="Open navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile brand */}
        <div className="flex items-center gap-2 md:hidden">
          <BookOpen className="w-4 h-4 text-studio-500" />
          <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
            FL Studio 101
          </span>
        </div>

        <div className="flex-1" />

        {/* Progress summary — compact pill on mobile, full text on sm+ */}
        {percent > 0 && (
          <span className="sm:hidden text-xs font-semibold tabular-nums text-studio-500 bg-studio-500/10 px-2 py-0.5 rounded-full">
            {percent}%
          </span>
        )}
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span className="tabular-nums font-medium text-gray-700 dark:text-gray-300">
            {percent}%
          </span>
          <span className="text-gray-300 dark:text-gray-700">·</span>
          <span className="tabular-nums">
            {completedCount} / {total} lessons
          </span>
          {streak > 0 && (
            <>
              <span className="text-gray-300 dark:text-gray-700">·</span>
              <span className="flex items-center gap-1 text-orange-500 dark:text-orange-400 font-medium">
                <Flame className="w-3.5 h-3.5" />
                {streak}d
              </span>
            </>
          )}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-lg',
            'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
            'dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800',
            'transition-colors',
          )}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* User avatar */}
        <button
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-full',
            'bg-studio-500 text-white text-xs font-semibold',
            'hover:bg-studio-600 transition-colors',
            'ring-2 ring-transparent hover:ring-studio-500/30',
          )}
          aria-label="User menu"
        >
          U
        </button>
      </div>

      {/* Overall progress bar */}
      <div className="h-0.5 bg-gray-100 dark:bg-gray-800">
        <div
          className="h-full bg-studio-500 transition-[width] duration-700 ease-out"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </header>
  )
}
