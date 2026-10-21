"use client";

import { motion, Variants } from "framer-motion";
import { Ruler, Hammer, Home, Layers, Box, Wrench } from "lucide-react";

export default function ExpertiseSection() {
  const expertises = [
    {
      icon: <Ruler className="w-10 h-10 text-[#E0B973]" />,
      title: "Project Planning & Designing",
      desc: "We create detailed project plans and innovative designs that ensure both functionality and aesthetic appeal, tailored to client requirements.",
    },
    {
      icon: <Hammer className="w-10 h-10 text-[#E0B973]" />,
      title: "Constructions",
      desc: "From foundation to finish, our construction services guarantee high-quality workmanship, structural safety, and timely project delivery.",
    },
    {
      icon: <Home className="w-10 h-10 text-[#E0B973]" />,
      title: "Interior & Exterior Fit Out",
      desc: "We specialize in customized interiors and exteriors, delivering modern, functional, and visually appealing spaces for residential and commercial projects.",
    },
    {
      icon: <Layers className="w-10 h-10 text-[#E0B973]" />,
      title: "Glass & ACP Façade Design",
      desc: "Our façade designs combine glass and ACP panels to create elegant, durable, and energy-efficient exteriors that stand out architecturally.",
    },
    {
      icon: <Box className="w-10 h-10 text-[#E0B973]" />,
      title: "3D Rendering",
      desc: "We bring ideas to life with realistic 3D visualizations, helping clients envision the final outcome before construction begins.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-[#E0B973]" />,
      title: "MEP Services",
      desc: "We offer comprehensive Mechanical, Electrical, and Plumbing solutions ensuring efficiency, safety, and compliance with international standards.",
    },
  ];

  // Motion variants
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
        {/* Heading */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase text-center mb-16"
        >
          Our Expertise
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#E0B973] to-transparent mx-auto mb-6 mt-3 opacity-70" />
        </motion.h2> */}
        {/* HEADING - Premium Left Align with Animated Gold Line */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-17 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-[#D4A556]">
            Our Expertise
          </h2>

          {/* Animated Gold Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "260px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-0.5 bg-linear-to-r from-[#E0B973] via-[#E0B973] to-transparent mt-3"
          />
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(224,185,115,0.2)",
                borderColor: "#E0B973",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-[#121212] border border-[#2a2a2a] p-8 rounded-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-[#E0B973] text-xl font-semibold mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
