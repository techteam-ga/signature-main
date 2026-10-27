"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import { OPEN_CONTACT_ENQUIRY_EVENT } from "@/components/ContactEnquiryModal";

import Footer from "@/components/SignatureFooter";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/SignatureNavbarCenter";

type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "Sport Assembly Club — Ranigunj, West Bengal",
    image: "/images/Projects/project1.jpg",
    description: "A contemporary club destination in Ranigunj, bringing sport and community life together through purposeful spaces and a welcoming architectural presence.",
  },
  {
    id: "project-2",
    title: "SharePunjab — Kolkata, West Bengal",
    image: "/images/Projects/project2.jpg",
    description: "A distinctive hospitality project in Kolkata, shaped to create a warm, memorable setting for dining, gathering, and spending time together.",
  },
  {
    id: "project-3",
    title: "Featured Project",
    image: "/images/Projects/project3.tif",
    description: "A featured Signature development that reflects our focus on thoughtful planning, considered details, and quality in execution.",
  },
  {
    id: "project-4",
    title: "Dr. SK Isser Residential Triplex Project — SHC, Bihar",
    image: "/images/Projects/project4.jpg",
    description: "A multi-level private residence in Bihar, planned to support comfortable family living with a distinctive architectural character.",
  },
  {
    id: "project-5",
    title: "Hotel Holiday INN — SHC, Bihar",
    image: "/images/Projects/project5.jpg",
    description: "A hospitality development in Bihar, designed around comfortable guest spaces and the practical needs of a welcoming hotel.",
  },
  {
    id: "project-6",
    title: "Hotel New Park Inn. — Kharagpur, West Bengal",
    image: "/images/Projects/project6.jpg",
    description: "A hotel project in Kharagpur that pairs functional guest accommodation with a polished, contemporary presence.",
  },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("intro-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="portfolio-page bg-[#0A0A0A] text-white font-poppins">
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

        {/* <motion.a
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
        </motion.a> */}
      </section>

      {/* PROJECTS SECTION */}

      <section className="mb-20 mt-5 px-6 lg:px-20 max-w-6xl mx-auto">
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
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-[#1f1f1f] text-left transition-all duration-500 hover:border-[#E0B973] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E0B973]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[380px] lg:h-[450px]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-6 pb-5 pt-16 text-left text-xs font-medium uppercase tracking-[0.18em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  View project details
                </span>
              </button>

              <div className="mt-6 max-w-3xl px-3">
                <h3 className="font-playfair text-2xl text-[#E0B973] font-semibold mb-2 uppercase">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#687386] sm:text-base">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-110 flex items-center justify-center overflow-y-auto bg-[#101827]/75 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-detail-title"
              className="relative my-auto grid w-full max-w-5xl overflow-hidden rounded-xl border border-[#d8c89f] bg-[#fffefa] shadow-2xl md:grid-cols-[1.2fr_0.8fr]"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative min-h-[260px] bg-[#e9e5db] sm:min-h-[420px]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute right-3 top-3 rounded-full p-2 text-[#343c49] transition hover:bg-[#f0ece3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a77b2b] sm:right-5 sm:top-5"
                >
                  <X size={22} />
                </button>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#a77b2b]">
                  Featured development
                </p>
                <h2
                  id="portfolio-detail-title"
                  className="font-playfair text-2xl font-semibold leading-tight text-[#10284a] sm:text-3xl"
                >
                  {selectedProject.title}
                </h2>
                <div className="my-5 h-px w-20 bg-[#c99b45]" />
                <p className="text-sm leading-7 text-[#626d7e] sm:text-base">
                  {selectedProject.description}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    window.dispatchEvent(new Event(OPEN_CONTACT_ENQUIRY_EVENT));
                  }}
                  className="mt-8 w-fit border border-[#c99b45] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#10284a] transition hover:bg-[#c99b45]"
                >
                  Contact us
                </button>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
