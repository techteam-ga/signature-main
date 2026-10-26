"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Download } from "lucide-react";

import Footer from "@/components/SignatureFooter";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/SignatureNavbarCenter";

type Project = {
  id: string;
  title: string;
  location: string;
  desc: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "The Signature Residence",
    location: "Kolkata, India",
    desc: "A refined residential concept balancing natural light, warm materials, and contemporary proportions.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "project-2",
    title: "Urban House",
    location: "Kolkata, India",
    desc: "A modern home shaped around privacy, calm transitions, and an enduring material palette.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "project-3",
    title: "The Courtyard Villa",
    location: "West Bengal, India",
    desc: "A connected indoor-outdoor residence designed around a central landscaped court.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "project-4",
    title: "Signature Workplace",
    location: "Kolkata, India",
    desc: "A considered workplace environment where clarity, comfort, and crafted details work together.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "project-5",
    title: "The Garden House",
    location: "India",
    desc: "A quiet architectural retreat with generous openings and a close relationship to its garden.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "project-6",
    title: "Contemporary Living",
    location: "India",
    desc: "A contemporary development defined by clean lines, elegant finishes, and thoughtful planning.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function PortfolioPage() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("intro-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#0A0A0A] text-white font-poppins">
      <Navbar />

      {/* HERO SECTION */}

      <section className="inner-page-hero relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85"
          alt="Signature Group portfolio"
          fill
          className="object-cover opacity-80"
          priority
        />

        <div className="inner-page-hero__shade absolute inset-0"></div>

        <div className="relative z-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="inner-page-hero__eyebrow italic text-xl md:text-lg mb-4 tracking-wide"
          >
            Crafting Excellence. Shaping Skylines.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="inner-page-hero__title font-playfair text-4xl md:text-5xl font-semibold uppercase leading-tight mb-6"
          >
            Our Portfolio of <br />
            <span className="text-[#E0B973]">Visionary Developments</span>
          </motion.h1>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-12 cursor-pointer z-10"
          onClick={scrollToNextSection}
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10" />

          <div className="w-8 h-px bg-linear-to-r from-transparent via-[#E0B973]/70 to-transparent mt-2 mx-auto opacity-70" />
        </motion.div>
      </section>

      {/* INTRO SECTION */}

      <section
        id="intro-section"
        className="pt-4 pb-20 px-6 lg:px-20 text-justify max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-[17px] leading-relaxed tracking-wide"
        >
          At <span className="text-[#E0B973] font-medium">Signature Group</span>
          , we transform visionary concepts into exceptional built environments.
          With a strong commitment to innovation, precision, and excellence, we
          deliver high-quality real estate, construction, and interior solutions
          that set new benchmarks in the industry across India.
          <br />
          <br />
          In addition to our development and construction capabilities, we offer
          strategic advisory services to help clients plan, optimize, and
          enhance the value of their real estate investments.
        </motion.p>

        <motion.a
          href="/files/Signature-Group-Profile.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 20px rgba(224,185,115,0.45)",
          }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-10 px-10 py-3 bg-black border border-[#E0B973] text-[#E0B973] rounded-full uppercase text-sm tracking-widest shadow-xl hover:bg-[#E0B973] hover:text-black transition-all flex items-center gap-3 w-fit"
        >
          <Download className="w-5 h-5" />
          Download Company Profile
        </motion.a>
      </section>

      {/* PROJECTS SECTION */}

      <section className="mb-20 mt-5 px-6 lg:px-20 max-w-6xl mx-auto cursor-pointer">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-[#E0B973] text-5xl font-semibold uppercase text-center mb-12"
        >
          Featured Developments
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full overflow-hidden rounded-2xl border border-[#1f1f1f] hover:border-[#E0B973] transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="object-cover w-full h-[450px]"
                />
              </div>

              <div className="mt-8 max-w-3xl">
                <h3 className="font-playfair text-2xl text-[#E0B973] font-semibold mb-2 uppercase">
                  {project.title}
                </h3>

                <p className="text-gray-500 italic mb-3">{project.location}</p>

                <p className="text-gray-300 leading-relaxed text-base text-justify">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
