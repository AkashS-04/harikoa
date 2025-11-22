import { Database, Brain, Shield, Smartphone, Zap, TrendingUp, FileText, BarChart, Heart, LucideIcon } from 'lucide-react'

export interface ServiceOverview {
  icon: LucideIcon
  title: string
  description: string
  href: string
  color: string
}

export const services: ServiceOverview[] = [
  {
    icon: Database,
    title: 'Finance Operations',
    description: 'Making your numbers make sense, every single time.',
    href: '/services?service=finance-operations',
    color: 'from-primary-950 to-primary-800'
  },
  {
    icon: Brain,
    title: 'Revenue Operations',
    description: 'Bringing visibility, rhythm, and results to your sales process.',
    href: '/services?service=revenue-operations',
    color: 'from-primary-800 to-accent-950'
  },
  {
    icon: Shield,
    title: 'Startup CFO Services',
    description: 'Strategic finance leadership, investor-ready from day one.',
    href: '/services?service=startup-cfo',
    color: 'from-accent-950 to-accent-800'
  },
  {
    icon: Smartphone,
    title: 'Legal Services',
    description: 'Practical, startup-focused legal support without jargon.',
    href: '/services?service=legal-services',
    color: 'from-accent-950 to-accent-800'
  },
  {
    icon: Zap,
    title: 'Company Secretarial',
    description: 'Structure, compliance, and governance done right.',
    href: '/services?service=company-secretarial',
    color: 'from-primary-700 to-accent-950'
  },
  {
    icon: TrendingUp,
    title: 'Financial Advisory Services',
    description: 'Fund Raising, Valuation and Due Diligence',
    href: '/services?service=financial-advisory',
    color: 'from-primary-950 to-primary-700'
  },
  {
    icon: FileText,
    title: 'Taxation Services',
    description: 'Income Tax, GST and International Taxation',
    href: '/services?service=taxation-services',
    color: 'from-accent-950 to-accent-700'
  },
  {
    icon: BarChart,
    title: 'Business Analytics',
    description: 'Bringing clarity to your numbers',
    href: '/services?service=business-analytics',
    color: 'from-primary-800 to-accent-800'
  },
  {
    icon: Heart,
    title: 'Not for Profit Services',
    description: 'Bringing Trust to the impact created.',
    href: '/services?service=not-for-profit',
    color: 'from-accent-800 to-primary-800'
  }
]

