import type { CourseProgress, ModuleProgress } from '@/types/progress'

export function computeModuleProgress(
  _completedLessonIds: string[],
  _totalLessons: number,
): ModuleProgress {
  return { moduleId: '', completedLessons: 0, totalLessons: 0, percentComplete: 0 }
}

export function computeCourseProgress(_moduleProgresses: ModuleProgress[]): CourseProgress {
  return { totalLessons: 0, completedLessons: 0, percentComplete: 0, modules: [] }
}
