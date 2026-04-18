import { useParams, Link } from 'react-router-dom'
import { Clock, ChevronRight, CheckCircle2, Play, Lock, FileX2 } from 'lucide-react'
import { getModuleContent } from '@/data/lessons'
import { useProgressStore } from '@/store/progressStore'
import EmptyState from '@/components/shared/EmptyState'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

const DIFFICULTY_STYLES = {
  beginner: 'text-emerald-600 dark:text-emerald-400',
  intermediate: 'text-amber-600 dark:text-amber-400',
  advanced: 'text-rose-600 dark:text-rose-400',
}

export default function ModulePage() {
  const { moduleSlug } = useParams<{ moduleSlug: string }>()
  const module = getModuleContent(moduleSlug!)
  const completed = useProgressStore((s) => s.completed)

  useDocumentMeta({ title: module?.title ?? null })

  if (!module) {
    return (
      <EmptyState
        icon={FileX2}
        title="Module not found"
        description="This module doesn't exist or the URL is incorrect."
        action={
          <Link to="/learn" className="text-sm font-medium text-studio-500 hover:underline">
            Back to curriculum
          </Link>
        }
      />
    )
  }

  const completedCount = module.lessons.filter((l) => completed[l.id]).length

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
        <Link to="/learn" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          Curriculum
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-600 dark:text-gray-400">{module.title}</span>
      </nav>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">{module.title}</h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {module.description}
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <Clock className="w-3.5 h-3.5" />~{module.estimatedHours}h
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {module.lessons.length} lessons
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {completedCount} of {module.lessons.length} completed
          </span>
          {module.isFree && (
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
              FREE
            </span>
          )}
        </div>

        {completedCount > 0 && (
          <div className="mt-4 h-1.5 rounded-full bg-gray-100 dark:bg-gray-800">
            <div
              className="h-full rounded-full bg-studio-500 transition-all"
              style={{ width: `${(completedCount / module.lessons.length) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Lesson list */}
      <div className="space-y-1.5">
        {module.lessons.map((lesson, i) => {
          const isDone = !!completed[lesson.id]
          const isLocked = !lesson.isFree && !module.isFree
          return (
            <Link
              key={lesson.slug}
              to={`/learn/${module.slug}/${lesson.slug}`}
              className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 hover:border-studio-500/40 hover:bg-studio-500/5 transition-colors group"
            >
              <span
                className={[
                  'shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors',
                  isDone
                    ? 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-studio-500/10 group-hover:text-studio-500',
                ].join(' ')}
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <span className="text-[11px] font-mono font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                )}
              </span>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {lesson.title}
                </p>
                <p className="text-xs mt-0.5">
                  <span className="text-gray-400 dark:text-gray-500">
                    {lesson.estimatedMinutes} min
                  </span>
                  <span className="mx-1.5 text-gray-300 dark:text-gray-700">·</span>
                  <span className={DIFFICULTY_STYLES[lesson.difficulty]}>{lesson.difficulty}</span>
                </p>
              </div>

              {isLocked ? (
                <Lock className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700 shrink-0" />
              ) : (
                <Play className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700 group-hover:text-studio-500 shrink-0 transition-colors" />
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
