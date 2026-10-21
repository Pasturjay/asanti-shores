"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Shield,
  HelpCircle,
} from "lucide-react";
import { servicesData } from "@/config/services";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    serviceRequired: initialService || servicesData[0]?.title || "",
    vesselOrProjectName: "",
    portLocation: siteConfig.operationalHubs[0]?.name || "Lagos Port Complex (Apapa)",
    requestedDate: "",
    technicalSpecs: "",
    message: "",
    website_trap: "", // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    referenceId?: string;
  } | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company or entity name is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim() || !emailRegex.test(formData.businessEmail)) {
      newErrors.businessEmail = "A valid business email address is required.";
    }
    if (!formData.serviceRequired) {
      newErrors.serviceRequired = "Please select a required service.";
    }
    if (!formData.portLocation) {
      newErrors.portLocation = "Please select an operational port or location.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitResult({
          success: true,
          message: data.message,
          referenceId: data.referenceId,
        });
        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          businessEmail: "",
          phone: "",
          serviceRequired: servicesData[0]?.title || "",
          vesselOrProjectName: "",
          portLocation: siteConfig.operationalHubs[0]?.name || "Lagos Port Complex (Apapa)",
          requestedDate: "",
          technicalSpecs: "",
          message: "",
          website_trap: "",
        });
      } else {
        setSubmitResult({
          success: false,
          message: data.error || "Unable to submit quotation. Please try again.",
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        message: "Network error occurred. Please verify your connection or call our marine desk directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-6 sm:p-10">
      {submitResult?.success ? (
        <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33]">
            Quotation Request Received
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            {submitResult.message}
          </p>
          {submitResult.referenceId && (
            <div className="inline-block px-4 py-2 bg-slate-100 rounded-sm font-mono text-xs text-slate-700 font-bold border border-slate-200">
              Reference ID: {submitResult.referenceId}
            </div>
          )}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setSubmitResult(null)}
              className="text-xs font-bold text-[#167D91] hover:underline uppercase tracking-wider"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {submitResult?.success === false && (
            <div className="p-4 rounded-sm bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
              <span>{submitResult.message}</span>
            </div>
          )}

          {/* Honeypot field (hidden from legitimate users) */}
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="website_trap">Leave blank</label>
            <input
              type="text"
              id="website_trap"
              name="website_trap"
              value={formData.website_trap}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className="font-heading font-bold text-lg text-[#0B1F33]">
              1. Commercial & Contact Information
            </h3>
            <p className="text-xs text-[#596979]">
              Please provide contact details for the designated procurement or operations officer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Capt. J. Doe or John Doe"
                className={`w-full px-3.5 py-2.5 rounded-sm border text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441] ${
                  errors.fullName ? "border-rose-400 bg-rose-50/30" : "border-slate-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Company / Organization <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Pacific Tankers Ltd / Offshore Energy Corp"
                className={`w-full px-3.5 py-2.5 rounded-sm border text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441] ${
                  errors.companyName ? "border-rose-400 bg-rose-50/30" : "border-slate-300"
                }`}
              />
              {errors.companyName && (
                <p className="text-rose-600 text-xs mt-1">{errors.companyName}</p>
              )}
            </div>

            {/* Business Email */}
            <div>
              <label
                htmlFor="businessEmail"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Business Email <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="procurement@company.com"
                className={`w-full px-3.5 py-2.5 rounded-sm border text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441] ${
                  errors.businessEmail ? "border-rose-400 bg-rose-50/30" : "border-slate-300"
                }`}
              />
              {errors.businessEmail && (
                <p className="text-rose-600 text-xs mt-1">{errors.businessEmail}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Telephone / WhatsApp (with country code)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 ... or +44 ..."
                className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
              />
            </div>
          </div>

          <div className="border-b border-slate-100 pb-4 mb-6 pt-4">
            <h3 className="font-heading font-bold text-lg text-[#0B1F33]">
              2. Maritime Requirements & Vessel Particulars
            </h3>
            <p className="text-xs text-[#596979]">
              Specify the exact operational scope and targeted Nigerian location.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service Required */}
            <div>
              <label
                htmlFor="serviceRequired"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Service Category <span className="text-rose-600">*</span>
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
              >
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
                <option value="Integrated / Multiple Services">
                  Integrated / Multiple Services
                </option>
              </select>
            </div>

            {/* Port / Operating Location */}
            <div>
              <label
                htmlFor="portLocation"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Port or Coastal Location <span className="text-rose-600">*</span>
              </label>
              <select
                id="portLocation"
                name="portLocation"
                value={formData.portLocation}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
              >
                {siteConfig.operationalHubs.map((hub) => (
                  <option key={hub.name} value={hub.name}>
                    {hub.name} ({hub.state})
                  </option>
                ))}
                <option value="Other Nigerian Coastal Anchorage">
                  Other Nigerian Coastal Anchorage
                </option>
              </select>
            </div>

            {/* Vessel or Project Name */}
            <div>
              <label
                htmlFor="vesselOrProjectName"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Vessel Name / IMO Number / Project
              </label>
              <input
                type="text"
                id="vesselOrProjectName"
                name="vesselOrProjectName"
                value={formData.vesselOrProjectName}
                onChange={handleChange}
                placeholder="e.g. MT Ocean Pioneer (IMO 9482103)"
                className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
              />
            </div>

            {/* Target Service Date */}
            <div>
              <label
                htmlFor="requestedDate"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Estimated ETA / Mobilization Date
              </label>
              <input
                type="date"
                id="requestedDate"
                name="requestedDate"
                value={formData.requestedDate}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
              />
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <label
              htmlFor="technicalSpecs"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
            >
              Technical Specifications / Quantities / Scope Breakdown
            </label>
            <textarea
              id="technicalSpecs"
              name="technicalSpecs"
              rows={3}
              value={formData.technicalSpecs}
              onChange={handleChange}
              placeholder="e.g. MGO 200 metric tonnes at Lagos Anchorage, or 400 BHP Tug for 7 days berthing assistance, or chandling provision manifest list..."
              className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
            >
              Additional Operational Remarks
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Include any specific vessel requirements, clearance urgencies, or permit constraints."
              className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9A441] text-[#0B1F33] hover:bg-[#C49132] font-bold text-sm px-8 py-3.5 rounded-sm shadow-md transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Commercial Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Quotation Request</span>
                </>
              )}
            </button>

            <span className="text-xs text-[#596979] flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#167D91]" />
              Commercial confidentiality guaranteed
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
