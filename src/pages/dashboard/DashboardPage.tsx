import { Link } from 'react-router-dom'
import { Flame, BookOpen, ArrowRight, CheckCircle2, Lock } from 'lucide-react'
import { MODULES, TOTAL_LESSONS } from '@/data/modules'
import {
  useCourseProgress,
  useAllModuleProgress,
  useStreak,
  useActivityDays,
  useNextLesson,
} from '@/hooks/useProgress'
import { cn } from '@/lib/utils'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function DashboardPage() {
  usePageTitle('Dashboard')
  const { completedCount, percent } = useCourseProgress()
  const moduleProgress = useAllModuleProgress()
  const streak = useStreak()
  const activityDays = useActivityDays(14)
  const nextLesson = useNextLesson()

  const hasStarted = completedCount > 0
  const allDone = hasStarted && !nextLesson

  const streakSubtitle = streak >= 7
    ? `${streak}-day streak — you're on fire!`
    : streak > 0
    ? `${streak}-day streak — keep it up!`
    : hasStarted
    ? 'Complete a lesson today to start a streak.'
    : 'Start a lesson to begin your streak.'

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          {hasStarted ? 'Welcome back' : 'Welcome to FL Studio 101'}
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{streakSubtitle}</p>
      </div>

      {/* Top stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Overall progress */}
        <div className="sm:col-span-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Overall progress</p>
          <p className="text-4xl font-bold text-gray-900 dark:text-gray-50 tabular-nums">
            {percent}
            <span className="text-xl text-gray-400 dark:text-gray-600">%</span>
          </p>
          <div className="mt-3 h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-studio-500 transition-[width] duration-700 ease-out"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 tabular-nums">
            {completedCount} of {TOTAL_LESSONS} lessons
          </p>
        </div>

        {/* Streak */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Current streak</p>
          <div className="flex items-end gap-2 mt-1">
            <Flame
              className={cn(
                'w-8 h-8 mb-0.5 transition-colors',
                streak > 0 ? 'text-orange-400' : 'text-gray-300 dark:text-gray-700',
              )}
            />
            <p className="text-4xl font-bold text-gray-900 dark:text-gray-50 tabular-nums leading-none">
              {streak}
              <span className="text-xl text-gray-400 dark:text-gray-600 ml-1">days</span>
            </p>
          </div>
          {/* 14-day activity grid */}
          <div className="mt-4 flex items-center gap-1">
            {activityDays.map((day) => (
              <div
                key={day.dateStr}
                title={day.label}
                className={cn(
                  'flex-1 h-2 rounded-sm transition-colors',
                  day.active
                    ? 'bg-studio-500'
                    : 'bg-gray-100 dark:bg-gray-800',
                )}
              />
            ))}
          </div>
          <p className="mt-1.5 text-[10px] text-gray-400 dark:text-gray-600">Last 14 days</p>
        </div>

        {/* Continue / start CTA */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 flex flex-col">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-auto">
            {allDone ? 'All caught up!' : hasStarted ? 'Continue learning' : 'Get started'}
          </p>
          {allDone ? (
            <div className="mt-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-2" />
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                You've completed all available lessons. More content coming soon!
              </p>
            </div>
          ) : nextLesson ? (
            <Link
              to={`/learn/${nextLesson.moduleSlug}/${nextLesson.slug}`}
              className="mt-3 group"
            >
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-studio-500 transition-colors leading-snug line-clamp-2">
                {nextLesson.title}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {MODULES.find((m) => m.slug === nextLesson.moduleSlug)?.title}
                {' · '}
                {nextLesson.estimatedMinutes} min
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-studio-500 group-hover:gap-2.5 transition-all">
                {hasStarted ? 'Continue' : 'Start lesson'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ) : (
            <div className="mt-3">
              <BookOpen className="w-8 h-8 text-gray-300 dark:text-gray-700 mb-2" />
              <p className="text-sm text-gray-500 dark:text-gray-400">No lessons available yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Module progress grid */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
          All modules
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MODULES.map((module) => {
            const progress = moduleProgress[module.slug]
            const hasContent = progress.total === module.lessonCount && progress.total > 0
            const isStarted = progress.completed > 0
            const isComplete = isStarted && progress.completed === progress.total

            return (
              <Link
                key={module.slug}
                to={`/learn/${module.slug}`}
                className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 hover:border-studio-500/40 hover:bg-studio-500/5 transition-colors"
              >
                {/* Header row */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] font-mono font-semibold text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                    {String(module.order).padStart(2, '0')}
                  </span>
                  {isComplete ? (
                    <span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      DONE
                    </span>
                  ) : module.isFree ? (
                    <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-1 py-0.5 rounded">
                      FREE
                    </span>
                  ) : (
                    !hasContent && <Lock className="w-3 h-3 text-gray-300 dark:text-gray-700" />
                  )}
                </div>

                {/* Title */}
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-studio-500 transition-colors truncate">
                  {module.title}
                </p>

                {/* Progress bar */}
                <div className="mt-3 h-1 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <div
                    className={cn(
                      'h-full rounded-full transition-[width] duration-500',
                      isComplete ? 'bg-emerald-500' : 'bg-studio-500',
                    )}
                    style={{ width: `${progress.percent}%` }}
                  />
                </div>

                {/* Lesson count */}
                <p className="mt-1.5 text-xs tabular-nums">
                  <span className={cn(
                    isStarted ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'
                  )}>
                    {progress.completed}/{progress.total}
                  </span>
                  <span className="text-gray-400 dark:text-gray-600">
                    {' '}lessons · {module.estimatedHours}h
                  </span>
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
