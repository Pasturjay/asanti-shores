"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    subject: "General Maritime Enquiry",
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

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim() || !emailRegex.test(formData.businessEmail)) {
      newErrors.businessEmail = "A valid email address is required.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = "Please enter a message of at least 5 characters.";
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
      const res = await fetch("/api/contact", {
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
        setFormData({
          fullName: "",
          companyName: "",
          businessEmail: "",
          phone: "",
          subject: "General Maritime Enquiry",
          message: "",
          website_trap: "",
        });
      } else {
        setSubmitResult({
          success: false,
          message: data.error || "Unable to send message. Please try again.",
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        message: "Network error. Please check your connection or phone our operations desk directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-6 sm:p-10">
      {submitResult?.success ? (
        <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-[#0B1F33]">
            Message Received
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            {submitResult.message}
          </p>
          {submitResult.referenceId && (
            <p className="font-mono text-xs text-slate-500">
              Reference: {submitResult.referenceId}
            </p>
          )}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setSubmitResult(null)}
              className="text-xs font-bold text-[#167D91] hover:underline uppercase tracking-wider"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {submitResult?.success === false && (
            <div className="p-4 rounded-sm bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
              <span>{submitResult.message}</span>
            </div>
          )}

          {/* Honeypot */}
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="website_trap_contact">Leave empty</label>
            <input
              type="text"
              id="website_trap_contact"
              name="website_trap"
              value={formData.website_trap}
              onChange={handleChange}
              tabIndex={-1}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                placeholder="Capt. John Doe"
                className={`w-full px-3.5 py-2.5 rounded-sm border text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441] ${
                  errors.fullName ? "border-rose-400 bg-rose-50/30" : "border-slate-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Shipping Line / Offshore Contractor"
                className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
              />
            </div>

            <div>
              <label
                htmlFor="businessEmail"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Email Address <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="contact@company.com"
                className={`w-full px-3.5 py-2.5 rounded-sm border text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441] ${
                  errors.businessEmail ? "border-rose-400 bg-rose-50/30" : "border-slate-300"
                }`}
              />
              {errors.businessEmail && (
                <p className="text-rose-600 text-xs mt-1">{errors.businessEmail}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
              >
                Telephone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 ..."
                className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
            >
              Enquiry Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Vessel Agency / Chandling Request / Port Clearance Inquiry"
              className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5"
            >
              Message Details <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your inquiry, port of interest, or operational question..."
              className={`w-full px-3.5 py-2.5 rounded-sm border text-sm text-[#17212B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#D9A441] ${
                errors.message ? "border-rose-400 bg-rose-50/30" : "border-slate-300"
              }`}
            />
            {errors.message && (
              <p className="text-rose-600 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-[#0B1F33] text-white hover:bg-[#122B45] font-bold text-sm px-7 py-3 rounded-sm shadow-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#D9A441]" />
                  <span>Submitting Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#D9A441]" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
