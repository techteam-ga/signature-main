"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  const metrics = [
    { number: "1000+", label: "Clients" },
    { number: "1500+", label: "Completed Projects" },
    { number: "25+", label: "Ongoing Projects" },
  ];

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#0A0A0A] text-white font-poppins">
      <Navbar />

      {/* 🌆 HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-center">
        <Image
          src="/images/hero-bg.jpg"
          alt="About Signature Group"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-6"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-[#E0B973] mb-6 uppercase tracking-wide">
            About Signature Group
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 max-w-2xl mx-auto text-base md:text-md leading-relaxed font-light text-justify"
          >
            Redefining luxury through timeless architecture, innovative design,
            and master craftsmanship — our legacy lies in every detail we
            create, every skyline we shape.
          </motion.p>
        </motion.div>

        {/* Scroll Icon */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          onClick={handleScrollDown}
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </motion.div>
      </section>

      {/* 🆕 NEW CONTENT SECTION (PREMIUM LAYOUT) */}
      <section className="mt-7 mb-8 px-0 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[520px] lg:h-[700px]"
          >
            <Image
              src="/images/about-bg.jpg"
              alt="Company Visual"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="px-8 lg:px-16 py-12 flex flex-col justify-center"
          >
            <h2 className="text-[#E0B973] font-playfair text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-8">
              Welcome to Signature Group
            </h2>

            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light text-justify">
              <p>
                In 2015, we envisioned a world shaped by creativity, precision,
                endurance and craftsmanship. Today, this stands as the
                cornerstone of our design philosophy and our mission to
                innovate.
              </p>

              <p>
                With expanding outreach across India and the Middle East, Signature Group
                has shaped luxury architectural experiences that merge digital
                precision with real-world excellence. Our projects reflect
                imagination elevated through technology and dedication.
              </p>

              <p>
                Driven by creativity, persistence and excellence, we bring
                unmatched expertise across architecture, interior design,
                engineering and turnkey project solutions—building iconic spaces
                that stand beyond time.
              </p>
            </div>

            {/* CTA BUTTON UPDATED */}
            <motion.a
              href="/files/Signature-Group-Profile.pdf"
              download
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 20px rgba(224,185,115,0.45)",
              }}
              transition={{ duration: 0.3 }}
              className="mx-auto mt-10 px-10 py-3 bg-black border border-[#E0B973] text-[#E0B973] rounded-full uppercase text-sm tracking-widest shadow-xl hover:bg-[#E0B973] hover:text-black transition-all flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download Company Profile
            </motion.a>

            {/* LOGO */}
            <div className="flex justify-center mt-10">
              <Image
                src="/signature-group-logo.svg"
                width={220}
                height={100}
                alt="Company Logo"
                className="opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 📊 METRICS - HOVER INTERACTION */}
      <section className="mt-5 mb-10 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 25px rgba(224,185,115,0.45)",
                borderColor: "#E0B973",
              }}
              className="p-8 bg-[#0C0C0C] rounded-2xl border border-[#E0B973]/40 text-center transition-all duration-300"
            >
              <h3 className="font-playfair text-[#E0B973] text-5xl md:text-6xl font-semibold">
                {metric.number}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.25em] mt-4">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
