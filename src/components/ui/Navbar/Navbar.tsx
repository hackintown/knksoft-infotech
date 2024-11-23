"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { NAVIGATION_MENUS } from "@/constants/navigation/menu-items";
import Image from "next/image";
import { throttle } from "lodash";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Throttle scroll event for better performance
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  const headerClasses = cn(
    "fixed w-full top-0 z-50 shadow-sm",
    isScrolled && "shadow-lg shadow-foreground/5 bg-background"
  );

  return (
    <motion.header
      className={headerClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex h-16 items-center justify-between max-w-full">
          <Logo />

          <DesktopNavigation />

          <MobMenu Menus={NAVIGATION_MENUS} />
        </div>
      </div>
    </motion.header>
  );
}

// New components to extract logic
const Logo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="relative flex-shrink-0"
  >
    <Link href="/" className="block">
      <Image
        src="/images/logo.svg"
        alt="KNK Soft Infotech Logo"
        width={100}
        height={40}
        className="w-auto h-8 sm:h-10 cursor-pointer"
        priority
        sizes="(max-width: 640px) 100px, 120px"
      />
    </Link>
  </motion.div>
);

const DesktopNavigation = () => (
  <nav className="hidden lg:flex items-center gap-2">
    <ul className="flex items-center gap-2 text-base">
      {NAVIGATION_MENUS.map((menu) => (
        <DesktopMenu key={menu.name} menu={menu} />
      ))}
    </ul>
    <Link
      href="/contact"
      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
    >
      Get in Touch
    </Link>
  </nav>
);
