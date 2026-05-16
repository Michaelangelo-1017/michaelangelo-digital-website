"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";
import { cn } from "@/lib/utils";

type FadeInViewProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
};

export function FadeInView({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: FadeInViewProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
