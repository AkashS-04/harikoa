'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Welcome() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 via-white to-accent-100 relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 mb-8 sm:mb-10 md:mb-14 lg:mb-16 font-montserrat px-2"
          >
            Welcome to <span className="text-gradient">Harikoa</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-secondary-600 max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 font-roboto px-4"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-secondary-800 leading-relaxed">
              At Harikoa, we bring structure to your numbers, strength to your strategy, and peace of mind to your journey— so you can build a business that&apos;s both fulfilling and joyful.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-6xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-primary-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-2">
                    70+
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-secondary-700 font-extrabold">
                    Years of Experience
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-accent-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-2">
                    200+
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-secondary-700 font-extrabold">
                    Clients
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-50/0 to-accent-100/0 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-primary-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-2">
                    1
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-secondary-700 font-extrabold">
                    Belief — <span className="text-secondary-700 font-extrabold">Business that is Fulfilling and Joyful</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

