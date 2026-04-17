export interface QuizOptionProps {
  id: string
  text: string
  isSelected: boolean
  isCorrect?: boolean
  revealed: boolean
  onSelect: (id: string) => void
}

export default function QuizOption(_props: QuizOptionProps) {
  return null
}
