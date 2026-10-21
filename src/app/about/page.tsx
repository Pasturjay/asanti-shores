import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  Anchor,
  Ship,
  ArrowRight,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Asanti Shores Limited | Maritime Services & Logistics",
  description:
    "Learn about Asanti Shores Limited, an incorporated Nigerian maritime support company providing reliable ship management, chandling, equipment supply, and offshore logistics.",
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Us", href: "/about" }];

  const coreValues = [
    {
      title: "Operational Reliability",
      description:
        "Disciplined execution across all Nigerian ports, ensuring on-time vessel provisioning, prompt turnaround, and clear status updates.",
    },
    {
      title: "Safety & Statutory Integrity",
      description:
        "Strict adherence to NIMASA guidelines, the Nigerian Cabotage Act, and international IMO safety and environmental protocols.",
    },
    {
      title: "Client-Centric Responsiveness",
      description:
        "Direct 24/7 coordination point-of-contact for vessel masters, fleet managers, and procurement officers navigating Nigerian waters.",
    },
    {
      title: "Transparent Commercial Practice",
      description:
        "Clear, itemized proposals with honest communication regarding port conditions, documentation lead times, and logistical requirements.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative bg-[#071524] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2000&q=80"
            alt="Commercial port logistics and shipping vessels"
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
              <span>Corporate Profile</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              About Asanti Shores Limited
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              A trusted Nigerian marine services and logistics company dedicated to delivering dependable vessel support, equipment supply, and technical assistance across Nigerian coastal waters and offshore fields.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Company Overview"
                title="Dedicated Marine Support for Demanding Operations"
                description="Engineered to meet the stringent expectations of international shipping lines, commercial vessel owners, and offshore energy companies operating in Nigeria."
                align="left"
              />

              <div className="space-y-4 text-base text-[#596979] leading-relaxed">
                <p>
                  <strong className="text-[#0B1F33]">{siteConfig.legalName}</strong> is an incorporated Nigerian maritime support company (RC: {siteConfig.rcNumber}) with operational headquarters located in Kirikiri Town, Lagos.
                </p>
                <p>
                  The company was established to bridge the gap between international maritime standards and local operational realities in Nigeria. We understand that vessel demurrage and downtime in coastal ports represent significant commercial costs. Our mission is to streamline port turnarounds through disciplined coordination, verified supplies, and proactive liaison with port authorities.
                </p>
                <p>
                  From ship chandling and STCW crew facilitation to offshore bunkering coordination and tugboat charter, we provide our clients with a single reliable partner on the ground in Lagos, Port Harcourt, Onne, and Warri.
                </p>
              </div>

              {/* Corporate Identity Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-sm bg-[#F3F6F8] border border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold mb-1">
                    Incorporation
                  </span>
                  <span className="font-heading font-extrabold text-sm text-[#0B1F33]">
                    Jan 12, 2023
                  </span>
                </div>
                <div className="p-4 rounded-sm bg-[#F3F6F8] border border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold mb-1">
                    Registration
                  </span>
                  <span className="font-heading font-extrabold text-sm text-[#0B1F33]">
                    RC: {siteConfig.rcNumber}
                  </span>
                </div>
                <div className="p-4 rounded-sm bg-[#F3F6F8] border border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold mb-1">
                    Operating Hub
                  </span>
                  <span className="font-heading font-extrabold text-sm text-[#0B1F33]">
                    Kirikiri Town, Lagos
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Feature */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 rounded-lg overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                  alt="Maritime vessel operations and navigation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-sm bg-[#0B1F33]/95 border border-slate-700 text-white space-y-2">
                  <h4 className="font-heading font-bold text-base text-[#D9A441]">
                    Operational Integrity
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We strictly uphold Nigerian local content provisions and statutory Cabotage requirements, ensuring seamless clearance with NIMASA and Nigerian Ports Authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F3F6F8] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200/90 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#0B1F33] text-[#D9A441] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33]">
                Our Mission
              </h3>
              <p className="text-base text-[#596979] leading-relaxed">
                To deliver dependable, safety-compliant, and cost-effective maritime services, vessel husbanding, and logistics solutions for shipping lines, vessel owners, and offshore energy operators across Nigerian waters, safeguarding vessel assets and turn-around timelines through proactive coordination.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200/90 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#167D91] text-white flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33]">
                Our Vision
              </h3>
              <p className="text-base text-[#596979] leading-relaxed">
                To be recognised as one of Nigeria’s most trusted and responsive maritime support contractors, respected by international ship owners and charterers for operational transparency, uncompromising safety standards, and local execution excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guiding Principles"
            title="Our Core Values"
            description="The principles that govern our client relationships, operational procedures, and field execution."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-md bg-[#F3F6F8] border border-slate-200/80 hover:border-[#167D91] transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-[#D9A441] mb-4" />
                <h4 className="font-heading font-bold text-lg text-[#0B1F33] mb-2">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#596979] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#0B1F33] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Partner With a Proven Nigerian Maritime Contractor
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Contact our operations team to discuss your upcoming port calls, offshore supply needs, or long-term charter coordination.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/request-a-quote" variant="primary" size="lg">
              Request a Commercial Quote
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-slate-400 text-white hover:bg-white hover:text-[#0B1F33]"
            >
              Contact Operations Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
