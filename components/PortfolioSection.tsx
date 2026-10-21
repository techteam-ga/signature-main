"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Sport Assembly Club — Ranigunj, West Bengal",
      image: "/images/Projects/project1.jpg",
    },
    {
      title: "SharePunjab — Kolkata, West Bengal",
      image: "/images/Projects/project2.jpg",
    },
    {
      title: "",
      image: "/images/Projects/project3.tif",
    },
    {
      title: "Dr. SK Isser Residential Triplex Project — SHC, Bihar",
      image: "/images/Projects/project4.jpg",
    },
    {
      title: "Hotel Holiday INN  — SHC, Bihar",
      image: "/images/Projects/project5.jpg",
    },
    {
      title: "Hotel New Park Inn. — Kharagpur, West Bengal",
      image: "/images/Projects/project6.jpg",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0E0E0E] text-white overflow-hidden">
      {/* 🌅 Fade Transitions to Blend with Black Sections */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent pointer-events-none" />

      {/* ✨ Subtle Gold Radial Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,185,115,0.05)_0%,transparent_70%)] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* 🏗️ Section Heading */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase mb-4">
            Portfolio
          </h2>

          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#E0B973] to-transparent mx-auto mb-6 opacity-70" />

          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A glimpse into our finest architectural and interior masterpieces —
            where design meets precision and craftsmanship defines luxury.
          </p>
        </motion.div> */}
        {/* HEADING - Premium Left Align with Animated Gold Line */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-left max-w-4xl"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold uppercase text-[#D4A556]">
            Portfolio
          </h2>

          {/* Animated Gold Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "260px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-[#E0B973] via-[#E0B973] to-transparent mt-3 mb-4"
          />

          {/* Sub-text paragraph (Beautiful, subtle, left aligned) */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            A glimpse into our finest architectural and interior masterpieces —
            where design meets precision and craftsmanship defines luxury.
          </p>
        </motion.div>

        {/* 🖼️ Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Link key={index} href="/portfolio">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 0 25px rgba(224,185,115,0.15)",
                  borderColor: "#E0B973",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="relative group overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#141414] transition-all duration-500"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="object-cover w-full h-[280px] lg:h-[340px] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 transition-all duration-500"></div>


                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* <h3 className="text-[#E0B973] text-lg md:text-xl font-semibold mb-1">
                    {project.title}
                  </h3> */}
                  <p className="text-gray-300 text-xs uppercase tracking-wider">
                    View Details →
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* 💫 View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px #E0B973",
              }}
              transition={{ duration: 0.3 }}
              className="px-10 py-3 border border-[#E0B973] text-[#E0B973] uppercase tracking-widest text-sm font-light rounded-full transition-all duration-300 hover:bg-[#E0B973] hover:text-black"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
