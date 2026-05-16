"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { X } from "lucide-react";
import { BOOK_LINK, NAV_LINKS } from "@/data/navigation";
import { Logo } from "@/components/Logo";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-menu"
          className="fixed inset-0 z-[80] bg-ink text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <Logo variant="light" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <motion.nav
            className="flex flex-col gap-4 px-5 sm:px-8 mt-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-display text-4xl sm:text-5xl text-white block py-2 border-b border-white/5"
                    data-active={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="pt-6"
            >
              <Link
                href={BOOK_LINK.href}
                onClick={onClose}
                className="inline-flex items-center justify-center w-full bg-amber text-ink uppercase tracking-label font-semibold text-sm py-4 rounded-full"
              >
                {BOOK_LINK.label}
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
