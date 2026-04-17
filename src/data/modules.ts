export interface ModuleMeta {
  slug: string
  title: string
  order: number
  lessonCount: number
  isFree: boolean
  estimatedHours: number
}

export const MODULES: ModuleMeta[] = [
  {
    slug: 'module-01-getting-started',
    title: 'Getting Started',
    order: 1,
    lessonCount: 6,
    isFree: true,
    estimatedHours: 1.2,
  },
  {
    slug: 'module-02-your-first-beat',
    title: 'Your First Beat',
    order: 2,
    lessonCount: 5,
    isFree: true,
    estimatedHours: 1.5,
  },
  {
    slug: 'module-03-rhythm',
    title: 'Rhythm & Groove',
    order: 3,
    lessonCount: 9,
    isFree: false,
    estimatedHours: 3,
  },
  {
    slug: 'module-04-melody',
    title: 'Melody & Harmony',
    order: 4,
    lessonCount: 12,
    isFree: false,
    estimatedHours: 4,
  },
  {
    slug: 'module-05-sound-selection',
    title: 'Sound Selection',
    order: 5,
    lessonCount: 8,
    isFree: false,
    estimatedHours: 2.5,
  },
  {
    slug: 'module-06-sound-design',
    title: 'Sound Design',
    order: 6,
    lessonCount: 10,
    isFree: false,
    estimatedHours: 4,
  },
  {
    slug: 'module-07-arrangement',
    title: 'Arrangement',
    order: 7,
    lessonCount: 10,
    isFree: false,
    estimatedHours: 3.5,
  },
  {
    slug: 'module-08-mixer',
    title: 'The FL Mixer',
    order: 8,
    lessonCount: 7,
    isFree: false,
    estimatedHours: 2,
  },
  {
    slug: 'module-09-eq',
    title: 'EQ & Frequency',
    order: 9,
    lessonCount: 8,
    isFree: false,
    estimatedHours: 3,
  },
  {
    slug: 'module-10-compression',
    title: 'Compression',
    order: 10,
    lessonCount: 8,
    isFree: false,
    estimatedHours: 3,
  },
  {
    slug: 'module-11-effects',
    title: 'Space & Effects',
    order: 11,
    lessonCount: 8,
    isFree: false,
    estimatedHours: 3,
  },
  {
    slug: 'module-12-mastering',
    title: 'Mastering',
    order: 12,
    lessonCount: 7,
    isFree: false,
    estimatedHours: 2.5,
  },
  {
    slug: 'module-13-trap',
    title: 'Genre: Trap',
    order: 13,
    lessonCount: 7,
    isFree: false,
    estimatedHours: 3,
  },
  {
    slug: 'module-14-lofi',
    title: 'Genre: Lo-Fi',
    order: 14,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 2.5,
  },
  {
    slug: 'module-15-house',
    title: 'Genre: House',
    order: 15,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 2.5,
  },
]

export const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessonCount, 0)
