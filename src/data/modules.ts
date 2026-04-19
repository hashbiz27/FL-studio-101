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
    slug: 'module-05-piano-roll-mastery',
    title: 'Piano Roll Mastery',
    order: 3,
    lessonCount: 5,
    isFree: false,
    estimatedHours: 1.3,
  },
  {
    slug: 'module-03-sound-design-fundamentals',
    title: 'Sound Design Fundamentals',
    order: 4,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.5,
  },
  {
    slug: 'module-16-bass-low-end',
    title: 'Bass & Low End',
    order: 5,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.4,
  },
  {
    slug: 'module-04-sampling-chopping',
    title: 'Sampling & Chopping',
    order: 6,
    lessonCount: 5,
    isFree: false,
    estimatedHours: 1.2,
  },
  {
    slug: 'module-07-arrangement-song-structure',
    title: 'Arrangement & Song Structure',
    order: 7,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.5,
  },
  {
    slug: 'module-08-the-fl-mixer',
    title: 'The FL Mixer',
    order: 8,
    lessonCount: 5,
    isFree: false,
    estimatedHours: 1.2,
  },
  {
    slug: 'module-06-mixing-essentials',
    title: 'Mixing Essentials',
    order: 9,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.5,
  },
  {
    slug: 'module-09-eq-frequency',
    title: 'EQ & Frequency',
    order: 10,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.3,
  },
  {
    slug: 'module-10-compression',
    title: 'Compression',
    order: 11,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.3,
  },
  {
    slug: 'module-11-space-effects',
    title: 'Space & Effects',
    order: 12,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.3,
  },
  {
    slug: 'module-12-mastering',
    title: 'Mastering',
    order: 13,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.1,
  },
  {
    slug: 'module-17-sound-design-advanced',
    title: 'Sound Design II — Advanced',
    order: 14,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.5,
  },
  {
    slug: 'module-13-trap',
    title: 'Genre: Trap',
    order: 15,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.5,
  },
  {
    slug: 'module-14-lofi',
    title: 'Genre: Lo-Fi',
    order: 16,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.5,
  },
  {
    slug: 'module-15-house',
    title: 'Genre: House',
    order: 17,
    lessonCount: 6,
    isFree: false,
    estimatedHours: 1.5,
  },
  {
    slug: 'module-18-workflow-mindset',
    title: 'Workflow & Professional Mindset',
    order: 18,
    lessonCount: 5,
    isFree: false,
    estimatedHours: 1.2,
  },
]

export const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessonCount, 0)
