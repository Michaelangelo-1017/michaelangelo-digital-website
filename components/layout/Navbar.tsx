"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { BOOK_LINK, NAV_LINKS } from "@/data/navigation";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navbarDrop } from "@/lib/animations";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <motion.header
        variants={navbarDrop}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-cream/95 backdrop-blur border-b border-border"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 h-16 sm:h-20">
          <Logo variant={scrolled ? "dark" : "light"} />

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={isActive ? "true" : undefined}
                  className={cn(
                    "nav-link-underline text-xs uppercase tracking-label font-semibold transition-colors",
                    scrolled
                      ? "text-ink/80 hover:text-ink"
                      : "text-white/80 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href={BOOK_LINK.href}
                className="inline-flex items-center bg-amber text-ink hover:bg-amber-600 transition-colors px-5 py-2.5 rounded-full text-xs uppercase tracking-label font-semibold"
              >
                {BOOK_LINK.label}
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            className={cn(
              "lg:hidden rounded-full p-2 transition",
              scrolled
                ? "text-ink hover:bg-ink/5"
                : "text-white hover:bg-white/10",
            )}
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
