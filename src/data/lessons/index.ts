import type { LessonContent, ModuleContent } from '@/types/content'
import m01 from './module-01-getting-started.json'
import m02 from './module-02-your-first-beat.json'
import m03 from './module-03-sound-design-fundamentals.json'
import m04 from './module-04-sampling-chopping.json'
import m05 from './module-05-piano-roll-mastery.json'
import m06 from './module-06-mixing-essentials.json'
import m07 from './module-07-arrangement-song-structure.json'
import m08 from './module-08-the-fl-mixer.json'
import m09 from './module-09-eq-frequency.json'
import m10 from './module-10-compression.json'
import m11 from './module-11-space-effects.json'
import m12 from './module-12-mastering.json'
import m13 from './module-13-trap.json'
import m14 from './module-14-lofi.json'
import m15 from './module-15-house.json'
import m16 from './module-16-bass-low-end.json'
import m17 from './module-17-sound-design-advanced.json'
import m18 from './module-18-workflow-mindset.json'

type ModuleJSON = { module: Omit<ModuleContent, 'lessons'>; lessons: LessonContent[] }

const RAW: ModuleJSON[] = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15, m16, m17, m18] as ModuleJSON[]

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
