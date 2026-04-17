import type { Quiz } from '@/types/quiz'

export interface QuizState {
  currentQuestionIndex: number
  answers: Record<string, string>
  revealed: boolean
  score: number | null
}

export function useQuiz(_quiz: Quiz) {
  return {
    state: { currentQuestionIndex: 0, answers: {}, revealed: false, score: null } as QuizState,
    selectAnswer: (_questionId: string, _optionId: string) => {},
    submit: () => {},
    reset: () => {},
  }
}
