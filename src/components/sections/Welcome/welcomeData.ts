import { TrendingUp, Shield, Target, Users, LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  text: string
}

export const features: Feature[] = [
  { icon: TrendingUp, text: 'Financial Growth' },
  { icon: Shield, text: 'Risk Management' },
  { icon: Target, text: 'Strategic Planning' },
  { icon: Users, text: 'Team Excellence' }
]

