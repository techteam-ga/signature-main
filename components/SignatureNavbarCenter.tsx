"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Our projects", "/portfolio"],
  ["Gallery", "/gallery"],
  ["Contact us", "/contact"],
];

export default function SignatureNavbarCenter({
  onMenuToggle = () => {},
}: {
  onMenuToggle?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSectionHref, setActiveSectionHref] = useState<string | null>(
    null,
  );
  const pathname = usePathname();
  const activeHref =
    pathname === "/"
      ? activeSectionHref
      : (links.find(([, href]) => href === pathname)?.[1] ?? null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (pathname !== "/") return;

    const updateActiveSection = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".signature-hero, [data-nav-section]",
        ),
      );
      let currentHref = "/";
      const activationLine = window.innerHeight * 0.44;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentHref = section.dataset.navSection ?? "/";
        }
      }

      setActiveSectionHref(currentHref);
    };

    const frame = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    onMenuToggle(open);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, onMenuToggle]);
  return (
    <>
      <header
        className={`signature-nav signature-nav--centered ${scrolled ? "is-scrolled" : ""}`}
      >
        <button
          className="signature-nav__menu signature-nav__menu--centered"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={21} />
        </button>
        <Link href="/" className="signature-nav__logo signature-nav__logo--centered">
          <Image
            src="/signature-logo.png"
            alt="Signature Developers"
            width={150}
            height={74}
            priority
          />
        </Link>
        <Link
          href="/contact"
          className="signature-nav__cta signature-nav__cta--centered"
        >
          Start a conversation <ArrowUpRight size={15} />
        </Link>
      </header>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="signature-menu signature-menu--immersive"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <Image
              className="signature-menu__image"
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
              alt=""
              fill
              sizes="(max-width: 700px) 53vw, 100vw"
              priority
            />
            <div className="signature-menu__wash" />
            <div className="signature-menu__panel">
              <div className="signature-menu__panel-image" aria-hidden="true" />
              <div className="signature-menu__top">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  aria-label="Signature Developers home"
                >
                  <Image
                    src="/signature-logo.png"
                    alt="Signature Developers"
                    width={150}
                    height={74}
                  />
                </Link>
              </div>
              <div className="signature-menu__body">
                <p className="eyebrow">Explore Signature</p>
                <nav>
                  {links.map(([label, href], index) => (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07, duration: 0.35 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={activeHref === href ? "is-active" : undefined}
                        aria-current={
                          activeHref === href ? "location" : undefined
                        }
                      >
                        <span>0{index + 1}</span>
                        {label}
                        <ArrowRight size={17} />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="signature-menu__bottom">
                  <span>Building better tomorrow</span>
                  <a
                    className="signature-menu__whatsapp"
                    href="https://wa.me/918436969369"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp size={20} style={{ color: "#25D366" }} />
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>
            <button
              className="signature-menu__close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <span>Close</span>
              <X size={22} />
            </button>
            <span className="signature-menu__caption">
              Thoughtful spaces. Lasting value.
            </span>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
