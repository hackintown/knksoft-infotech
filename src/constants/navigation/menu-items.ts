import type { MenuItem } from "./types";

export const NAVIGATION_MENUS = [
  {
    name: "Services",
    subMenuHeading: ["Custom Software Development", "Cloud Services"],
    subMenu: [
      {
        name: "MVF Development",
        desc: "Build scalable minimum viable features",
        href: "/services/mvf-development",
        iconName: "Code2",
        group: "Custom Software Development",
      },
      {
        name: "Custom Web Development",
        desc: "Modern web applications & solutions",
        href: "/services/web-development",
        iconName: "Globe",
        group: "Custom Software Development",
      },
      {
        name: "Custom Mobile App Development",
        desc: "Native & cross-platform mobile apps",
        href: "/services/mobile-development",
        iconName: "Smartphone",
        group: "Custom Software Development",
      },
      {
        name: "Bar Code Solutions",
        desc: "Inventory & tracking systems",
        href: "/services/barcode-solutions",
        iconName: "Barcode",
        group: "Custom Software Development",
      },
      {
        name: "E-Commerce",
        desc: "Custom online store solutions",
        href: "/services/ecommerce",
        iconName: "ShoppingCart",
        group: "Custom Software Development",
      },
      {
        name: "AWS Development",
        desc: "Custom AWS cloud solutions",
        href: "/services/aws-development",
        iconName: "Cloud",
        group: "Cloud Services",
      },
      {
        name: "Cloud Architecture",
        desc: "Scalable infrastructure design",
        href: "/services/cloud-architecture",
        iconName: "Network",
        group: "Cloud Services",
      },
      {
        name: "DevOps Services",
        desc: "CI/CD & automation solutions",
        href: "/services/devops",
        iconName: "Settings",
        group: "Cloud Services",
      },
      {
        name: "Cloud Security",
        desc: "Advanced security solutions",
        href: "/services/cloud-security",
        iconName: "Shield",
        group: "Cloud Services",
      },
    ],
    gridCols: 2,
    layout: "grouped",
  },
  {
    name: "Solutions",
    subMenu: [
      {
        name: "CRM",
        desc: "Browse templates",
        href: "/resources/marketplace",
        iconName: "Users2",
      },
      {
        name: "Assets & Vendor Management",
        desc: "Upcoming events",
        href: "/resources/meetups",
        iconName: "Building2",
      },
      {
        name: "Expense Management",
        desc: "Changelog",
        href: "/resources/updates",
        iconName: "Wallet",
      },
      {
        name: "LMS",
        desc: "Watch lessons",
        href: "/resources/academy",
        iconName: "GraduationCap",
      },
    ],
    gridCols: 1,
  },

  {
    name: "Marketplace Solutions",
    subMenuHeading: ["", ""],
    subMenu: [
      {
        name: "Beauty & Saloon",
        desc: "Overview",
        href: "/enterprise",
        iconName: "Scissors",
      },
      {
        name: "Home Services",
        desc: "Design together",
        href: "/enterprise/collaboration",
        iconName: "Home",
      },
      {
        name: "Handyman App",
        desc: "Stories",
        href: "/enterprise/customers",
        iconName: "Wrench",
      },
      {
        name: "Car Washing",
        desc: "Your site secured",
        href: "/enterprise/security",
        iconName: "Car",
      },
      {
        name: "Taxi App",
        desc: "Your site secured",
        href: "/enterprise/security",
        iconName: "Bus",
      },
      {
        name: "Food Delivery",
        desc: "Your site secured",
        href: "/enterprise/security",
        iconName: "UtensilsCrossed",
      },
      {
        name: "Grocery Delivery",
        desc: "Your site secured",
        href: "/enterprise/security",
        iconName: "ShoppingBasket",
      },
      {
        name: "On Demand",
        desc: "Your site secured",
        href: "/enterprise/security",
        iconName: "Zap",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Award & Events",
    href: "/awards-and-events",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
] as const satisfies MenuItem[];

export type NavigationMenu = (typeof NAVIGATION_MENUS)[number];
