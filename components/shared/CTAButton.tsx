"use client";

import Link, { type LinkProps } from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "amber" | "ghost-light";
type Size = "default" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-600 border border-navy shadow-card",
  secondary:
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/5",
  amber:
    "bg-amber text-ink hover:bg-amber-600 border border-amber shadow-card",
  "ghost-light":
    "bg-transparent text-ink border border-ink/15 hover:border-ink/40",
};

const sizeClasses: Record<Size, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type CTALinkProps = BaseProps &
  Omit<LinkProps, "href"> & {
    href: string;
    external?: boolean;
  };

const HOVER = { scale: 1.03 };
const TAP = { scale: 0.98 };
const SPRING = { type: "spring" as const, stiffness: 400, damping: 25 };

export const CTAButton = forwardRef<HTMLAnchorElement, CTALinkProps>(
  function CTAButton(
    {
      href,
      external,
      variant = "primary",
      size = "default",
      withArrow,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const cls = cn(
      "inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-label rounded-full transition-colors duration-200",
      variantClasses[variant],
      sizeClasses[size],
      className,
    );

    const inner = (
      <>
        {children}
        {withArrow ? (
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : null}
      </>
    );

    if (external) {
      return (
        <motion.a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("group", cls)}
          whileHover={HOVER}
          whileTap={TAP}
          transition={SPRING}
        >
          {inner}
        </motion.a>
      );
    }

    const MotionLink = motion(Link) as unknown as React.ComponentType<
      LinkProps &
        HTMLMotionProps<"a"> & { className?: string; children: ReactNode }
    >;

    return (
      <MotionLink
        href={href}
        className={cn("group", cls)}
        whileHover={HOVER}
        whileTap={TAP}
        transition={SPRING}
        {...rest}
      >
        {inner}
      </MotionLink>
    );
  },
);
