import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Governance",
  description:
    "Privacy Policy for Asanti Shores Limited. Details how we process commercial enquiries, vessel particulars, and client communication.",
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ label: "Privacy Policy", href: "/privacy-policy" }];

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F6F8]">
      <section className="bg-[#071524] text-white py-14 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Effective Date: {siteConfig.incorporationDate} • Last Updated: October 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-8 text-sm sm:text-base text-[#596979] leading-relaxed">
            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                1. Introduction
              </h2>
              <p>
                {siteConfig.legalName} (&quot;Asanti Shores Limited&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting the commercial information and personal data you provide when interacting with our website ({siteConfig.url}) and operational enquiry channels.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                When you submit a commercial quotation request or contact our marine desk, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Designated contact name, company name, business email address, and telephone number.</li>
                <li>Vessel particulars, IMO number, call signs, and port schedule information.</li>
                <li>Supply manifests, equipment specifications, and project scope details.</li>
                <li>Technical communication logs related to quotation handling and service fulfillment.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                3. Purpose of Processing
              </h2>
              <p>
                All information collected is processed solely for legitimate commercial maritime purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm mt-2">
                <li>Structuring and delivering formal commercial quotations and operational proposals.</li>
                <li>Coordinating with port authorities, chandlery supply chains, and bunker providers.</li>
                <li>Complying with statutory reporting requirements of NIMASA, NPA, and Nigerian tax authorities.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                4. Data Confidentiality & Non-Disclosure
              </h2>
              <p>
                We treat all vessel manifests, charter terms, and commercial rate negotiations with strict confidentiality. We do not sell, rent, or disclose proprietary client or vessel information to unauthorized third-party commercial entities.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#0B1F33] mb-3">
                5. Contact Information
              </h2>
              <p>
                If you have questions regarding our privacy practices or wish to update information provided during a quotation request, please contact our administrative liaison at:
              </p>
              <div className="mt-3 p-4 bg-[#F3F6F8] rounded-sm text-xs font-mono text-[#0B1F33]">
                {siteConfig.legalName}<br />
                {siteConfig.contact.address.full}<br />
                Email: {siteConfig.contact.email}<br />
                Telephone: {siteConfig.contact.phoneDisplay}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
