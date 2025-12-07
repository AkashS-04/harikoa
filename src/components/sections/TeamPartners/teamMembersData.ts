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
    id: 4,
    name: 'Ramakrishna Rao K S',
    qualifications: 'FCA, CMA (All India 8th Rank)',
    description: 'Ram is a highly accomplished finance leader with over 30 years of experience across manufacturing, NBFCs, start-ups, and multinational corporations. He is a qualified Chartered Accountant and Cost and Management Accountant (CMA) who secured an All-India 8th Rank in the CMA examinations. Ram has held senior roles in leading Indian and global organisations, including Tata International, TVS Group, Ashok Leyland (Automotive Infotronics), Murugappa Group, and international MNCs and joint ventures such as GMAC (General Motors USA), Continental GmbH (Germany), and Fosroc UK.',
    experience: 'His leadership background includes serving as CFO, Finance Controller, Head of Treasury, and Head of Merchant Banking. Ram has extensive experience in overseeing large-scale financial operations—including managing a treasury portfolio exceeding ₹1,500 crores. He is known for driving financial governance, improving profitability, and supporting organisations through expansion, restructuring, and strategic transformation.',
    specializations: 'start-up advisory, strategic financial planning, risk management, fund-raising, stakeholder engagement, forecasting, budgeting, variance analysis, capex monitoring, statutory compliance, cost control, product-level and factory-level profitability analysis, and credit and forex risk management. This combination of deep financial expertise, cross-sector exposure, and strategic insight positions him as a trusted advisor for organisations seeking strong financial leadership and operational excellence.',
    image: '/images/team/ramakrishna-rao-ks.jpg'
  },
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
  {
    id: 3,
    name: 'Namrata Bang',
    qualifications: 'B.Com, ACS',
    description: 'Namrata is a Qualified Company Secretary and Commerce Graduate, holding a Post Graduate Diploma in Finance, with strong knowledge and practical experience in Company Law and Corporate Legal Compliances. Proficient in handling a wide range of matters including Corporate Laws, IPO processes, Due Diligence, Legal Drafting, FEMA Compliances, and Trademark Registrations.',
    experience: 'She demonstrates expertise in ensuring statutory and regulatory compliance, while providing strategic advisory on corporate governance frameworks. Known for a detail-oriented approach, strong analytical skills, and the ability to manage complex corporate transactions efficiently and effectively.',
    specializations: 'Corporate Laws, IPO Processes, Due Diligence, Legal Drafting, FEMA Compliances, and Trademark Registrations.',
    image: '/images/team/namrata-bang.jpg'
  }
]

