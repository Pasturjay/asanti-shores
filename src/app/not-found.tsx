import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#071524] text-white py-20 px-4">
      <div className="max-w-lg mx-auto text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#167D91]/20 border border-[#167D91]/40 flex items-center justify-center mx-auto text-[#D9A441]">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/5 border border-slate-700 text-[#D9A441] text-xs font-bold uppercase tracking-widest">
          <span>Error 404 • Course Deviation</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
          Coordinates Not Found
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The requested navigational route or maritime documentation page is unavailable or has been relocated to another berth.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/services" variant="navy" size="md">
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 ml-1.5 text-[#D9A441]" />
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400">
          Need operational assistance?{" "}
          <Link href="/contact" className="text-[#D9A441] hover:underline">
            Contact our 24/7 Marine Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
