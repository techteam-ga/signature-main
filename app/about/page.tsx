"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/SignatureNavbarV2";
import Footer from "@/components/SignatureFooter";
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
      <section className="inner-page-hero relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-center">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
          alt="About Signature Group"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="inner-page-hero__shade absolute inset-0" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-6"
        >
          <h1 className="inner-page-hero__title font-playfair text-4xl md:text-5xl font-semibold mb-6 uppercase tracking-wide">
            About Signature Group
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inner-page-hero__copy max-w-2xl mx-auto text-base md:text-md leading-relaxed font-light"
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
      <section className="about-story mt-7 mb-8 px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[520px] lg:h-[700px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
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
            <h2 className="about-story__title font-playfair text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-8">
              Welcome to Signature Group
            </h2>

            <div className="about-story__copy space-y-6 text-base md:text-lg leading-relaxed font-light text-justify">
              <p>
                In 2015, we envisioned a world shaped by creativity, precision,
                endurance and craftsmanship. Today, this stands as the
                cornerstone of our design philosophy and our mission to
                innovate.
              </p>

              <p>
                With expanding outreach across India and the Middle East,
                Signature Group has shaped luxury architectural experiences that
                merge digital precision with real-world excellence. Our projects
                reflect imagination elevated through technology and dedication.
              </p>

              <p>
                Driven by creativity, persistence and excellence, we bring
                unmatched expertise across architecture, interior design,
                engineering and turnkey project solutions—building iconic spaces
                that stand beyond time.
              </p>
            </div>

            <div className="about-story__logo mt-10">
              <Image
                src="/signature-logo.png"
                width={250}
                height={125}
                alt="Signature Developers"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 📊 METRICS - HOVER INTERACTION */}
      <section className="about-metrics mt-5 mb-10">
        <div className="about-metrics__grid max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="about-metric p-8 text-center transition-all duration-300"
            >
              <h3 className="about-metric__number font-playfair text-5xl md:text-6xl font-semibold">
                {metric.number}
              </h3>
              <p className="about-metric__label text-xs md:text-sm uppercase tracking-[0.25em] mt-4">
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
