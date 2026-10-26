"use client";

import SignatureFooter from "@/components/SignatureFooter";
import SignatureHero from "@/components/SignatureHero";
import SignatureNavbar from "@/components/SignatureNavbarCenter";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";
import SignatureHomepage from "@/components/SignatureHomepage";

export default function HomePage() {
  return (
    <>
      <SignatureNavbar />
      <SignatureHero />
      <SignatureHomepage />

      <SignatureFooter />
      <ScrollToTop />
    </>
  );
}
