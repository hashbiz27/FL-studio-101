import { useParams, Link } from 'react-router-dom'
import { Clock, ChevronRight, Lightbulb, Wrench } from 'lucide-react'
import { getLessonContent, getModuleContent, getAdjacentLessons } from '@/data/lessons'
import LessonBody from '@/components/lesson/LessonBody'
import TableOfContents from '@/components/lesson/TableOfContents'
import LessonNav from '@/components/lesson/LessonNav'
import LessonCompleteButton from '@/components/lesson/LessonCompleteButton'

const DIFFICULTY_STYLES = {
  beginner: 'text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10',
  intermediate: 'text-amber-700 bg-amber-50 dark:text-amber-400 dark:bg-amber-500/10',
  advanced: 'text-rose-700 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10',
}

export default function LessonPage() {
  const { moduleSlug, lessonSlug } = useParams<{ moduleSlug: string; lessonSlug: string }>()

  const lesson = getLessonContent(moduleSlug!, lessonSlug!)
  const module = getModuleContent(moduleSlug!)
  const { prev, next } = lesson
    ? getAdjacentLessons(lesson.id)
    : { prev: null, next: null }

  if (!lesson || !module) {
    return (
      <div className="flex items-center justify-center h-64 text-sm text-gray-400">
        Lesson not found.
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mb-5">
        <Link to="/learn" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          Curriculum
        </Link>
        <ChevronRight className="w-3 h-3 shrink-0" />
        <Link
          to={`/learn/${module.slug}`}
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          {module.title}
        </Link>
        <ChevronRight className="w-3 h-3 shrink-0" />
        <span className="text-gray-600 dark:text-gray-400 truncate">{lesson.title}</span>
      </nav>

      {/* Lesson header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-3 leading-tight">
          {lesson.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full capitalize ${DIFFICULTY_STYLES[lesson.difficulty]}`}
          >
            {lesson.difficulty}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <Clock className="w-3.5 h-3.5" />
            {lesson.estimatedMinutes} min read
          </span>
          {lesson.isFree && (
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
              FREE
            </span>
          )}
        </div>
      </div>

      {/* Two-column layout: body + ToC */}
      <div className="flex gap-12 items-start">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <LessonBody content={lesson.body} />

          {/* Key Takeaways */}
          <div className="mt-10 rounded-xl border border-studio-500/25 bg-studio-500/5 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4 text-studio-500 shrink-0" />
              <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-3">
              {lesson.keyTakeaways.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-studio-500 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Try This */}
          <div className="mt-4 rounded-xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Try This</h2>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {lesson.tryThis}
            </p>
          </div>

          {/* Mark complete */}
          <div className="mt-8">
            <LessonCompleteButton lessonId={lesson.id} />
          </div>

          {/* Prev / Next */}
          <LessonNav prev={prev} next={next} />
        </div>

        {/* Table of contents — wide screens only */}
        <aside className="hidden xl:block w-52 shrink-0 sticky top-6 self-start">
          <TableOfContents markdown={lesson.body} />
        </aside>
      </div>
    </div>
  )
}
