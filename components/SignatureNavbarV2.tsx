"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"], ["About us", "/about"], ["Our projects", "/portfolio"],
  ["Gallery", "/gallery"], ["Contact us", "/contact"],
];

export default function SignatureNavbarV2({ onMenuToggle = () => {} }: { onMenuToggle?: (open: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; onMenuToggle(open); return () => { document.body.style.overflow = ""; }; }, [open, onMenuToggle]);
  return <>
    <header className={`signature-nav ${scrolled ? "is-scrolled" : ""}`}>
      <Link href="/" className="signature-nav__logo"><Image src="/signature-logo.png" alt="Signature Developers" width={150} height={74} priority /></Link>
      <nav className="signature-nav__links">{links.slice(0, 4).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
      <Link href="/contact" className="signature-nav__cta">Start a conversation <ArrowUpRight size={15} /></Link>
      <button className="signature-nav__menu" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={23} /></button>
    </header>
    <AnimatePresence>{open && <>
      <motion.div className="signature-menu-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
      <motion.aside className="signature-menu" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: .45, ease: [.22, 1, .36, 1] }}>
        <div className="signature-menu__top"><Image src="/signature-logo.png" alt="Signature Developers" width={150} height={74} /><button onClick={() => setOpen(false)} aria-label="Close menu"><X size={23} /></button></div>
        <p className="eyebrow">Explore Signature</p>
        <nav>{links.map(([label, href], index) => <motion.div key={href} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .07 }}><Link href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight size={18} /></Link></motion.div>)}</nav>
        <div className="signature-menu__bottom"><span>Building better tomorrow</span><a className="signature-menu__whatsapp" href="https://wa.me/918436969369" target="_blank" rel="noreferrer"><FaWhatsapp size={17} /> WhatsApp us</a></div>
      </motion.aside>
    </>}</AnimatePresence>
  </>;
}
