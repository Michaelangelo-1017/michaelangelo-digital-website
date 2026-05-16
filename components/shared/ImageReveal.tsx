"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { clipReveal, VIEWPORT_ONCE } from "@/lib/animations";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
};

export function ImageReveal({ children, className }: ImageRevealProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      variants={clipReveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {children}
    </motion.div>
  );
}
