"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown } from "lucide-react";

export default function GalleryPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85" },
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85" },
    { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85" },
    { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85" },
    { src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85" },
    { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85" },
    { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85" },
  ];

  const galleryVideos = [
    { src: "/videos/banner.mp4", title: "Luxury Villa" },
  ];

  const scrollToGallery = () => {
    const section = document.getElementById("photo-gallery");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#0A0A0A] text-white font-poppins overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/pic2.jpg"
          alt="Gallery Hero"
          fill
          priority
          className="object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute bottom-0 w-full h-48 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />

        <div className="relative z-10 px-6 mt-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[#E0B973] text-lg md:text-xl mb-4 tracking-wide"
          >
            A celebration of design, light, and detail
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-playfair text-4xl md:text-6xl font-semibold uppercase leading-tight mb-6"
          >
            <span className="text-gray-200">Where Vision Meets</span> <br />
            <span className="text-[#E0B973]">Architectural Brilliance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-justify"
          >
            Discover timeless spaces that merge creativity and structure — a
            symphony of luxury, precision, and emotion.
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToGallery}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10" />
        </motion.div>
      </section>

      {/* PHOTO GALLERY */}
      <section id="photo-gallery" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-playfair text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase text-center mb-16"
        >
          <span className="italic">Photo Gallery</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl aspect-4/3 group"
            >
              <Image
                src={img.src}
                alt={`Gallery Image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section id="video-gallery" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-playfair text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase text-center mb-16"
        >
          <span className="italic">Video Gallery</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryVideos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl aspect-video border border-[#1f1f1f] hover:border-[#E0B973]/60 transition-all duration-500 cursor-pointer"
              onClick={() => setActiveVideo(video.src)}
            >
              <video
                src={video.src}
                className="w-full h-full object-cover rounded-2xl"
                muted
                playsInline
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-60 transition-opacity duration-700"></div>

              <div className="absolute bottom-6 left-6">
                <p className="text-[#E0B973] italic text-sm font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIDEO POPUP MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking video
            className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-[#E0B973]/30"
          >
            <video
              src={activeVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </main>
  );
}
