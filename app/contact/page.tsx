"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const scrollToForm = () => {
    const section = document.getElementById("contact-form");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🌐 Web3Forms Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = new FormData();
      payload.append("access_key", "1451740e-965b-41de-b42d-eed139082b34");
      payload.append(
        "subject",
        "New Contact Inquiry - Signature Group"
      );

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
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#0A0A0A] text-white font-poppins">
      <Navbar />

      {/* 🌆 HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Contact Signature Group"
            fill
            priority
            className="object-cover opacity-80"
          />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none"></div>

        <div className="relative z-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[#E0B973] italic text-lg md:text-xl mb-4 tracking-wide"
          >
            Let’s Build Something Extraordinary
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-playfair text-4xl md:text-6xl font-semibold uppercase leading-tight mb-6"
          >
            Get in Touch <br />
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-justify"
          >
            Whether you’re a client, partner, or investor — our team is here to
            help you turn ideas into reality. Reach out today and start your
            journey with us.
          </motion.p> */}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToForm}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-10 group"
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10 group-hover:text-[#ffd67e] transition-colors duration-300" />
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#E0B973]/70 to-transparent mt-2 mx-auto opacity-70 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* 📞 CONTACT SECTION */}
      <section
        id="contact-form"
        className="py-24 px-6 lg:px-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212] to-[#0A0A0A]" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 📝 LEFT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#0A0A0A]/60 p-10 rounded-2xl shadow-[0_0_20px_rgba(224,185,115,0.08)] border border-[#1f1f1f] backdrop-blur-sm"
          >
            <h2 className="font-playfair text-[#E0B973] text-3xl font-semibold uppercase mb-10 text-center">
              Send Us an Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-transparent border-b border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full p-3 bg-transparent border-b border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full p-3 bg-transparent border-b border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 bg-transparent border-b border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  disabled={status === "loading"}
                  className="mt-6 px-10 py-3 border border-[#E0B973] text-[#E0B973] uppercase tracking-wider rounded-full hover:bg-[#E0B973] hover:text-black transition duration-300 disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </motion.button>

                {status === "success" && (
                  <p className="text-green-400 text-sm mt-3">
                    ✅ Inquiry sent successfully!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-400 text-sm mt-3">
                    ❌ Something went wrong. Try again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* RIGHT SIDE CONTENT (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <h2 className="font-playfair text-[#E0B973] text-3xl font-semibold uppercase mb-8 text-center lg:text-left">
              Our Offices
            </h2>

            <div className="space-y-8 text-gray-300 leading-relaxed text-justify">
              <div>
                <h3 className="font-playfair text-lg text-[#E0B973] mb-1 font-medium">
                  Kolkata
                </h3>
                <p className="text-sm">
                  # 356, Ground Floor, Jodhpur Park, Kolkata - 700068
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-lg text-[#E0B973] mb-1 font-medium">
                  Patna
                </h3>
                <p className="text-sm">
                  401, 4th Floor, Sai Tower, New Dak Bungalow Road, Patna -
                  800001
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-lg text-[#E0B973] mb-1 font-medium">
                  Howrah
                </h3>
                <p className="text-sm">
                  Factory: Saraswati Complex, Bandara, Domjur, Howrah - 711411
                </p>
              </div>

              <div className="pt-2 border-t border-[#2a2a2a] mt-6">
                <p className="text-sm">
                  <span className="text-[#E0B973] font-medium">Email:</span>{" "}
                  hello@signaturegroup.com
                </p>
                <p className="text-sm mt-1">
                  <span className="text-[#E0B973] font-medium">Phone:</span> +91
                  8436969369 | +91 9748649999
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12 rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#E0B973]/70 transition-all duration-500 shadow-[0_0_20px_rgba(224,185,115,0.05)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.264274332761!2d88.42988837405366!3d22.56917118516521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772f68b5b4a3%3A0x8a5ef28b9c2a8b65!2sRDB%20Boulevard%2C%20Salt%20Lake%20Sector%20V%2C%20Kolkata%2C%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1731336500000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
