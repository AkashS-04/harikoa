'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { teamMembers } from './teamMembersData'

export function TeamPartners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate cards
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    setIsAutoPlaying(false)
  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
    setIsAutoPlaying(false)
  }

  const goToCard = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="team" ref={ref} className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 px-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 mb-2 sm:mb-3 font-montserrat">
            Team of <span className="text-gradient">Partners & Advisors</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary-600 max-w-xl mx-auto font-roboto">
            Meet our experienced team of financial experts.
          </p>
        </motion.div>

        {/* Moving Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative px-4 sm:px-0"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-primary-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px] sm:min-h-[400px]">
              {/* Content Section */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-center order-2 lg:order-1">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2 sm:space-y-3"
                >
                  {/* Name and Title */}
                  <div className="bg-primary-950 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold font-montserrat mb-0.5 text-white">
                      {teamMembers[currentIndex].name}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-primary-200 font-montserrat">
                      {teamMembers[currentIndex].title}
                    </p>
                    <p className="text-xs sm:text-sm text-primary-300 font-roboto">
                      {teamMembers[currentIndex].qualifications}
                    </p>
                  </div>

                  {/* Compact Description */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <p className="text-xs sm:text-sm text-secondary-700 leading-relaxed font-roboto">
                      {teamMembers[currentIndex].description}
                    </p>
                    
                    {/* Key Experience Points */}
                    <div className="grid grid-cols-1 gap-1">
                      {teamMembers[currentIndex].experience && (
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-1.5"></div>
                          <p className="text-xs sm:text-sm text-secondary-700 font-roboto">
                            {teamMembers[currentIndex].experience}
                          </p>
                        </div>
                      )}
                      
                      {teamMembers[currentIndex].background && (
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent-600 rounded-full flex-shrink-0 mt-1.5"></div>
                          <p className="text-xs sm:text-sm text-secondary-700 font-roboto">
                            {teamMembers[currentIndex].background}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Specializations - Compact */}
                    <div className="bg-accent-50 p-2 sm:p-2.5 rounded-lg">
                      <p className="text-accent-950 font-semibold font-montserrat mb-1 text-xs sm:text-sm">Key Expertise:</p>
                      <p className="text-accent-800 font-roboto text-xs sm:text-sm">
                        {teamMembers[currentIndex].specializations}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center p-4 sm:p-6 order-1 lg:order-2">
                <motion.div
                  key={`image-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-xl overflow-hidden relative p-0.5">
                    {teamMembers[currentIndex].image && teamMembers[currentIndex].image !== '/api/placeholder/300/300' ? (
                      <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                        <Image
                          src={teamMembers[currentIndex].image}
                          alt={teamMembers[currentIndex].name}
                          fill
                          className="object-cover object-center rounded-full"
                          style={{ objectPosition: 'center center' }}
                          onError={(e) => {
                            // Fallback to initial if image fails to load
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            const parent = target.parentElement
                            if (parent) {
                              const fallback = document.createElement('div')
                              fallback.className = 'w-full h-full bg-white rounded-full flex items-center justify-center absolute inset-0'
                              fallback.innerHTML = `<span class="text-2xl sm:text-2xl md:text-3xl font-bold text-primary-950 font-montserrat">${teamMembers[currentIndex].name.charAt(0)}</span>`
                              parent.appendChild(fallback)
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl sm:text-2xl md:text-3xl font-bold text-primary-950 font-montserrat">
                          {teamMembers[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-accent-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-primary-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
            <button
              onClick={prevCard}
              className="p-1.5 sm:p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-50"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-1.5 sm:space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCard(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-600 scale-125'
                      : 'bg-primary-300 hover:bg-primary-400'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="p-1.5 sm:p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-50"
              aria-label="Next team member"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

