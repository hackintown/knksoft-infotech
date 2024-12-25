"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { text: "Contact Us", href: "/contact-us" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Careers", href: "/careers" },
    { text: "Awards & Events", href: "/awards-and-events" },
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms & Conditions", href: "/terms" },
  ];

  const onDemandApps = [
    { text: "Food Delivery", href: "/food-delivery-app-development" },
    { text: "Grocery Delivery", href: "/grocery-app-development" },
    { text: "Beauty Services", href: "/ondemand-beauty-app-development" },
    { text: "Home Services", href: "/ondemand-home-services-app-development" },
    { text: "Handyman Service", href: "/handyman-app-development" },
    { text: "Car Washing Services", href: "/car-washing-app-development" },
    { text: "Taxi Services", href: "/taxi-app-development" },
    { text: "On Demand Services", href: "/on-demand-app-development" },
  ];

  const socialIcons = [
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61559964659278",
      label: "Facebook",
    },
    { Icon: FaXTwitter, href: "#", label: "Twitter" },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/knksoftinfotech",
      label: "Instagram",
    },
    {
      Icon: FaLinkedinIn,
      href: "linkedin.com/company/knk-soft-infotech-pvt-ltd",
      label: "LinkedIn",
    },
    {
      Icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCJ0_vBW32QCUfwmK-wdRTLA",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#0d0f2c]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 text-white">
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
              Leading provider of innovative IT solutions, specializing in
              custom software development, cloud services, and digital
              transformation.
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
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-4">
              {onDemandApps.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-8 h-8 mt-1 text-primary-foreground" />
                <p>New Ashokm Nagar, New Delhi, India</p>
              </li>
              <li>
                <Link
                  href="tel:+8851967714"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="w-6 h-6 mt-1 text-primary-foreground" />
                  +1-8851967714
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@xyz.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
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
              <Link
                href="/privacy-policy"
                className="text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm hover:text-primary transition-colors"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
