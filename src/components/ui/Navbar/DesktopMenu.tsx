"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

interface SubMenuItem {
  name: string;
  desc: string;
  iconName?: keyof typeof import("lucide-react");
  group?: string;
  href: string;
}

interface MenuItem {
  name: string;
  gridCols?: 1 | 2 | 3;
  subMenu?: SubMenuItem[];
  subMenuHeading?: string[];
  href?: string;
  layout?: "grouped" | "default";
}

interface DesktopMenuProps {
  menu: MenuItem;
}

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.5 },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: { duration: 0.5 },
    transitionEnd: { display: "none" },
  },
} as const;

export default function DesktopMenu({ menu }: DesktopMenuProps) {
  const [isHover, setIsHover] = useState(false);

  const hasSubMenu = React.useMemo(
    () => menu?.subMenu && menu?.subMenu?.length > 0,
    [menu?.subMenu]
  );

  const getIcon = React.useCallback(
    (iconName: keyof typeof LucideIcons | undefined) => {
      if (!iconName) return null;
      const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;
      return Icon ? <Icon /> : null;
    },
    []
  );

  const groupedSubMenus = React.useMemo(() => {
    if (!menu.subMenu || menu.layout !== "grouped") return null;

    return menu.subMenu.reduce((acc, item) => {
      const group = item.group || "default";
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    }, {} as Record<string, SubMenuItem[]>);
  }, [menu.subMenu, menu.layout]);

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      key={menu.name}
    >
      {!hasSubMenu && menu.href ? (
        <Link href={menu.href}>
          <span className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
            {menu.name}
          </span>
        </Link>
      ) : (
        <span className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
          {menu.name}
          {hasSubMenu && (
            <ChevronDown
              className="mt-[0.6px] group-hover/link:rotate-180 duration-200"
              aria-hidden="true"
            />
          )}
        </span>
      )}

      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
          role="menu"
          aria-label={`${menu.name} submenu`}
        >
          {menu.layout === "grouped" &&
          groupedSubMenus &&
          menu.subMenuHeading ? (
            <div className="grid grid-cols-2 gap-8">
              {menu.subMenuHeading.map((heading, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-400">
                    {heading}
                  </h3>
                  <div className="space-y-4">
                    {groupedSubMenus[heading]?.map((submenu) => (
                      <Link
                        href={submenu.href || "#"}
                        key={submenu.name}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        {submenu.iconName && (
                          <div className="p-2 rounded-md bg-white/5">
                            {getIcon(submenu.iconName)}
                          </div>
                        )}
                        <div>
                          <h4 className="font-medium">{submenu.name}</h4>
                          <p className="text-sm text-gray-400">
                            {submenu.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={cn(
                "grid gap-7",
                menu.gridCols === 3 && "grid-cols-3",
                menu.gridCols === 2 && "grid-cols-2",
                (!menu.gridCols || menu.gridCols === 1) && "grid-cols-1"
              )}
            >
              {menu.subMenu?.map((submenu, i) => (
                <Link
                  href={submenu.href || "#"}
                  key={`${menu.name}-submenu-${i}`}
                  className="relative cursor-pointer"
                >
                  {menu.gridCols &&
                    menu.gridCols > 1 &&
                    menu?.subMenuHeading?.[i] && (
                      <p className="text-sm mb-4 text-gray-500">
                        {menu.subMenuHeading[i]}
                      </p>
                    )}
                  <div className="flex items-center gap-x-4 group/menubox">
                    {submenu.iconName && (
                      <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                        {getIcon(submenu.iconName)}
                      </div>
                    )}
                    <div>
                      <h6 className="font-semibold">{submenu.name}</h6>
                      <p className="text-sm text-gray-400">{submenu.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </motion.li>
  );
}
