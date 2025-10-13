'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Heart, 
  DollarSign, 
  Factory, 
  ShoppingCart, 
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const sectors = [
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Transforming patient care through digital health solutions, telemedicine platforms, and AI-powered diagnostics.',
    technologies: [
      'Electronic Health Records (EHR)',
      'Telemedicine Platforms',
      'AI-Powered Diagnostics',
      'Patient Management Systems',
      'Health Data Analytics',
      'HIPAA Compliance'
    ],
    href: '/sectors/healthcare',
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-50 to-pink-50'
  },
  {
    icon: DollarSign,
    title: 'Finance',
    description: 'Enabling secure, scalable financial services with blockchain, AI, and advanced analytics solutions.',
    technologies: [
      'Digital Banking Platforms',
      'Blockchain Solutions',
      'Fraud Detection Systems',
      'Risk Management Tools',
      'Payment Processing',
      'Regulatory Compliance'
    ],
    href: '/sectors/finance',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Driving Industry 4.0 transformation with IoT, automation, and predictive maintenance solutions.',
    technologies: [
      'IoT Sensor Networks',
      'Predictive Maintenance',
      'Supply Chain Optimization',
      'Quality Control Systems',
      'Production Analytics',
      'Smart Factory Solutions'
    ],
    href: '/sectors/manufacturing',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Creating seamless shopping experiences with omnichannel platforms, personalization, and inventory management.',
    technologies: [
      'E-commerce Platforms',
      'Inventory Management',
      'Customer Analytics',
      'Personalization Engines',
      'Mobile Commerce',
      'Supply Chain Management'
    ],
    href: '/sectors/retail',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'from-purple-50 to-indigo-50'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Revolutionizing learning with EdTech solutions, virtual classrooms, and personalized learning platforms.',
    technologies: [
      'Learning Management Systems',
      'Virtual Classrooms',
      'Student Analytics',
      'Content Management',
      'Assessment Tools',
      'Collaboration Platforms'
    ],
    href: '/sectors/education',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50'
  }
]

export function SectorsGrid() {
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
            Industry <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            We have deep domain expertise across multiple industries, enabling us to deliver 
            solutions that address specific sector challenges and opportunities.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="space-y-12">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={sector.href} className="block">
                <div className={`card-hover p-8 md:p-12 bg-gradient-to-br ${sector.bgColor} border-0`}>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Icon & Title */}
                    <div className="flex items-center space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${sector.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <sector.icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                          {sector.title}
                        </h3>
                        <p className="text-lg text-secondary-600">
                          {sector.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4">Technologies & Solutions:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {sector.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center text-sm text-secondary-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-soft rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Don&apos;t See Your Industry?
            </h3>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              We work with organizations across all sectors. Let&apos;s discuss how our 
              technology solutions can address your specific industry challenges.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Discuss Your Needs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
