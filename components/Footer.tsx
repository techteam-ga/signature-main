"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white py-16 border-t border-[#1f1f1f] overflow-hidden">
      {/* 🖼 Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.jpg"
          alt="Luxury architectural background"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-black/75" />

      <div className="absolute top-0 left-0 w-full h-56 bg-linear-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,185,115,0.05)_0%,transparent_70%)] opacity-40" />

      {/* 🔹 Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 relative z-10">
        {/* 🏢 Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-4">
            <Image
              src="/signature-group-logo.svg"
              alt="Signature Group Logo"
              width={220}
              height={100}
              className="object-contain"
            />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Building excellence across India — from innovative architecture to
            world-class construction, delivering luxury, precision, and trust.
          </p>

          {/* 🌐 Social Links */}
          <div className="flex space-x-5 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaFacebook className="w-6 h-6 text-[#1877F2]" />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram className="w-6 h-6 text-[#E4405F]" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin className="w-6 h-6 text-[#0A66C2]" />
            </Link>

            <Link
              href="https://wa.me/+919748649999"
              target="_blank"
              aria-label="WhatsApp"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
            </Link>
          </div>
        </motion.div>

        {/* 📍 Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-[#E0B973] text-lg font-semibold mb-4">
            Our Offices
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <p className="font-semibold text-white">KOLKATA</p>
              <p># 356, Ground Floor, Jodhpur Park,</p>
              <p>Kolkata - 700068</p>
            </div>

            <div>
              <p className="font-semibold text-white mt-4">PATNA</p>
              <p>401, 4th Floor, Sai Tower,</p>
              <p>New Dak Bungalow Road,</p>
              <p>Patna - 800001</p>
            </div>

            <div>
              <p className="font-semibold text-white mt-4">HOWRAH</p>
              <p>Factory: Saraswati Complex,</p>
              <p>Bandara, Domjur,</p>
              <p>Howrah - 711411</p>
            </div>
          </div>
        </motion.div>

        {/* 📞 Contact Info WITH hyperlinks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-[#E0B973] text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <div className="text-gray-300 text-sm space-y-4">
            {/* Email */}
            <div className="flex items-start space-x-3">
              <Mail className="w-4 h-4 text-[#E0B973] mt-0.5" />
              <Link
                href="mailto:hello@signaturegroup.com"
                className="hover:text-[#E0B973] transition"
              >
                hello@signaturegroup.com
              </Link>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-[#E0B973] mt-0.5" />

              <div className="flex flex-col">
                <Link
                  href="tel:+919748649999"
                  className="hover:text-[#E0B973] transition"
                >
                  +91 9748649999
                </Link>

                <Link
                  href="tel:+918436969369"
                  className="hover:text-[#E0B973] transition"
                >
                  +91 8436969369
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✉️ Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-[#E0B973] text-lg font-semibold mb-4">
            Subscribe
          </h3>

          <form
            className="flex flex-col space-y-3 mb-6"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* Web3Forms Required */}
            <input
              type="hidden"
              name="access_key"
              value="1451740e-965b-41de-b42d-eed139082b34"
            />
            <input
              type="hidden"
              name="subject"
              value="New Newsletter Subscription"
            />
            <input
              type="hidden"
              name="from_name"
              value="Signature Group Website"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="bg-[#1a1a1a]/70 border border-[#2a2a2a] text-gray-200 text-sm px-4 py-2 rounded-md focus:outline-none focus:border-[#E0B973]"
            />

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px #E0B973",
              }}
              transition={{ duration: 0.3 }}
              className="bg-transparent border border-[#E0B973] text-[#E0B973] text-sm py-2 rounded-md hover:bg-[#E0B973] hover:text-black transition-all duration-300"
              type="submit"
            >
              Subscribe
            </motion.button>
          </form>

          {/* Pages */}
          <h3 className="text-[#E0B973] text-lg font-semibold mb-3">Pages</h3>

          <ul className="text-gray-300 text-sm space-y-2">
            {["Home", "About", "Portfolio", "Gallery", "Contact"].map(
              (page) => (
                <li key={page}>
                  <Link
                    href={`/${page === "Home" ? "" : page.toLowerCase()}`}
                    className="hover:text-[#E0B973] transition-colors duration-300"
                  >
                    {page}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-[#2a2a2a]/70 mt-16 pt-6 text-center text-gray-400 text-xs relative z-10">
        © 2017 Signature Group. All Rights Reserved.
      </div>
    </footer>
  );
}
