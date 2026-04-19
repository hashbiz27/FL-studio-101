/**
 * Types for static lesson content stored in JSON.
 * Separate from the DB model types in lesson.ts, which describe Prisma rows.
 */

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface LessonContent {
  /** Stable unique ID, e.g. "m01-l01" */
  id: string
  title: string
  /** URL-safe slug, unique within its module */
  slug: string
  moduleSlug: string
  /** 1-based position within the module */
  order: number
  estimatedMinutes: number
  difficulty: Difficulty
  /** Whether the lesson is accessible without a Pro subscription */
  isFree: boolean
  /** Full lesson body in Markdown */
  body: string
  /** 3–5 concise takeaways shown after the lesson */
  keyTakeaways: string[]
  /** A hands-on exercise prompt in Markdown */
  tryThis: string
}

export interface ModuleContent {
  slug: string
  title: string
  /** Position in the overall curriculum (1-based) */
  order: number
  description: string
  isFree: boolean
  estimatedHours: number
  lessons: LessonContent[]
}
