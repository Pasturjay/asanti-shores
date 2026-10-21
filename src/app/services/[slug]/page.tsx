import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CheckCircle2,
  AlertCircle,
  MapPin,
  ShieldCheck,
  FileText,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ServiceFaqAccordion } from "@/components/services/ServiceFaqAccordion";
import { deliveredProjects } from "@/config/projects";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Marine Services Nigeria`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} - ${siteConfig.name}`,
      description: service.shortDescription,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.altText,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  const categoryMap: Record<string, string[]> = {
    "underwater-services": ["underwater", "salvage"],
    "tugboats-barges-hire": ["tugs-barges", "salvage"],
    "service-boats-logistics": ["ferry-speedboats", "site-operations"],
    "marine-equipment-supply": ["underwater", "tugs-barges"],
    "ship-crew-management": ["site-operations", "ferry-speedboats"],
    "bunker-fresh-water-supply": ["tugs-barges", "site-operations"],
    "ship-chandling": ["tugs-barges", "ferry-speedboats"],
  };

  const matchingCategories = categoryMap[service.slug] || ["site-operations"];
  const relatedProjects = deliveredProjects
    .filter((p) => matchingCategories.includes(p.category))
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. SERVICE HERO SECTION */}
      <section className="relative bg-[#071524] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.altText}
            fill
            priority
            className="object-cover opacity-25 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071524] via-[#0B1F33]/90 to-[#071524]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />

          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Marine Capabilities</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-medium mb-3">
              {service.heroHeadline}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {service.heroSubheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                href={`/request-a-quote?service=${encodeURIComponent(service.title)}`}
                variant="primary"
                size="md"
              >
                Request a Quote for this Service
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="md"
                className="border-slate-400 text-white hover:bg-white hover:text-[#0B1F33]"
              >
                Direct Ops Liaison
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN SERVICE CONTENT & SIDEBAR */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Overview */}
              <div>
                <h2 className="font-heading font-extrabold text-2xl text-[#0B1F33] mb-4">
                  Service Overview
                </h2>
                <div className="space-y-4 text-base text-[#596979] leading-relaxed">
                  {service.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Scope of Work */}
              <div className="p-8 rounded-lg bg-[#F3F6F8] border border-slate-200/90">
                <h3 className="font-heading font-bold text-xl text-[#0B1F33] mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#167D91]" />
                  <span>Comprehensive Scope of Work</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.scopeOfWork.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0 mt-1" />
                      <span className="text-sm text-[#17212B] leading-relaxed font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Capabilities & Equipment Standards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Capabilities */}
                <div className="border border-slate-200 rounded-md p-6">
                  <h4 className="font-heading font-bold text-lg text-[#0B1F33] mb-3 text-[#167D91]">
                    Operational Capabilities
                  </h4>
                  <ul className="space-y-2.5 text-sm text-[#596979]">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#167D91] shrink-0 mt-2" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Standards & Guidelines */}
                <div className="border border-slate-200 rounded-md p-6">
                  <h4 className="font-heading font-bold text-lg text-[#0B1F33] mb-3 text-[#D9A441]">
                    Standards & Regulatory Rules
                  </h4>
                  <ul className="space-y-2.5 text-sm text-[#596979]">
                    {service.equipmentStandards.map((std) => (
                      <li key={std} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] shrink-0 mt-2" />
                        <span>{std}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Typical Customer Requirements */}
              <div className="border border-slate-200 rounded-md p-6 bg-white">
                <h3 className="font-heading font-bold text-lg text-[#0B1F33] mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#D9A441]" />
                  <span>Information Required for Quotation / Mobilization</span>
                </h3>
                <p className="text-xs text-[#596979] mb-4">
                  To provide an accurate, fast turnaround proposal, our operations team requests the following details:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#17212B]">
                  {service.customerRequirements.map((req) => (
                    <div key={req} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#167D91] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geographic Operational Coverage */}
              <div className="p-6 rounded-md bg-[#0B1F33] text-white">
                <h3 className="font-heading font-bold text-lg mb-2 flex items-center gap-2 text-[#D9A441]">
                  <MapPin className="w-5 h-5" />
                  <span>Geographic Coverage in Nigeria</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.operationalCoverage}
                </p>
              </div>

              {/* Related Field Deliveries & Real Operational Proof */}
              {relatedProjects.length > 0 && (
                <div className="pt-2">
                  <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33] mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#167D91]" />
                    <span>Delivered Projects & Field Proof</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedProjects.map((proj) => (
                      <div
                        key={proj.id}
                        className="rounded-md border border-slate-200 overflow-hidden bg-[#F3F6F8] flex flex-col justify-between group hover:border-[#167D91] transition-all"
                      >
                        <div className="relative h-44 w-full bg-slate-900">
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />
                          <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 rounded-xs text-[#D9A441] text-[10px] font-bold uppercase tracking-wider">
                            {proj.location}
                          </span>
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <h4 className="font-heading font-bold text-sm text-[#0B1F33] leading-snug mb-1">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-[#596979] line-clamp-2">
                            {proj.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="pt-6">
                  <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33] mb-4 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-[#167D91]" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <ServiceFaqAccordion faqs={service.faqs} />
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Request a Quote Card */}
              <div className="sticky top-28 bg-[#0B1F33] text-white rounded-lg p-6 sm:p-8 shadow-xl border border-slate-700 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                    Direct Engagement
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white mt-1">
                    Book {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Submit your vessel particulars, port arrival dates, or specification list for an itemized commercial proposal.
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    href={`/request-a-quote?service=${encodeURIComponent(service.title)}`}
                    variant="primary"
                    size="lg"
                    className="w-full text-center"
                  >
                    Request a Quote
                  </Button>
                </div>

                {/* Direct Contact Links */}
                <div className="pt-6 border-t border-slate-700/80 space-y-3 text-xs">
                  <p className="text-slate-400 font-medium">Or speak directly with Operations:</p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-[#D9A441] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D9A441]" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-[#D9A441] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#167D91]" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>

                {/* Related Services */}
                {service.relatedServices && service.relatedServices.length > 0 && (
                  <div className="pt-6 border-t border-slate-700/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9A441] mb-3">
                      Related Capabilities
                    </h4>
                    <div className="space-y-3">
                      {service.relatedServices.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/services/${rel.slug}`}
                          className="block p-3 rounded-sm bg-white/5 hover:bg-white/10 transition-colors border border-slate-700/50 group"
                        >
                          <p className="text-xs font-bold text-white group-hover:text-[#D9A441] transition-colors">
                            {rel.title}
                          </p>
                          <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                            {rel.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Strip */}
      <section className="py-12 bg-[#F3F6F8] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-lg text-[#0B1F33]">
              Need other maritime support for this port call?
            </h3>
            <p className="text-xs sm:text-sm text-[#596979]">
              We bundle ship husbanding, fresh provisions, certified crewing, and tugboat assistance under single port agency coordination.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button href="/services" variant="navy" size="md">
              View All Services
            </Button>
            <Button
              href={`/request-a-quote?service=${encodeURIComponent(service.title)}`}
              variant="primary"
              size="md"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
