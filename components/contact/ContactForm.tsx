"use client";

import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeInView } from "@/components/shared/FadeInView";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("submitting");

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      business: formData.get("business"),
      message: formData.get("message"),
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <FadeInView className="rounded-3xl border border-border bg-white p-8 shadow-card sm:p-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-label text-muted">
          Send a message
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink text-balance sm:text-4xl">
          Tell me what you are dealing with
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          I read every message personally. Expect a reply within one school day.
        </p>
      </div>

      {state === "success" ? (
        <motion.div
          className="mt-10 rounded-2xl border border-amber/40 bg-amber/10 px-5 py-6 text-sm text-ink"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
        >
          <p className="font-display text-xl text-navy">Message sent.</p>
          <p className="mt-2 text-muted">
            Thank you! I will get back to you shortly.
          </p>
        </motion.div>
      ) : (
        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your full name"
              required
              maxLength={500}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@yourbusiness.co.uk"
              required
              maxLength={500}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone">Phone</Label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Your phone number"
              maxLength={500}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-business">Business name</Label>
            <Input
              id="contact-business"
              name="business"
              autoComplete="organization"
              placeholder="Your company name"
              required
              maxLength={500}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder="What do you need help with?"
              required
              maxLength={5000}
            />
          </div>

          {state === "error" ? (
            <p className="text-sm text-red-700" role="alert">
              Something went wrong sending your message. Please try again or
              email me directly.
            </p>
          ) : null}

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button
              type="submit"
              variant="amber"
              size="lg"
              className="w-full sm:w-auto min-w-[11rem]"
              disabled={state === "submitting"}
            >
              {state === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                "Send message"
              )}
            </Button>
          </motion.div>
        </form>
      )}
    </FadeInView>
  );
}
