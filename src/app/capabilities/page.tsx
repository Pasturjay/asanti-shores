import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Ship,
  Anchor,
  Wrench,
  Fuel,
  LifeBuoy,
  Compass,
  Navigation,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Users,
  HardHat,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Marine Capabilities & Fleet Logistics | Nigerian Ports",
  description:
    "Explore Asanti Shores Limited marine capabilities: harbor and ocean tugboats, cargo barges, diving services, salvage, passenger craft repairs, and port logistics across Nigeria.",
};

export default function CapabilitiesPage() {
  const breadcrumbs = [{ label: "Capabilities", href: "/capabilities" }];

  const vesselCategories = [
    {
      title: "Tugboats (Harbor & Ocean Towage)",
      specs: "BHP range up to 4,000+ BHP • Twin Screw & Azimuth Stern Drive (ASD) arrangements",
      scope:
        "Berthing assistance, coastal barge towing, rig moves, and emergency standby towage in Lagos, Onne, and Delta waterways.",
      status: "Operational Fleet",
      image: "/images/projects/project-3.png",
      icon: Compass,
    },
    {
      title: "Deck Cargo & Ramp Barges",
      specs: "Deadweight capacity 1,000 – 5,000 DWT • Flat top and spud barge configurations",
      scope:
        "Transport of heavy machinery, tubulars, containers, aggregate, and scrap metal between Kirikiri, Warri, and offshore locations.",
      status: "Charter Fleet",
      image: "/images/projects/project-11.png",
      icon: Ship,
    },
    {
      title: "Crew Transfer Vessels (CTV) & Speed Boats",
      specs: "High-speed monohull & catamaran hulls • Passenger capacity 12 – 40 personnel",
      scope:
        "Safe crew rotation, superintendent transport, offshore field logistics, passenger ferry repair, and security liaison in coastal waters.",
      status: "Operational Fleet",
      image: "/images/projects/project-4.png",
      icon: Navigation,
    },
    {
      title: "Commercial Diving & Subsea Spreads",
      specs: "Surface-supplied air diving panels, high-pressure compressors, hydraulic rotary brushes",
      scope:
        "Class In-Water Surveys (IWS), hull cleaning, propeller polishing, underwater welding, and oxy-arc burning operations.",
      status: "Subsea Division",
      image: "/images/projects/project-2.png",
      icon: LifeBuoy,
    },
    {
      title: "Marine Salvage & Wreck Removal Gear",
      specs: "Heavy crane barges, salvage pumps, dewatering equipment, lifting rigging",
      scope:
        "Rigging and recovery of sunken hulls, channel clearance, and scrap metal dismantling in Nigerian ports.",
      status: "Specialized Plant",
      image: "/images/projects/project-1.png",
      icon: Wrench,
    },
    {
      title: "Water & Fuel Bunker Barges",
      specs: "Certified tanks with calibrated flow meters and discharge booster pumps",
      scope:
        "Delivery of fresh potable water and marine gas oil (MGO) directly to vessels at berth or offshore anchorage.",
      status: "Supply Network",
      image: "/images/projects/project-15.png",
      icon: Fuel,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative bg-[#071524] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/project-3.png"
            alt="Asanti Shores Limited tugboat and marine logistics fleet"
            fill
            priority
            className="object-cover opacity-20 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071524] via-[#0B1F33]/90 to-[#071524]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />

          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Operational Scope</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Marine Capabilities & Operational Resources
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Delivering verified marine logistics, commercial diving, salvage, vessel husbanding, and port turnaround execution across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Fleet & Marine Logistics Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Marine Assets & Charter Logistics"
            title="Vessel Support & Charter Capabilities"
            description="Through our managed network and strategic vessel charter partners, Asanti Shores Limited provides commercial chartering and dispatch of fit-for-purpose maritime assets in Nigerian territorial waters."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {vesselCategories.map((vessel) => {
              const Icon = vessel.icon;
              return (
                <div
                  key={vessel.title}
                  className="rounded-lg border border-slate-200/90 bg-[#F3F6F8] hover:border-[#167D91] transition-all overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div className="relative h-48 w-full bg-slate-900">
                    <Image
                      src={vessel.image}
                      alt={vessel.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-xs bg-[#0B1F33]/90 text-[#D9A441] border border-slate-700">
                      {vessel.status}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#0B1F33]">
                        {vessel.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#167D91] mt-1">
                        {vessel.specs}
                      </p>
                      <p className="text-xs sm:text-sm text-[#596979] leading-relaxed mt-2">
                        {vessel.scope}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80">
                      <Link
                        href={`/request-a-quote?service=${encodeURIComponent(vessel.title)}`}
                        className="text-xs font-bold uppercase tracking-wider text-[#167D91] hover:text-[#0B1F33] inline-flex items-center gap-1"
                      >
                        <span>Charter or Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-sm bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
            <span className="font-bold shrink-0">Vessel Charter Transparency:</span>
            <span>
              All vessel charter engagements are confirmed with verified inspection reports, valid class certifications, and statutory NIMASA/NPA permits prior to commercial contract execution.
            </span>
          </div>
        </div>
      </section>

      {/* 2. Real Delivered Field Projects Section */}
      <section className="py-20 bg-[#F3F6F8] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Real-World Performance"
            title="Field Operations & Delivered Contracts"
            description="View documented photographic records of our maritime jobs completed on Nigerian waterways, including subsea diving, channel salvage, passenger ferry repairs, and cargo barging."
            align="center"
          />

          <ProjectsShowcase />
        </div>
      </section>

      {/* 3. Strategic Port Coverage Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Port Network & Bases"
            title="Comprehensive Nigerian Port & Terminal Coverage"
            description="Our operations coordinators maintain active local relationships across commercial port complexes, coastal channels, and offshore transshipment anchorages."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {siteConfig.operationalHubs.map((hub) => (
              <div
                key={hub.name}
                className="bg-[#F3F6F8] p-6 rounded-md border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#167D91]/10 text-[#167D91] flex items-center justify-center mb-3">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#0B1F33] mb-1">
                    {hub.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">Region: {hub.state}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-[#596979]">
                  Available: Chandling • Diving • Crew • Bunkering • Tugs
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Personnel & Operational Standards */}
      <section className="py-20 bg-[#F3F6F8] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Human Capital & Standards"
            title="Qualified Marine Personnel & Technical Supervisors"
            description="Our marine services are underpinned by experienced professionals with hands-on command of Nigerian coastal waterways and international maritime standards."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-center">
            {/* Left: MD & Staff Portrait Feature */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-3/4 sm:aspect-4/5 rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
                <Image
                  src="/images/team/team-3.png"
                  alt="Asanti Shores Limited Managing Director and Field Operations Executives at corporate facility entrance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-[#0B1F33]/95 backdrop-blur-xs border border-slate-700 text-white space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9A441]">
                    Field Leadership & Management
                  </span>
                  <h4 className="font-heading font-bold text-sm text-white">
                    Managing Director & Operations Supervision
                  </h4>
                  <p className="text-xs text-slate-300">
                    Direct on-the-ground presence across Lagos ports, Defense Jetty Marina, and offshore terminal transfers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Capabilities & Full Crew Banner */}
            <div className="lg:col-span-7 space-y-6">
              {/* Full Crew Banner */}
              <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <Image
                  src="/images/team/team-1.png"
                  alt="Asanti Shores Limited Operations Personnel in official branded PPE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0B1F33]/90 text-[#D9A441] border border-slate-700 text-xs font-bold uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5" />
                    <span>Dedicated Technical Workforce</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold text-white">
                    Field-ready supervisors, riggers, and vessel coordinators in certified company work gear.
                  </p>
                </div>
              </div>

              {/* Verified Competencies */}
              <div className="space-y-3.5 text-sm text-[#596979] bg-white p-6 rounded-lg border border-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1F33] block">STCW-Certified Officers & Seafarers:</strong>
                    All vessel crew candidates hold valid medical fitness and STCW certifications verified through maritime authorities.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1F33] block">Class-Certified Commercial Divers:</strong>
                    Underwater hull cleaning, subsea oxy-arc cutting, and CCTV in-water surveys performed by certified diving teams.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1F33] block">Dedicated Port Liaisons:</strong>
                    Direct representation with Nigerian Customs, NIMASA, NPA, and Port Health for streamlined turnarounds.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/request-a-quote" variant="primary" size="md">
                  Request Capability Proposal
                </Button>
                <Button href="/about" variant="outline" size="md">
                  Meet Our Leadership & Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#0B1F33] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Verify Specific Equipment or Vessel Availability
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Contact our operations coordinators with your specific project scope, tug BHP requirement, or commercial dive window.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/request-a-quote" variant="primary" size="lg">
              Submit Operational Enquiry
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-slate-400 text-white hover:bg-white hover:text-[#0B1F33]"
            >
              Speak with Marine Coordinators
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
