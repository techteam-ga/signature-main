"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // 👇 Background slideshow images
  const backgroundImages = [
    "/images/bg1.jpg",
    "/images/bg2.jpg",
    "/images/bg3.jpg",
    "/images/bg4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ⏳ Auto change background every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-black overflow-hidden">
      {/* 🖼 Background Slideshow Layer */}
      {backgroundImages.map((img, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <Image
            src={img}
            alt="Luxury Real Estate Background"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
        </motion.div>
      ))}

      {/* 🌑 Overlay Tint */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🎞 Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none"></div>

      {/* 🪶 Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6
                   translate-y-[40%]"  // ⬆️ moved lower than before (was 16%)
      >
        {/* ✨ Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#E0B973] italic text-lg md:text-xl mb-4 tracking-wide"
        >
          Discover the art of modern living
        </motion.p>

        {/* 🏛 Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-playfair text-white text-5xl md:text-6xl font-semibold 
                     leading-[1.15] tracking-[0.015em] text-balance
                     drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
        >
          Luxury Real Estate Redefined
        </motion.h1>

        {/* Gold Accent Line */}
        <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-[#E0B973] to-transparent mt-6 opacity-80" />
      </motion.div>

      {/* ⬇️ Animated Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={handleScrollDown}
      >
        <ChevronDown className="text-[#E0B973] w-10 h-10 hover:scale-110 transition-transform duration-300" />
        <div className="w-8 h-px bg-linear-to-r from-transparent via-[#E0B973]/70 to-transparent mt-2 mx-auto opacity-70 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </section>
  );
}
