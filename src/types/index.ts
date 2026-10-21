export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  image: string;
  altText: string;
  overview: string[];
  scopeOfWork: string[];
  capabilities: string[];
  customerRequirements: string[];
  operationalCoverage: string;
  equipmentStandards: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    slug: string;
    description: string;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  serviceRequired: string;
  vesselOrProjectName: string;
  portLocation: string;
  requestedDate: string;
  technicalSpecs: string;
  message: string;
  attachmentName?: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  subject: string;
  message: string;
}
