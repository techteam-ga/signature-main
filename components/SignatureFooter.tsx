"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

const offices = [
  { name: "Kolkata", lines: ["RDB Boulevard", "Salt Lake, Sec V", "Kolkata - 700091", "West Bengal, India"] },
  { name: "Dhanbad", lines: ["Shri Ram Complex", "Ground Floor, Hirak Road, Nawadih", "Dhanbad, Jharkhand - 828130"] },
  { name: "Howrah Factory", lines: ["Saraswati Complex", "Bandara, Domjur", "Howrah - 711411", "West Bengal, India"] },
];

const quickLinks = [
  ["Home", "/"], ["Blog", "/gallery"],
  ["About Us", "/about"], ["Gallery", "/gallery"],
  ["Our Projects", "/portfolio"], ["News & Updates", "/gallery"],
  ["Why Choose Us", "/about"], ["Privacy Policy", "/contact"],
  ["Career", "/contact"], ["Contact Us", "/contact"],
];

const socials = [
  { label: "Facebook", Icon: FaFacebookF, className: "facebook" },
  { label: "Instagram", Icon: FaInstagram, className: "instagram" },
  { label: "LinkedIn", Icon: FaLinkedinIn, className: "linkedin" },
  { label: "YouTube", Icon: FaYoutube, className: "youtube" },
  { label: "WhatsApp", Icon: FaWhatsapp, className: "whatsapp" },
];

export default function SignatureFooter() {
  return (
    <footer className="signature-footer signature-footer--reference">
      <div className="signature-footer__skyline" aria-hidden="true">
        <svg viewBox="0 0 1600 260" preserveAspectRatio="xMidYMax slice" fill="none">
          <g stroke="currentColor" strokeWidth="1.2">
            <path d="M0 218h1600M10 218v-43h23v43m-18-36h12m-12 9h12m-12 9h12m-12 9h12M45 218v-73l21-21 21 21v73m-35-65h28m-28 12h28m-28 12h28m-28 12h28m-28 12h28M96 218v-50l17-14 17 14v50m-27-42h20m-20 11h20m-20 11h20m-20 11h20M144 218v-98h34v98m-27-84h20m-20 12h20m-20 12h20m-20 12h20m-20 12h20m-20 12h20m-20 12h20m-20 12h20M193 218v-69l25-26 25 26v69m-40-57h30m-30 12h30m-30 12h30m-30 12h30m-30 12h30M258 218v-46h25v46m-19-37h13m-13 10h13m-13 10h13m-13 10h13M302 218v-88h29v88m-23-74h17m-17 12h17m-17 12h17m-17 12h17m-17 12h17m-17 12h17m-17 12h17M352 218v-61l22-21 22 21v61m-34-48h24m-24 12h24m-24 12h24m-24 12h24m-24 12h24M420 218V95h39v123m-31-108h23m-23 14h23m-23 14h23m-23 14h23m-23 14h23m-23 14h23m-23 14h23m-23 14h23M478 218v-66l23-24 23 24v66m-36-53h26m-26 13h26m-26 13h26m-26 13h26m-26 13h26M540 218v-90h32v90m-25-76h18m-18 13h18m-18 13h18m-18 13h18m-18 13h18m-18 13h18m-18 13h18M600 218v-58l22-22 22 22v58m-34-45h24m-24 12h24m-24 12h24m-24 12h24m-24 12h24"/>
            <path d="M1265 218v-80h32v80m-25-66h18m-18 12h18m-18 12h18m-18 12h18m-18 12h18m-18 12h18m-18 12h18M1325 218v-59l22-21 22 21v59m-34-46h24m-24 12h24m-24 12h24m-24 12h24m-24 12h24M1387 218V104h37v114m-29-99h21m-21 14h21m-21 14h21m-21 14h21m-21 14h21m-21 14h21m-21 14h21m-21 14h21M1445 218v-70l24-25 24 25v70m-37-56h26m-26 13h26m-26 13h26m-26 13h26m-26 13h26M1510 218v-49l18-15 18 15v49m-29-41h22m-22 11h22m-22 11h22m-22 11h22m-22 8h22M1560 218v-64l20-21 20 21v64m-31-50h22m-22 12h22m-22 12h22m-22 12h22m-22 12h22"/>
            <path d="M0 239c130-36 194-36 325 0s207 32 335-1 205-34 338 0 220 34 345 1 174-34 257-9M0 250c118-31 196-29 320 2 115 28 213 29 336-1 122-30 215-31 340 0 118 29 215 30 342 0 113-26 181-30 262-14"/>
            <path d="M25 218c-6-16-5-27 0-40m0 22c-15-10-20-19-21-30m21 23c13-12 18-22 17-33m1530 58c-5-16-4-28 1-41m-1 25c-14-10-19-20-19-31m19 23c13-11 18-21 18-32"/>
          </g>
        </svg>
      </div>

      <div className="signature-footer__main">
        <section className="signature-footer__brand">
          <Image src="/signature-logo.png" alt="Signature Developers" width={285} height={140} />
          <p>At Signature Developers, we create sustainable communities and modern living spaces that bring people, nature and a better tomorrow together.</p>
          <div className="signature-footer__socials" aria-label="Social media">
            {socials.map(({ label, Icon, className }) => (
              <a key={label} href={label === "WhatsApp" ? "https://wa.me/918436969369" : "#"} target={label === "WhatsApp" ? "_blank" : undefined} rel={label === "WhatsApp" ? "noreferrer" : undefined} aria-label={label} className={className}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="signature-footer__column signature-footer__offices">
          <h3>Our Offices</h3>
          {offices.map((office) => (
            <address className="signature-footer__office" key={office.name}>
              <span className="signature-footer__icon"><MapPin size={17} /></span>
              <span className="signature-footer__address"><strong>{office.name}</strong>{office.lines.map((line) => <span key={line}>{line}</span>)}</span>
            </address>
          ))}
        </section>

        <section className="signature-footer__column signature-footer__contact">
          <h3>Contact Us</h3>
          <a href="tel:+918436969369"><span className="signature-footer__icon"><Phone size={16} /></span><span>+91 843 696 9369</span></a>
          <a href="mailto:info@signaturedevelopers.co.in"><span className="signature-footer__icon"><Mail size={16} /></span><span>info@signaturedevelopers.co.in</span></a>
          <a href="https://www.google.com/maps/search/?api=1&query=RDB+Boulevard+Salt+Lake+Sector+V+Kolkata" target="_blank" rel="noreferrer"><span className="signature-footer__icon"><MapPin size={16} /></span><span>Find our Kolkata office</span></a>
        </section>

        <nav className="signature-footer__column signature-footer__quicklinks" aria-label="Quick links">
          <h3>Quick Links</h3>
          <div>{quickLinks.map(([label, href]) => <Link href={href} key={`${label}-${href}`}>{label}</Link>)}</div>
        </nav>
      </div>

      <div className="signature-footer__bottom">
        <span className="signature-footer__copyright"><strong>© 2017</strong> Signature Developers. All Rights Reserved.</span>
        <nav className="signature-footer__legal" aria-label="Legal links">
          <Link href="/contact">Terms &amp; Conditions</Link><i />
          <Link href="/contact">Privacy Policy</Link><i />
          <Link href="/">Sitemap</Link>
        </nav>
        <button className="signature-footer__backtop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={15} /></button>
      </div>
    </footer>
  );
}
