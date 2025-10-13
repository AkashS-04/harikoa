'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Home, DollarSign, BookOpen, Users, Coffee } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Home,
    title: 'Remote Work',
    description: 'Flexible remote work options and home office stipend for productivity.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Above-market salaries, performance bonuses, and equity participation.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    description: 'Annual learning budget, conference attendance, and skill development programs.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Regular team events, company retreats, and collaborative projects.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Coffee,
    title: 'Work Environment',
    description: 'Modern office space, free meals, and a supportive work environment.',
    color: 'from-indigo-500 to-purple-500'
  }
]

export function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-soft">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Employee <span className="text-gradient">Benefits</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            We invest in our team&apos;s success and well-being with comprehensive benefits 
            and perks that support both personal and professional growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-hover p-8 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
