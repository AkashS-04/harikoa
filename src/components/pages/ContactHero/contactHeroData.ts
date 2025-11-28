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
    value: 'hello@harikoa.in',
    description: 'Send us an email and we\'ll respond within 24 hours'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '88845 00434 / 9742402302',
    description: 'Speak directly with our team during business hours'
  },
  {
    icon: MapPin,
    title: 'Mumbai Office',
    value: '403, Surya Towers, Near Hyde Park Chitalsar, Manpada Thane West 400607',
    description: 'Come meet us at our Mumbai headquarters'
  },
  {
    icon: MapPin,
    title: 'Bangalore Office',
    value: 'Indiqube -Omega - Maruthi Emerald ITPL Main Road, Bangalore 560037',
    description: 'Visit our Bangalore office'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Monday - Friday\n10am to 7pm',
    description: 'We\'re available Monday through Friday'
  }
]

