export type SubscriptionTier = 'FREE' | 'PRO'
export type SubscriptionStatus = 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'TRIALING'

export interface UserProfile {
  id: string
  clerkId: string
  email: string
  displayName: string
  bio?: string
  avatarUrl?: string
  tier: SubscriptionTier
}

export interface Subscription {
  id: string
  status: SubscriptionStatus
  currentPeriodEnd?: string
  cancelAtPeriodEnd: boolean
}
