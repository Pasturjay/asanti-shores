import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "navy" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-sm focus:outline-hidden focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#D9A441] text-[#0B1F33] hover:bg-[#C49132] focus:ring-[#D9A441] shadow-xs hover:shadow-md font-bold",
    secondary:
      "bg-[#167D91] text-white hover:bg-[#0F5E6E] focus:ring-[#167D91] shadow-xs",
    navy:
      "bg-[#0B1F33] text-white hover:bg-[#122B45] focus:ring-[#0B1F33] border border-slate-700",
    outline:
      "border-2 border-[#0B1F33] text-[#0B1F33] hover:bg-[#0B1F33] hover:text-white focus:ring-[#0B1F33]",
    ghost:
      "text-[#0B1F33] hover:bg-[#F3F6F8] focus:ring-slate-400",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
