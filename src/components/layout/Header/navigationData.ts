export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/#team' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Finance Operations', href: '/services?service=finance-operations' },
      { name: 'Revenue Operations', href: '/services?service=revenue-operations' },
      { name: 'Startup CFO Services', href: '/services?service=startup-cfo' },
      { name: 'Legal Services', href: '/services?service=legal-services' },
      { name: 'Company Secretarial', href: '/services?service=company-secretarial' },
      { name: 'Financial Advisory Services', href: '/services?service=financial-advisory' },
      { name: 'Taxation Services', href: '/services?service=taxation-services' },
      { name: 'Business Analytics', href: '/services?service=business-analytics' },
      { name: 'Not for Profit Services', href: '/services?service=not-for-profit' },
    ]
  },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

