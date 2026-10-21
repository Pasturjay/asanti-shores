import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Phone,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Marine Services & Offshore Support Directory",
  description:
    "Comprehensive maritime capabilities in Nigeria: ship & crew management, ship chandling, equipment supply, bunker fuel, underwater services, tugboats, and service boats.",
};

export default function ServicesPage() {
  const breadcrumbs = [{ label: "Services", href: "/services" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Services Hero Header */}
      <section className="relative bg-[#071524] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
            alt="Commercial cargo vessel and marine logistics"
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
              <span>Maritime Services Directory</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Integrated Marine Services & Vessel Support
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Discover our seven dedicated service divisions engineered to support commercial shipping lines, vessel charterers, offshore contractors, and oil & gas operations across Nigerian ports.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="bg-white rounded-lg overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Image Column */}
                    <div
                      className={`lg:col-span-5 relative min-h-[280px] lg:min-h-full ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.altText}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/60 via-transparent to-transparent lg:hidden" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-[#0B1F33]/90 text-[#D9A441] border border-slate-700 text-xs font-bold rounded-xs">
                        Service 0{index + 1}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1F33] mb-3">
                          {service.title}
                        </h2>
                        <p className="text-sm sm:text-base text-[#596979] leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#167D91] mb-3">
                            Key Capabilities & Scope:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#17212B]">
                            {service.scopeOfWork.slice(0, 4).map((scope) => (
                              <div key={scope} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                                <span className="line-clamp-2">{scope}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 font-heading font-bold text-sm text-[#0B1F33] hover:text-[#167D91] transition-colors"
                        >
                          <span>Full Scope & Specifications</span>
                          <ArrowRight className="w-4 h-4 text-[#D9A441]" />
                        </Link>

                        <Button
                          href={`/request-a-quote?service=${encodeURIComponent(service.title)}`}
                          variant="primary"
                          size="sm"
                        >
                          Request a Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Assurance Strip */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-md bg-[#F3F6F8] border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-[#167D91] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0B1F33] mb-2">
                Cabotage & Statutory Alignment
              </h3>
              <p className="text-xs text-[#596979] leading-relaxed">
                All crew, bunkering, and vessel hire engagements comply strictly with the Nigerian Cabotage Act, NIMASA certifications, and NPA protocols.
              </p>
            </div>

            <div className="p-6 rounded-md bg-[#F3F6F8] border border-slate-200">
              <Phone className="w-8 h-8 text-[#D9A441] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0B1F33] mb-2">
                24/7 Operational Availability
              </h3>
              <p className="text-xs text-[#596979] leading-relaxed">
                Marine port coordination desks active around the clock for vessel masters, fleet schedulers, and emergency spares dispatch.
              </p>
            </div>

            <div className="p-6 rounded-md bg-[#F3F6F8] border border-slate-200">
              <Mail className="w-8 h-8 text-[#167D91] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0B1F33] mb-2">
                Prompt Commercial Quotations
              </h3>
              <p className="text-xs text-[#596979] leading-relaxed">
                Receive itemized commercial proposals with clear demurrage parameters, delivery schedules, and port fee transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#0B1F33] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Need a Specialized Marine Support Package?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Contact our operations coordinators to tailor a bundle covering ship chandling, crew logistics, tugboat charter, or bunkering for your Nigerian port call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/request-a-quote" variant="primary" size="lg">
              Submit Quotation Request
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
