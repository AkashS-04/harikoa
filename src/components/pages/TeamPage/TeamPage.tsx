'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { teamMembers } from '@/components/sections/TeamPartners/teamMembersData'
import Image from 'next/image'

export function TeamPageContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 font-montserrat">
              Team of <span className="text-gradient">Partners & Advisors</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto font-roboto">
              Meet our experienced team of financial experts.
            </p>
          </div>

          {/* Team Members List */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 px-4">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0
              const ImageColumn = (
                <div className={`w-full md:w-1/3 lg:w-2/5 flex-shrink-0 mb-6 md:mb-0 ${isEven ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                  <div className="relative w-full aspect-[3/4] max-w-xs sm:max-w-sm mx-auto md:mx-0">
                    {member.image && member.image !== '/api/placeholder/300/300' ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center rounded-lg"
                        onError={(e) => {
                          // Fallback to initial if image fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            const fallback = document.createElement('div')
                            fallback.className = 'w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center'
                            fallback.innerHTML = `<span class="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-950 font-montserrat">${member.name.charAt(0)}</span>`
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-950 font-montserrat">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )

              const TextColumn = (
                <div className={`w-full md:w-2/3 lg:w-3/5 flex-1 ${isEven ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}>
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    {/* Name */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900 font-montserrat leading-tight">
                      {member.name}
                    </h2>

                    {/* Qualifications */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-700 font-roboto">
                      {member.qualifications}
                    </p>

                    {/* Description */}
                    <div className="space-y-3 sm:space-y-4 pt-2">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary-700 leading-relaxed font-roboto">
                        {member.description}
                      </p>

                      {/* Experience */}
                      {member.experience && (
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary-700 leading-relaxed font-roboto">
                          {member.experience}
                        </p>
                      )}

                      {/* Background */}
                      {member.background && (
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary-700 leading-relaxed font-roboto">
                          {member.background}
                        </p>
                      )}

                      {/* Specializations */}
                      {member.specializations && (
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary-700 leading-relaxed font-roboto">
                          <span className="font-semibold text-primary-950">{member.name.split(' ')[0]} specializes in</span> {member.specializations}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16"
                >
                  {ImageColumn}
                  {TextColumn}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

