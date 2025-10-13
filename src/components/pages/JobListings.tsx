'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, ArrowRight } from 'lucide-react'

const jobs = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'full-time',
    description: 'Lead development of scalable web applications using modern technologies.',
    requirements: [
      '5+ years of full-stack development experience',
      'Expertise in React, Node.js, and cloud platforms',
      'Experience with microservices architecture',
      'Strong problem-solving and communication skills'
    ],
    postedAt: '2024-01-15'
  },
  {
    title: 'AI/ML Engineer',
    department: 'Data Science',
    location: 'Remote',
    type: 'full-time',
    description: 'Build and deploy machine learning models to solve complex business problems.',
    requirements: [
      '3+ years of ML/AI experience',
      'Proficiency in Python, TensorFlow, and PyTorch',
      'Experience with cloud ML platforms',
      'Strong mathematical and statistical background'
    ],
    postedAt: '2024-01-10'
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'San Francisco, CA',
    type: 'full-time',
    description: 'Design and maintain cloud infrastructure and CI/CD pipelines.',
    requirements: [
      '4+ years of DevOps experience',
      'Expertise in AWS/Azure/GCP',
      'Experience with Docker and Kubernetes',
      'Strong automation and scripting skills'
    ],
    postedAt: '2024-01-08'
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'full-time',
    description: 'Create intuitive and beautiful user experiences for our digital products.',
    requirements: [
      '3+ years of product design experience',
      'Proficiency in Figma and design systems',
      'Strong UX research skills',
      'Portfolio demonstrating design excellence'
    ],
    postedAt: '2024-01-05'
  },
  {
    title: 'Sales Engineer',
    department: 'Sales',
    location: 'San Francisco, CA',
    type: 'full-time',
    description: 'Bridge the gap between technical solutions and client needs.',
    requirements: [
      '2+ years of technical sales experience',
      'Strong technical background',
      'Excellent communication skills',
      'Experience with enterprise software'
    ],
    postedAt: '2024-01-03'
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'full-time',
    description: 'Drive growth through strategic marketing initiatives and campaigns.',
    requirements: [
      '4+ years of marketing experience',
      'Experience with digital marketing channels',
      'Strong analytical and creative skills',
      'B2B marketing experience preferred'
    ],
    postedAt: '2024-01-01'
  }
]

export function JobListings() {
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
            Open <span className="text-gradient">Positions</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            Explore our current job openings and find the perfect role to advance your career 
            in technology.
          </p>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-hover p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type.replace('-', ' ').toUpperCase()}
                          </span>
                          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                            {job.department}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-secondary-600 mb-6">
                      {job.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-3">Key Requirements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {job.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-secondary-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:ml-8 lg:text-right">
                    <div className="text-sm text-secondary-500 mb-4">
                      Posted {new Date(job.postedAt).toLocaleDateString()}
                    </div>
                    <button className="btn-primary group-hover:bg-primary-700 transition-colors duration-200">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
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
          <div className="bg-gradient-soft rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Don&apos;t See the Right Role?
            </h3>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume 
              and let us know how you&apos;d like to contribute to our team.
            </p>
            <button className="btn-secondary text-lg px-8 py-4">
              Send Your Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
