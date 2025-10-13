'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Lightbulb, Cog, Rocket, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business goals, challenges, and technical requirements through comprehensive discovery sessions.',
    icon: Search,
    features: [
      'Business Requirements Analysis',
      'Technical Assessment',
      'Stakeholder Interviews',
      'Current State Documentation'
    ]
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'Our experts develop a comprehensive strategy and roadmap tailored to your specific needs and objectives.',
    icon: Lightbulb,
    features: [
      'Solution Architecture Design',
      'Technology Stack Selection',
      'Project Roadmap Creation',
      'Resource Planning'
    ]
  },
  {
    step: '03',
    title: 'Development & Implementation',
    description: 'We build and implement your solution using agile methodologies and best practices for optimal results.',
    icon: Cog,
    features: [
      'Agile Development Process',
      'Regular Progress Updates',
      'Quality Assurance Testing',
      'Performance Optimization'
    ]
  },
  {
    step: '04',
    title: 'Launch & Optimization',
    description: 'We ensure smooth deployment and provide ongoing support to maximize the value of your investment.',
    icon: Rocket,
    features: [
      'Smooth Deployment',
      'User Training',
      'Performance Monitoring',
      'Continuous Improvement'
    ]
  }
]

export function Process() {
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
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            We follow a proven methodology that ensures successful project delivery 
            and maximum value for our clients.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="card-hover p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary-600 mb-1">Step {step.step}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-secondary-600 mb-8">
                    {step.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-4">Key Activities:</h4>
                    <ul className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-secondary-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1">
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-600 opacity-20">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary-200 to-accent-200 rounded-full"></div>
                  )}
                </div>
              </div>
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
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and create a customized plan 
              that delivers the results you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </a>
              <a href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More About Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
