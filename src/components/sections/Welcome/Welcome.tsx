'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { features } from './welcomeData'

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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 mb-6 sm:mb-8 md:mb-12 font-montserrat px-2"
          >
            Welcome to the world of <span className="text-gradient">Harikoa</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-secondary-600 max-w-4xl mx-auto mb-8 sm:mb-12 font-roboto px-4"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-secondary-800 leading-tight">
              We&apos;re here to bring structure to your numbers, strength to your strategy, and peace of mind to your journey— so you can build a business that&apos;s both fulfilling and joyful.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-secondary-600">
              Partner with us today and experience personalized financial solutions that propel your success forward.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-1.5 sm:space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-secondary-700 whitespace-nowrap">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="max-w-4xl mx-auto px-4"
          >
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary-700 font-roboto leading-relaxed">
              70+ Person Years of Experience | 200+ Clients | 1 Belief — Business Should Feel Joyful
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

