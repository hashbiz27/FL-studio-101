import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { MODULES } from '@/data/modules'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function CurriculumPage() {
  usePageTitle('Curriculum')
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Curriculum</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {MODULES.length} modules · music-first approach
        </p>
      </div>

      <div className="space-y-2">
        {MODULES.map((module) => (
          <Link
            key={module.slug}
            to={`/learn/${module.slug}`}
            className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 hover:border-studio-500/50 hover:bg-studio-500/5 transition-colors group"
          >
            <span className="shrink-0 w-8 h-8 flex items-center justify-center text-xs font-mono font-bold rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-studio-500/10 group-hover:text-studio-500 transition-colors">
              {String(module.order).padStart(2, '0')}
            </span>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {module.title}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600">
                {module.lessonCount} lessons · ~{module.estimatedHours}h
              </p>
            </div>

            <div className="shrink-0">
              {module.isFree ? (
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  FREE
                </span>
              ) : (
                <Lock className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
