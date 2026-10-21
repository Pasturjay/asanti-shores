import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
}

export function Logo({ variant = "dark", className = "", showTagline = true }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#D9A441] rounded-sm transition-opacity duration-200 ${className}`}
      aria-label="Asanti Shores Limited - Return to homepage"
    >
      {/* Brand Emblem: Stylized Maritime Vector Insignia */}
      <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform group-hover:scale-105 duration-300"
          aria-hidden="true"
        >
          {/* Outer Compass / Shield Circle */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke={isLight ? "#D9A441" : "#0B1F33"}
            strokeWidth="2"
            strokeOpacity={isLight ? "0.9" : "0.2"}
            fill={isLight ? "#0B1F33" : "#F3F6F8"}
          />
          {/* Marine Anchor & Wave Geometry */}
          <path
            d="M24 10V32M24 32C19 32 15 28 15 23M24 32C29 32 33 28 33 23"
            stroke="#D9A441"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="14" r="3" stroke="#D9A441" strokeWidth="2" />
          <path
            d="M19 18H29"
            stroke="#D9A441"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Dynamic Ocean Wave Accent */}
          <path
            d="M12 36C16 33.5 20 37.5 24 35C28 32.5 32 36.5 36 34"
            stroke={isLight ? "#167D91" : "#167D91"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-heading font-extrabold text-xl tracking-tight leading-none ${
              isLight ? "text-white" : "text-[#0B1F33]"
            }`}
          >
            ASANTI
          </span>
          <span
            className="font-heading font-bold text-xl tracking-tight leading-none text-[#D9A441]"
          >
            SHORES
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[9px] font-semibold tracking-[0.18em] uppercase leading-tight mt-1 ${
              isLight ? "text-slate-300" : "text-[#596979]"
            }`}
          >
            Maritime Services Ltd
          </span>
        )}
      </div>
    </Link>
  );
}
