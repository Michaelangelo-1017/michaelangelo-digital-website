"use client";

import { motion } from "framer-motion";
import {
  wordStaggerChild,
  wordStaggerContainer,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type WordStaggerHeadingProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2";
  /** When true, animates as soon as it mounts (good for hero on page load). */
  animateOnLoad?: boolean;
};

export function WordStaggerHeading({
  text,
  className,
  as = "h1",
  animateOnLoad = true,
}: WordStaggerHeadingProps) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const MotionTag = (as === "h1" ? motion.h1 : motion.h2) as typeof motion.h1;

  return (
    <MotionTag
      className={cn(
        "font-display tracking-tight leading-[1.02] text-balance",
        className,
      )}
      variants={wordStaggerContainer}
      initial="hidden"
      {...(animateOnLoad
        ? { animate: "visible" }
        : {
            whileInView: "visible",
            viewport: { once: true, margin: "-80px" },
          })}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.1em] mr-[0.15em] last:mr-0"
        >
          <motion.span
            className="inline-block"
            variants={wordStaggerChild}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
