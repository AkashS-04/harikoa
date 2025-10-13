'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Lightbulb, Users, Shield, Target, Award } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, building trust through transparency and honesty.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creativity and cutting-edge technology to deliver solutions that exceed expectations.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and work closely with our clients as true partners.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We are committed to delivering exceptional quality in everything we do, setting industry standards.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    title: 'Results',
    description: 'We focus on measurable outcomes and tangible value that drives our clients\' success.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Award,
    title: 'Growth',
    description: 'We continuously learn, adapt, and evolve to stay ahead in the rapidly changing technology landscape.',
    color: 'from-indigo-500 to-purple-500'
  }
]

export function Values() {
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
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            These core values guide every decision we make and every solution we deliver. 
            They are the foundation of our company culture and client relationships.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-hover p-8 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 md:p-12 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-secondary-900 mb-6 italic">
            &ldquo;Our values aren&apos;t just words on a wall&mdash;they&apos;re the principles that drive 
            every project, every decision, and every relationship we build.&rdquo;
          </blockquote>
          <div className="text-lg text-secondary-600">
            <div className="font-semibold">Sarah Johnson</div>
            <div>CEO & Founder</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
