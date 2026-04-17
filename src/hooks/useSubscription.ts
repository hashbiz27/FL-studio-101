import type { SubscriptionTier } from '@/types/user'

export function useSubscription() {
  return {
    tier: 'FREE' as SubscriptionTier,
    isPro: false,
    isLoading: false,
  }
}
