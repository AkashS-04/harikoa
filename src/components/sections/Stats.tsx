'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  {
    number: '500+',
    label: 'Projects Delivered',
    description: 'Successfully completed projects across various industries'
  },
  {
    number: '50+',
    label: 'Happy Clients',
    description: 'Long-term partnerships with satisfied customers'
  },
  {
    number: '5+',
    label: 'Years Experience',
    description: 'Proven track record in technology consulting'
  },
  {
    number: '99%',
    label: 'Success Rate',
    description: 'Consistent delivery of high-quality solutions'
  }
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-lg font-semibold text-secondary-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-secondary-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
