"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  House,
  Layers,
  User,
  Images,
  Phone,
  Shield,
  Sparkles,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({
  onMenuToggle = () => {},
}: {
  onMenuToggle?: (open: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // Show navbar when at top
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY <= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body + notify parent
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    onMenuToggle(isOpen);
  }, [isOpen, onMenuToggle]);

  const sidebarLinks = [
    { name: "Home", href: "/", icon: House },
    { name: "Portfolio", href: "/portfolio", icon: Layers },
    { name: "About Us", href: "/about", icon: User },
    { name: "Gallery", href: "/gallery", icon: Images },
    { name: "Contact Us", href: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* NAVBAR */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between 
                       px-6 md:px-16 py-10"
          >
            {/* LEFT – Desktop Only */}
            <div className="flex-1 hidden sm:flex items-center gap-8">
              {/* <Link
                href="/"
                className="text-md uppercase tracking-widest text-gray-300 hover:text-[#E0B973] transition"
              >
                Home
              </Link> */}
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-300 hover:text-[#E0B973] transition"
              >
                <House size={20} className="hover:text-[#E0B973]" />
              </Link>

              <Link
                href="/portfolio"
                className="text-md uppercase tracking-widest text-gray-300 hover:text-[#E0B973] transition"
              >
                Portfolio
              </Link>
            </div>

            {/* CENTER Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center flex-shrink-0">
              <Link href="/">
                <Image
                  src="/signature-group-logo.svg"
                  alt="Logo"
                  width={180}
                  height={80}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* RIGHT – Hamburger */}
            <div className="flex-1 flex justify-end">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="relative w-10 h-10 flex flex-col justify-center items-center group cursor-pointer"
              >
                {/* Top line */}
                <motion.span
                  className="w-7 h-[2.5px] bg-white rounded-full block group-hover:bg-[#E0B973]"
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.35 }}
                />

                {/* Middle line */}
                <motion.span
                  className="w-7 h-[2.5px] bg-white rounded-full mt-1 block group-hover:bg-[#E0B973]"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Bottom line */}
                <motion.span
                  className="w-7 h-[2.5px] bg-white rounded-full mt-1 block group-hover:bg-[#E0B973]"
                  animate={
                    isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.35 }}
                />
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* SIDEBAR PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45 }}
              className="fixed top-0 right-0 h-full w-[300px] 
                         bg-[#0A0A0A]/80 backdrop-blur-xl border-l border-[#2a2a2a] 
                         z-50 p-10 shadow-[0_0_25px_rgba(224,185,115,0.25)]"
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 90 }}
                className="absolute top-6 right-6 text-white hover:text-[#E0B973] cursor-pointer"
              >
                <X size={26} />
              </motion.button>

              {/* Sidebar Logo */}
              <div className="flex flex-col items-center mt-4 mb-6">
                <Image
                  src="/signature-group-logo.svg"
                  width={160}
                  height={50}
                  alt="Sidebar Logo"
                  className="object-contain opacity-100"
                />
              </div>

              {/* Divider */}
              <div className="mb-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E0B973] to-transparent opacity-50" />

              {/* NAVLINKS */}
              <div className="space-y-6">
                {sidebarLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 text-sm text-gray-300 uppercase tracking-wide 
                                hover:text-[#E0B973] transition-all group"
                      >
                        <Icon
                          className="text-[#E0B973] group-hover:scale-110 transition"
                          size={20}
                        />
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider 2 */}
              <div className="my-8 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E0B973] to-transparent opacity-40" />

              {/* FEATURES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 text-center gap-4"
              >
                <div>
                  <Shield size={20} className="text-[#E0B973] mx-auto mb-1" />
                  <p className="text-[10px] text-gray-400">Quality</p>
                </div>

                <div>
                  <Sparkles size={20} className="text-[#E0B973] mx-auto mb-1" />
                  <p className="text-[10px] text-gray-400">Luxury</p>
                </div>

                <div>
                  <Award size={20} className="text-[#E0B973] mx-auto mb-1" />
                  <p className="text-[10px] text-gray-400">Precision</p>
                </div>
              </motion.div>

              {/* Sidebar Footer */}
              <div className="mt-12 text-gray-600 text-[11px] uppercase tracking-wide text-center">
                © {new Date().getFullYear()} Signature Group
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
