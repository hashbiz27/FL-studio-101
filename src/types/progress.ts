export interface LessonProgress {
  id: string
  userId: string
  lessonId: string
  completed: boolean
  completedAt?: string
  watchedSeconds: number
}

export interface ModuleProgress {
  moduleId: string
  completedLessons: number
  totalLessons: number
  percentComplete: number
}

export interface CourseProgress {
  totalLessons: number
  completedLessons: number
  percentComplete: number
  modules: ModuleProgress[]
}
