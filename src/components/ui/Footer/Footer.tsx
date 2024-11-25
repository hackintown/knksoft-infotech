"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { text: "Contact Us", href: "/contact" },
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms & Conditions", href: "/terms" },
    { text: "Disclaimer", href: "/disclaimer" },
    { text: "Blog", href: "/blog" },
    { text: "Partnership Program", href: "/partnership" },
  ];

  const onDemandApps = [
    { text: "Food Delivery", href: "/food-delivery" },
    { text: "Grocery Delivery", href: "/grocery-delivery" },
    { text: "Beauty Services", href: "/beauty-services" },
    { text: "Home Services", href: "/home-services" },
    { text: "Pharmacy Delivery", href: "/pharmacy-delivery" },
    { text: "Handyman Service", href: "/handyman" },
    { text: "Car Washing Services", href: "/car-wash" },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, href: "#", label: "Facebook" },
    { Icon: FaXTwitter, href: "#", label: "Twitter" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { Icon: FaYoutube, href: "#", label: "YouTube" },
    { Icon: FaWhatsapp, href: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#014f99] to-[#014f99]/90 text-white/80">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-6">
              <Image
                src="/images/logo.svg"
                alt="Company Logo"
                width={150}
                height={50}
                 className="w-auto h-12 brightness-[1.8]"
              />
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              Leading provider of innovative IT solutions, specializing in custom software development,
              cloud services, and digital transformation.
            </p>
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              {onDemandApps.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-8 h-8 mt-1 text-primary-foreground" />
                <p>New Ashokm Nagar, New Delhi, India</p>
              </li>
              <li>
                <Link href="tel:+8851967714" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-6 h-6 mt-1 text-primary-foreground" />
                  +1-8851967714
                </Link>
              </li>
              <li>
                <Link href="mailto:info@xyz.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-6 h-6 mt-1 text-primary-foreground" />
                  info@xyz.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80">   
              © {new Date().getFullYear()} XYZ. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm hover:text-primary transition-colors">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}