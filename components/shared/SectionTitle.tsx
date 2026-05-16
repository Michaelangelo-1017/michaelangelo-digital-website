"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";

type SectionTitleProps = {
  label?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  labelTone?: "amber" | "muted";
};

export function SectionTitle({
  label,
  heading,
  description,
  align = "left",
  tone = "light",
  className,
  labelTone = "amber",
}: SectionTitleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={fadeUp}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? (
        <p
          className={cn(
            "text-xs uppercase tracking-label font-semibold mb-4",
            labelTone === "amber" ? "text-amber" : "text-muted",
          )}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {heading}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-lg sm:text-xl leading-relaxed text-pretty",
            tone === "dark" ? "text-white/75" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
