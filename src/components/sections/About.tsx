'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Heart, Lightbulb, Users, Award } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital landscape.'
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the leading technology partner that transforms how organizations operate, innovate, and succeed in an increasingly digital world.'
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'We believe in integrity, excellence, collaboration, and continuous learning. Our values guide every decision and interaction.'
  }
]

const principles = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay at the forefront of technology trends and emerging solutions.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our success. We tailor solutions to your unique needs.'
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We deliver exceptional results through meticulous attention to detail.'
  }
]

export function About() {
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
            Who <span className="text-gradient">We Are</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            Harikoa, derived from the Māori word for <em>Happiness or Joy</em>, reflects our belief that success and fulfillment go hand in hand. With over <strong>70 years of combined experience</strong> across <strong>Finance, Technology, and Sales</strong>, our team has worked with industry leaders like Infosys, Deloitte, Tata, and Xerox before building Harikoa to help businesses scale confidently and sustainably.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-hover p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                {value.title}
              </h3>
              <p className="text-secondary-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Our Core Principles
            </h3>
            <p className="text-lg text-secondary-600">
              The foundation of everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                  {principle.title}
                </h4>
                <p className="text-secondary-600">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
