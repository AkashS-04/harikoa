'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Brain, Database, Shield, Smartphone, Zap } from 'lucide-react'

const serviceIcons = [
  { icon: Cloud, color: 'from-blue-500 to-cyan-500' },
  { icon: Brain, color: 'from-purple-500 to-pink-500' },
  { icon: Database, color: 'from-green-500 to-emerald-500' },
  { icon: Shield, color: 'from-red-500 to-orange-500' },
  { icon: Smartphone, color: 'from-indigo-500 to-blue-500' },
  { icon: Zap, color: 'from-yellow-500 to-orange-500' }
]

export function ServicesHero() {
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
            <span className="text-sm font-medium text-primary-700">Our Services</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 text-balance"
          >
            Technology Solutions That{' '}
            <span className="text-gradient">Drive Results</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto text-balance"
          >
            From cloud infrastructure to AI-powered insights, we deliver comprehensive 
            technology solutions that accelerate your digital transformation.
          </motion.p>

          {/* Service Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {serviceIcons.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className={`w-8 h-8 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
