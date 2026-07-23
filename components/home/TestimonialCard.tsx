"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { GoogleIcon } from "@/components/shared/BrandIcons";
import {
  TESTIMONIAL_PREVIEW_CHARS,
  type Testimonial,
} from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function truncateBody(body: string, limit: number): {
  preview: string;
  truncated: boolean;
} {
  if (body.length <= limit) {
    return { preview: body, truncated: false };
  }

  const slice = body.slice(0, limit);
  const lastSpace = slice.lastIndexOf(" ");
  const preview = (
    lastSpace > 40 ? slice.slice(0, lastSpace) : slice
  ).trimEnd();
  return { preview, truncated: true };
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const { preview, truncated } = truncateBody(
    testimonial.body,
    TESTIMONIAL_PREVIEW_CHARS,
  );
  const external = /^https?:\/\//i.test(testimonial.reviewLink);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const googleLinkClass =
    "absolute top-6 right-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-card transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

  return (
    <>
      <figure className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 transition duration-300 hover:-translate-y-1">
        {external ? (
          <a
            href={testimonial.reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className={googleLinkClass}
            aria-label={`Read ${testimonial.name}'s Google review`}
          >
            <GoogleIcon className="h-5 w-5" />
          </a>
        ) : (
          <Link
            href={testimonial.reviewLink}
            className={googleLinkClass}
            aria-label={`Read ${testimonial.name}'s Google review`}
          >
            <GoogleIcon className="h-5 w-5" />
          </Link>
        )}

        {testimonial.isPlaceholder ? (
          <span className="absolute top-6 left-6 text-[10px] uppercase tracking-label font-semibold text-amber/80 border border-amber/30 rounded-full px-2.5 py-1">
            Placeholder
          </span>
        ) : null}

        <span
          aria-hidden="true"
          className="block font-display text-7xl sm:text-8xl leading-none text-amber/90"
        >
          “
        </span>

        <blockquote className="mt-2 flex-1 font-display text-2xl sm:text-[1.65rem] leading-snug text-white text-balance">
          <span>{preview}</span>
          {truncated ? (
            <>
              <span>… </span>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline font-sans text-base sm:text-lg font-semibold text-sky-400 underline-offset-4 hover:text-sky-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
              >
                Read more
              </button>
            </>
          ) : null}
        </blockquote>

        <figcaption className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="mt-1 text-xs uppercase tracking-label text-white/55">
            {testimonial.company}
          </p>
        </figcaption>
      </figure>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-5 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink/75 backdrop-blur-sm"
              aria-label="Close review"
              onClick={() => setOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-navy p-8 sm:p-10 shadow-card-lg text-white"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <div className="flex items-start justify-between gap-4">
                <p
                  id={titleId}
                  className="text-xs uppercase tracking-label font-semibold text-amber"
                >
                  Full review
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>

              <blockquote className="mt-6 font-display text-2xl sm:text-3xl leading-snug text-balance">
                <span>“{testimonial.body}”</span>
              </blockquote>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-label text-white/55">
                  {testimonial.company}
                </p>
              </div>

              {external ? (
                <a
                  href={testimonial.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300"
                >
                  <GoogleIcon className="h-4 w-4" />
                  View on Google
                </a>
              ) : (
                <Link
                  href={testimonial.reviewLink}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300"
                  onClick={() => setOpen(false)}
                >
                  <GoogleIcon className="h-4 w-4" />
                  View on Google
                </Link>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
