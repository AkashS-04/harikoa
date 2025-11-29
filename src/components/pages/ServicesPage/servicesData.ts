import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Scale, 
  FileText,
  Briefcase,
  BarChart,
  Heart,
  LucideIcon
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  features: string[]
}

export const services: Service[] = [
  {
    id: 'finance-operations',
    title: 'Finance Operations',
    tagline: 'Reliable, Compliant, Scalable',
    description: 'Robust finance operations are critical for scale and investor confidence. We bring structure, discipline, and control to your day-to-day finance function—so you can make decisions backed by accurate data, manage cash effectively, and stay compliant without surprises.',
    icon: Calculator,
    features: [
      'Setup and Management',
      'Book keeping and Reconciliations',
      'Month end close and reporting',
      'Salary structuring for optimal tax savings within the legal framework',
      'Process and run payroll',
      'Timely filing of GST, TDS, PF/ESIC, and other statutory returns',
      'Compliance calendar management',
      'Audit coordination and documentation support'
    ]
  },
  {
    id: 'revenue-operations',
    title: 'Revenue Operations',
    tagline: 'Structure, Strategy, Success',
    description: 'A strong sales engine powered by a stronger Sales Operations is the foundation of a scalable business. We help redefine sales operations by optimizing team performance, develop pricing strategies, and integrating technology. This enhances revenue predictability and drives efficiency thereby profitability and gives runway visibility and improvement.',
    icon: TrendingUp,
    features: [
      'Sales Compensation Structuring',
      'Incentive Policy Development',
      'Performance Tracking & Analytics',
      'Pipeline Management',
      'Booking, Billing & Collection',
      'Receivables Management',
      'Sales Forecasting & Monitoring',
      'Strategic Pricing',
      'Partner / Distributor Pricing',
      'Profitability Tracking'
    ]
  },
  {
    id: 'startup-cfo',
    title: 'Startup CFO Services',
    tagline: 'Clarity, Integrity, Investor-ready',
    description: 'Startups thrive on speed—but sustainable growth demands financial clarity. With deep experience supporting founders across sectors, we step in as your strategic finance partner. From setting up systems and managing cash flow to preparing for investor conversations, our Startup CFO services enable confident, data-driven decisions from day one.',
    icon: Users,
    features: [
      'Finance Ops: Ownership of all day-to-day finance tasks',
      'Accounting setup, policies, and compliance hygiene',
      'Cash flow, burn rate, and working capital management',
      'Scalable systems: Invoicing, payroll & automation tools',
      'Budgeting, forecasting & financial modeling',
      'MIS packs, board decks & investor presentations',
      'Due diligence preparation and data room management',
      'Support in fundraising (equity/debt) and valuations',
      'Unit economics, CAC/LTV, pricing and margin analysis',
      'KPI dashboards aligned to traction and goals',
      'Internal controls & governance frameworks',
      'GST, TDS, ROC filings, and Companies Act compliance',
      'Audit coordination & risk review',
      'Policy frameworks for spending, approvals, and reporting'
    ]
  },
  {
    id: 'legal-services',
    title: 'Legal Services',
    tagline: 'Startup-Focused. Risk-Aware. Execution-Ready.',
    description: 'We support early-stage and scaling startups with practical legal solutions that align with business goals, manage risk, and ensure investor and regulatory confidence. From founder agreements to funding rounds, we bring structure where it matters most.',
    icon: Scale,
    features: [
      'Founders agreement and equity structuring',
      'Shareholder agreements (SHA)',
      'ESOP documentation',
      'Exit terms, vesting clauses, and rights management',
      'Drafting and reviewing vendor, client contracts',
      'Employment, consulting, and NDAs tailored for startups',
      'Risk allocation and enforceability guidance',
      'Contracts & Commercial Agreements',
    ]
  },
  { 
    id: 'company-secretarial',
    title: 'Company Secretarial',
    tagline: 'Compliant. Structured. Investor-Ready.',
    description: 'Strong governance starts with clean secretarial practices. We help you from structuring your business entity, incorporation of your Company and ensure you stay fully compliant with Companies Act, 2013. From routine filings to board governance and fundraising compliance, we ensure your legal backbone is always in place and due diligence-ready.',
    icon: FileText,
    features: [
      'Advise on the appropriate legal structure',
      'Incorporation of Company / LLP / Partnership',
      'Post incorporation compliance',
      'ROC filings, board resolutions, and secretarial support',
      'Compliance under the Companies Act, 2013',
      'Guidance on board composition, governance frameworks',
      'Event based compliances'
    ]
  },
  {
    id: 'financial-advisory',
    title: 'Financial Advisory Services',
    tagline: 'Clarity, Credibility, Confidence',
    description: 'Helping businesses make sound, strategic, and forward-looking financial decisions. Our focus is on clarity, credibility, and confidence — across every stage of growth. We focus on three key areas where clarity and expertise matter most:',
    icon: Briefcase,
    features: [
      'Valuation Services: Independent, data-driven valuations for mergers, acquisitions, and funding discussions.',
      'Fund Raising: End-to-end support from financial story refinement to deal structuring and capital securing.',
      'Due Diligence: Comprehensive assessment of financial health, operations, and compliance to uncover opportunities and risks.'
    ]
  },
  {
    id: 'business-analytics',
    title: 'Business Analytics Services',
    tagline: 'Turning Questions into Data-Driven Clarity',
    description: 'Why are profits not rising despite higher sales? Are we pricing right, spending right, and hiring at the right time? At Harikoa Consulting, our Business Analytics Practice turns such everyday questions into data-driven clarity. We help businesses uncover insights that improve profitability, strengthen decision-making, and bring foresight to growth.',
    icon: BarChart,
    features: [
      'Pricing & Profitability Analytics: Identify profit leaks, understand true cost-to-serve, evaluate pricing models and contribution margins.',
      'Customer Analytics: Segment customers by profitability and lifetime value, uncover behavior trends, and design strategies to improve loyalty.',
      'Treasury Analytics: Gain visibility into cash flows and working capital, identify funding gaps, and build real-time treasury dashboards.',
      'People Analytics: Understand workforce productivity, forecast hiring needs, and connect people metrics with business outcomes.'
    ]
  },
  {
    id: 'taxation-services',
    title: 'Taxation Services',
    tagline: 'Clarity and Confidence in Tax Compliance',
    description: 'At Harikoa, we help businesses navigate the evolving tax landscape with clarity and confidence. Our Taxation Practice offers expert support across Income Tax, GST, and International Tax, blending technical precision with a practical, business-first approach.',
    icon: FileText,
    features: [
      'Income Tax: Comprehensive planning and compliance, tax return filing, TDS reconciliations, and representation before authorities.',
      'GST: End-to-end compliance including registration, returns, reconciliations, advisory on input credit, and audit assistance.',
      'International Taxation: Advisory on cross-border transactions, transfer pricing, DTAA, and structuring inbound/outbound investments.',
      'Corporate & Transactional Tax: Tax due diligence for M&A, transaction impact analysis, and advisory on indirect tax implications and MAT.'
    ]
  },
  {
    id: 'not-for-profit',
    title: 'Not for Profit Services',
    tagline: 'Bringing Trust to the Impact Created',
    description: 'Purpose-led organizations carry a responsibility that goes beyond performance—they carry trust. At Harikoa, we partner with non-profits, NGOs, trusts, and social enterprises to help them stay compliant, accountable, and financially sustainable. Our approach combines professional rigour with empathy for the unique challenges that the development sector faces. We understand that in the not-for-profit world, every rupee, every report, and every regulation matters. Our role is to ensure your organization remains transparent, audit-ready, and positioned for long-term impact.',
    icon: Heart,
    features: [
      'Registrations & Statutory Compliance: End-to-end support for Trust, Society, or Section 8 Company registration, 12A and 80G registrations and renewals, FCRA registration and compliance, and ongoing annual returns and ROC filings.',
      'Financial Management & Reporting: Customized accounting frameworks for donor and project-based reporting, budgeting and fund allocation tracking, preparation of financial statements and donor reports, and internal controls for fund flow and expense management.',
      'Audit & Assurance Support: Preparation and documentation for statutory, internal, and donor audits, review of accounting records and fund utilization statements, coordination with auditors and resolution of audit observations, and periodic internal review mechanisms.',
      'Governance & Capacity Building: Structuring boards and committees for clarity of roles, drafting policies for finance, procurement, HR, and conflict of interest, training for trustees and finance teams on compliance best practices, and setting up MIS and dashboards for effective monitoring.'
    ]
  }
]

