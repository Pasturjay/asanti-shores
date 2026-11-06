import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  HardHat,
  Award,
  ArrowRight,
  Anchor,
  Compass,
} from "lucide-react";
import { teamData } from "@/config/team";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TeamSectionProps {
  showFullGallery?: boolean;
  theme?: "light" | "gray";
}

export function TeamSection({ showFullGallery = true, theme = "light" }: TeamSectionProps) {
  const md = teamData.executiveLeadership[0];
  const bgClass = theme === "gray" ? "bg-[#F3F6F8]" : "bg-white";

  return (
    <section className={`py-20 lg:py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our People & Leadership"
          title="Experienced Marine Executives & Certified Technical Field Crew"
          description="At Asanti Shores Limited, our operations are led by hands-on directors and executed by trained, safety-first personnel wearing official company PPE across every Nigerian port call and offshore task."
          align="center"
        />

        {/* 1. EXECUTIVE LEADERSHIP SPOTLIGHT (MANAGING DIRECTOR & OPERATIONS EXECUTIVES) */}
        <div className="mt-14 bg-gradient-to-br from-[#0B1F33] via-[#0E2844] to-[#071524] rounded-xl overflow-hidden shadow-2xl border border-slate-700 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* MD Image Column */}
            <div className="lg:col-span-5 relative h-96 sm:h-[480px] lg:h-full min-h-[440px] bg-slate-900 overflow-hidden">
              <Image
                src={md.image}
                alt={md.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0B1F33]" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#D9A441] text-[#0B1F33] text-xs font-bold uppercase tracking-wider shadow-md">
                  <Award className="w-3.5 h-3.5" />
                  <span>Executive Leadership</span>
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-sm bg-[#0B1F33]/90 backdrop-blur-xs border border-slate-700 text-xs text-slate-300 lg:hidden">
                <strong className="text-white block font-heading text-sm mb-0.5">
                  Managing Director & Field Executives
                </strong>
                Pictured at Asanti Shores Limited corporate facility entrance
              </div>
            </div>

            {/* MD Editorial Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D9A441]">
                  <Anchor className="w-4 h-4" />
                  <span>Managing Director & Operations Oversight</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  Hands-On Field Leadership Across Nigerian Territorial Waters
                </h3>
                <p className="text-xs font-semibold text-[#167D91] uppercase tracking-wider">
                  Corporate Registration RC: 7277685 • Lagos Operational Bases
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {md.bio} Under the Managing Director&apos;s direct leadership, Asanti Shores Limited combines international maritime compliance with practical on-the-ground execution power, overseeing harbor logistics, offshore bunkering, vessel husbanding, and subsea diving spreads with zero compromise on safety.
              </p>

              {/* Leadership Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {md.credentials.map((cred) => (
                  <div
                    key={cred}
                    className="flex items-center gap-2.5 p-3 rounded-sm bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                    <span className="font-medium">{cred}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span>Direct Operations Liaison: </span>
                  <strong className="text-white">Kirikiri & Defense Jetty, Marina</strong>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D9A441] hover:text-white transition-colors"
                >
                  <span>Connect with Operations Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FULL OPERATIONS CREW BANNER (GROUP PHOTO IN BRANDED PPE) */}
        {showFullGallery && (
          <div className="mt-14 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[380px] bg-slate-900 overflow-hidden">
                <Image
                  src={teamData.groupGalleries[0].image}
                  alt={teamData.groupGalleries[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0B1F33]/90 text-[#D9A441] border border-slate-700 text-xs font-bold uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5" />
                    <span>On-Ground Operations Team</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167D91]">
                  <HardHat className="w-4 h-4 text-[#D9A441]" />
                  <span>Unified Company PPE & Gear</span>
                </div>
                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1F33] leading-snug">
                  {teamData.groupGalleries[0].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#596979] leading-relaxed">
                  {teamData.groupGalleries[0].caption} Every team member is equipped with high-visibility retroreflective workwear, impact hardhats, and steel-toe marine footwear, fostering an uncompromising culture of safety and professionalism across all operations.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#0B1F33]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    100% PPE Compliance
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Stop Work Authority
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    24/7 Field Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. TECHNICAL & OPERATIONAL OFFICERS GRID */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#167D91] block mb-1">
                Field Supervisors & Technical Specialists
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33]">
                Operational Personnel in Action
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Our supervisors and officers maintain continuous communication with port terminals, marine pilots, and vessel superintendents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamData.operationalCrew.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#167D91] transition-all duration-300 flex flex-col group"
              >
                {/* Officer Portrait */}
                <div className="relative aspect-3/4 sm:aspect-2/3 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#D9A441]">
                      {member.department}
                    </p>
                    <h4 className="font-heading font-bold text-sm text-white leading-tight">
                      {member.role}
                    </h4>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#F8FAFC]">
                  <p className="text-xs text-[#596979] leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="pt-2 border-t border-slate-200 text-[11px] text-[#167D91] font-semibold flex items-center justify-between">
                    <span>Field Ready</span>
                    <span className="text-[#0B1F33]">Lagos & Delta</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FIELD DEPLOYMENT & BRIEFING DUO SHOWCASE */}
        {showFullGallery && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamData.groupGalleries.slice(1).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:border-[#D9A441] transition-all"
              >
                <div className="relative h-56 w-full bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white px-2.5 py-1 rounded-xs bg-[#0B1F33]/90 border border-slate-700">
                    {item.title}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#596979] leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
