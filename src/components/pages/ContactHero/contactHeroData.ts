import { Mail, Phone, MapPin, Clock, LucideIcon } from 'lucide-react'

export interface ContactMethod {
  icon: LucideIcon
  title: string
  value: string
  description: string
}

export const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@harikoa.com',
    description: 'Send us an email and we\'ll respond within 24 hours'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    description: 'Speak directly with our team during business hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'San Francisco, CA',
    description: 'Come meet us at our headquarters'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri, 9AM - 6PM',
    description: 'We\'re available Monday through Friday'
  }
]

