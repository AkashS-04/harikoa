'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in technology consulting and digital transformation.',
    image: '/team/sarah.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Technology architect specializing in cloud solutions and AI implementation.',
    image: '/team/michael.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Creative director focused on user experience and digital product design.',
    image: '/team/emily.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'Full-stack developer with expertise in modern web technologies and frameworks.',
    image: '/team/david.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Lisa Wang',
    role: 'Data Scientist',
    bio: 'AI and machine learning expert with a passion for data-driven insights.',
    image: '/team/lisa.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'James Wilson',
    role: 'Project Manager',
    bio: 'Agile methodology expert ensuring successful project delivery and client satisfaction.',
    image: '/team/james.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
]

export function Team() {
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
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            Our diverse team of experts brings together decades of experience 
            in technology, design, and business strategy.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-hover p-8 text-center">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-600 font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-secondary-600 mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-secondary-400 hover:text-primary-600 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-secondary-400 hover:text-primary-600 transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-secondary-400 hover:text-primary-600 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-soft rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Join Our Team
            </h3>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion 
              for technology and innovation.
            </p>
            <a
              href="/careers"
              className="btn-primary text-lg px-8 py-4"
            >
              View Open Positions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
