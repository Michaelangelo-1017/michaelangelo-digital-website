"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SESSION_KEY = "md-session-loaded";
const HOLD_MS = 800;
const FADE_OUT_MS = 500;

/**
 * MD intro splash. Renders only once per browser session.
 *
 * Behaviour:
 *   - First mount in a session: shows "MD" wordmark in navy on a cream
 *     background for 0.8s, then fades out and writes a flag to
 *     sessionStorage.
 *   - Subsequent navigations or page reloads within the same session:
 *     reads the flag from sessionStorage and renders nothing.
 *   - The sessionStorage key is automatically cleared when the tab
 *     or window is closed, so the splash fires once per session.
 */
export function LoadingScreen() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const alreadyShown =
      typeof window !== "undefined"
        ? window.sessionStorage.getItem(SESSION_KEY)
        : "true";
    if (alreadyShown) return;
    setShow(true);
    const timeout = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setShow(false);
    }, HOLD_MS);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="md-loading"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_OUT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <motion.span
            className="font-display text-7xl sm:text-8xl font-semibold text-navy leading-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            MD
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
