import { CheckCircle2, Circle } from 'lucide-react'
import { useProgressStore } from '@/store/progressStore'

export interface LessonCompleteButtonProps {
  lessonId: string
}

export default function LessonCompleteButton({ lessonId }: LessonCompleteButtonProps) {
  const completed = useProgressStore((s) => !!s.completed[lessonId])
  const markComplete = useProgressStore((s) => s.markComplete)
  const markIncomplete = useProgressStore((s) => s.markIncomplete)

  if (completed) {
    return (
      <button
        onClick={() => markIncomplete(lessonId)}
        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
      >
        <CheckCircle2 className="w-5 h-5" />
        Completed — click to undo
      </button>
    )
  }

  return (
    <button
      onClick={() => markComplete(lessonId)}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-studio-500 hover:bg-studio-600 text-white text-sm font-semibold transition-colors"
    >
      <Circle className="w-4 h-4" />
      Mark as complete
    </button>
  )
}
