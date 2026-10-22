"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "Signature Greens",
    location: "New Town, Kolkata",
    type: "Residential community",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    number: "01",
  },
  {
    title: "The Grand Signature",
    location: "Salt Lake, Kolkata",
    type: "Premium residences",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    number: "02",
  },
  {
    title: "Signature Business Park",
    location: "Howrah, West Bengal",
    type: "Commercial destination",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85",
    number: "03",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function SignatureHomepage() {
  return (
    <main className="signature-home">
      <section className="home-intro" id="about">
        <div className="home-intro__top">
          <p className="eyebrow">A signature way of living</p>
          <span className="section-number">02 — 05</span>
        </div>
        <div className="home-intro__grid">
          <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            We don’t just
            <br />
            <em>build spaces.</em>
          </motion.h2>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="lead">We shape places that feel considered, connected and truly yours.</p>
            <p>
              For more than a decade, Signature Developers has brought together thoughtful design,
              reliable construction and a deep understanding of how people live. Every address we
              create is built to feel better today and hold its value tomorrow.
            </p>
            <Link className="text-link" href="/about">
              Our story <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
        <div className="home-intro__image">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
            alt="Thoughtfully designed contemporary home"
            fill
            sizes="(max-width: 900px) 100vw, 78vw"
          />
        </div>
      </section>

      <section className="projects-showcase" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Places with purpose</p>
            <h2>
              Explore our <em>projects</em>
            </h2>
          </div>
          <Link href="/portfolio" className="round-link">
            View all <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="projects-track">
          {projects.map((project) => (
            <Link href="/portfolio" key={project.title} className="project-card">
              <div className="project-card__image">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 85vw, 32vw" />
                <span>{project.number}</span>
              </div>
              <div className="project-card__meta">
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span>
                    <MapPin size={13} /> {project.location}
                  </span>
                </div>
                <ChevronRight />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="beliefs">
        <div className="beliefs__heading">
          <p className="eyebrow">What guides us</p>
          <h2>
            Built on values.
            <br />
            <em>Made for life.</em>
          </h2>
        </div>
        <div className="beliefs__list">
          {[
            ["01", "People first", "Every decision starts with the people who will call our spaces home."],
            ["02", "Designed to endure", "Timeless material, honest craft and details that get better with time."],
            ["03", "Better tomorrow", "Sustainable thinking is part of our process, not an afterthought."],
          ].map(([number, title, copy]) => (
            <div className="belief" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="numbers">
        <div className="numbers__image">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85"
            alt="A development taking shape"
            fill
            sizes="50vw"
          />
        </div>
        <div className="numbers__content">
          <p className="eyebrow">The Signature measure</p>
          <h2>
            Good places leave
            <br />
            <em>a lasting mark.</em>
          </h2>
          <div className="metrics">
            <div>
              <strong>25<span>+</span></strong>
              <p>Years of experience</p>
            </div>
            <div>
              <strong>180<span>+</span></strong>
              <p>Projects delivered</p>
            </div>
            <div>
              <strong>04</strong>
              <p>Active locations</p>
            </div>
          </div>
          <Link href="/about" className="button button--navy">
            Meet Signature <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="enquiry-band" aria-labelledby="enquiry-title">
        <div className="enquiry-band__content">
          <p className="eyebrow">Your next chapter starts here</p>
          <h2 id="enquiry-title">
            Have a place
            <br />
            <em>in mind?</em>
          </h2>
          <p className="enquiry-band__copy">
            Tell us what you’re looking for. We’ll help you find a space that feels like yours.
          </p>
        </div>
        <div className="enquiry-band__action">
          <span className="enquiry-band__note">A good place to begin</span>
          <Link href="/contact" className="enquiry-band__button">
            <span>Start a conversation</span>
            <span className="enquiry-band__arrow" aria-hidden="true">
              <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>
        <span className="enquiry-band__index" aria-hidden="true">SIGNATURE DEVELOPERS&nbsp; / &nbsp;05</span>
      </section>
    </main>
  );
}
