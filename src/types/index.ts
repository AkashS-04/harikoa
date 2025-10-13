export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  href: string
}

export interface Sector {
  id: string
  name: string
  description: string
  image: string
  technologies: string[]
  href: string
}

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  description: string
  requirements: string[]
  benefits: string[]
  postedAt: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  website: string
  description: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export interface ContactForm {
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
  service: string
}

export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  founded: string
  employees: string
  headquarters: string
  website: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  social: {
    linkedin: string
    twitter: string
    facebook: string
    instagram: string
  }
}
