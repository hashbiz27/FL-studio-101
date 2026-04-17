import type { Module, Lesson } from '@/types/lesson'

export async function getAllModules(): Promise<Module[]> {
  return []
}

export async function getModule(_slug: string): Promise<Module | null> {
  return null
}

export async function getLesson(_moduleSlug: string, _lessonSlug: string): Promise<Lesson | null> {
  return null
}
