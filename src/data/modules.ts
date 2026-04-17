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
    slug: 'module-00-orientation',
    title: 'Orientation',
    order: 0,
    lessonCount: 5,
    isFree: true,
    estimatedHours: 1,
  },
  {
    slug: 'module-01-rhythm',
    title: 'Rhythm & Groove',
    order: 1,
    lessonCount: 9,
    isFree: true,
    estimatedHours: 3,
  },
  {
    slug: 'module-02-melody',
    title: 'Melody & Harmony',
    order: 2,
    lessonCount: 12,
    isFree: false,
    estimatedHours: 4,
  },
  {
    slug: 'module-03-sound-selection',
    title: 'Sound Selection',
    order: 3,
    lessonCount: 8,
    isFree: false,
    estimatedHours: 2.5,
  },
  {
    slug: 'module-04-sound-design',
    title: 'Sound Design',
    order: 4,
    lessonCount: 10,
    isFree: false,
    estimatedHours: 4,
  },
  {
    slug: 'module-05-arrangement',
    title: 'Arrangement',
    order: 5,
    lessonCount: 10,
    isFree: false,
    estimatedHours: 3.5,
  },
  {
    slug: 'module-06-mixer',
    title: 'The FL Mixer',
    order: 6,
    lessonCount: 7,
    isFree: false,
    estimatedHours: 2,
  },
  {
    slug: 'module-07-eq',
    title: 'EQ & Frequency',
    order: 7,
    lessonCount: 8,
    isFree: false,
    estimatedHours: 3,
  },
  {
    slug: 'module-08-compression',
    title: 'Compression',
    order: 8,
    lessonCount: 8,
    isFree: false,
    estimatedHours: 3,
  },
  {
    slug: 'module-09-effects',
    title: 'Space & Effects',
    order: 9,
    lessonCount: 8,
    isFree: false,
    estimatedHours: 3,
  },
  {
    slug: 'module-10-mastering',
    title: 'Mastering',
    order: 10,
    lessonCount: 7,
    isFree: false,
    estimatedHours: 2.5,
  },
  {
    slug: 'module-11-trap',
    title: 'Genre: Trap',
    order: 11,
    lessonCount: 7,
    isFree: false,
    estimatedHours: 3,
  },
  {
    slug: 'module-12-lofi',
    title: 'Genre: Lo-Fi',
    order: 12,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 2.5,
  },
  {
    slug: 'module-13-house',
    title: 'Genre: House',
    order: 13,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 2.5,
  },
]

export const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessonCount, 0)
