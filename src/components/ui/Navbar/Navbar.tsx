"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { NAVIGATION_MENUS } from "@/constants/navigation/menu-items";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`nav-container z-50 ${
        scrolled ? "shadow-lg shadow-foreground/5" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-gradient">
              KNK Soft
            </Link>
          </motion.div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAVIGATION_MENUS.map((menu) => (
                <DesktopMenu key={menu.name} menu={menu} />
              ))}
            </ul>
          </nav>

          <MobMenu Menus={NAVIGATION_MENUS} />
        </div>
      </div>
    </motion.header>
  );
}
