import type { QuizQuestion } from '@/types/quiz'

export interface QuizCardProps {
  question: QuizQuestion
  selectedOptionId?: string
  onSelect: (optionId: string) => void
  revealed: boolean
}

export default function QuizCard(_props: QuizCardProps) {
  return null
}
