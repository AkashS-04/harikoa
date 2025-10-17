'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Shield, Target, Users } from 'lucide-react'

export function Welcome() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    { icon: TrendingUp, text: 'Financial Growth' },
    { icon: Shield, text: 'Risk Management' },
    { icon: Target, text: 'Strategic Planning' },
    { icon: Users, text: 'Team Excellence' }
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-10"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-8 sm:mb-12 font-montserrat"
          >
            Empowering Your{' '}
            <span className="text-gradient">Financial Journey</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 text-lg md:text-xl text-secondary-600 max-w-4xl mx-auto mb-12 font-roboto"
          >
            <p className="text-2xl md:text-3xl font-semibold text-secondary-800">
              We&apos;re here to bring structure to your numbers, strength to your strategy, and peace of mind to your journey— so you can build a business that&apos;s both fulfilling and joyful.
            </p>
            
            <p className="text-lg text-secondary-600">
              Partner with us today and experience personalized financial solutions that propel your success forward.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <feature.icon className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-secondary-700">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">70+</div>
              <div className="text-sm text-secondary-600">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5</div>
              <div className="text-sm text-secondary-600">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-secondary-600">Client Focused</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-sm text-secondary-600">Support Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
