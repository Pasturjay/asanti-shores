import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
  logoType?: "ship" | "anchor" | "dual";
  size?: "sm" | "md" | "lg";
}

export function Logo({
  variant = "dark",
  className = "",
  showTagline = true,
  logoType = "ship",
  size = "md",
}: LogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: { img: "w-8 h-8", text: "text-lg", tag: "text-[8px]" },
    md: { img: "w-11 h-11", text: "text-xl", tag: "text-[9px]" },
    lg: { img: "w-14 h-14", text: "text-2xl", tag: "text-[10px]" },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#D9A441] rounded-sm transition-opacity duration-200 ${className}`}
      aria-label="Asanti Shores Limited - Return to homepage"
    >
      {/* Brand Emblem: Authentic Company Logo */}
      <div className="relative flex items-center gap-1.5 shrink-0">
        <div
          className={`relative ${sizeClasses.img} rounded-full overflow-hidden flex items-center justify-center p-0.5 transition-transform duration-300 group-hover:scale-105 shadow-xs ${
            isLight
              ? "bg-white border border-[#D9A441]/60"
              : "bg-white border border-slate-200"
          }`}
        >
          <Image
            src={
              logoType === "anchor"
                ? "/images/brand/logo-anchor.png"
                : "/images/brand/logo-ship.png"
            }
            alt="Asanti Shores Limited Official Logo"
            width={56}
            height={56}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Dual Emblem Option (displays anchor badge alongside ship) */}
        {logoType === "dual" && (
          <div
            className={`relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center p-0.5 -ml-3 z-10 transition-transform duration-300 group-hover:scale-105 shadow-xs ${
              isLight
                ? "bg-white border border-[#D9A441]"
                : "bg-white border border-slate-300"
            }`}
          >
            <Image
              src="/images/brand/logo-anchor.png"
              alt="Asanti Shores Limited Marine Anchor Badge"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span
            className={`font-heading font-extrabold ${sizeClasses.text} tracking-tight leading-none ${
              isLight ? "text-white" : "text-[#0B1F33]"
            }`}
          >
            ASANTI
          </span>
          <span
            className={`font-heading font-bold ${sizeClasses.text} tracking-tight leading-none text-[#D9A441]`}
          >
            SHORES
          </span>
          <span
            className={`font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase leading-none ${
              isLight ? "text-slate-200" : "text-[#0B1F33]"
            }`}
          >
            LIMITED
          </span>
        </div>
        {showTagline && (
          <span
            className={`${sizeClasses.tag} font-semibold tracking-[0.18em] uppercase leading-tight mt-1 ${
              isLight ? "text-[#D9A441]" : "text-[#167D91]"
            }`}
          >
            Maritime Services & Logistics
          </span>
        )}
      </div>
    </Link>
  );
}
