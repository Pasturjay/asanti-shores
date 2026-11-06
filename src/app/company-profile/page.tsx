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
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Official Corporate Profile | Asanti Shores Limited",
  description:
    "Official corporate dossier and downloadable company profile for Asanti Shores Limited. Comprehensive marine services, vessel husbanding, subsea engineering, and logistics in Nigeria.",
};

export default function CompanyProfilePage() {
  const breadcrumbs = [{ label: "Company Profile", href: "/company-profile" }];

  const statutoryDetails = [
    { label: "Registered Corporate Name", value: siteConfig.legalName },
    { label: "Corporate Affairs Commission (CAC)", value: `RC: ${siteConfig.rcNumber}` },
    { label: "Federal Inland Revenue Service (FIRS)", value: `TIN: ${siteConfig.tin}` },
    { label: "Date of Incorporation", value: `${siteConfig.incorporationDate} (Nigeria)` },
    { label: "Corporate Headquarters", value: siteConfig.contact.address.full },
    { label: "Marine Field Jetty Base", value: "Defense Jetty, Marina, Lagos State, Nigeria" },
    { label: "24/7 Operations Desk", value: siteConfig.contact.phoneDisplay },
    { label: "Operations & Procurement Email", value: siteConfig.contact.email },
  ];

  const serviceCapabilities = [
    {
      num: "01",
      title: "Ship & Crew Management",
      desc: "Technical vessel husbanding, STCW seafarer placement, NIMASA cabotage compliance, and dry-dock repair coordination across Nigerian coastal terminals.",
    },
    {
      num: "02",
      title: "Ship Chandling & Vessel Provisions",
      desc: "Supply of quality fresh/frozen provisions, dry bonded stores, cabin supplies, marine lubricants, and deck & engine consumables conforming to ISSA/IMPA standards.",
    },
    {
      num: "03",
      title: "Marine Equipment Sales & Supply",
      desc: "Certified lifesaving appliances (SOLAS life rafts, vests, immersion suits), mooring wire ropes, anchor chains, industrial valves, pumps, and subsea diving spreads.",
    },
    {
      num: "04",
      title: "Bunker Supply & Fresh Potable Water",
      desc: "ISO 8217 compliant Marine Gas Oil (MGO) and VLSFO bunkering coordination with sealed Marpol samples, plus certified fresh potable water delivered by barge.",
    },
    {
      num: "05",
      title: "Underwater Services & Commercial Diving",
      desc: "Class-certified in-water surveys (IWS/UWILD) with CCTV video recording, hydraulic rotary brush hull cleaning, propeller polishing, underwater oxy-arc cutting, and wet welding.",
    },
    {
      num: "06",
      title: "Tugboats & Cargo Barges Hire",
      desc: "Harbor and ocean towage (up to 4,000+ BHP), flat-top deck cargo barges (1,000 - 5,000 DWT), ramp barges for RoRo transport, spud barges, and crane lightering platforms.",
    },
    {
      num: "07",
      title: "Service Boats Hire & Fast Craft Overhaul",
      desc: "High-speed crew transfer vessels (CTV), line handling craft, and security escort boats, paired with structural repair and mechanical overhaul for commercial passenger craft.",
    },
    {
      num: "08",
      title: "Marine Salvage & Wreck Removal",
      desc: "Emergency salvage, dewatering and refloating of submerged hulls, channel obstruction removal, and controlled sub-sea dismantling of derelict steel structures.",
    },
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

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold uppercase tracking-wider">
              <span>Official Corporate Dossier</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Company Profile & Corporate Capabilities
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              An authoritative dossier detailing the statutory incorporation, operational bases, seven core maritime divisions, HSE governance, and delivered contract history of Asanti Shores Limited.
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
                Submit Commercial Enquiry
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
                title="International Maritime Standards with Local Execution Power"
                description="Engineered to meet the stringent expectations of international shipping companies, vessel operators, and offshore energy procurement teams in Nigeria."
                align="left"
              />

              <div className="space-y-4 text-sm sm:text-base text-[#596979] leading-relaxed">
                <p>
                  <strong className="text-[#0B1F33]">{siteConfig.legalName}</strong> is an incorporated Nigerian maritime support, vessel husbanding, and marine engineering contractor (RC: {siteConfig.rcNumber}) with operational headquarters located in Kirikiri Town, Lagos, and an active maritime field operations base at Defense Jetty, Marina, Lagos.
                </p>
                <p>
                  The company was established to bridge the gap between rigorous international maritime standards and local operating realities across Nigerian territorial waters. Recognizing that unnecessary port delays and demurrage incur severe commercial costs, Asanti Shores Limited provides integrated solutions encompassing technical ship management, certified STCW crewing, ship chandling, high-grade bunkering coordination, commercial diving, salvage operations, and marine equipment provisioning.
                </p>
                <p>
                  With disciplined execution, proactive port authority liaison, and 24/7 responsiveness, our operations ensure vessels calling Nigerian ports and offshore energy installations complete their turnarounds safely, on budget, and on schedule.
                </p>
              </div>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-6 rounded-md bg-[#F3F6F8] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167D91]">
                    <Target className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#596979] leading-relaxed">
                    To deliver dependable, safety-compliant, and cost-effective maritime services, vessel husbanding, and logistics solutions across Nigerian waters, safeguarding vessel assets and turnaround schedules through proactive coordination.
                  </p>
                </div>

                <div className="p-6 rounded-md bg-[#F3F6F8] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                    <Compass className="w-4 h-4" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#596979] leading-relaxed">
                    To be recognised as one of Nigeria&apos;s most trusted and responsive maritime support contractors, respected by international ship owners and charterers for operational transparency, uncompromising safety standards, and local execution excellence.
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

              <div className="space-y-3.5 text-xs">
                {statutoryDetails.map((detail) => (
                  <div key={detail.label} className="border-b border-slate-800/80 pb-2.5">
                    <span className="text-slate-400 block uppercase tracking-wider text-[10px]">
                      {detail.label}
                    </span>
                    <span className="font-semibold text-white mt-0.5 block leading-relaxed">
                      {detail.value}
                    </span>
                  </div>
                ))}
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

      {/* 3. CORE SERVICE DIVISIONS MATRIX */}
      <section className="py-20 bg-[#F3F6F8] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capability Architecture"
            title="Core Service Divisions & Field Capabilities"
            description="Our operational model integrates specialized maritime capabilities under single-window coordination for calling merchant vessels and offshore operators."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {serviceCapabilities.map((svc) => (
              <div
                key={svc.num}
                className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs hover:border-[#167D91] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-sm bg-[#0B1F33] text-[#D9A441] font-bold text-xs flex items-center justify-center">
                      {svc.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#167D91]" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#0B1F33] mb-2 group-hover:text-[#167D91] transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#596979] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link
                    href={`/request-a-quote?service=${encodeURIComponent(svc.title)}`}
                    className="text-xs font-bold uppercase tracking-wider text-[#167D91] hover:text-[#0B1F33] inline-flex items-center gap-1"
                  >
                    <span>Request Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORPORATE GOVERNANCE & OPERATIONS LEADERSHIP */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: MD Spotlight Portrait */}
            <div className="lg:col-span-5 relative aspect-3/4 sm:aspect-4/5 rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <Image
                src="/images/team/team-3.png"
                alt="Asanti Shores Limited Managing Director and Field Operations Executives at Corporate Entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#D9A441] text-[#0B1F33] text-xs font-bold uppercase tracking-wider shadow-md">
                  <Award className="w-3.5 h-3.5" />
                  <span>Executive Governance</span>
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-[#0B1F33]/95 backdrop-blur-xs border border-slate-700 text-white space-y-1">
                <h4 className="font-heading font-bold text-sm text-white">
                  Managing Director & Field Executives
                </h4>
                <p className="text-xs text-slate-300">
                  Direct operational command across Nigerian territorial waters, ports, and offshore terminals.
                </p>
              </div>
            </div>

            {/* Right Column: Narrative & Crew Banner */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Executive Governance"
                title="Field-Ready Leadership & On-Ground Operational Force"
                description="Asanti Shores Limited pairs experienced corporate directorship with a disciplined, safety-certified workforce deployed daily in official company PPE."
                align="left"
              />

              <p className="text-sm sm:text-base text-[#596979] leading-relaxed">
                The management team is spearheaded by the Managing Director, whose hands-on approach ensures direct liaison with the Nigerian Maritime Administration and Safety Agency (NIMASA), Nigerian Ports Authority (NPA), and terminal operators.
              </p>

              {/* Group Banner */}
              <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <Image
                  src="/images/team/team-1.png"
                  alt="Asanti Shores Limited Operations Team in Branded Company Workwear and Hardhats"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#0B1F33]/90 text-[#D9A441] border border-slate-700 text-[11px] font-bold uppercase tracking-wider">
                    <Users className="w-3 h-3" />
                    <span>Operations & Technical Crew</span>
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-semibold text-white">
                    100% PPE-compliant personnel ready for vessel husbanding, diving, and bunker transfer dispatch.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#0B1F33] font-semibold">
                <div className="flex items-center gap-2 p-3 rounded-md bg-[#F3F6F8] border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Direct Executive Accountability</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-md bg-[#F3F6F8] border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>24/7 Rapid Port Mobilization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HEALTH, SAFETY & STATUTORY GOVERNANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="HSE & Statutory Governance"
                title="Commitment to Zero Compromise on Maritime Safety"
                description="We operate under structured Health, Safety, and Environment risk assessments aligned with Nigerian maritime statutory frameworks and international standards."
                align="left"
              />

              <div className="space-y-4 text-xs sm:text-sm text-[#596979]">
                <div className="p-4 rounded-md bg-[#F3F6F8] border border-slate-200">
                  <strong className="text-[#0B1F33] block mb-1 font-bold">
                    NIMASA Cabotage Act Alignment:
                  </strong>
                  Fully compliant with Nigerian Cabotage provisions, local content empowerment, and mandatory vessel certifications.
                </div>

                <div className="p-4 rounded-md bg-[#F3F6F8] border border-slate-200">
                  <strong className="text-[#0B1F33] block mb-1 font-bold">
                    IMO ISM & ISPS Code Guidance:
                  </strong>
                  Strict security protocols, port facility clearance oversight, and disciplined bridge-to-engine safety reporting.
                </div>

                <div className="p-4 rounded-md bg-[#F3F6F8] border border-slate-200">
                  <strong className="text-[#0B1F33] block mb-1 font-bold">
                    MARPOL 73/78 Environmental Protection:
                  </strong>
                  Strict zero-discharge protocols during bunkering transfers, diving interventions, and quayside ship husbanding.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0B1F33] text-white p-8 sm:p-10 rounded-lg border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                <FileCheck className="w-5 h-5" />
                <span>Executive HSE Statement</span>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic border-l-2 border-[#D9A441] pl-4">
                &ldquo;Every vessel movement, dive inspection, bunkering transfer, and provision delivery performed by Asanti Shores Limited is conducted under structured risk assessments. We believe all marine incidents are preventable through hazard identification, approved PPE compliance, and empowered Stop Work Authority.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span>Document: ASL-CORP-HSE-2026</span>
                <span className="text-[#D9A441] font-semibold">Reviewed Annually</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOWNLOAD & PROCUREMENT CALLOUT */}
      <section className="py-20 bg-[#071524] text-white border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold uppercase tracking-widest">
            <span>Official Publications</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Need Our Complete Corporate Profile for Procurement?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Download the official 5-page PDF document containing all statutory credentials, technical specifications, fleet charter profiles, and verified field contract logs.
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
        </div>
      </section>
    </div>
  );
}
