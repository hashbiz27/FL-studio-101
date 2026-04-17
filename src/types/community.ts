export interface Comment {
  id: string
  lessonId: string
  userId: string
  body: string
  isPinned: boolean
  createdAt: string
  user: {
    displayName: string
    avatarUrl?: string
  }
}

export interface UserProject {
  id: string
  userId: string
  title: string
  description?: string
  genre?: string
  audioPreviewUrl?: string
  projectFileUrl?: string
  isPublic: boolean
  viewCount: number
  createdAt: string
  user: {
    displayName: string
    avatarUrl?: string
  }
}
