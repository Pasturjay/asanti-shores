"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  if (!siteConfig.contact.whatsapp.enabled || !siteConfig.contact.whatsapp.number) {
    return null;
  }

  const encodedMessage = encodeURIComponent(
    siteConfig.contact.whatsapp.defaultMessage
  );
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Callout */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-md shadow-2xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-heading font-bold text-sm text-[#0B1F33]">
                Asanti Marine Desk
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-[#596979] leading-relaxed mb-3">
            Direct operational liaison for vessel masters, procurement teams, and port logistics coordination.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold py-2 px-3 rounded-sm shadow-xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
        aria-label="Direct WhatsApp Marine Desk Liaison"
      >
        <span className="sr-only">Contact via WhatsApp</span>
        <MessageSquare className="w-6 h-6 transition-transform group-hover:scale-110" />

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
      </button>
    </div>
  );
}
