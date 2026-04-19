export interface TeamMember {
  id: number
  name: string
  qualifications: string
  description: string
  experience?: string
  background?: string
  specializations: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Prahlad R',
    qualifications: 'FCA, MBA, Registered Valuer – Securities, CISA (USA)',
    description: 'Prahlad is a Chartered Accountant with over 25 years of experience in finance, advisory, strategy and technology-led transformation. He works closely with startups, not-for-profits, and established organisations, helping them build strong financial systems, strengthen compliance, design scalable processes and make informed strategic decisions. His areas of work include virtual CFO support, business planning, financial modelling, GST advisory, financial operations and governance.',
    experience: 'Alongside his entrepreneurial practice, Prahlad has held senior leadership roles at Infosys and EdgeVerve, where he contributed to the Government of India\'s landmark GST implementation and built the planning, analytics and governance frameworks for the software product business. His earlier tenure at Deloitte Consulting included leading several high-impact and first-of-their-kind transformation programmes across India and Nepal, including IFRS migration, public financial management reforms, finance process redesign and enterprise-wide systems implementation.',
    background: 'Prahlad is a CA, MBA, Certified Information Systems Auditor (CISA) and a Registered Valuer. Known for his structured thinking and ability to simplify complexity, he brings a thoughtful blend of consulting rigour, industry insight and entrepreneurial experience to every engagement.',
    specializations: 'virtual CFO support, business planning, financial modelling, GST advisory, financial operations and governance.',
    image: '/images/team/prahlad-r.jpg'
  },
  {
    id: 2,
    name: 'Swapna Kulkarni Prahlad',
    qualifications: 'B.Com, FCA',
    description: 'Swapna is a Chartered Accountant with over 18 years of post qualification experience. She has also completed Certificate Courses in Intellectual Property Laws and FEMA from ICAI.',
    experience: 'She has been in practice for the past nine years and counts some of the most promising and funded startups in her clientele. Prior to this, she was managing the operations of a mutual fund house at Mumbai. She led the team that carried out customized research and analysis of financial information, investment analysis, risk analysis and portfolio administrative services.',
    specializations: 'Accounting Advisory, Income Tax, GST and Finance Operations.',
    image: '/images/team/swapna-kulkarni-prahlad.jpg'
  },
]

