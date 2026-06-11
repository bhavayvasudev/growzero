"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out rounded-full cursor-pointer";

    const variants = {
      primary:
        "bg-[#4A5D4A] text-white hover:bg-[#3A4D3A] active:bg-[#2D3D2D]",
      secondary:
        "bg-transparent text-[#1A1A1A] border border-[#E8E5E0] hover:border-[#4A5D4A] hover:text-[#4A5D4A]",
      ghost:
        "bg-transparent text-[#6B6560] hover:text-[#1A1A1A]",
    };

    const sizes = {
      default: "px-6 py-3 text-[14px] tracking-wide",
      lg: "px-8 py-4 text-[15px] tracking-wide",
    };

    if (href) {
      return (
        <motion.a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
          {variant === "primary" && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
        {variant === "primary" && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
