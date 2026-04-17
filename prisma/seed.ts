import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function main() {
  // Seed achievements
  const achievements = [
    { slug: 'first-lesson', title: 'First Step', description: 'Completed your first lesson.', type: 'FIRST_LESSON' as const },
    { slug: 'module-00-complete', title: 'Oriented', description: 'Completed the Orientation module.', type: 'MODULE_COMPLETE' as const },
    { slug: 'module-01-complete', title: 'Rhythm Master', description: 'Completed Rhythm & Groove.', type: 'MODULE_COMPLETE' as const },
    { slug: 'quiz-perfect', title: 'Perfect Score', description: 'Scored 100% on a quiz.', type: 'QUIZ_PERFECT' as const },
    { slug: 'community-post', title: 'Shared the Work', description: 'Posted your first project to the community.', type: 'COMMUNITY_POST' as const },
  ]

  for (const achievement of achievements) {
    await db.achievement.upsert({
      where: { slug: achievement.slug },
      update: {},
      create: achievement,
    })
  }

  console.log('Seed complete.')
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect())
