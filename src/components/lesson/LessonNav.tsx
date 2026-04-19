import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { LessonContent } from '@/types/content'

export interface LessonNavProps {
  prev: LessonContent | null
  next: LessonContent | null
}

export default function LessonNav({ prev, next }: LessonNavProps) {
  return (
    <div className="flex items-stretch justify-between gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
      {prev ? (
        <Link
          to={`/learn/${prev.moduleSlug}/${prev.slug}`}
          className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-studio-500/40 hover:bg-studio-500/5 p-4 transition-colors group max-w-[48%]"
        >
          <ChevronLeft className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-studio-500 transition-colors" />
          <div className="min-w-0">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Previous</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-studio-500 dark:group-hover:text-studio-400 transition-colors truncate">
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={`/learn/${next.moduleSlug}/${next.slug}`}
          className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-studio-500/40 hover:bg-studio-500/5 p-4 transition-colors group max-w-[48%] ml-auto text-right"
        >
          <div className="min-w-0">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Next</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-studio-500 dark:group-hover:text-studio-400 transition-colors truncate">
              {next.title}
            </p>
          </div>
          <ChevronRight className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-studio-500 transition-colors" />
        </Link>
      ) : null}
    </div>
  )
}
