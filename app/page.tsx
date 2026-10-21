"use client";

import AboutSection from '@/components/AboutSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import PortfolioSection from '@/components/PortfolioSection'
import ScrollToTop from '@/components/ScrollToTop'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import EnquireNowButton from "@/components/EnquireNowButton";
import React, { useState } from "react";
import ClientsSection from '@/components/ClientsSection';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenuToggle={setMenuOpen} />
      <HeroSection />
      <WhyChooseUs />
      <AboutSection />
      <ExpertiseSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ClientsSection />

      <Footer />
      <ScrollToTop />

      {/* Hide Enquire Button when sidebar menu is open */}
      {!menuOpen && <EnquireNowButton />}
    </>
  );
}
