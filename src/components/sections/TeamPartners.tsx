'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Prahlad R',
    title: 'Partner',
    qualifications: 'FCA, MBA, Registered Valuer – Securities, CISA (USA)',
    description: 'Prahlad is a Chartered Accountant with more than 27 years of post-qualification experience in industry and consulting. Prior to starting his own practice, Prahlad was working with Infosys Group where he was one of the founding members of the Software Product Subsidiary and help setup its systems and processes including business analytics. He was also a domain expert for GST implementation for Government of India.',
    experience: 'Prior to Infosys, Prahlad was with Deloitte Consulting where he led large, complex and first of its kind engagements in the Country. He has also worked at large Corporates including TVS, Ramco Systems and Dell Perot Systems in their Finance Function.',
    industries: 'He has cross industry experience and has worked with Technology, Auto, Utilities, Governments and Multilateral Funding Institutions like ADB, World Bank.',
    specializations: 'Prahlad specializes in Finance Strategy, Enterprise Valuation, Finance Transformation, Business Analytics, Business Planning and Operations management.',
    image: '/api/placeholder/300/300'
  },
  {
    id: 2,
    name: 'Swapna Kulkarni Prahlad',
    title: 'Partner',
    qualifications: 'B.Com, FCA',
    description: 'Swapna is a Chartered Accountant with over 18 years of post qualification experience. She has also completed Certificate Courses in Intellectual Property Laws and FEMA from ICAI.',
    experience: 'She has been in practice for the past nine years and counts some of the most promising and funded startups in her clientele.',
    background: 'Prior to this, she was managing the operations of a mutual fund house at Mumbai. She led the team that carried out customized research and analysis of financial information, investment analysis, risk analysis and portfolio administrative services.',
    specializations: 'Swapna specializes in Accounting Advisory, Income Tax, GST and Finance Operations.',
    image: '/api/placeholder/300/300'
  },
  {
    id: 3,
    name: 'Ram',
    title: 'Senior Advisor',
    qualifications: 'CA, CFA',
    description: 'Ram brings over 20 years of experience in financial advisory and investment banking. He has worked with leading financial institutions and has extensive experience in capital markets and corporate finance.',
    experience: 'Previously worked with top-tier investment banks and has been instrumental in raising over $500M in capital for various companies across different sectors.',
    background: 'Ram has a strong track record in M&A transactions, IPO advisory, and strategic financial planning for mid to large-scale enterprises.',
    specializations: 'Ram specializes in Capital Markets, M&A Advisory, Corporate Finance, and Strategic Planning.',
    image: '/api/placeholder/300/300'
  },
  {
    id: 4,
    name: 'Namrata',
    title: 'Senior Advisor',
    qualifications: 'CA, MBA Finance',
    description: 'Namrata is a seasoned finance professional with over 15 years of experience in financial planning and analysis. She has worked with both startups and established corporations.',
    experience: 'She has extensive experience in financial modeling, budgeting, and forecasting. Namrata has helped numerous companies optimize their financial processes and improve profitability.',
    background: 'Prior to joining as an advisor, Namrata worked with leading consulting firms and has been involved in financial transformation projects for Fortune 500 companies.',
    specializations: 'Namrata specializes in Financial Planning & Analysis, Budgeting & Forecasting, Financial Modeling, and Process Optimization.',
    image: '/api/placeholder/300/300'
  }
]

export function TeamPartners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate cards
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    setIsAutoPlaying(false)
  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
    setIsAutoPlaying(false)
  }

  const goToCard = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="team" ref={ref} className="py-8 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3 font-montserrat">
            Team of <span className="text-gradient">Partners & Advisors</span>
          </h2>
          <p className="text-base text-secondary-600 max-w-xl mx-auto font-roboto">
            Meet our experienced team of financial experts.
          </p>
        </motion.div>

        {/* Moving Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-primary-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              {/* Content Section */}
              <div className="p-4 lg:p-6 flex flex-col justify-center">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3"
                >
                  {/* Name and Title */}
                  <div className="bg-primary-950 text-white px-3 py-2 rounded-lg">
                    <h3 className="text-xl font-bold font-montserrat mb-0.5 text-white">
                      {teamMembers[currentIndex].name}
                    </h3>
                    <p className="text-base font-semibold text-primary-200 font-montserrat">
                      {teamMembers[currentIndex].title}
                    </p>
                    <p className="text-sm text-primary-300 font-roboto">
                      {teamMembers[currentIndex].qualifications}
                    </p>
                  </div>

                  {/* Compact Description */}
                  <div className="space-y-2">
                    <p className="text-sm text-secondary-700 leading-relaxed font-roboto">
                      {teamMembers[currentIndex].description}
                    </p>
                    
                    {/* Key Experience Points */}
                    <div className="grid grid-cols-1 gap-1">
                      {teamMembers[currentIndex].experience && (
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-1.5"></div>
                          <p className="text-sm text-secondary-700 font-roboto">
                            {teamMembers[currentIndex].experience}
                          </p>
                        </div>
                      )}
                      
                      {teamMembers[currentIndex].background && (
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent-600 rounded-full flex-shrink-0 mt-1.5"></div>
                          <p className="text-sm text-secondary-700 font-roboto">
                            {teamMembers[currentIndex].background}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Specializations - Compact */}
                    <div className="bg-accent-50 p-2 rounded-lg">
                      <p className="text-accent-950 font-semibold font-montserrat mb-1 text-sm">Key Expertise:</p>
                      <p className="text-accent-800 font-roboto text-sm">
                        {teamMembers[currentIndex].specializations}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center p-4">
                <motion.div
                  key={`image-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-36 h-36 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary-950 font-montserrat">
                        {teamMembers[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-4 space-x-3">
            <button
              onClick={prevCard}
              className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronLeft className="w-5 h-5 text-primary-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-600 scale-125'
                      : 'bg-primary-300 hover:bg-primary-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronRight className="w-5 h-5 text-primary-600" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
