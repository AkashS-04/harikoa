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
    { name: 'Digital Transformation', href: '/services/digital-transformation' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'AI & Machine Learning', href: '/services/ai-ml' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
  ],
  sectors: [
    { name: 'Healthcare', href: '/sectors/healthcare' },
    { name: 'Finance', href: '/sectors/finance' },
    { name: 'Manufacturing', href: '/sectors/manufacturing' },
    { name: 'Retail', href: '/sectors/retail' },
    { name: 'Education', href: '/sectors/education' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">HariKoa</span>
            </Link>
            <p className="text-secondary-300 mb-6 max-w-md">
              Empowering businesses through innovative technology solutions. 
              We transform ideas into digital reality, driving growth and success 
              in the modern digital landscape.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-secondary-300">
                <Mail className="w-4 h-4" />
                <span>hello@harikoa.com</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
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

          {/* Sectors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sectors</h3>
            <ul className="space-y-3">
              {footerLinks.sectors.map((link) => (
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

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-secondary-300 mb-4">
              Get the latest insights on technology trends and industry updates.
            </p>
            <form className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-secondary-400 text-sm">
                © 2024 HariKoa. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
              <button
                onClick={scrollToTop}
                className="p-2 text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
