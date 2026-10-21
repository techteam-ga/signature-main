"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const metrics = [
    { number: "300+", label: "Clients" },
    { number: "180+", label: "Completed Projects" },
    { number: "18+", label: "Ongoing Projects" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-20 bg-[#0E0E0E] text-white overflow-hidden">
      {/* 🌅 Fade Transitions to Blend with Black Sections */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent pointer-events-none" />
      {/* ✨ Subtle radial gold texture for elegance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,185,115,0.05)_0%,transparent_70%)] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* 🏗️ Section Title */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase text-center mb-16"
        >
          About Us
          <div className="w-24 h-[1.5px] bg-linear-to-r from-transparent via-[#E0B973] to-transparent mx-auto mb-6 mt-3 opacity-70" />
        </motion.h2> */}
        {/* HEADING - Premium Left Align with Animated Gold Line */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-17 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-[#D4A556]">
            About Us
          </h2>

          {/* Animated Gold Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "260px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-0.5 bg-linear-to-r from-[#E0B973] via-[#E0B973] to-transparent mt-3"
          />
        </motion.div>

        {/* 🧱 Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-50">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="Our Team"
              width={700}
              height={700}
              className="rounded-2xl object-cover"
            />
          </motion.div>

          {/* Right Side: Text + Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <p className="text-gray-300 text-base md:text-[17px] leading-relaxed mb-8 max-w-xl">
              At <span className="text-[#E0B973]">Signature Group</span>
              , we simplify the design and build process. With experts in
              architecture, interior design, and construction all in-house, we
              deliver projects that blend speed, precision, and elegance —
              across Kolkata and India.
              <br />
              <br />
              Our in-house team of architects, engineers, and project managers
              ensures every detail is executed to perfection — bringing
              world-class design and innovation to life for every client.
            </p>

            <Link href="/about">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 12px #E0B973",
                }}
                transition={{ duration: 0.3 }}
                className="px-8 py-3 border border-[#E0B973] text-[#E0B973] uppercase tracking-widest text-sm font-light rounded-full transition-all duration-300 hover:bg-[#E0B973] hover:text-black"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* 📊 Bottom Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 text-center"
        >
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 0 20px rgba(224,185,115,0.25)",
                borderColor: "#E0B973",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-[#E0B973] text-4xl font-semibold mb-3 transition-all duration-300">
                {item.number}
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
