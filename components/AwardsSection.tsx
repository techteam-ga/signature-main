"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AwardsSection() {
  const awards = [
    { src: "/images/award1.png", alt: "Luxury Real Estate Award" },
    { src: "/images/award2.png", alt: "Developer of the Year" },
    { src: "/images/award3.png", alt: "Architecture Excellence" },
    { src: "/images/award4.png", alt: "Design Innovation Award" },
    { src: "/images/award5.png", alt: "Sustainability Leadership" },
  ];

  return (
    <section className="relative w-full py-20 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-12 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase tracking-wider mb-3"
        >
          Our Achievements
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#E0B973] to-transparent mx-auto mb-6 mt-3 opacity-70" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 max-w-xl mx-auto text-sm md:text-base"
        >
          Honored and recognized for excellence in real estate development,
          innovation, and sustainability across the UAE and beyond.
        </motion.p>
      </div>

      {/* Awards Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center px-10 md:px-20"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center"
          >
            <Image
              src={award.src}
              alt={award.alt}
              width={180}
              height={180}
              className="object-contain opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
