import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ship,
  Anchor,
  Wrench,
  Fuel,
  LifeBuoy,
  Compass,
  Navigation,
  ArrowRight,
  ShieldCheck,
  Clock,
  Headphones,
  Layers,
  MapPin,
  CheckCircle2,
  Download,
  FileCheck,
  ChevronRight,
  Flame,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";

export default function HomePage() {
  const capabilityStrip = [
    {
      title: "Vessel Support",
      description: "Technical husbandry, port turnaround supervision, and verified seafaring crew coordination.",
      icon: Ship,
    },
    {
      title: "Marine Supply",
      description: "Quality fresh food provisions, bonded stores, deck machinery, and certified engine spares.",
      icon: Anchor,
    },
    {
      title: "Marine Operations",
      description: "Prompt MGO/VLSFO bunkering, potable water delivery, and class-certified hull inspections.",
      icon: Fuel,
    },
    {
      title: "Marine Logistics",
      description: "Harbor & coastal tug charter, cargo deck barges, and fast crew transfer boat dispatch.",
      icon: Navigation,
    },
  ];

  const industryIcons: Record<string, React.ElementType> = {
    Ship,
    Flame,
    Anchor,
    Wrench,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center bg-[#071524] overflow-hidden">
        {/* Background Hero Image with Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2400&q=85"
            alt="Commercial offshore vessel and maritime operations in coastal waters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transform scale-105 filter brightness-[0.7] contrast-[1.05]"
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071524]/95 via-[#0B1F33]/85 to-[#071524]/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#071524]/50 to-[#071524]/95" />
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#D9A441] animate-pulse" />
              MARITIME SERVICES • SHIPPING • LOGISTICS
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Your Trusted Partner in{" "}
              <span className="text-[#D9A441]">Maritime Operations</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal mb-10">
              Marine services, vessel support, equipment supply and logistics solutions for shipping companies, vessel operators, and offshore energy industries.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/services" variant="primary" size="lg" className="shadow-lg shadow-[#D9A441]/20">
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                href="/request-a-quote"
                variant="outline"
                size="lg"
                className="border-slate-300 text-white hover:bg-white hover:text-[#0B1F33] hover:border-white"
              >
                Request a Quote
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                <span>NIMASA & NPA Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                <span>Kirikiri • Apapa • Onne • Warri</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                <span>24/7 Operations Desk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICE CAPABILITY STRIP */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilityStrip.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-md p-6 shadow-xl border border-slate-100 hover:border-[#167D91]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-sm bg-[#0B1F33] text-[#D9A441] flex items-center justify-center mb-4 group-hover:bg-[#167D91] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0B1F33] mb-2 group-hover:text-[#167D91] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#596979] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Maritime Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="/images/projects/project-10.png"
                  alt="Asanti Shores field engineers and marine operations team at Lagos operational base"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#0B1F33]/95 backdrop-blur-xs border border-slate-700 text-white">
                  <p className="text-xs uppercase font-bold tracking-widest text-[#D9A441] mb-1">
                    Operational Bases: Kirikiri Town & Defense Jetty, Marina
                  </p>
                  <p className="text-xs text-slate-300">
                    Direct quayside deployment across Kirikiri Lighter Terminal, Apapa Quays, Marina waterways, and offshore fairways.
                  </p>
                </div>
              </div>
              {/* Decorative Accent Frame */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#D9A441] -z-10 rounded-sm hidden sm:block" />
            </div>

            {/* Right Column: Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="About Asanti Shores"
                title="Supporting the Needs of the Maritime Industry"
                description="A dedicated Nigerian marine services and logistics company operating across key coastal ports and offshore energy hubs."
                align="left"
              />

              <div className="space-y-4 text-sm sm:text-base text-[#596979] leading-relaxed">
                <p>
                  Asanti Shores Limited is an incorporated Nigerian maritime support contractor established to deliver dependable vessel husbanding, technical equipment supply, crew facilitation, and coastal logistics.
                </p>
                <p>
                  Operating out of Kirikiri Town, Lagos, our coordination team works closely with ship owners, offshore operators, procurement directors, and international vessel masters calling Nigerian territorial waters.
                </p>
                <p>
                  We prioritize regulatory compliance under Nigerian maritime laws, safety protocols adhering to IMO ISM/ISPS frameworks, and transparent communication to safeguard your turnaround schedules and vessel assets.
                </p>
              </div>

              {/* Verified Company Attributes */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#596979] font-medium block">
                    Incorporation
                  </span>
                  <span className="font-heading font-bold text-sm text-[#0B1F33]">
                    {siteConfig.legalName}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#596979] font-medium block">
                    Registration
                  </span>
                  <span className="font-heading font-bold text-sm text-[#0B1F33]">
                    RC: {siteConfig.rcNumber}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/about" variant="navy" size="md">
                  Discover Our Company
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Speak to Operations <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID (ALL 7 SERVICES) */}
      <section className="py-20 lg:py-28 bg-[#F3F6F8] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Offerings"
            title="Comprehensive Marine & Offshore Services"
            description="Seven dedicated service divisions delivering practical, verified maritime support for commercial shipping and offshore operations in Nigeria."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {servicesData.map((service, index) => {
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-md overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/90 transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Service Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.altText}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />
                    {/* Number Badge */}
                    <span className="absolute top-4 right-4 w-7 h-7 rounded-sm bg-[#0B1F33]/90 text-[#D9A441] border border-slate-700 text-xs font-bold flex items-center justify-center">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Text Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#0B1F33] mb-3 group-hover:text-[#167D91] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#596979] leading-relaxed mb-6 line-clamp-3">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#167D91] group-hover:text-[#0B1F33] transition-colors"
                      >
                        <span>Explore Capabilities</span>
                        <ChevronRight className="w-4 h-4 text-[#D9A441] group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href={`/request-a-quote?service=${encodeURIComponent(service.title)}`}
                        className="text-xs text-slate-500 hover:text-[#D9A441] font-medium"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Services Link */}
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline" size="md">
              View Detailed Service Directory
            </Button>
          </div>
        </div>
      </section>

      {/* 5. DELIVERED PROJECTS & FIELD OPERATIONS SHOWCASE */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Verified Field Execution"
            title="Delivered Projects & Marine Operations"
            description="Explore our real-world track record in subsea diving, underwater hull maintenance, wreck salvaging, passenger craft overhaul, and tugboat operations across Lagos and coastal waters."
            align="center"
          />

          <ProjectsShowcase />
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial Value"
            title="Why Leading Maritime Operators Work With Us"
            description="Our operational model focuses on punctuality, safety enforcement, transparent reporting, and local port coordination across Nigerian waterways."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {siteConfig.benefits.map((benefit) => {
              const iconsMap: Record<string, React.ElementType> = {
                Clock,
                ShieldCheck,
                Headphones,
                Layers,
              };
              const Icon = iconsMap[benefit.icon] || ShieldCheck;

              return (
                <div
                  key={benefit.title}
                  className="bg-white p-7 rounded-md border border-slate-200/80 hover:border-[#D9A441] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#F3F6F8] border border-slate-200 text-[#167D91] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#167D91]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0B1F33] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#596979] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CAPABILITIES & OPERATIONAL HUBS */}
      <section className="py-20 lg:py-28 bg-[#0B1F33] text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#167D91]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Operational Footprint"
                title="Strategic Coverage Across Nigerian Ports & Anchorages"
                description="We maintain established liaison across major commercial terminals, lightering complexes, and offshore petroleum fairways."
                align="left"
                theme="dark"
              />

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether bunkering at Lagos anchorage, dispatching crew out of Kirikiri Lighter Terminal, or deploying workboats in Onne and Warri, our personnel coordinate directly with port authorities and terminal security.
              </p>

              <div className="pt-2">
                <Button href="/capabilities" variant="primary" size="md">
                  Explore Full Capabilities
                </Button>
              </div>
            </div>

            {/* Right: Operational Hubs Grid */}
            <div className="lg:col-span-7">
              <div className="bg-[#071524] rounded-lg p-6 sm:p-8 border border-slate-800 shadow-2xl">
                <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D9A441]" />
                  <span>Primary Ports & Supported Waters</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siteConfig.operationalHubs.map((hub) => (
                    <div
                      key={hub.name}
                      className="p-3.5 rounded-sm bg-white/5 border border-slate-800/80 flex items-start gap-3 hover:bg-white/10 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#167D91] shrink-0 mt-1.5" />
                      <div>
                        <p className="text-sm font-semibold text-white leading-tight">
                          {hub.name}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Region: {hub.state}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Fast mobilization & permit expediting</span>
                  <span className="text-[#D9A441] font-medium">NIMASA / NPA Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES SERVED */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Target Sectors"
            title="Industries We Support"
            description="Specialized maritime support engineered for the demanding standards of commercial shipping, offshore exploration, and marine construction."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {siteConfig.targetIndustries.map((ind) => {
              const Icon = industryIcons[ind.icon] || Ship;
              return (
                <div
                  key={ind.title}
                  className="p-6 rounded-md bg-[#F3F6F8] border border-slate-200 hover:border-[#167D91] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#0B1F33] text-[#D9A441] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0B1F33] mb-3">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-[#596979] leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. SAFETY & COMPLIANCE SECTION */}
      <section className="py-20 bg-[#F3F6F8] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#167D91]">
                  <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                  <span>HSE & Regulatory Standards</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1F33]">
                  Committed to Zero Compromise on Maritime Safety
                </h3>
                <p className="text-sm sm:text-base text-[#596979] leading-relaxed">
                  Every vessel movement, dive inspection, bunkering transfer, and provision delivery performed by Asanti Shores Limited is conducted under structured Health, Safety, and Environment (HSE) risk assessments. We ensure personnel wear approved PPE and operations abide by NIMASA and NPA statutory guidelines.
                </p>
                <div className="pt-2 flex flex-wrap gap-6 text-xs text-[#0B1F33] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    STCW-Compliant Seafarers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    IMO ISM & ISPS Guidance
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Environmental Coastal Stewardship
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Button href="/safety-compliance" variant="navy" size="lg">
                  Read Safety Policies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. COMPANY PROFILE DOWNLOAD SECTION */}
      {siteConfig.downloads.hasProfilePdf && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg p-8 sm:p-10 bg-gradient-to-r from-[#0B1F33] to-[#122B45] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                  <FileCheck className="w-4 h-4" />
                  <span>Verified Corporate Information</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  Download Official Company Profile
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Access our verified company registration particulars (RC: {siteConfig.rcNumber}), service capabilities, equipment directory, and compliance commitments in a single document.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={siteConfig.downloads.profilePdfUrl}
                  download="asanti-shores-company-profile.pdf"
                  className="inline-flex items-center gap-2 bg-[#D9A441] text-[#0B1F33] hover:bg-[#C49132] font-bold text-sm px-6 py-3.5 rounded-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Profile (PDF)</span>
                </a>
                <Link
                  href="/company-profile"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3.5 rounded-sm border border-slate-700 transition-colors"
                >
                  <span>Explore Online Dossier</span>
                  <ArrowRight className="w-4 h-4 text-[#D9A441]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10. CONVERSION BANNER */}
      <section className="relative py-20 lg:py-24 bg-[#071524] text-white overflow-hidden border-t border-slate-800">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold uppercase tracking-widest">
            <span>Direct Commercial Coordination</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Looking for a Reliable Marine Services Partner?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your vessel, supply or logistics requirements and our operations team will direct your enquiry appropriately with clear pricing and delivery commitments.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/request-a-quote" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-slate-400 text-white hover:bg-white hover:text-[#0B1F33] hover:border-white"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
