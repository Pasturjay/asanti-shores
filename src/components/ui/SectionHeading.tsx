import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
            isCenter ? "justify-center" : "justify-start"
          } ${isDark ? "text-[#D9A441]" : "text-[#167D91]"}`}
        >
          <span className="w-6 h-[2px] bg-current opacity-70" />
          <span>{eyebrow}</span>
          {isCenter && <span className="w-6 h-[2px] bg-current opacity-70" />}
        </div>
      )}

      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#0B1F33]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-[#596979]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
