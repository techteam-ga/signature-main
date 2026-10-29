"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Headset,
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type ContactEnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const OPEN_CONTACT_ENQUIRY_EVENT = "signature:open-contact-enquiry";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClassName =
  "min-w-0 flex-1 bg-transparent py-1.5 text-sm text-[#252525] outline-none placeholder:text-[#777]";

export default function ContactEnquiryModal({
  isOpen,
  onClose,
}: ContactEnquiryModalProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("access_key", accessKey);
    formData.set("subject", "New website enquiry — Signature Developers");
    formData.set("from_name", "Signature Developers Website");
    formData.set(
      "phone",
      `${formData.get("country_code")} ${formData.get("phone")}`,
    );
    formData.delete("country_code");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/65 backdrop-blur-sm"
          style={{
            paddingTop: "max(0.75rem, env(safe-area-inset-top))",
            paddingRight: "max(0.75rem, env(safe-area-inset-right))",
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
            paddingLeft: "max(0.75rem, env(safe-area-inset-left))",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="relative isolate my-auto max-h-[82dvh] w-[min(86vw,22rem)] overflow-y-auto overscroll-contain rounded-2xl border border-[#d7bd85] bg-transparent p-0 text-[#24242a] shadow-2xl sm:max-h-[calc(100dvh-1.5rem)] sm:w-full sm:max-w-md"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative isolate px-2.5 py-2.5 sm:px-6 sm:py-4">
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-[url('/images/enquiry-modal-bg.png')] bg-cover bg-center opacity-70"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-[#fffefa]/60 backdrop-blur-[1px]"
              />
              <div className="relative z-10">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close enquiry form"
                className="absolute right-3 top-3 rounded-full p-2 text-[#555] transition hover:bg-[#f1ede3] hover:text-black sm:right-4 sm:top-4"
              >
                <X size={20} />
              </button>

              <div className="mb-2 flex justify-center">
                <Image
                  src="/signature-logo.png"
                  alt="Signature Developers"
                  width={170}
                  height={84}
                  className="h-7 w-auto object-contain sm:h-10"
                  priority
                />
              </div>
              <h2
                id="enquiry-title"
                className="font-playfair text-center text-lg font-semibold sm:text-2xl"
              >
                Connect with Us
              </h2>
              <div className="mx-auto my-1.5 flex w-32 items-center gap-2 text-[#b18536]">
                <span className="h-px flex-1 bg-[#b18536]" />
                <span aria-hidden="true" className="text-sm">
                  ◆
                </span>
                <span className="h-px flex-1 bg-[#b18536]" />
              </div>
              <p className="mx-auto mb-2 hidden max-w-md text-center text-xs leading-snug text-[#444653] sm:mb-3 sm:block sm:text-sm">
                Please share your details and our team will get in touch with
                you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-1 sm:space-y-1.5">
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="flex items-center rounded-lg border border-[#c8c8cd] bg-white/75 px-3 focus-within:border-[#ad812e]">
                  <UserRound size={20} className="shrink-0 text-[#a77b2b]" />
                  <input
                    className={inputClassName}
                    name="first_name"
                    placeholder="First name*"
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div className="flex items-center rounded-lg border border-[#c8c8cd] bg-white/75 px-3 focus-within:border-[#ad812e]">
                  <UserRound size={20} className="shrink-0 text-[#a77b2b]" />
                  <input
                    className={inputClassName}
                    name="last_name"
                    placeholder="Last name*"
                    autoComplete="family-name"
                    required
                  />
                </div>
                <div className="flex min-w-0 items-center rounded-lg border border-[#c8c8cd] bg-white/75 px-2.5 focus-within:border-[#ad812e] sm:px-3">
                  <Phone size={20} className="shrink-0 text-[#a77b2b]" />
                  <select
                    name="country_code"
                    aria-label="Country calling code"
                    defaultValue="+91 (India)"
                    className="w-[clamp(5.5rem,30vw,8rem)] shrink-0 bg-transparent py-1.5 pl-1.5 text-[11px] text-[#252525] outline-none sm:w-32 sm:pl-2 sm:text-sm"
                  >
                    <option value="+91 (India)">India (+91)</option>
                    <option value="+1 (United States)">
                      United States (+1)
                    </option>
                    <option value="+44 (United Kingdom)">
                      United Kingdom (+44)
                    </option>
                    <option value="+971 (UAE)">UAE (+971)</option>
                    <option value="+61 (Australia)">Australia (+61)</option>
                  </select>
                  <span
                    aria-hidden="true"
                    className="mx-1.5 h-6 w-px shrink-0 bg-[#d5d0c4] sm:mx-2"
                  />
                  <input
                    name="phone"
                    type="tel"
                    aria-label="Contact number (10 digits)"
                    inputMode="numeric"
                    placeholder="Contact number*"
                    autoComplete="tel-national"
                    minLength={7}
                    maxLength={15}
                    className={`${inputClassName} text-xs sm:text-sm`}
                    required
                  />
                </div>
                <div className="flex items-center rounded-lg border border-[#c8c8cd] bg-white/75 px-3 focus-within:border-[#ad812e]">
                  <Mail size={20} className="shrink-0 text-[#a77b2b]" />
                  <input
                    className={inputClassName}
                    name="email"
                    type="email"
                    placeholder="Email address*"
                    autoComplete="email"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Your message (optional)"
                  className="w-full resize-y rounded-lg border border-[#c8c8cd] bg-white/70 px-3 py-1 text-xs text-[#252525] outline-none placeholder:text-[#777] focus:border-[#ad812e] sm:py-1.5 sm:text-sm"
                />
                <label className="flex cursor-pointer items-start gap-2 text-[11px] leading-snug text-[#444653] sm:gap-3 sm:text-sm sm:leading-relaxed">
                  <input
                    type="checkbox"
                    name="consent"
                    value="I authorise Signature Developers and its representatives to contact me."
                    required
                    className="mt-0.5 size-4 shrink-0 accent-[#a77b2b]"
                  />
                  <span>
                    I authorise Signature Developers and its representatives to
                    contact me with updates and notifications via Email, SMS,
                    WhatsApp or call.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background:
                      "linear-gradient(105deg, #9b6e1f 0%, #cda44c 100%)",
                  }}
                  className="flex w-full items-center justify-center gap-3 rounded-lg px-5 py-2 text-xs font-medium text-white shadow-sm transition hover:brightness-105 disabled:cursor-wait disabled:opacity-70 sm:py-2.5 sm:text-sm"
                >
                  {status === "sending" ? "Sending…" : "Submit Enquiry"}
                  {status !== "sending" && <ArrowRight size={19} />}
                </button>
                <p aria-live="polite" className="min-h-5 text-center text-sm">
                  {status === "success" && (
                    <span className="text-green-700">
                      Thank you. Your enquiry has been sent.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-red-700">
                      We couldn’t send your enquiry. Please try again or contact
                      us directly.
                    </span>
                  )}
                </p>
              </form>

              <div className="mt-1.5 hidden grid-cols-3 divide-x divide-[#d5d0c4] border-t border-[#d5d0c4] pt-2 sm:mt-2 sm:grid sm:pt-2.5">
                <div className="flex items-center justify-center gap-1.5 px-1 text-[#a77b2b] sm:gap-2">
                  <Headset
                    className="size-5 shrink-0 sm:size-6"
                    strokeWidth={1.7}
                  />
                  <span className="text-[10px] leading-tight text-[#353640] sm:text-xs">
                    Quick
                    <br />
                    Response
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 px-1 text-[#a77b2b] sm:gap-2">
                  <ShieldCheck
                    className="size-5 shrink-0 sm:size-6"
                    strokeWidth={1.7}
                  />
                  <span className="text-[10px] leading-tight text-[#353640] sm:text-xs">
                    Your Information
                    <br />
                    is Safe with Us
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 px-1 text-[#a77b2b] sm:gap-2">
                  <Building2
                    className="size-5 shrink-0 sm:size-6"
                    strokeWidth={1.7}
                  />
                  <span className="text-[10px] leading-tight text-[#353640] sm:text-xs">
                    Personalized
                    <br />
                    Project Assistance
                  </span>
                </div>
              </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
