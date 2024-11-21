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
    subMenuHeading: ["Business Solutions", "Learning Solutions"],
    subMenu: [
      {
        name: "CRM",
        desc: "Customer Relationship Management",
        href: "/resources/marketplace",
        iconName: "Users2",
        group: "Business Solutions"
      },
      {
        name: "Assets & Vendor Management",
        desc: "Track assets and manage vendors efficiently",
        href: "/resources/meetups",
        iconName: "Building2",
        group: "Business Solutions"
      },
      {
        name: "Expense Management",
        desc: "Track and manage business expenses",
        href: "/resources/updates",
        iconName: "Wallet",
        group: "Business Solutions"
      },
      {
        name: "LMS",
        desc: "Learning Management System",
        href: "/resources/academy",
        iconName: "GraduationCap",
        group: "Learning Solutions"
      }
    ],
    gridCols: 2,
    layout: "grouped"
  },

  {
    name: "Marketplace Solutions",
    subMenuHeading: ["Beauty & Saloon", "Home Services", "Handyman App", "Car Washing", "Taxi App", "Food Delivery", "Grocery Delivery", "On Demand"],
    subMenu: [
      {
        name: "Beauty & Saloon",
        desc: "Beauty services at your doorstep",
        href: "/enterprise",
        iconName: "Scissors",
      },
      {
        name: "Home Services",
        desc: "Professional home maintenance services daily",
        href: "/enterprise/collaboration",
        iconName: "Home",
      },
      {
        name: "Handyman App",
        desc: "Expert repairs and installations nearby",
        href: "/enterprise/customers",
        iconName: "Wrench",
      },
      {
        name: "Car Washing",
        desc: "Professional car cleaning services here",
        href: "/enterprise/security",
        iconName: "Car",
      },
      {
        name: "Taxi App",
        desc: "Book rides anytime and anywhere",
        href: "/enterprise/security",
        iconName: "Bus",
      },
      {
        name: "Food Delivery",
        desc: "Order food from local restaurants",
        href: "/enterprise/security",
        iconName: "UtensilsCrossed",
      },
      {
        name: "Grocery Delivery",
        desc: "Fresh groceries delivered to home",
        href: "/enterprise/security",
        iconName: "ShoppingBasket",
      },
      {
        name: "On Demand",
        desc: "Services available at your convenience",
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
