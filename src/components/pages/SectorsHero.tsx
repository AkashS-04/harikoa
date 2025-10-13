'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, DollarSign, Factory, ShoppingCart, GraduationCap } from 'lucide-react'

const sectorIcons = [
  { icon: Heart, color: 'from-red-500 to-pink-500' },
  { icon: DollarSign, color: 'from-green-500 to-emerald-500' },
  { icon: Factory, color: 'from-blue-500 to-cyan-500' },
  { icon: ShoppingCart, color: 'from-purple-500 to-indigo-500' },
  { icon: GraduationCap, color: 'from-yellow-500 to-orange-500' }
]

export function SectorsHero() {
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
            <span className="text-sm font-medium text-primary-700">Industries We Serve</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 text-balance"
          >
            Technology Solutions for{' '}
            <span className="text-gradient">Every Industry</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto text-balance"
          >
            We understand the unique challenges and opportunities across different industries. 
            Our tailored solutions help organizations thrive in their specific markets.
          </motion.p>

          {/* Sector Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {sectorIcons.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <sector.icon className={`w-8 h-8 bg-gradient-to-br ${sector.color} bg-clip-text text-transparent`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
