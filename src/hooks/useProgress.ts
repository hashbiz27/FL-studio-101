import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import type { LessonProgress } from '@/types/progress'

export function useLessonProgress(_lessonId: string) {
  return useQuery<LessonProgress | null>({
    queryKey: ['progress', _lessonId],
    queryFn: async () => null,
  })
}

export function useMarkComplete() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (_lessonId: string) => {},
    onSuccess: (_data, lessonId) => {
      queryClient.invalidateQueries({ queryKey: ['progress', lessonId] })
    },
  })
}
