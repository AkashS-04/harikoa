'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navigation } from './navigationData'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const isTogglingRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDropdownToggle = (e: React.MouseEvent, itemName: string) => {
    e.stopPropagation()
    isTogglingRef.current = true
    setActiveDropdown(prev => prev === itemName ? null : itemName)
    // Reset flag after toggle completes
    setTimeout(() => {
      isTogglingRef.current = false
    }, 0)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!activeDropdown) return

    const handleClickOutside = (event: MouseEvent) => {
      // If we just toggled, ignore this click
      if (isTogglingRef.current) {
        return
      }

      const target = event.target as HTMLElement
      const activeRef = dropdownRefs.current[activeDropdown]
      
      // Check if click is inside the active dropdown container (button + menu)
      if (activeRef?.contains(target)) {
        return
      }
      
      // Close if clicking outside
      setActiveDropdown(null)
    }

    // Listen for clicks after a short delay to allow button click to complete
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside)
    }, 0)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-secondary-200'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-950 font-montserrat">har</span>
              <span className="text-2xl font-bold text-accent-950 font-montserrat">i</span>
              <span className="text-2xl font-bold text-primary-950 font-montserrat">koa</span>
            </div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-800 ml-[6px]"></div>
            <span className="text-sm font-bold text-accent-950 font-montserrat ml-[6px]">consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div 
                    className="relative" 
                    ref={(el) => {
                      dropdownRefs.current[item.name] = el
                    }}
                  >
                    <button
                      onClick={(e) => handleDropdownToggle(e, item.name)}
                      className="flex items-center space-x-1 text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )} 
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-large border border-secondary-200 py-2 z-50"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-secondary-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-secondary-700 hover:text-primary-600 transition-colors duration-200',
                      pathname === item.href && 'text-primary-600 font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-secondary-200 bg-white"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={(e) => handleDropdownToggle(e, item.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              activeDropdown === item.name && "rotate-180"
                            )} 
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-8 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setActiveDropdown(null)
                                  }}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-4 py-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200',
                          pathname === item.href && 'text-primary-600 font-medium'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

