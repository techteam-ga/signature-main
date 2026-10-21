"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsSection() {
  const logos = [
    "/clientsLogo/Picture1.png",
    "/clientsLogo/Picture2.png",
    "/clientsLogo/Picture3.png",
    "/clientsLogo/Picture4.png",
    "/clientsLogo/Picture5.jpg",
    "/clientsLogo/Picture6.jpg",
    "/clientsLogo/Picture7.png",
    "/clientsLogo/Picture8.png",
    "/clientsLogo/Picture9.png",
    "/clientsLogo/Picture10.jpg",
    "/clientsLogo/Picture11.jpg",
    "/clientsLogo/Picture12.png",
    "/clientsLogo/Picture13.png",
    "/clientsLogo/Picture14.jpg",
    "/clientsLogo/Picture15.jpg",
    "/clientsLogo/Picture16.png",
    "/clientsLogo/Picture17.jpg",
  ];

  return (
    <section className="relative w-full mt-5 mb-10 bg-white text-black overflow-hidden py-16">
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        {/* HEADING */}
        {/* <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-[#D4A556]">
            Our Clients
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-[#E0B973] via-[#E0B973] to-transparent w-[260px] mt-3 mb-6" />
        </motion.div> */}
        {/* HEADING – Animated Gold Underline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-[#D4A556]">
            Our Clients
          </h2>

          {/* Animated Golden Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "260px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-[#E0B973] via-[#E0B973] to-transparent mt-3 mb-6"
          />
        </motion.div>

        {/* PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-gray-700 text-sm md:text-base leading-relaxed text-justify mb-14"
        >
          Our clients are key to our success and growth. We collaborate with
          industry-leading organizations across infrastructure, engineering, and
          real estate sectors—consistently delivering impactful,
          innovation-driven solutions built on trust and long-term value.
        </motion.p>

        {/* AUTO-SCROLL STRIP */}
        <div className="relative w-full overflow-hidden mb-4">
          <div className="flex whitespace-nowrap">
            {/* FIRST ROW */}
            <motion.div
              className="flex gap-20"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 90,
                ease: "linear",
              }}
            >
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="w-[140px] h-20 flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>

            {/* SECOND ROW FOR LOOP */}
            <motion.div
              className="flex gap-20"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 90,
                ease: "linear",
              }}
            >
              {logos.map((logo, i) => (
                <div
                  key={`dupe-${i}`}
                  className="w-[140px] h-20 flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
