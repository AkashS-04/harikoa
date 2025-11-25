'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { footerLinks } from './footerData'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex flex-col items-start mb-4 sm:mb-6">
              <div className="flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-white font-montserrat">har</span>
                <span className="text-xl sm:text-2xl font-bold text-accent-300 font-montserrat">i</span>
                <span className="text-xl sm:text-2xl font-bold text-white font-montserrat">koa</span>
              </div>
              <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-primary-950 via-accent-950 to-primary-800 ml-[6px]"></div>
              <span className="text-xs sm:text-sm font-bold text-accent-300 font-montserrat ml-[6px]">consulting</span>
            </Link>
            <p className="text-sm sm:text-base text-secondary-300 mb-4 sm:mb-6 max-w-md font-roboto leading-relaxed">
              Empowering businesses through personalized financial solutions. 
              We bring structure to your numbers, strength to your strategy, and 
              peace of mind to your journey.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-secondary-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">info@harikoa.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-secondary-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91-XXXX-XXX-XXX</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-secondary-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>(Add office address)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-montserrat">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-secondary-300 hover:text-primary-400 transition-colors duration-200 font-roboto"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-montserrat">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-secondary-300 hover:text-primary-400 transition-colors duration-200 font-roboto"
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

