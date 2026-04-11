import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "lg";
};

export function Button({ className = "", variant = "default", size = "default", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:opacity-50";
  const variants = {
    default: "bg-slate-950 text-white hover:bg-slate-800",
    outline: "border border-slate-200 bg-white text-slate-900 hover:border-slate-950",
  };
  const sizes = {
    default: "h-10 px-5 text-sm",
    lg: "h-12 px-7 text-base",
  };

  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()} {...props} />;
}
