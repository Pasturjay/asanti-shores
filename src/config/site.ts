export const siteConfig = {
  name: "Asanti Shores Limited",
  legalName: "ASANTI SHORES LIMITED",
  rcNumber: "2018901",
  tin: "31273907-0001",
  incorporationDate: "January 12, 2023",
  country: "Nigeria",
  tagline: "Your Trusted Partner in Maritime Operations",
  description:
    "Marine services, vessel support, equipment supply, and logistics solutions for shipping companies, vessel operators, and offshore energy industries.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://asantishores.com",
  
  // Contact details (Configurable via environment variables)
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "operations@asantishores.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+234 803 300 1234",
    phoneDisplay: "+234 (0) 803 300 1234",
    address: {
      street: "Shop 04, Prowa International Shopping Complex, Opp. Kirikiri Police Station",
      town: "Kirikiri Town",
      city: "Lagos",
      state: "Lagos State",
      country: "Nigeria",
      full: "Shop 04, Prowa International Shopping Complex, Opp. Kirikiri Police Station, Kirikiri Town, Lagos, Nigeria",
      siteAddress: "Defense Jetty, Marina, Lagos State, Nigeria",
    },
    operatingHours: "Monday – Saturday: 08:00 – 18:00 (24/7 On-Call Marine Coordination)",
    whatsapp: {
      enabled: true,
      number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348033001234",
      defaultMessage: "Hello Asanti Shores, I would like to make an enquiry regarding marine services.",
    },
  },

  // Operational Coverage & Supported Ports in Nigeria
  operationalHubs: [
    { name: "Defense Jetty, Marina", state: "Lagos (Operations Base)" },
    { name: "Lagos Port Complex (Apapa)", state: "Lagos" },
    { name: "Tin Can Island Port", state: "Lagos" },
    { name: "Kirikiri Lighter Terminal", state: "Lagos" },
    { name: "Onne Port & Oil/Gas Free Zone", state: "Rivers" },
    { name: "Port Harcourt Commercial Port", state: "Rivers" },
    { name: "Warri Port Complex", state: "Delta" },
    { name: "Calabar Port", state: "Cross River" },
    { name: "Offshore Gulf of Guinea Terminals", state: "Offshore" },
  ],

  // Primary customer segments
  targetIndustries: [
    {
      title: "Shipping Companies & Liners",
      description: "Dedicated husbanding, chandling, fresh water, and bunkering coordination for international commercial vessels calling Nigerian coastal waters.",
      icon: "Ship",
    },
    {
      title: "Oil & Gas Operators",
      description: "Offshore support, service boats, safety logistics, and technical supplies supporting exploration, production, and terminal operations.",
      icon: "Flame",
    },
    {
      title: "Vessel Owners & Charterers",
      description: "Comprehensive ship management, certified crew coordination, maintenance support, and port turnaround expediting.",
      icon: "Anchor",
    },
    {
      title: "Marine Contractors",
      description: "Heavy-duty barge hire, harbor and coastal tugboat charter, marine equipment provisioning, and underwater inspection support.",
      icon: "Wrench",
    },
  ],

  // Core pillars / Why Choose Us
  benefits: [
    {
      title: "Reliable Coordination",
      description:
        "Disciplined local execution across Nigerian ports, ensuring timely turnaround, streamlined permits, and transparent vendor coordination.",
      icon: "Clock",
    },
    {
      title: "Safety-Conscious Operations",
      description:
        "Commitment to international maritime safety standards, personnel PPE requirements, and strict environmental stewardship during all operations.",
      icon: "ShieldCheck",
    },
    {
      title: "Responsive Communication",
      description:
        "Direct operational point-of-contact with 24/7 liaison for vessel masters, fleet managers, and procurement officers navigating Nigerian waters.",
      icon: "Headphones",
    },
    {
      title: "Integrated Marine Support",
      description:
        "One-stop maritime capability combining provision supply, technical chandling, certified vessel hire, and offshore logistics.",
      icon: "Layers",
    },
  ],

  // Corporate Profile Download
  // When an official reviewed PDF is in place, set hasProfilePdf to true
  downloads: {
    hasProfilePdf: true,
    profilePdfUrl: "/downloads/asanti-shores-company-profile.pdf",
    profilePdfTitle: "Asanti Shores Corporate Profile (PDF)",
  },

  // Navigation Links
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "Ship & Crew Management",
          href: "/services/ship-crew-management",
          description: "Technical oversight, certified crewing, and regulatory compliance.",
        },
        {
          label: "Ship Chandling",
          href: "/services/ship-chandling",
          description: "Bonded stores, fresh provisions, deck and engine supplies.",
        },
        {
          label: "Marine Equipment Sales & Supply",
          href: "/services/marine-equipment-supply",
          description: "Certified safety gear, deck machinery, valves, and spares.",
        },
        {
          label: "Bunker Supply & Fresh Water",
          href: "/services/bunker-fresh-water-supply",
          description: "Quality MGO/VLSFO bunkering coordination and potable water.",
        },
        {
          label: "Underwater Services",
          href: "/services/underwater-services",
          description: "Hull cleaning, diver inspections, propeller polishing, and surveys.",
        },
        {
          label: "Tugboats & Barges Hire",
          href: "/services/tugboats-barges-hire",
          description: "Harbor/ocean towage, ramp barges, and deck cargo platforms.",
        },
        {
          label: "Service Boats Hire & Logistics",
          href: "/services/service-boats-logistics",
          description: "Crew transfer vessels, security escorts, and offshore dispatch.",
        },
      ],
    },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Safety & Compliance", href: "/safety-compliance" },
    { label: "Contact Us", href: "/contact" },
  ],
};
