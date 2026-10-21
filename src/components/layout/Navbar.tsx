"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Anchor,
  Ship,
  Wrench,
  Fuel,
  Compass,
  LifeBuoy,
  Navigation,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

// Icon mapping for services dropdown
const serviceIconMap: Record<string, React.ElementType> = {
  "ship-crew-management": Ship,
  "ship-chandling": Anchor,
  "marine-equipment-supply": Wrench,
  "bunker-fresh-water-supply": Fuel,
  "underwater-services": LifeBuoy,
  "tugboats-barges-hire": Compass,
  "service-boats-logistics": Navigation,
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const servicesNav = siteConfig.navigation.find((item) => item.label === "Services");

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Marine Operations Announcement Bar */}
      <div className="bg-[#071524] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#D9A441]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              24/7 Marine Operations Desk
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              Kirikiri • Apapa • Onne • Warri • Offshore Terminals
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1 hover:text-[#D9A441] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1 hover:text-[#D9A441] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#167D91]" />
              <span className="hidden sm:inline">{siteConfig.contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1F33]/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3"
            : "bg-[#0B1F33] border-b border-slate-800 py-4"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="light" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                // Service dropdown menu
                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        aria-expanded={servicesDropdownOpen}
                        className={`px-3 py-2 text-sm font-medium rounded-sm inline-flex items-center gap-1 transition-colors ${
                          isActive
                            ? "text-[#D9A441] font-semibold"
                            : "text-slate-200 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-[#D9A441]" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Panel */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-[420px] pt-2 z-50">
                          <div className="bg-[#0B1F33] rounded-md shadow-2xl border border-slate-700/80 p-3 overflow-hidden">
                            <div className="px-3 py-2 border-b border-slate-800 mb-2 flex items-center justify-between">
                              <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                                Marine Capabilities
                              </span>
                              <Link
                                href="/services"
                                className="text-xs text-[#167D91] hover:text-white inline-flex items-center gap-1 font-medium"
                              >
                                View all <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>

                            <div className="space-y-1">
                              {item.children.map((child) => {
                                const IconComponent =
                                  serviceIconMap[child.href.replace("/services/", "")] ||
                                  Anchor;
                                const isChildActive = pathname === child.href;

                                return (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    className={`flex items-start gap-3 p-2.5 rounded-sm transition-colors group ${
                                      isChildActive
                                        ? "bg-white/10 text-white"
                                        : "hover:bg-white/5 text-slate-200 hover:text-white"
                                    }`}
                                  >
                                    <div className="w-8 h-8 rounded-sm bg-[#167D91]/20 border border-[#167D91]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D9A441]/20 group-hover:border-[#D9A441]/40 transition-colors">
                                      <IconComponent className="w-4 h-4 text-[#D9A441]" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium leading-none mb-1 group-hover:text-[#D9A441] transition-colors">
                                        {child.label}
                                      </p>
                                      {child.description && (
                                        <p className="text-xs text-slate-400 line-clamp-1 leading-snug">
                                          {child.description}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-sm transition-colors ${
                      isActive
                        ? "text-[#D9A441] font-semibold bg-white/5"
                        : "text-slate-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Request a Quote CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/request-a-quote" variant="primary" size="md">
                Request a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button href="/request-a-quote" variant="primary" size="sm" className="hidden sm:inline-flex">
                Quote
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-sm focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#0B1F33] px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2.5 rounded-sm text-base font-medium ${
                  pathname === "/" ? "bg-white/10 text-[#D9A441]" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2.5 rounded-sm text-base font-medium ${
                  pathname === "/about" ? "bg-white/10 text-[#D9A441]" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div className="space-y-1 pt-1">
                <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                  Our Services
                </div>
                {servicesNav?.children?.map((service) => {
                  const isServiceActive = pathname === service.href;
                  return (
                    <Link
                      key={service.label}
                      href={service.href}
                      className={`block px-4 py-2 rounded-sm text-sm ${
                        isServiceActive
                          ? "bg-[#167D91]/20 text-[#D9A441] font-semibold"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {service.label}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/capabilities"
                className={`block px-3 py-2.5 rounded-sm text-base font-medium ${
                  pathname === "/capabilities" ? "bg-white/10 text-[#D9A441]" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                Capabilities
              </Link>
              <Link
                href="/safety-compliance"
                className={`block px-3 py-2.5 rounded-sm text-base font-medium ${
                  pathname === "/safety-compliance" ? "bg-white/10 text-[#D9A441]" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                Safety & Compliance
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2.5 rounded-sm text-base font-medium ${
                  pathname === "/contact" ? "bg-white/10 text-[#D9A441]" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <Button href="/request-a-quote" variant="primary" size="lg" className="w-full text-center">
                Request a Formal Quote
              </Button>
              <div className="text-center text-xs text-slate-400">
                24/7 Operations Desk:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="text-[#D9A441] font-medium hover:underline"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
