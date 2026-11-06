export interface ProjectItem {
  id: string;
  title: string;
  category: "underwater" | "salvage" | "ferry-speedboats" | "tugs-barges" | "site-operations";
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  highlights: string[];
}

export const deliveredProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Marine Wreck Removal & Channel Clearing",
    category: "salvage",
    categoryLabel: "Marine Salvage & Wreck Removal",
    image: "/images/projects/project-1.png",
    location: "Lagos Coastal Waterways",
    description:
      "Controlled cutting, rigging, and heavy-duty crane removal of derelict steel vessel wreckage obstructing commercial navigation channels.",
    highlights: ["Channel obstruction clearing", "Controlled underwater cutting", "Crane barge lift coordination"],
  },
  {
    id: "proj-2",
    title: "Sub-Sea Diver Deployment & In-Water Inspection",
    category: "underwater",
    categoryLabel: "Underwater Services & Diving",
    image: "/images/projects/project-2.png",
    location: "Defense Jetty, Marina / Lagos Lagoon",
    description:
      "Class-certified commercial diving team mobilized for underwater hull survey, sea chest clearing, and structural assessment.",
    highlights: ["STCW/Class-certified divers", "Surface-supplied diving station", "Hull condition profiling"],
  },
  {
    id: "proj-3",
    title: "Harbor Tug & Cargo Deck Barge Operations",
    category: "tugs-barges",
    categoryLabel: "Tugboats & Barges Hire",
    image: "/images/projects/project-3.png",
    location: "Lagos Commercial Ports & Kirikiri Terminals",
    description:
      "Twin-screw harbor tug conducting coastal towage and cargo barge transport for industrial steel scrap and heavy equipment.",
    highlights: ["Harbor & coastal towage", "Heavy-duty ramp barge platform", "24/7 port maneuvering"],
  },
  {
    id: "proj-4",
    title: "Passenger Ferry & Speed Boat Refurbishment",
    category: "ferry-speedboats",
    categoryLabel: "Service Boats & Ferry Logistics",
    image: "/images/projects/project-4.png",
    location: "Marina Boatyard & Repair Jetty",
    description:
      "Comprehensive structural refurbishment, hull reinforcement, and propulsion servicing for commercial passenger craft and fast security escort boats.",
    highlights: ["Ferry hull overhaul", "Fiberglass/aluminum repairs", "High-speed engine tune-up"],
  },
  {
    id: "proj-5",
    title: "Sunken Hull Salvage & De-watering Operations",
    category: "salvage",
    categoryLabel: "Marine Salvage & Wreck Removal",
    image: "/images/projects/project-5.png",
    location: "Offshore Approach & Inland Waterways",
    description:
      "Emergency salvage, patching, and controlled refloating of partially submerged barge hull utilizing submersible dewatering pumps and flotation bags.",
    highlights: ["Rapid salvage dispatch", "Dewatering & patching", "Environmental containment"],
  },
  {
    id: "proj-6",
    title: "Commercial Vessel Hull Cleaning & Bio-fouling Removal",
    category: "underwater",
    categoryLabel: "Underwater Services & Diving",
    image: "/images/projects/project-6.png",
    location: "Lagos Anchorage / Quayside Berths",
    description:
      "Hydraulic rotary brush cleaning of marine growth, barnacles, and fouling on commercial merchant vessel hull plates to restore hydrodynamic efficiency.",
    highlights: ["Propeller polishing", "Sea chest cleaning", "Fuel efficiency restoration"],
  },
  {
    id: "proj-7",
    title: "Heavy Crane Barge Lightering & Marine Construction",
    category: "tugs-barges",
    categoryLabel: "Tugboats & Barges Hire",
    image: "/images/projects/project-7.png",
    location: "Lagos Harbor Marine Defense Site",
    description:
      "Deployment of heavy-lift crane barge for pile handling, quay reinforcement, and coastal maritime logistics.",
    highlights: ["Heavy-lift crane platform", "Quay stabilization", "Industrial cargo handling"],
  },
  {
    id: "proj-8",
    title: "Underwater Cutting & Burning of Subsea Steel Piles",
    category: "underwater",
    categoryLabel: "Underwater Services & Diving",
    image: "/images/projects/project-8.png",
    location: "Coastal Fairway Approach",
    description:
      "Specialized underwater oxy-arc cutting and burning operations performed by certified sub-sea welders on submerged piling structures.",
    highlights: ["Oxy-arc subsea cutting", "Underwater welding", "Hazard removal"],
  },
  {
    id: "proj-9",
    title: "High-Speed Crew Transfer Craft Mobilization",
    category: "ferry-speedboats",
    categoryLabel: "Service Boats & Ferry Logistics",
    image: "/images/projects/project-9.png",
    location: "Marina Jetty to Offshore Terminals",
    description:
      "Fast personnel transfer boat ready for dispatch, facilitating rapid crew rotations and superintendent transport across harbor anchorages.",
    highlights: ["Fast transit speed", "Safety gear & life vests", "Experienced coastal coxswains"],
  },
  {
    id: "proj-10",
    title: "Field Engineering Team & Operational Jetty Presence",
    category: "site-operations",
    categoryLabel: "Operational Sites & Bases",
    image: "/images/projects/project-10.png",
    location: "Defense Jetty, Marina / Kirikiri Town, Lagos",
    description:
      "Asanti Shores Limited operations management, diving supervisors, and field technicians on-site supervising marine logistics and equipment maintenance.",
    highlights: ["On-site marine supervision", "Direct vessel liaison", "24/7 emergency readiness"],
  },
  {
    id: "proj-11",
    title: "Deck Cargo Barge Transport of Industrial Scraps",
    category: "tugs-barges",
    categoryLabel: "Tugboats & Barges Hire",
    image: "/images/projects/project-11.png",
    location: "Lagos Lagoon to Kirikiri Lighter Terminal",
    description:
      "Safe maritime transit of high-tonnage scrap metal and salvaged structural steel aboard flat-deck barges with harbor tug escort.",
    highlights: ["DWT cargo capacity", "Towing hitch certification", "NPA pilotage compliance"],
  },
  {
    id: "proj-12",
    title: "Sub-Sea Diving Gear & Surface Air Supply Station",
    category: "underwater",
    categoryLabel: "Underwater Services & Diving",
    image: "/images/projects/project-12.png",
    location: "Lagos Operational Jetty",
    description:
      "Complete surface-supplied air diving panel, high-pressure dive compressors, safety bailouts, and communications for subsea interventions.",
    highlights: ["Commercial diving panel", "Dual diver air supply", "Underwater communication systems"],
  },
  {
    id: "proj-13",
    title: "Steel Hull Patching & Welded Marine Plate Renewal",
    category: "salvage",
    categoryLabel: "Marine Salvage & Wreck Removal",
    image: "/images/projects/project-13.png",
    location: "Slipway & Jetty Repair Berth",
    description:
      "Replacement and welding of corroded maritime steel hull plating, renewing watertight integrity for coastal service barges.",
    highlights: ["Certified plate welding", "Non-destructive testing", "Watertight integrity check"],
  },
  {
    id: "proj-14",
    title: "Passenger Waterbus & Ferry Mechanical Overhaul",
    category: "ferry-speedboats",
    categoryLabel: "Service Boats & Ferry Logistics",
    image: "/images/projects/project-14.png",
    location: "Marina Waterways",
    description:
      "Overhaul of inboard marine diesel engines, steering hydraulics, and passenger cabin seating on commercial commuter waterbus.",
    highlights: ["Engine overhaul", "Passenger safety compliance", "Hydraulic steering check"],
  },
  {
    id: "proj-15",
    title: "Harbor Tug Towage of Disabled Vessel to Berth",
    category: "tugs-barges",
    categoryLabel: "Tugboats & Barges Hire",
    image: "/images/projects/project-15.png",
    location: "Apapa / Tin Can Channel",
    description:
      "Assistance and stern towing of commercial vessel through restricted port channels to designated repair berth.",
    highlights: ["Precision ship handling", "High bollard pull", "Experienced harbor masters"],
  },
  {
    id: "proj-16",
    title: "Submerged Debris Removal & Marina Berth Dredging Assist",
    category: "underwater",
    categoryLabel: "Underwater Services & Diving",
    image: "/images/projects/project-16.png",
    location: "Defense Jetty, Marina",
    description:
      "Diver-assisted clearing of underwater cables, discarded metal, and hazardous debris obstructing vessel berthing draft.",
    highlights: ["Berth safety clearance", "Draft restoration", "Underwater debris rigging"],
  },
  {
    id: "proj-17",
    title: "Tugboat Fleet at Coastal Mooring & Standby",
    category: "tugs-barges",
    categoryLabel: "Tugboats & Barges Hire",
    image: "/images/projects/project-17.png",
    location: "Lagos Coastal Mooring",
    description:
      "Operational tugboat fleet stationed on active standby for oil terminal escort, barge movements, and emergency maritime assistance.",
    highlights: ["Standby towage readiness", "Twin-screw propulsion", "Offshore navigation equipment"],
  },
  {
    id: "proj-18",
    title: "Marine Salvage Rigging & Flotation Gear Prep",
    category: "salvage",
    categoryLabel: "Marine Salvage & Wreck Removal",
    image: "/images/projects/project-18.png",
    location: "Jetty Operations Base",
    description:
      "Rigging heavy steel grommets, shackles, and high-capacity synthetic slings for complex underwater lifting operations.",
    highlights: ["Proof-tested rigging gear", "Lifting beam setups", "Safe working load protocols"],
  },
  {
    id: "proj-19",
    title: "Crew Transfer Vessel Underway on Field Operations",
    category: "ferry-speedboats",
    categoryLabel: "Service Boats & Ferry Logistics",
    image: "/images/projects/project-9.png",
    location: "Lagos Harbor to Escravos Route",
    description:
      "Offshore utility workboat delivering certified technical inspectors and equipment supplies to calling vessels.",
    highlights: ["Reliable open-water transit", "Marine radar equipped", "PPE compliance"],
  },
  {
    id: "proj-20",
    title: "Field Operational Presence & Rapid Response Base",
    category: "site-operations",
    categoryLabel: "Operational Sites & Bases",
    image: "/images/projects/project-2.png",
    location: "Defense Jetty Marina / Kirikiri Town, Lagos",
    description:
      "Strategic operating footprint providing immediate access to Lagos commercial anchorages, lightering terminals, and offshore fairways.",
    highlights: ["Kirikiri Headquarters", "Defense Jetty Operational Site", "24/7 Mobile Command"],
  },
];
