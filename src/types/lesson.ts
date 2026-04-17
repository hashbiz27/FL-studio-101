export interface Module {
  id: string
  slug: string
  title: string
  description: string
  order: number
  coverImageUrl?: string
  isPublished: boolean
  isFree: boolean
  estimatedHours?: number
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  moduleId: string
  slug: string
  title: string
  description?: string
  order: number
  muxPlaybackId?: string
  videoDurationSeconds?: number
  isPublished: boolean
  isFree: boolean
  hasQuiz: boolean
  attachments: LessonAttachment[]
}

export interface LessonAttachment {
  id: string
  lessonId: string
  label: string
  fileUrl: string
  fileType: string
  fileSizeKb?: number
}
