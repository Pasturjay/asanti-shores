import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  FileText,
  MapPin,
  Download,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote | Maritime Services & Vessel Logistics",
  description:
    "Request an official commercial quotation for ship management, chandling, bunker supply, tugboat hire, underwater services, and marine logistics in Nigeria.",
};

export default function RequestAQuotePage() {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Request a Quote", href: "/request-a-quote" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F6F8]">
      {/* Page Header */}
      <section className="bg-[#071524] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />

          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Commercial Procurement</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Request a Commercial Quotation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Submit your vessel parameters, required port, and technical supply specifications. Our Kirikiri operations team will structure an itemized proposal with clear delivery parameters.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Operations Context Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-slate-500 bg-white rounded-lg border border-slate-200">
                    Loading quotation form...
                  </div>
                }
              >
                <QuoteForm />
              </Suspense>
            </div>

            {/* Right Column: Operational Desk & Reassurance */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Liaison Card */}
              <div className="bg-[#0B1F33] text-white rounded-lg p-6 sm:p-8 border border-slate-800 shadow-md space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                    Direct Marine Operations Desk
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white mt-1">
                    Urgent Port Call or Bunkering?
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    If your vessel is already in Nigerian territorial waters, at anchorage, or facing immediate berth schedules, contact our coordination desk directly:
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-sm border-t border-slate-700">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-slate-200 hover:text-[#D9A441] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D9A441] shrink-0" />
                    <span className="font-mono text-xs sm:text-sm font-semibold">
                      {siteConfig.contact.phoneDisplay}
                    </span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-slate-200 hover:text-[#D9A441] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#167D91] shrink-0" />
                    <span className="text-xs sm:text-sm">{siteConfig.contact.email}</span>
                  </a>
                  <div className="flex items-start gap-3 text-slate-300 text-xs">
                    <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                    <span>{siteConfig.contact.address.full}</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-400 text-xs">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{siteConfig.contact.operatingHours}</span>
                  </div>
                </div>
              </div>

              {/* Commercial Assurance Card */}
              <div className="bg-white rounded-lg p-6 border border-slate-200/90 shadow-xs space-y-4 text-xs text-[#596979]">
                <h4 className="font-heading font-bold text-sm text-[#0B1F33] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#167D91]" />
                  <span>Our Commercial Commitment</span>
                </h4>
                <ul className="space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#167D91] shrink-0 mt-1.5" />
                    <span>Itemized pricing with clear scope and no hidden port surcharges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#167D91] shrink-0 mt-1.5" />
                    <span>Strict compliance with NIMASA regulations and Nigerian Cabotage provisions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#167D91] shrink-0 mt-1.5" />
                    <span>Written dispatch confirmations and turnaround logs for vessel masters.</span>
                  </li>
                </ul>
              </div>

              {/* Download Corporate Profile Card */}
              {siteConfig.downloads.hasProfilePdf && (
                <div className="bg-white rounded-lg p-6 border border-slate-200/90 shadow-xs space-y-3">
                  <h4 className="font-heading font-bold text-sm text-[#0B1F33] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#D9A441]" />
                    <span>Need Corporate Documentation?</span>
                  </h4>
                  <p className="text-xs text-[#596979] leading-relaxed">
                    Download our verified company profile with registration particulars and operational credentials.
                  </p>
                  <a
                    href={siteConfig.downloads.profilePdfUrl}
                    download="asanti-shores-company-profile.pdf"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167D91] hover:text-[#0B1F33] pt-1"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Profile (PDF)</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
