import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join our team at Harikoa. We provide immense opportunities to employees across various industry verticals.',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">Careers</h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-roboto">
              At <span className="text-primary-600 font-semibold">Harikoa</span>, we bring together a team with over 70 years of combined experience in <span className="text-primary-600 font-semibold">financial services</span>, having worked with industry leaders like Infosys, Deloitte and Tata. As a new firm with deep expertise, we offer exciting opportunities to join a dynamic team that&apos;s building the future of financial solutions. We are looking for bright minds who want to be part of our growth journey.
            </p>
          </div>

          {/* Content with Image and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Team Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 relative">
                  {/* Central figure */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-600 rounded-full"></div>
                  {/* Surrounding figures */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-8 right-8 w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-8 right-12 w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-8 left-8 w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-8 left-12 w-8 h-8 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-lg shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Apply Now</h2>
              
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-roboto">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    MOBILE
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your mobile number"
                  />
                </div>


                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    UPLOAD RESUME
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                    />
                  </div>
                </div>

                {/* reCAPTCHA */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    name="recaptcha"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="recaptcha" className="text-sm text-gray-600">
                    I&apos;m not a robot
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}