"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, User, MessageSquare } from "lucide-react";

export default function EnquireNowButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = new FormData();
      payload.append("access_key", "1451740e-965b-41de-b42d-eed139082b34");
      payload.append("subject", "New Enquiry - Signature Group");
      payload.append("from_name", "Enquiry Panel");
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("message", formData.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ======================================================
           FLOATING SIDEBAR BUTTON (NEW DESIGN)
      ====================================================== */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-xl rounded-l-xl overflow-hidden">

        {/* Top Black Tab */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black w-12 h-12 flex items-center justify-center hover:bg-neutral-800 transition"
        >
          <span className="text-white text-lg">→</span>
        </button>

        {/* Middle Vertical Enquire Now */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#E0B973] w-12 py-4 flex items-center justify-center hover:bg-[#f0cf90] transition"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-black text-sm font-medium tracking-wide">
            Enquire Now
          </span>
        </button>

        {/* Bottom WhatsApp Button */}
        <a
          href="https://wa.me/+919748649999"
          target="_blank"
          className="bg-[#25D366] w-12 h-12 flex items-center justify-center hover:bg-[#1ebe59] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-white"
          >
            <path d="M16.04 2.01C8.31 2.01 2.04 8.28 2.04 16.01c0 2.82.74 5.55 2.16 7.97L2 30l6.21-2.16c2.33 1.28 4.96 1.97 7.83 1.97 7.72 0 14-6.27 14-13.99.01-7.74-6.26-13.81-13.99-13.81zm0 25.3c-2.62 0-5.1-.77-7.23-2.23l-.52-.33-3.7 1.3 1.27-3.6-.34-.56a12.42 12.42 0 0 1-1.88-6.6c0-6.86 5.57-12.43 12.43-12.43s12.43 5.57 12.43 12.43c0 6.86-5.58 12.42-12.46 12.42zm7.14-9.33c-.39-.2-2.3-1.14-2.66-1.27-.36-.13-.62-.2-.87.2-.26.39-1 1.27-1.23 1.54-.23.26-.46.29-.85.1-.39-.2-1.64-.6-3.13-1.91-1.16-1.03-1.94-2.3-2.17-2.69-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.87-2.1-1.2-2.88-.32-.78-.66-.67-.87-.67-.23 0-.49-.03-.75-.03-.26 0-.69.1-1.06.49-.36.39-1.39 1.36-1.39 3.32 0 1.97 1.42 3.87 1.62 4.14.2.26 2.8 4.27 6.81 5.99 4.01 1.72 4.01 1.15 4.72 1.08.72-.07 2.3-.94 2.63-1.85.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
          </svg>
        </a>
      </div>

      {/* ======================================================
           MODAL PANEL (unchanged)
      ====================================================== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#111111] text-white shadow-2xl z-50 overflow-y-auto border-l border-[#2a2a2a]"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-semibold text-[#E0B973] tracking-wide uppercase">
                    Enquire Now
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-[#1a1a1a] rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Fill out the form below and our team will get back to you shortly.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    {
                      label: "Full Name",
                      name: "name",
                      type: "text",
                      icon: (
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      ),
                      placeholder: "Enter your full name",
                    },
                    {
                      label: "Email Address",
                      name: "email",
                      type: "email",
                      icon: (
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      ),
                      placeholder: "your@email.com",
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      icon: (
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      ),
                      placeholder: "10-digit phone number",
                    },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs text-gray-400 mb-1">
                        {field.label} *
                      </label>
                      <div className="relative">
                        {field.icon}
                        <input
                          type={field.type}
                          name={field.name}
                          required
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-200 text-sm px-9 py-2 rounded-md focus:border-[#E0B973] focus:ring-1 focus:ring-[#E0B973] outline-none transition"
                        />
                      </div>
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Tell us about your project..."
                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-200 text-sm px-9 py-2 rounded-md focus:border-[#E0B973] focus:ring-1 focus:ring-[#E0B973] outline-none transition resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#E0B973] text-black font-semibold py-2 rounded-md text-sm tracking-wide hover:bg-[#f0cf90] transition disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending..." : "Submit Enquiry"}
                  </button>

                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-500 text-xs text-center font-medium mt-2"
                    >
                      ✅ Enquiry submitted successfully!
                    </motion.p>
                  )}

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs text-center font-medium mt-2"
                    >
                      ❌ Something went wrong. Please try again.
                    </motion.p>
                  )}
                </form>

                <div className="mt-8 border-t border-[#2a2a2a] pt-4 text-xs text-gray-500">
                  Email:{" "}
                  <a
                    href="mailto:hello@signaturegroup.com"
                    className="text-[#E0B973] hover:underline ml-1"
                  >
                    hello@signaturegroup.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
