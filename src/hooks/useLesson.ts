import { useParams } from 'react-router-dom'

export function useLesson() {
  const { moduleSlug, lessonSlug } = useParams<{ moduleSlug: string; lessonSlug: string }>()
  return { moduleSlug, lessonSlug, lesson: null, module: null, isLoading: false }
}
