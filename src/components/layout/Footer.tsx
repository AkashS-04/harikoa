'use client'

import Link from 'next/link'
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react'

const footerLinks = {
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

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold font-montserrat">HariKoa</span>
            </Link>
                   <p className="text-secondary-300 mb-6 max-w-md font-roboto">
                     Empowering businesses through personalized financial solutions. 
                     We bring structure to your numbers, strength to your strategy, and 
                     peace of mind to your journey.
                   </p>
            <div className="space-y-3">
                     <div className="flex items-center space-x-3 text-secondary-300">
                       <Mail className="w-4 h-4" />
                       <span>info@harikoa.com</span>
                     </div>
                     <div className="flex items-center space-x-3 text-secondary-300">
                       <Phone className="w-4 h-4" />
                       <span>+91-XXXX-XXX-XXX</span>
                     </div>
                     <div className="flex items-center space-x-3 text-secondary-300">
                       <MapPin className="w-4 h-4" />
                       <span>(Add office address)</span>
                     </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
