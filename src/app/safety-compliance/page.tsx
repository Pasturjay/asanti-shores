import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  LifeBuoy,
  Leaf,
  Scale,
  Award,
  HardHat,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Safety, HSE & Cabotage Compliance | Maritime Standards Nigeria",
  description:
    "Review Asanti Shores Limited Health, Safety & Environment (HSE) policy, Cabotage Act adherence, NIMASA alignment, and maritime safety standards in Nigeria.",
};

export default function SafetyCompliancePage() {
  const breadcrumbs = [{ label: "Safety & Compliance", href: "/safety-compliance" }];

  const safetyPillars = [
    {
      title: "Personnel Safety & Zero Compromise",
      description:
        "Every operation—from small boat crew transfers to underwater hull inspection—is conducted under mandatory PPE compliance and thorough pre-task safety risk assessments.",
      icon: ShieldCheck,
    },
    {
      title: "Statutory Cabotage & Local Content",
      description:
        "We are fully committed to Nigerian maritime content development, operating within the provisions of the Coastal and Inland Shipping (Cabotage) Act and NIMASA regulations.",
      icon: Scale,
    },
    {
      title: "Environmental Protection (MARPOL)",
      description:
        "Strict operational protocols for bunker bunkering and vessel maintenance to prevent accidental oil discharge, chemical contamination, or improper waste disposal in Nigerian coastal waters.",
      icon: Leaf,
    },
    {
      title: "Seafarer Welfare & MLC 2006",
      description:
        "Our crewing management strictly abides by Maritime Labour Convention principles regarding fair contracts, verified medical fitness, and adequate rest periods for deployed personnel.",
      icon: LifeBuoy,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative bg-[#071524] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80"
            alt="Safety-conscious maritime crew and offshore vessel"
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
              <span>HSE & Regulatory Framework</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Safety, Compliance & Operational Integrity
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              At Asanti Shores Limited, safety is the foundation of every marine operation. We ensure complete alignment with Nigerian statutory regulations and international maritime guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Core Safety Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="HSE Principles"
            title="The Core Pillars of Our Operational Standards"
            description="Our structured management framework ensures risk mitigation across all vessel movements, bunkering supplies, and coastal harbor activities."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {safetyPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 rounded-lg bg-[#F3F6F8] border border-slate-200/80 hover:border-[#167D91] transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#0B1F33] text-[#D9A441] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0B1F33]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#596979] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Alignment Details */}
      <section className="py-20 bg-[#F3F6F8] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="National & Global Frameworks"
                title="Strict Compliance with Maritime Authorities"
                description="Our operational guidelines align directly with Nigerian statutory bodies and international standards."
                align="left"
              />

              <div className="space-y-4 text-sm text-[#596979]">
                <div className="p-4 bg-white rounded-md border border-slate-200">
                  <h4 className="font-heading font-bold text-[#0B1F33] text-base mb-1">
                    NIMASA (Nigerian Maritime Administration & Safety Agency)
                  </h4>
                  <p className="text-xs text-[#596979]">
                    Strict adherence to flag state regulations, mandatory port clearances, seafarer certificate verification, and marine safety protocols.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-md border border-slate-200">
                  <h4 className="font-heading font-bold text-[#0B1F33] text-base mb-1">
                    NPA (Nigerian Ports Authority) Operational Protocols
                  </h4>
                  <p className="text-xs text-[#596979]">
                    Coordinated vessel berthing, channel pilotage compliance, and lighter terminal safety standards at Lagos, Onne, and Warri.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-md border border-slate-200">
                  <h4 className="font-heading font-bold text-[#0B1F33] text-base mb-1">
                    IMO ISM / ISPS Security & Safety Culture
                  </h4>
                  <p className="text-xs text-[#596979]">
                    Guidance aligned with the International Safety Management code and International Ship and Port Facility Security requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-lg border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33] flex items-center gap-2">
                <FileCheck className="w-6 h-6 text-[#167D91]" />
                <span>Our HSE Policy Statement</span>
              </h3>

              <div className="space-y-4 text-sm text-[#596979] leading-relaxed">
                <p>
                  Asanti Shores Limited is committed to conducting all marine support, vessel hire, bunkering coordination, and technical supply operations in a manner that protects the health and safety of our workforce, our clients’ personnel, and the marine environment.
                </p>
                <p>
                  We believe that all maritime accidents and environmental incidents are preventable through structured hazard identification, strict adherence to operating procedures, and personal accountability.
                </p>
                <p>
                  Every member of our operational team possesses the authority and obligation to intervene and stop work whenever an unsafe condition or procedural violation is identified.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#596979]">
                <span>Document: ASL-HSE-POL-01</span>
                <span className="font-semibold text-[#0B1F33]">Reviewed Annually</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field PPE Standards & On-Site Safety Culture */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Safety In Action"
            title="Field PPE Compliance & On-Site Operational Rigor"
            description="Our safety commitment is demonstrated daily in the field. From our Managing Director to frontline riggers and commercial divers, every team member adheres to 100% Personal Protective Equipment (PPE) standards across all Nigerian terminals."
            align="center"
          />

          {/* Featured Field PPE Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-center">
            {/* Left: Officer Full-Length PPE Portrait */}
            <div className="lg:col-span-4 relative aspect-3/4 sm:aspect-4/5 rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
              <Image
                src="/images/team/team-4.png"
                alt="Asanti Shores Limited Field Operations Officer in full standard-issue personal protective equipment (PPE)"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-[#0B1F33]/95 backdrop-blur-xs border border-slate-700 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9A441]">
                  Field Verification
                </span>
                <h4 className="font-heading font-bold text-sm text-white">
                  Standard-Issue Field PPE
                </h4>
                <p className="text-[11px] text-slate-300">
                  Branded high-vis vest, ANSI impact hardhat, eye protection, and safety footwear mandatory on all jetties.
                </p>
              </div>
            </div>

            {/* Right: Operations Team Group in PPE + Protocol Checklist */}
            <div className="lg:col-span-8 space-y-6">
              {/* Group Banner */}
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <Image
                  src="/images/team/team-1.png"
                  alt="Asanti Shores Limited Managing Director and staff in company safety vests and hardhats"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0B1F33]/90 text-[#D9A441] border border-slate-700 text-xs font-bold uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5" />
                    <span>Managing Director & Operations Staff</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold tracking-wide text-white">
                    Asanti Shores Limited Field Workforce — Defense Jetty, Marina & Kirikiri Base
                  </p>
                </div>
              </div>

              {/* PPE Standards Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg bg-[#F3F6F8] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                    <HardHat className="w-4 h-4 text-[#D9A441]" />
                    <span>High-Visibility & Head Protection</span>
                  </div>
                  <p className="text-xs text-[#596979] leading-relaxed">
                    Custom retroreflective Class 2/3 company vests with reinforced utility storage, paired with industrial impact-absorbing safety hardhats conforming to ANSI Z89.1 / EN 397.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-[#F3F6F8] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                    <ShieldCheck className="w-4 h-4 text-[#167D91]" />
                    <span>Empowered Stop Work Authority</span>
                  </div>
                  <p className="text-xs text-[#596979] leading-relaxed">
                    Zero compromise: every supervisor, deckhand, and commercial diver has full authority to pause operations immediately upon identifying non-compliant gear or sea condition hazards.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-[#F3F6F8] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Mandatory Tool Box Talks (TBT)</span>
                  </div>
                  <p className="text-xs text-[#596979] leading-relaxed">
                    Prior to vessel boarding, bunkering hookup, or diving launch, a formal briefing is documented with weather assessment, PPE inspection, and emergency evacuation drills.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-[#F3F6F8] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                    <Award className="w-4 h-4 text-[#D9A441]" />
                    <span>NIMASA & Port Health Alignment</span>
                  </div>
                  <p className="text-xs text-[#596979] leading-relaxed">
                    All crew deployments undergo verified medical screening, yellow card health clearances, and valid STCW endorsements verified against statutory maritime databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#0B1F33] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Questions on Our Safety or Compliance Credentials?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Our compliance liaison is available to discuss client safety questionnaires, audit requirements, or port authority documentation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" variant="primary" size="lg">
              Contact Compliance Desk
            </Button>
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
