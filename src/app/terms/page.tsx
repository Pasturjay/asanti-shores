import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Engagement & Use | Asanti Shores Limited",
  description:
    "Standard commercial terms of engagement and website terms of use for Asanti Shores Limited maritime services in Nigeria.",
};

export default function TermsPage() {
  const breadcrumbs = [{ label: "Terms of Use", href: "/terms" }];

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F6F8]">
      <section className="bg-[#071524] text-white py-14 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Terms of Commercial Engagement & Website Use
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Company Registration: RC {siteConfig.rcNumber} • Kirikiri Town, Lagos, Nigeria
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-8 text-sm sm:text-base text-[#596979] leading-relaxed">
            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                1. General Overview
              </h2>
              <p>
                These terms govern the use of the website operated by {siteConfig.legalName} (&quot;Asanti Shores Limited&quot;) and define the commercial principles under which quotation requests, agency representations, and marine logistics proposals are submitted.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                2. Quotations & Commercial Proposals
              </h2>
              <p>
                Informational quotes generated via our online forms or direct email correspondence are preliminary estimates based on prevailing port charges, exchange rates, bunker index tariffs, and supplier availability. All formal commitments require executed service agreements, standard BIMCO or local agency contracts, and confirmed vessel notices of readiness (NOR).
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                3. Cabotage & Regulatory Compliance
              </h2>
              <p>
                All maritime logistics, crew placement, and charter operations are executed in compliance with the Coastal and Inland Shipping (Cabotage) Act 2003, NIMASA guidelines, and NPA regulations. Clients chartering vessels or contracting services agree to provide authentic documentation, manifests, and statutory clearance notices.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                4. Force Majeure & Marine Port Conditions
              </h2>
              <p>
                Asanti Shores Limited shall not be held commercially liable for delays, vessel demurrage, or delivery interruptions caused by acts of God, extreme sea conditions, naval or port authority channel restrictions, customs delays, or unforeseen port congestion outside direct operational control.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                5. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms and any maritime service contracts arising from commercial engagements shall be governed by and construed in accordance with the maritime and commercial laws of the Federal Republic of Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
