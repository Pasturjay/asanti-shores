import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Download,
  FileCheck,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  Anchor,
  Ship,
  Compass,
  ArrowRight,
  Target,
  LifeBuoy,
  Scale,
  Award,
  Users,
  HardHat,
  Layers,
  Wrench,
  Fuel,
  Navigation,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Official Corporate Profile | Asanti Shores Limited",
  description:
    "Official corporate dossier and downloadable company profile for Asanti Shores Limited (RC: 2018901). Integrated marine services, vessel husbanding, NIWA certified vessels, SCUML compliance, and offshore logistics in Nigeria.",
};

export default function CompanyProfilePage() {
  const breadcrumbs = [{ label: "Company Profile", href: "/company-profile" }];

  // 1. Statutory Credentials & Compliance Table Data (From Official CAC & Regulatory Filings)
  const statutoryCredentials = [
    {
      no: "01",
      document: "CAC Certificate of Incorporation",
      issuingBody: "Corporate Affairs Commission (CAC)",
      reference: "RC 2018901; Incorporated 12 January 2023; TIN 31273907-0001",
      status: "Active / Registered",
    },
    {
      no: "02",
      document: "CAC Status Report",
      issuingBody: "Corporate Affairs Commission (CAC)",
      reference: "Generated 13 January 2023; Official Status: ACTIVE",
      status: "Active",
    },
    {
      no: "03",
      document: "Memorandum & Articles of Association (MEMART)",
      issuingBody: "Corporate Affairs Commission (CAC)",
      reference: "RC 2018901; Certified True Copy Extract, 13 January 2023",
      status: "Certified",
    },
    {
      no: "04",
      document: "SCUML Certificate of Registration",
      issuingBody: "EFCC / Special Control Unit against Money Laundering",
      reference: "RN: SC 251825806; Issued 27 June 2023 under Section 17(2)(a)",
      status: "Compliant",
    },
    {
      no: "05",
      document: "NIWA Operational Certificate (MV JAS & GOLD)",
      issuingBody: "National Inland Waterways Authority (NIWA)",
      reference: "Certificate No: 20250800002846; Vessel No: WAR-6353-QZ; Issued 04 Nov 2026",
      status: "Certified",
    },
    {
      no: "06",
      document: "NIWA Operator’s Permit (MV JAS & GOLD)",
      issuingBody: "National Inland Waterways Authority (NIWA)",
      reference: "Vessel No: WAR-6353-QZ; Valid November 2026 – November 2027",
      status: "Valid",
    },
    {
      no: "07",
      document: "Membership Certificate, Nigeria Association of Auctioneers",
      issuingBody: "Nigeria Association of Auctioneers",
      reference: "Certificate No: 003697; Valid 28 October 2026 – 31 October 2027",
      status: "Member",
    },
  ];

  // 2. The Seven Connected Service Lines
  const sevenServices = [
    {
      num: "01",
      title: "Ship and Crew Management",
      core: "Crewing, vessel operations support and statutory compliance",
      bullets: [
        "Recruitment, placement and rotation of certified STCW vessel crews",
        "Crew documentation, certification checks and local travel coordination",
        "Support for vessel technical operations, statutory audits, and flag state compliance",
      ],
      icon: Ship,
    },
    {
      num: "02",
      title: "Ship Chandler",
      core: "Provisions, stores and consumables delivered to the vessel",
      bullets: [
        "Fresh/frozen provisions, dry bonded stores, cabin supplies, deck & engine consumables",
        "Rapid delivery to vessels at anchorage or alongside quays in Lagos, Onne and Warri",
        "Consolidated ordering, itemized commercial pricing, and documented receipts",
      ],
      icon: Anchor,
    },
    {
      num: "03",
      title: "Marine Equipment Sales and Supply",
      core: "Equipment and certified spares for vessels and marine operations",
      bullets: [
        "Supply of certified lifesaving appliances (SOLAS), mooring ropes, valves, pumps and hardware",
        "Sourcing to client specifications from vetted local and international manufacturers",
        "Consolidated delivery coordination directly to port jetty or vessel deck",
      ],
      icon: Wrench,
    },
    {
      num: "04",
      title: "Bunker Supply and Fresh Water",
      core: "Marine fuel and certified potable water supply",
      bullets: [
        "ISO 8217 compliant Marine Gas Oil (MGO) and VLSFO delivered via dedicated barge",
        "Fresh potable water for vessel operational, cooling and crew consumption",
        "Precise delivery scheduling, sealed MARPOL sampling, and quantity documentation",
      ],
      icon: Fuel,
    },
    {
      num: "05",
      title: "Underwater Services",
      core: "Inspection and support work below the waterline",
      bullets: [
        "Class In-Water Surveys (IWS / UWILD) with CCTV video recording and reporting",
        "Hydraulic rotary brush hull cleaning, sea chest de-fouling, and propeller polishing",
        "Underwater oxy-arc cutting, minor underwater repair, and subsea maintenance support",
      ],
      icon: LifeBuoy,
    },
    {
      num: "06",
      title: "Tug Boats and Barges Hire",
      core: "Towage and cargo-carrying vessels on commercial charter",
      bullets: [
        "Harbor and ocean tugs for towage, berthing assistance, rig moves, and positioning",
        "Flat-top deck cargo and ramp barges for heavy equipment, pipes, aggregate, and scrap transport",
        "Flexible charter agreements on spot-hire, short-term, or project contract basis",
      ],
      icon: Compass,
    },
    {
      num: "07",
      title: "Service Boats Hire and Logistics",
      core: "Crew, personnel and materials transfer across coastal waters",
      bullets: [
        "High-speed craft for crew rotation, superintendent transfer, and security liaison",
        "Waterborne logistics supporting coastal oil terminals, anchorages, and rigs",
        "Flexible hire periods to match project schedules with verified vessel maintenance",
      ],
      icon: Navigation,
    },
  ];

  // 3. Core Operational Strengths
  const coreStrengths = [
    { title: "Safety First on Every Job", desc: "No job is worth an injury or a spill. Rigorous pre-job hazard reviews and mandatory PPE." },
    { title: "Honest Pricing & Accurate Reporting", desc: "Clear, itemized proposals with open communication from first inquiry to final invoice." },
    { title: "Supplies, Vessels & Crews on Schedule", desc: "Disciplined execution across Nigerian ports to eliminate vessel demurrage and delay." },
    { title: "Round-the-Clock Coordination", desc: "24/7 active marine operations desk for vessel masters, fleet managers, and procurement officers." },
    { title: "One Point of Contact", desc: "Clients deal with one company for the full support chain, ensuring unified accountability." },
    { title: "Responsible Environmental Care", desc: "Fuel, potable water and waste handled with zero discharge in accordance with MARPOL." },
    { title: "Continual Operational Improvement", desc: "Client feedback and post-operation reviews feed directly back into standard procedures." },
  ];

  // 4. QHSE 5-Pillar Framework
  const qhsePillars = [
    { num: "1", title: "Planning", desc: "Each job starts with a structured pre-job review of scope, risks, sea state, and operational responsibilities." },
    { num: "2", title: "People", desc: "Crews and contractors are briefed on safe working practices and empowered with Stop Work Authority before deployment." },
    { num: "3", title: "Equipment", desc: "Vessels, diving spreads, compressors and gear are verified for condition and class certification before mobilization." },
    { num: "4", title: "Environment", desc: "Fuel, potable water and waste handling follow regulatory MARPOL requirements, with spill prevention built into all delivery procedures." },
    { num: "5", title: "Continuous Improvement", desc: "Client operational feedback and post-job reviews feed directly back into our standard operating procedures." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO HEADER */}
      <section className="relative bg-[#071524] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/project-3.png"
            alt="Asanti Shores Limited maritime fleet and field operations"
            fill
            priority
            className="object-cover opacity-20 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071524] via-[#0B1F33]/90 to-[#071524]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />

          <div className="max-w-4xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold uppercase tracking-wider">
              <span>Official Corporate Dossier & Publications</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Asanti Shores Limited Company Profile
            </h1>

            <p className="text-base sm:text-lg text-[#D9A441] font-semibold leading-relaxed">
              Vessels | Crews | Provisions | Fuel | Equipment | Underwater Support
            </p>

            <blockquote className="text-sm sm:text-base text-slate-300 italic border-l-2 border-[#D9A441] pl-3 py-0.5">
              &ldquo;Safe operations. Dependable delivery. Open communication.&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              An authoritative dossier detailing the statutory incorporation (RC: {siteConfig.rcNumber}), operational bases, seven core maritime divisions, NIWA certified vessel operations, EFCC SCUML compliance, and QHSE standards of Asanti Shores Limited.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.downloads.profilePdfUrl}
                download="asanti-shores-company-profile.pdf"
                className="inline-flex items-center gap-2 bg-[#D9A441] text-[#0B1F33] hover:bg-[#C49132] font-bold text-sm px-7 py-3.5 rounded-sm shadow-md transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF Profile (5 Pages)</span>
              </a>

              <Button href="/request-a-quote" variant="outline" size="lg" className="border-slate-400 text-white hover:bg-white hover:text-[#0B1F33]">
                Request Commercial Quotation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE SUMMARY & DUAL BASES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Company Overview"
                title="Single Point of Contact for Integrated Marine Services"
                description="Engineered to meet the stringent expectations of international shipping companies, vessel operators, and offshore energy procurement teams in Nigeria."
                align="left"
              />

              <div className="space-y-4 text-sm sm:text-base text-[#596979] leading-relaxed">
                <p>
                  <strong className="text-[#0B1F33]">{siteConfig.legalName}</strong> is an incorporated Nigerian marine services company that supplies vessels, crews, provisions, fuel, equipment and underwater support to ship owners, operators and the oil and gas industry from a single point of contact.
                </p>
                <p>
                  The company was incorporated on <strong>12 January 2023</strong> as a private company limited by shares under the Companies and Allied Matters Act 2020 (<strong>RC: {siteConfig.rcNumber}</strong>), and is fully registered with the Corporate Affairs Commission of the Federal Republic of Nigeria.
                </p>
                <p>
                  Our offering covers seven connected service lines. Clients deal with one company for the full vessel support chain, which cuts coordination time and keeps accountability clear. We work to a simple standard: safe operations, dependable delivery and open communication from the first enquiry to the final invoice.
                </p>
              </div>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-6 rounded-md bg-[#F3F6F8] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167D91]">
                    <Target className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  <ul className="text-xs text-[#596979] leading-relaxed space-y-1.5 list-disc pl-4">
                    <li>Deliver reliable, cost-effective marine support to ship owners and operators.</li>
                    <li>Protect people, vessels and the environment via international safety practices.</li>
                    <li>Keep every client informed with fast response and clear stage reporting.</li>
                    <li>Build lasting relationships with clients, suppliers and host communities.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-md bg-[#F3F6F8] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                    <Compass className="w-4 h-4" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0B1F33] font-semibold leading-relaxed pt-1">
                    &ldquo;To be the most trusted indigenous partner for integrated marine services in Nigeria and the wider region.&rdquo;
                  </p>
                  <p className="text-xs text-[#596979] leading-relaxed pt-1">
                    Providing dependable delivery and open commercial communication across coastal and inland waters.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Statutory Dossier Card */}
            <div className="lg:col-span-5 bg-[#0B1F33] text-white rounded-lg p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white p-1 shrink-0">
                    <Image
                      src="/images/brand/logo-ship.png"
                      alt="Asanti Shores Limited Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">
                      Asanti Shores Limited
                    </h3>
                    <p className="text-xs text-[#D9A441] font-mono">RC: {siteConfig.rcNumber}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white p-1 shrink-0">
                  <Image
                    src="/images/brand/logo-anchor.png"
                    alt="Asanti Shores Limited Anchor Badge"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Registered Legal Name</span>
                  <span className="font-semibold text-white mt-0.5 block">{siteConfig.legalName}</span>
                </div>
                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">CAC Registration & TIN</span>
                  <span className="font-semibold text-white mt-0.5 block">RC: {siteConfig.rcNumber} • TIN: {siteConfig.tin}</span>
                </div>
                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Incorporation Date & Act</span>
                  <span className="font-semibold text-white mt-0.5 block">12 January 2023 (CAMA 2020)</span>
                </div>
                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">EFCC SCUML Registration</span>
                  <span className="font-semibold text-[#D9A441] mt-0.5 block">RN: SC 251825806 (Sec 17(2)(a))</span>
                </div>
                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Headquarters Address</span>
                  <span className="font-semibold text-white mt-0.5 block leading-relaxed">{siteConfig.contact.address.full}</span>
                </div>
                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Marine Field Jetty Base</span>
                  <span className="font-semibold text-white mt-0.5 block">Defense Jetty, Marina, Lagos State</span>
                </div>
                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Operational Contact Lines</span>
                  <span className="font-semibold text-white mt-0.5 block font-mono">+234 916 259 9586 / 0817 684 0868</span>
                </div>
                <div className="pb-1">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Operations Email</span>
                  <span className="font-semibold text-white mt-0.5 block">{siteConfig.contact.email}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.downloads.profilePdfUrl}
                  download="asanti-shores-company-profile.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#D9A441] text-[#0B1F33] hover:bg-[#C49132] font-bold text-xs py-3 px-4 rounded-sm transition-colors text-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete Dossier (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE OPERATIONAL STRENGTHS & VALUES */}
      <section className="py-16 bg-[#F3F6F8] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operational Strengths"
            title="Why Ship Owners & Energy Operators Trust Us"
            description="Our operating philosophy is built on seven core execution strengths that minimize downtime, prevent demurrage, and maintain total transparency."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreStrengths.map((strength) => (
              <div
                key={strength.title}
                className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs hover:border-[#167D91] transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-[#D9A441] mb-3" />
                <h4 className="font-heading font-bold text-base text-[#0B1F33] mb-2">
                  {strength.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#596979] leading-relaxed">
                  {strength.desc}
                </p>
              </div>
            ))}
            {/* 7th Box: Dual Callout */}
            <div className="bg-[#0B1F33] text-white p-6 rounded-lg border border-slate-800 shadow-xs sm:col-span-2 lg:col-span-2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441] block mb-1">
                  Single Point of Contact
                </span>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  Unified Accountability Across the Vessel Support Chain
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Whether providing STCW crewing, fresh provisions, ISO 8217 bunkering, commercial diving or tugboat hire, clients deal with one dedicated operational desk—cutting coordination time and ensuring commitments are met.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-xs text-[#D9A441] font-semibold">
                Available 24/7 across Lagos, Onne, Port Harcourt, and Delta ports.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SEVEN CONNECTED SERVICE LINES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Directory"
            title="Our Seven Connected Service Lines"
            description="Seven dedicated service lines, each available on its own or as one coordinated package to support merchant vessels, oil/gas operators, and maritime contractors."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {sevenServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.num}
                  className="bg-[#F3F6F8] p-7 rounded-lg border border-slate-200/90 shadow-xs hover:border-[#167D91] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-sm bg-[#0B1F33] text-[#D9A441] font-bold text-xs flex items-center justify-center">
                        {svc.num}
                      </span>
                      <Icon className="w-5 h-5 text-[#167D91]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#0B1F33] group-hover:text-[#167D91] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#167D91]">
                      {svc.core}
                    </p>
                    <ul className="space-y-1.5 pt-2 border-t border-slate-200/80 text-xs text-[#596979]">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-1.5">
                          <span className="text-[#D9A441] mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 mt-4">
                    <Link
                      href={`/request-a-quote?service=${encodeURIComponent(svc.title)}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#167D91] hover:text-[#0B1F33] inline-flex items-center gap-1"
                    >
                      <span>Request Service Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* One Coordinated Package Feature Card */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-[#0B1F33] via-[#0E2844] to-[#071524] text-white p-8 sm:p-10 border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                  <Layers className="w-4 h-4" />
                  <span>Integrated Support Chain</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  One Coordinated Package: Streamlined Port Turnaround
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every service line is available on its own, or combined into a single package so that crews, supplies, fuel, vessels and underwater work are planned and delivered together. Clients deal with one company for the full vessel support chain, which cuts coordination time and keeps accountability clear.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Button href="/request-a-quote" variant="primary" size="lg">
                  Request Integrated Package
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FLEET, EQUIPMENT & CERTIFIED VESSEL (MV JAS & GOLD) */}
      <section className="py-20 bg-[#F3F6F8] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Fleet & Operations"
            title="Fleet, Equipment & Certified Vessel Operations"
            description="Our maritime operations are backed by fit-for-purpose tugs, deck cargo barges, crew transfer boats, bunker delivery units, and certified inland waterways vessels."
            align="center"
          />

          {/* Vessel Highlight: MV JAS & GOLD */}
          <div className="mt-12 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[300px] bg-slate-900">
                <Image
                  src="/images/projects/project-3.png"
                  alt="Asanti Shores Limited MV JAS & GOLD certified vessel operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-xs bg-[#D9A441] text-[#0B1F33] uppercase tracking-wider">
                  NIWA Certified Vessel
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-heading font-bold text-base text-white">
                    MV JAS & GOLD
                  </h4>
                  <p className="text-xs text-slate-300">
                    Vessel Number: WAR-6353-QZ
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#167D91]">
                    National Inland Waterways Authority (NIWA) Permits
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33] mt-1">
                    Certified Vessel: MV JAS & GOLD (WAR-6353-QZ)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#596979] leading-relaxed mt-2">
                    Asanti Shores Limited holds the National Inland Waterways Authority (NIWA) Operational Certificate and Operator&apos;s Permit for <strong>MV JAS & GOLD</strong>, verifying full regulatory authorization for waterborne logistics and maritime support across Nigerian inland waterways.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-md bg-[#F3F6F8] border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-[#167D91] block">NIWA Operational Certificate</span>
                    <strong className="text-xs text-[#0B1F33] block mt-0.5">Cert No: 20250800002846</strong>
                    <span className="text-[11px] text-slate-500 block mt-1">Issued: 04 November 2026 by NIWA</span>
                  </div>
                  <div className="p-4 rounded-md bg-[#F3F6F8] border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-[#167D91] block">NIWA Operator&apos;s Permit</span>
                    <strong className="text-xs text-[#0B1F33] block mt-0.5">Vessel: WAR-6353-QZ</strong>
                    <span className="text-[11px] text-emerald-600 font-semibold block mt-1">Valid: Nov 2026 – Nov 2027</span>
                  </div>
                </div>

                <div className="text-xs text-[#596979] border-t border-slate-100 pt-3">
                  <strong>Vessel photograph note:</strong> Vessel names are as painted on the hulls. The photographs illustrate the types of tug and barge in the hire service line; chartered assets conform to class inspections and statutory permits.
                </div>
              </div>
            </div>
          </div>

          {/* Fleet & Machinery Directory Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
              <Compass className="w-6 h-6 text-[#167D91] mb-2" />
              <h4 className="font-heading font-bold text-base text-[#0B1F33] mb-1">Tug Boats</h4>
              <p className="text-xs text-[#596979] leading-relaxed">
                Harbor and ocean tugs supporting towage, berthing assistance, positioning, and rig moves on short-term or project charter.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
              <Ship className="w-6 h-6 text-[#167D91] mb-2" />
              <h4 className="font-heading font-bold text-base text-[#0B1F33] mb-1">Deck Cargo & Ramp Barges</h4>
              <p className="text-xs text-[#596979] leading-relaxed">
                Flat-top and spud barges with lowered bow ramps for RoRo equipment, aggregate, tubulars, and scrap transport.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
              <Navigation className="w-6 h-6 text-[#167D91] mb-2" />
              <h4 className="font-heading font-bold text-base text-[#0B1F33] mb-1">Service & Crew Boats</h4>
              <p className="text-xs text-[#596979] leading-relaxed">
                High-speed crew transfer vessels (CTV), line handling craft, and security liaison boats for coastal waters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
              <Fuel className="w-6 h-6 text-[#167D91] mb-2" />
              <h4 className="font-heading font-bold text-base text-[#0B1F33] mb-1">Bunker & Water Units</h4>
              <p className="text-xs text-[#596979] leading-relaxed">
                Dedicated delivery units with certified flow meters and discharge booster pumps for marine fuel and fresh water.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
              <LifeBuoy className="w-6 h-6 text-[#167D91] mb-2" />
              <h4 className="font-heading font-bold text-base text-[#0B1F33] mb-1">Underwater Inspection Gear</h4>
              <p className="text-xs text-[#596979] leading-relaxed">
                Surface-supplied diving panels, high-pressure air compressors, CCTV video recording, and hydraulic rotary hull brushes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
              <Wrench className="w-6 h-6 text-[#167D91] mb-2" />
              <h4 className="font-heading font-bold text-base text-[#0B1F33] mb-1">Auxiliary Marine Plant</h4>
              <p className="text-xs text-[#596979] leading-relaxed">
                Heavy-duty pulling winches, auxiliary generator sets, engine room machinery, and salvage dewatering equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATUTORY CREDENTIALS & COMPLIANCE TABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Credentials & Compliance"
            title="Official Statutory Registrations & Certifications"
            description="Asanti Shores Limited operates with full corporate transparency, holding verified CAC corporate incorporation, EFCC SCUML registration, NIWA vessel certificates, and professional memberships."
            align="center"
          />

          {/* Credentials Table */}
          <div className="mt-12 overflow-x-auto rounded-lg border border-slate-200 shadow-xs">
            <table className="w-full text-left text-xs text-[#596979]">
              <thead className="bg-[#0B1F33] text-white text-[11px] uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-4 py-3.5 w-12">No.</th>
                  <th scope="col" className="px-4 py-3.5">Document Name</th>
                  <th scope="col" className="px-4 py-3.5">Issuing Regulatory Body</th>
                  <th scope="col" className="px-4 py-3.5">Reference / Official Validity</th>
                  <th scope="col" className="px-4 py-3.5 w-24">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {statutoryCredentials.map((cred, idx) => (
                  <tr key={cred.no} className={idx % 2 === 0 ? "bg-white hover:bg-slate-50" : "bg-[#F8FAFC] hover:bg-slate-50"}>
                    <td className="px-4 py-3.5 font-bold text-[#0B1F33]">{cred.no}</td>
                    <td className="px-4 py-3.5 font-semibold text-[#0B1F33]">{cred.document}</td>
                    <td className="px-4 py-3.5">{cred.issuingBody}</td>
                    <td className="px-4 py-3.5 font-mono text-[11px] text-[#0B1F33]">{cred.reference}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                        <BadgeCheck className="w-3 h-3" />
                        {cred.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SCUML Highlight Card */}
          <div className="mt-8 p-6 rounded-lg bg-[#F3F6F8] border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#167D91]">
                Anti-Money Laundering Compliance
              </span>
              <h4 className="font-heading font-bold text-base text-[#0B1F33]">
                EFCC SCUML Registration: RN: SC 251825806
              </h4>
              <p className="text-xs text-[#596979] max-w-2xl">
                Asanti Shores Limited is registered with the Special Control Unit against Money Laundering (SCUML) under the Economic and Financial Crimes Commission (EFCC) in accordance with Section 17(2)(a) of the Money Laundering (Prevention and Prohibition) Act, 2022. Issued 27 June 2023.
              </p>
            </div>
            <span className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-sm bg-[#0B1F33] text-[#D9A441]">
              Fully Compliant
            </span>
          </div>
        </div>
      </section>

      {/* 7. OUR PEOPLE & QHSE FRAMEWORK */}
      <section className="py-20 bg-[#F3F6F8] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our People & Standards"
            title="Quality, Health, Safety and Environment (QHSE)"
            description="Safety and quality come before schedule on every Asanti Shores job. Our people are briefed, equipped with branded PPE, and accountable from first enquiry to final invoice."
            align="center"
          />

          {/* QHSE 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            {qhsePillars.map((pillar) => (
              <div key={pillar.num} className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-2">
                <span className="w-7 h-7 rounded-sm bg-[#0B1F33] text-[#D9A441] font-bold text-xs flex items-center justify-center">
                  {pillar.num}
                </span>
                <h4 className="font-heading font-bold text-sm text-[#0B1F33]">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#596979] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Our People & Safety In Practice Card */}
          <div className="mt-12 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[300px] bg-slate-900">
                <Image
                  src="/images/team/team-1.png"
                  alt="Asanti Shores Limited Operations Personnel in branded high-visibility workwear and hardhats"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-heading font-bold text-sm text-white">
                    Asanti Shores Limited Operations Crew
                  </h4>
                  <p className="text-xs text-slate-300">
                    Defense Jetty, Marina & Kirikiri Base
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167D91]">
                  <HardHat className="w-4 h-4 text-[#D9A441]" />
                  <span>Safety in Practice</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33]">
                  How We Prepare for Field Work
                </h3>
                <p className="text-xs sm:text-sm text-[#596979] leading-relaxed">
                  Our crews are identified on site by company high-visibility workwear and protective headgear. Safety first on every job:
                </p>
                <div className="space-y-2.5 text-xs text-[#596979]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Pre-job review:</strong> Scope, risks and responsibilities are reviewed with all operational leads before work starts.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Crew briefing:</strong> Crews and contractors are briefed on safe working practices and emergency procedures.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Equipment checks:</strong> Vessels, diving panels, winches and gear are checked for condition and certification.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Standard PPE:</strong> Company-marked protective hard hats, reflective branded vests, and marine flotation work vests.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WORK WITH ASANTI SHORES & DOWNLOAD CALLOUT */}
      <section className="py-20 bg-[#071524] text-white border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold uppercase tracking-widest">
            <span>Work With Asanti Shores Limited</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Download the Complete Corporate Profile
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Access our verified statutory registrations (RC: {siteConfig.rcNumber}), SCUML registration (RN: SC 251825806), NIWA permits, fleet directory, and QHSE policies in an authoritative 5-page PDF document.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.downloads.profilePdfUrl}
              download="asanti-shores-company-profile.pdf"
              className="inline-flex items-center gap-2 bg-[#D9A441] text-[#0B1F33] hover:bg-[#C49132] font-bold text-sm px-8 py-3.5 rounded-sm shadow-md transition-all active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Corporate Profile (PDF)</span>
            </a>

            <Button
              href="/request-a-quote"
              variant="outline"
              size="lg"
              className="border-slate-400 text-white hover:bg-white hover:text-[#0B1F33]"
            >
              Request a Commercial Quote
            </Button>
          </div>

          <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
            <span>24/7 Operations: <strong className="text-white">+234 916 259 9586</strong></span>
            <span>Alternative: <strong className="text-white">0817 684 0868 / 0814 646 3163</strong></span>
            <span>Email: <strong className="text-white">{siteConfig.contact.email}</strong></span>
          </div>
        </div>
      </section>
    </div>
  );
}
