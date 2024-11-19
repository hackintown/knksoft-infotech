'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface SubMenuItem {
  name: string;
  desc?: string;
  href: string;
  iconName: keyof typeof import("lucide-react");
}

interface MenuItem {
  name: string;
  href?: string;
  subMenuHeading?: string[];
  subMenu?: SubMenuItem[];
  gridCols?: 1 | 2 | 3;
}

interface MobMenuProps {
  Menus: MenuItem[];
}

export default function MobMenu({ Menus }: MobMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState<number | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative">
      <button 
        className="lg:hidden z-[999] relative p-2 hover:bg-white/5 rounded-md transition-colors"
        onClick={toggleDrawer}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 right-0 top-16 overflow-y-auto bg-[#18181A]/95 backdrop-blur-sm text-white p-6 pb-20 h-[calc(100vh-4rem)]"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <nav>
              <ul className="space-y-2">
                {Menus.map(({ name, subMenu }, i) => {
                  const isClicked = clicked === i;
                  const hasSubMenu = subMenu && subMenu.length > 0;
                  
                  return (
                    <li key={name} className="rounded-md overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-md transition-colors"
                        onClick={() => setClicked(isClicked ? null : i)}
                        aria-expanded={isClicked}
                      >
                        <span>{name}</span>
                        {hasSubMenu && (
                          <ChevronDown
                            className={`transition-transform duration-300 ${
                              isClicked ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {hasSubMenu && (
                          <motion.ul
                            initial="exit"
                            animate={isClicked ? "enter" : "exit"}
                            exit="exit"
                            variants={subMenuDrawer}
                            className="ml-5 space-y-1"
                          >
                            {subMenu?.map(({ name, iconName }) => {
                              const Icon = iconName ? (LucideIcons[iconName] as LucideIcons.LucideIcon) : null;
                              return (
                                <li key={name}>
                                  <button className="w-full p-3 flex items-center hover:bg-white/5 rounded-md gap-x-2 transition-colors">
                                    {Icon && <Icon className="h-4 w-4" />}
                                    <span>{name}</span>
                                  </button>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
