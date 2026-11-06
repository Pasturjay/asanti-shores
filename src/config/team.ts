export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  alt: string;
  bio: string;
  credentials?: string[];
  isLeadership?: boolean;
}

export interface TeamGroupPhoto {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

export const teamData = {
  executiveLeadership: [
    {
      id: "md-executive",
      name: "Managing Director & Chief Executive",
      role: "Managing Director / Head of Marine Operations",
      department: "Executive Management & Operations",
      image: "/images/team/team-3.png",
      alt: "Asanti Shores Limited Managing Director and Operations Executives at corporate facility entrance",
      bio: "Provides strategic leadership, executive oversight, and direct field coordination across all maritime support contracts, vessel husbanding operations, and offshore supply logistics in Nigerian waters.",
      credentials: [
        "Executive Maritime Operations & Strategy",
        "Direct Harbor & Offshore Field Supervision",
        "NIMASA & Port Authority Liaison Command",
        "HSE Protocol & Zero-Incident Leadership",
      ],
      isLeadership: true,
    },
  ],
  operationalCrew: [
    {
      id: "ops-supervisor",
      name: "Operations Supervisor",
      role: "Marine Logistics & Fleet Operations Lead",
      department: "Harbor Logistics & Tugboat Dispatch",
      image: "/images/team/team-8.png",
      alt: "Asanti Shores Limited Operations Supervisor in branded high-visibility safety vest and hardhat",
      bio: "Coordinates daily tugboat assignments, cargo barge movements, berth schedules, and channel navigation logistics across Lagos, Onne, and Delta ports.",
      credentials: ["Harbor Towage Liaison", "Deck Cargo Logistics", "24/7 Operations Desk"],
    },
    {
      id: "hse-coordinator",
      name: "HSE Compliance Officer",
      role: "Field Safety & Regulatory Compliance Coordinator",
      department: "Health, Safety & Environment (HSE)",
      image: "/images/team/team-4.png",
      alt: "Asanti Shores Limited HSE Officer in full personal protective equipment (PPE) and impact hardhat",
      bio: "Enforces mandatory 100% PPE adherence, conducts pre-task risk assessments, and oversees statutory compliance with NIMASA and IMO ISM/ISPS frameworks.",
      credentials: ["Certified Safety Lead", "Risk Assessment Supervision", "Stop Work Authority"],
    },
    {
      id: "tech-superintendent",
      name: "Technical Superintendent",
      role: "Subsea Diving & Marine Engineering Lead",
      department: "Technical Services & Subsea Works",
      image: "/images/team/team-6.png",
      alt: "Asanti Shores Limited Technical Superintendent in branded company safety gear",
      bio: "Directs commercial diving teams, in-water surveys (IWS), hull maintenance, propeller polishing, and passenger ferry repair operations.",
      credentials: ["Subsea Diving Spreads", "Hull Maintenance Oversight", "Class Inspection Liaison"],
    },
    {
      id: "port-liaison",
      name: "Port Husbandry Liaison",
      role: "Port Clearance & Vessel Husbandry Officer",
      department: "Vessel Husbanding & Documentation",
      image: "/images/team/team-7.png",
      alt: "Asanti Shores Limited Port Liaison Officer in company safety vest",
      bio: "Manages customs, immigration, port health, and NPA documentation for calling commercial vessels, ensuring expedited turnaround and berth clearance.",
      credentials: ["Statutory Port Clearance", "STCW Crew Transfer", "Immigration & Customs Desk"],
    },
    {
      id: "chandling-officer",
      name: "Chandling & Supply Lead",
      role: "Marine Chandling & Provisions Coordinator",
      department: "Procurement & Offshore Supply",
      image: "/images/team/team-9.png",
      alt: "Asanti Shores Limited Chandling & Supply Coordinator in branded PPE",
      bio: "Supervises procurement, cold-chain logistics, fresh food provisioning, bonded stores, and certified technical marine equipment deliveries directly to vessel decks.",
      credentials: ["ISSA / IMPA Standard Fulfillment", "Bunker Coordination", "Potable Water Supply"],
    },
  ],
  groupGalleries: [
    {
      id: "group-full-crew",
      title: "Asanti Shores Limited Operational Team & Field Crew",
      caption:
        "The Managing Director and operations personnel in official Asanti Shores Limited branded safety vests and helmets, demonstrating company pride and unity.",
      image: "/images/team/team-1.png",
      alt: "Asanti Shores Limited Managing Director and staff group photo in branded safety vests and hardhats in front of corporate event banner",
    },
    {
      id: "group-deployment",
      title: "Field Deployment & Jet-Ready Technical Crew",
      caption:
        "On-site operational staff equipped with standard-issue high-vis gear, ready for rapid mobilization across Lagos ports and offshore jetties.",
      image: "/images/team/team-5.png",
      alt: "Asanti Shores Limited field technical personnel in company work clothes and safety equipment",
    },
    {
      id: "group-operations-review",
      title: "Marine Operations Review & Technical Briefing",
      caption:
        "Operational team members aligned on project deliverables, safety standards, and vessel schedule execution.",
      image: "/images/team/team-2.png",
      alt: "Asanti Shores Limited team members in branded safety work clothes",
    },
  ],
};
