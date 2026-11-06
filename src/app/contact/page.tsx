import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Anchor,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Marine Operations Desk | Lagos & Nigerian Ports",
  description:
    "Get in touch with Asanti Shores Limited operations desk in Kirikiri Town, Lagos, Nigeria. Direct phone, email, and 24/7 marine coordination liaison.",
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us", href: "/contact" }];

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F6F8]">
      {/* Header */}
      <section className="bg-[#071524] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />

          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#167D91]/20 border border-[#167D91]/40 text-[#D9A441] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Operational Liaison</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Contact Our Marine Desk
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Reach our Kirikiri operations team for vessel husbanding inquiries, port agency coordination, emergency spare deliveries, or general maritime information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Verified Details Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address & Office Card */}
              <div className="bg-[#0B1F33] text-white rounded-lg p-6 sm:p-8 border border-slate-800 shadow-md space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                    Official Headquarters
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white mt-1">
                    {siteConfig.legalName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    RC: {siteConfig.rcNumber} • TIN: {siteConfig.tin}
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-sm border-t border-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                        Headquarters Office:
                      </strong>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed block">
                        {siteConfig.contact.address.full}
                      </span>
                      <strong className="block text-white text-xs uppercase tracking-wider mt-2 mb-0.5">
                        Site & Maritime Field Base:
                      </strong>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed block">
                        Defense Jetty, Marina, Lagos State, Nigeria
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                    <div className="w-full">
                      <strong className="block text-white text-xs uppercase tracking-wider mb-1.5">
                        Operational Phone Numbers:
                      </strong>
                      <div className="space-y-1.5">
                        {siteConfig.contact.phones.map((phone) => (
                          <div key={phone.raw} className="flex items-center justify-between text-xs py-0.5 border-b border-slate-700/50 last:border-0">
                            <span className="text-slate-400 text-[11px]">{phone.label}</span>
                            <a
                              href={`tel:${phone.number}`}
                              className="text-slate-200 hover:text-[#D9A441] font-mono font-semibold"
                            >
                              {phone.display}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#167D91] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                        Operations & Procurement Email:
                      </strong>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-slate-200 hover:text-[#D9A441] text-sm font-semibold"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                        Working Hours:
                      </strong>
                      <span className="text-slate-300 text-xs">
                        {siteConfig.contact.operatingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supported Waters */}
              <div className="bg-white rounded-lg p-6 border border-slate-200/90 shadow-xs space-y-4">
                <h4 className="font-heading font-bold text-sm text-[#0B1F33] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#167D91]" />
                  <span>Coverage Across Nigerian Ports</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#596979]">
                  {siteConfig.operationalHubs.map((hub) => (
                    <div key={hub.name} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                      <span className="truncate">{hub.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
