'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Briefcase, Award, Heart } from 'lucide-react'

const stats = [
  { icon: Users, value: '50+', label: 'Team Members' },
  { icon: Briefcase, value: '15+', label: 'Open Positions' },
  { icon: Award, value: '4.9/5', label: 'Employee Rating' },
  { icon: Heart, value: '100%', label: 'Remote Friendly' }
]

export function CareersHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="pt-24 pb-16 bg-gradient-soft">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 mb-8"
          >
            <span className="text-sm font-medium text-primary-700">Join Our Team</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 text-balance"
          >
            Build the Future of{' '}
            <span className="text-gradient">Technology</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto text-balance"
          >
            Join a team of passionate innovators who are shaping the future of technology. 
            We&apos;re looking for talented individuals who share our vision and values.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
