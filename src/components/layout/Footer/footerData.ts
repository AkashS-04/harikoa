import { Linkedin, Twitter, Facebook, Instagram, LucideIcon } from 'lucide-react'

export interface FooterLink {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: LucideIcon
}

export const footerLinks = {
  services: [
    { name: 'Finance Operations', href: '/services?service=finance-operations' },
    { name: 'Revenue Operations', href: '/services?service=revenue-operations' },
    { name: 'Startup CFO Services', href: '/services?service=startup-cfo' },
    { name: 'Legal Services', href: '/services?service=legal-services' },
    { name: 'Company Secretarial', href: '/services?service=company-secretarial' },
  ],
  company: [
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
}

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
]

