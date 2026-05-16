"use client";

import { motion } from "framer-motion";
import { BJS_TIERS } from "@/data/services";
import { VIEWPORT_ONCE, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function PricingTable() {
  return (
    <motion.dl
      className="mt-8 divide-y divide-white/10 border-y border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {BJS_TIERS.map((tier) => (
        <motion.div
          key={tier.id}
          variants={fadeUp}
          className={cn(
            "grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-8 py-5 sm:py-6",
            tier.highlight && "relative",
          )}
        >
          <div className="flex flex-col  gap-3">
            <span className="font-display text-xl sm:text-2xl text-white">
              {tier.tier}
            </span>
            {tier.slotsBadge ? <SlotsBadge label={tier.slotsBadge} /> : null}
          </div>
          <p className="text-sm sm:text-base text-white/65 leading-relaxed hidden sm:block">
            {tier.description}
          </p>
          <div className="text-right">
            <p
              className={cn(
                "font-display text-2xl sm:text-3xl",
                tier.highlight ? "text-amber" : "text-white",
              )}
            >
              {tier.price}
            </p>
            {tier.priceLabel ? (
              <p className="text-[10px] sm:text-xs uppercase tracking-label text-white/45 mt-1">
                {tier.priceLabel}
              </p>
            ) : null}
          </div>
          <p className="text-sm text-white/65 leading-relaxed sm:hidden col-span-3 -mt-2">
            {tier.description}
          </p>
        </motion.div>
      ))}
    </motion.dl>
  );
}

function SlotsBadge({ label }: { label: string }) {
  return (
    <span className="relative inline-flex items-center">
      <span
        className="absolute inset-0 rounded-full bg-amber/40 animate-pulse-ring"
        aria-hidden="true"
      />
      <span className="relative inline-flex items-center gap-1.5 rounded-full bg-amber text-ink text-[10px] sm:text-xs uppercase tracking-label font-semibold px-2.5 py-1 shadow-card">
        <span
          className="block h-1.5 w-1.5 rounded-full bg-ink animate-soft-pulse"
          aria-hidden="true"
        />
        {label}
      </span>
    </span>
  );
}
