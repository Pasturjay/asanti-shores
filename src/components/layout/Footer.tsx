import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  FileText,
  ArrowRight,
  Anchor,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071524] text-slate-300 border-t border-slate-800 text-sm">
      {/* Top Marine Logistics Operational Ribbon */}
      <div className="bg-[#0B1F33] py-6 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#167D91]/20 border border-[#167D91]/40 flex items-center justify-center shrink-0">
                <Anchor className="w-5 h-5 text-[#D9A441]" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">24/7 Marine Coordination</h4>
                <p className="text-xs text-slate-400">Continuous dispatch across Nigerian coastal hubs</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#167D91]/20 border border-[#167D91]/40 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-[#167D91]" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Safety & Cabotage Compliance</h4>
                <p className="text-xs text-slate-400">Strict adherence to NIMASA, NPA & IMO standards</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#167D91]/20 border border-[#167D91]/40 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-[#D9A441]" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Corporate Registration</h4>
                <p className="text-xs text-slate-400">RC: {siteConfig.rcNumber} • Incorporated in Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" logoType="dual" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-4">
              {siteConfig.description}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>
                <strong className="text-slate-300">Registered Name:</strong> {siteConfig.legalName}
              </p>
              <p>
                <strong className="text-slate-300">RC Number:</strong> {siteConfig.rcNumber}
              </p>
              <p>
                <strong className="text-slate-300">TIN:</strong> {siteConfig.tin}
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9A441] hover:text-[#C49132] transition-colors"
              >
                <span>Submit Commercial Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Marine Services (All 7) */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#D9A441]">
              Marine Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/ship-crew-management"
                  className="hover:text-white transition-colors"
                >
                  Ship & Crew Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ship-chandling"
                  className="hover:text-white transition-colors"
                >
                  Ship Chandling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marine-equipment-supply"
                  className="hover:text-white transition-colors"
                >
                  Marine Equipment Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bunker-fresh-water-supply"
                  className="hover:text-white transition-colors"
                >
                  Bunker & Fresh Water
                </Link>
              </li>
              <li>
                <Link
                  href="/services/underwater-services"
                  className="hover:text-white transition-colors"
                >
                  Underwater Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tugboats-barges-hire"
                  className="hover:text-white transition-colors"
                >
                  Tugboats & Barges Hire
                </Link>
              </li>
              <li>
                <Link
                  href="/services/service-boats-logistics"
                  className="hover:text-white transition-colors"
                >
                  Service Boats & Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Compliance */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#D9A441]">
              Corporate
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Asanti Shores
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-white transition-colors">
                  Operational Capabilities
                </Link>
              </li>
              <li>
                <Link href="/company-profile" className="hover:text-[#D9A441] transition-colors font-medium">
                  Company Profile (PDF)
                </Link>
              </li>
              <li>
                <Link href="/safety-compliance" className="hover:text-white transition-colors">
                  Safety & Compliance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Marine Desk
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote" className="hover:text-white transition-colors">
                  Request a Formal Quote
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Hubs */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#D9A441]">
              Operational Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <div className="text-slate-300 leading-relaxed text-xs">
                  <strong className="text-white block">Headquarters:</strong>
                  {siteConfig.contact.address.full}
                  <strong className="text-white block mt-1.5">Site / Jetty Base:</strong>
                  Defense Jetty, Marina, Lagos State, Nigeria
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="text-slate-200 hover:text-white transition-colors font-mono font-semibold block"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Alt: 0817 684 0868 / 0814 646 3163
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#167D91] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-300 hover:text-white transition-colors font-medium text-xs sm:text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">
                  {siteConfig.contact.operatingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Ports Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Primary Nigerian Ports & Terminals:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              {siteConfig.operationalHubs.map((hub) => (
                <span
                  key={hub.name}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-xs text-slate-300"
                >
                  {hub.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Engagement
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
