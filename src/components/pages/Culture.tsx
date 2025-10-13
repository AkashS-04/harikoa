'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Users, Lightbulb, Award } from 'lucide-react'

const cultureValues = [
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We believe in sustainable productivity and support flexible working arrangements.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We foster an environment where everyone\'s voice is heard and valued.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We encourage creative thinking and provide resources for continuous learning.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.',
    color: 'from-green-500 to-emerald-500'
  }
]

export function Culture() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="text-gradient">Culture</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            We&apos;ve built a culture that values innovation, collaboration, and personal growth. 
            Join a team where your ideas matter and your career can flourish.
          </p>
        </motion.div>

        {/* Culture Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                {value.title}
              </h3>
              <p className="text-secondary-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
