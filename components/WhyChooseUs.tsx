"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Ruler, Hammer, Home, Layers, Box, Wrench } from "lucide-react";

export default function WhyChooseSignatureGroup() {
  const features = [
    {
      icon: <Ruler className="w-8 h-8 text-[#E0B973]" />,
      title: "Architectural Design & Planning",
      desc: "Tailored architectural concepts that blend innovation, aesthetics, and functionality to create timeless spaces.",
    },
    {
      icon: <Hammer className="w-8 h-8 text-[#E0B973]" />,
      title: "Turnkey Construction Solutions",
      desc: "Comprehensive, start-to-finish construction management ensuring precision, efficiency, and luxury craftsmanship.",
    },
    {
      icon: <Home className="w-8 h-8 text-[#E0B973]" />,
      title: "Interior Architecture & Styling",
      desc: "Elegant interiors that harmonize materials, light, and space — designed to reflect your individuality and sophistication.",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#E0B973]" />,
      title: "Façade Engineering & Design",
      desc: "Distinctive façades that elevate identity — crafted with advanced materials and sustainable technologies.",
    },
    {
      icon: <Box className="w-8 h-8 text-[#E0B973]" />,
      title: "3D Visualization & Virtual Walkthroughs",
      desc: "Immersive 3D renders and walkthroughs that let you experience your project before it’s built, in photo-realistic detail.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#E0B973]" />,
      title: "Engineering & Technical Services",
      desc: "Integrated MEP, structural, and technical design solutions that ensure performance, safety, and long-term value.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-20 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        {/* 🏗️ Section Heading */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase text-center mb-16"
        >
          Why Choose Signature Group
          <div className="w-24 h-[1.5px] bg-linear-to-r from-transparent via-[#E0B973] to-transparent mx-auto mb-6 mt-3 opacity-70" />
        </motion.h2> */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-[#D4A556]">
            Why Choose Signature Group
          </h2>

          {/* Animated Golden Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "280px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-0.5 bg-linear-to-r from-[#E0B973] via-[#E0B973] to-transparent mt-3"
          />
        </motion.div>

        {/* 🏙️ Intro Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-left"
          >
            <p className="text-gray-300 text-base md:text-[17px] leading-relaxed max-w-xl text-justify">
              <span className="text-[#E0B973] font-semibold">
                Signature Group
              </span>{" "}
              embodies Excellence and Trust, evidenced by an expanding portfolio
              of premium architectural projects throughout India. Our steadfast
              dedication to precision, innovation, and client satisfaction has
              established our reputation as a highly respected development firm
              in the region.
              <br />
              <br />
              We utilize a dedicated, in-house team of architects, engineers,
              and project managers to deliver fully integrated design and
              construction solutions. These solutions consistently adhere to the
              most stringent standards for quality, functionality, and aesthetic
              appeal.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/images/about-bg.jpg"
              alt="Why Choose Signature Group"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* 💡 Advantages Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 0 20px rgba(224,185,115,0.25)",
                borderColor: "#E0B973",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-[#121212] border border-[#2a2a2a] p-8 rounded-2xl text-center transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-[#E0B973] text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
