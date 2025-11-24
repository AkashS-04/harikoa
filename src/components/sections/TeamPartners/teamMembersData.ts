export interface TeamMember {
  id: number
  name: string
  title: string
  qualifications: string
  description: string
  experience: string
  industries?: string
  background?: string
  specializations: string
  image: string
}

export const teamMembers: TeamMember[] = [
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
    name: 'Namrata Bang',
    title: 'Company Secretary',
    qualifications: 'B.Com, ACS',
    description: 'Namrata is a Qualified Company Secretary and Commerce Graduate, holding a Post Graduate Diploma in Finance, with strong knowledge and practical experience in Company Law and Corporate Legal Compliances. Proficient in handling a wide range of matters including Corporate Laws, IPO processes, Due Diligence, Legal Drafting, FEMA Compliances, and Trademark Registrations.',
    experience: 'She demonstrates expertise in ensuring statutory and regulatory compliance, while providing strategic advisory on corporate governance frameworks. Known for a detail-oriented approach, strong analytical skills, and the ability to manage complex corporate transactions efficiently and effectively.',
    background: '',
    specializations: 'Namrata specializes in Corporate Laws, IPO Processes, Due Diligence, Legal Drafting, FEMA Compliances, Trademark Registrations, Statutory & Regulatory Compliance, and Corporate Governance Frameworks.',
    image: '/api/placeholder/300/300'
  }
]

