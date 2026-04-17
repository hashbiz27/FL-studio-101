import { MODULES } from '@/data/modules'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Welcome back
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Pick up where you left off.
        </p>
      </div>

      {/* Progress placeholder */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
          Overall progress
        </p>
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-50">0%</p>
        <div className="mt-3 h-2 rounded-full bg-gray-100 dark:bg-gray-800">
          <div className="h-full w-0 rounded-full bg-studio-500" />
        </div>
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-600">
          0 of {MODULES.reduce((n, m) => n + m.lessonCount, 0)} lessons completed
        </p>
      </div>

      {/* Module grid placeholder */}
      <div>
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Curriculum — {MODULES.length} modules
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MODULES.map((module) => (
            <div
              key={module.slug}
              className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-semibold text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                  {String(module.order).padStart(2, '0')}
                </span>
                {module.isFree && (
                  <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-1 py-0.5 rounded">
                    FREE
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {module.title}
              </p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-600">
                {module.lessonCount} lessons · {module.estimatedHours}h
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
