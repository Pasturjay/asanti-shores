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
