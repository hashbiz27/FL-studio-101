import type { LessonContent, ModuleContent } from '@/types/content'
import m01 from './module-01-getting-started.json'
import m02 from './module-02-your-first-beat.json'
import m03 from './module-03-sound-design-fundamentals.json'

type ModuleJSON = { module: Omit<ModuleContent, 'lessons'>; lessons: LessonContent[] }

const RAW: ModuleJSON[] = [m01, m02, m03] as ModuleJSON[]

export const ALL_MODULE_CONTENT: ModuleContent[] = RAW.map(({ module, lessons }) => ({
  ...module,
  lessons,
}))

export function getModuleContent(moduleSlug: string): ModuleContent | undefined {
  return ALL_MODULE_CONTENT.find((m) => m.slug === moduleSlug)
}

export function getLessonContent(
  moduleSlug: string,
  lessonSlug: string
): LessonContent | undefined {
  return getModuleContent(moduleSlug)?.lessons.find((l) => l.slug === lessonSlug)
}

export function getAllLessonsFlat(): LessonContent[] {
  return ALL_MODULE_CONTENT.flatMap((m) => m.lessons)
}

export function getAdjacentLessons(lessonId: string): {
  prev: LessonContent | null
  next: LessonContent | null
} {
  const all = getAllLessonsFlat()
  const idx = all.findIndex((l) => l.id === lessonId)
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  }
}
