export interface Quiz {
  id: string
  lessonId: string
  title: string
  passingScore: number
  questions: QuizQuestion[]
}

export interface QuizQuestion {
  id: string
  quizId: string
  order: number
  questionText: string
  explanation?: string
  options: QuizOption[]
}

export interface QuizOption {
  id: string
  questionId: string
  text: string
  isCorrect: boolean
  order: number
}

export interface QuizAttempt {
  id: string
  quizId: string
  score: number
  passed: boolean
  attemptedAt: string
}
