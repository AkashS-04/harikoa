'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Users, Award, Rocket } from 'lucide-react'

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Started with a vision to democratize technology and make it accessible to businesses of all sizes.',
    icon: Calendar
  },
  {
    year: '2020',
    title: 'First Major Client',
    description: 'Secured our first enterprise client and delivered a successful digital transformation project.',
    icon: Users
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to 20+ experts and established partnerships with leading technology providers.',
    icon: Award
  },
  {
    year: '2022',
    title: 'AI Innovation Lab',
    description: 'Launched our AI Innovation Lab to develop cutting-edge machine learning solutions.',
    icon: Rocket
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description: 'Received industry awards and recognition for our innovative technology solutions.',
    icon: Award
  },
  {
    year: '2024',
    title: 'Future Vision',
    description: 'Expanding globally with new offices and advanced technology capabilities.',
    icon: Rocket
  }
]

export function History() {
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
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            From a small startup to a leading technology consulting firm, 
            we&apos;ve been on an incredible journey of growth and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-accent-200 rounded-full"></div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="card-hover p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                        <div className="text-lg font-semibold text-secondary-900">{milestone.title}</div>
                      </div>
                    </div>
                    <p className="text-secondary-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-600 rounded-full z-10"></div>

                {/* Spacer */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
