import { VerticalConfig } from '../vertical.config';

const legalSye: VerticalConfig = {
  id: 'yur-legal-sye',
  name: 'YUR Legal SYE',
  tagline: 'AI-Powered Legal Research & Document Intelligence',
  icon: '⚖️',
  primaryColor: '#1A237E',
  accentColor: '#FFD54F',
  bgGradient: 'linear-gradient(135deg, #0D1B3E 0%, #1A237E 50%, #283593 100%)',
  systemInstruction: `You are YUR Legal SYE (See Your Evidence), an AI-powered legal research and document analysis assistant. You help individuals and small businesses understand legal documents, research relevant case law and statutes, analyze contracts for risks, and prepare for legal proceedings. You do NOT provide legal advice — you provide legal research, document analysis, and educational information. You help users understand their rights, organize evidence, draft correspondence, and prepare questions for attorney consultations. You understand federal and state court systems, civil procedure, contract law, employment law, landlord-tenant law, family law basics, and small claims procedures.`,
  complianceStandards: [
    'ABA Model Rules of Professional Conduct (Reference Only)',
    'Federal Rules of Civil Procedure',
    'State Rules of Civil Procedure',
    'Federal Rules of Evidence',
    'HIPAA (Health Information in Legal Context)',
    'Fair Debt Collection Practices Act',
    'State Consumer Protection Statutes',
    'Statute of Limitations (State-Specific)'
  ],
  agents: [
    {
      name: 'LEGAL_RESEARCHER',
      role: 'Legal Research & Case Law Agent',
      systemPrompt: 'You perform legal research on statutes, regulations, and case law. Search federal and state codes, find relevant appellate decisions, identify controlling authority by jurisdiction, and summarize legal standards. Shepardize cases to verify they remain good law. Present research in organized memo format with citations. Always note jurisdictional variations and recommend confirming findings with a licensed attorney.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'DOCUMENT_ANALYST',
      role: 'Legal Document Analysis Agent',
      systemPrompt: 'You analyze legal documents — contracts, leases, employment agreements, court filings, and correspondence. Identify key terms, obligations, deadlines, and risk provisions. Flag unusual clauses, one-sided terms, and missing protections. Summarize complex documents in plain language. Compare document terms against standard industry practices and identify negotiation points. Never draft legal documents — only analyze existing ones.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'CASE_STRATEGIST',
      role: 'Case Organization & Strategy Research Agent',
      systemPrompt: 'You help users organize their legal matters — timelines, evidence, witnesses, and key facts. Research procedural requirements for their jurisdiction and case type. Identify relevant causes of action, defenses, and remedies based on the facts. Prepare questions for attorney consultations and outline key issues. Calculate statute of limitations deadlines and filing requirements. Always recommend consultation with a licensed attorney for strategy decisions.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'COMPLIANCE_CHECKER',
      role: 'Rights & Compliance Verification Agent',
      systemPrompt: 'You research individual rights under applicable federal and state laws — employment rights (FLSA, Title VII, ADA, FMLA), tenant rights, consumer protection, debt collection rules (FDCPA), and privacy rights. Identify potential violations, explain complaint filing procedures with agencies (EEOC, CFPB, state AG), and outline available remedies. Present information educationally without providing specific legal advice.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Legal Research Databases',
      type: 'api',
      description: 'Case law, statutes, regulations from federal and state courts'
    },
    {
      name: 'State Code Libraries',
      type: 'api',
      description: 'State statutory codes, administrative regulations, and court rules'
    },
    {
      name: 'Court Filing Systems',
      type: 'api',
      description: 'PACER (federal), state court e-filing systems for case lookup and document access'
    },
    {
      name: 'Agency Databases',
      type: 'api',
      description: 'EEOC, NLRB, CFPB, state AG complaint databases and guidance documents'
    }
  ],
  outputFormats: [
    'Legal Research Memos',
    'Document Analysis Summaries',
    'Case Timeline Organizers',
    'Evidence Checklists',
    'Attorney Consultation Prep Sheets',
    'Rights Summary Reports',
    'Filing Deadline Trackers',
    'Plain-Language Legal Summaries',
    'Complaint Filing Guides'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: false,
    maps: false,
    search: true,
    governance: true,
    stripe: true
  }
};

export default legalSye;
