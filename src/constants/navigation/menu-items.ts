
import type { MenuItem } from "./types";

export const NAVIGATION_MENUS = [
    {
        name: "Features",
        subMenuHeading: ["Design", "Scale"],
        subMenu: [
            {
                name: "Design",
                desc: "Responsive design",
                href: "/features/design",
                iconName: "PanelsTopLeft",
            },
            {
                name: "Management",
                desc: "Site control",
                href: "/features/management",
                iconName: "Bolt",
            },
            {
                name: "Navigation",
                desc: "Link pages",
                href: "/features/navigation",
                iconName: "PanelTop",
            },
            {
                name: "CMS",
                desc: "Management content",
                href: "/features/cms",
                iconName: "Database",
            },
        ],
        gridCols: 2,
    },
    {
        name: "Resources",
        subMenuHeading: ["Get started", "Programs", "Recent"],
        subMenu: [
            {
                name: "Marketplace",
                desc: "Browse templates",
                href: "/resources/marketplace",
                iconName: "ShoppingBag",
            },
            {
                name: "Meetups",
                desc: "Upcoming events",
                href: "/resources/meetups",
                iconName: "MapPin",
            },
            {
                name: "Updates",
                desc: "Changelog",
                href: "/resources/updates",
                iconName: "BellDot",
            },
            {
                name: "Academy",
                desc: "Watch lessons",
                href: "/resources/academy",
                iconName: "Play",
            },
            {
                name: "Blog",
                desc: "Posts",
                href: "/resources/blog",
                iconName: "BookOpenText",
            },
            {
                name: "Figma",
                desc: "Plugin",
                href: "/resources/figma",
                iconName: "Figma",
            },
            {
                name: "Experts",
                desc: "Jobs",
                href: "/resources/experts",
                iconName: "BriefcaseBusiness",
            },
            {
                name: "Gallery",
                desc: "Images",
                href: "/resources/gallery",
                iconName: "Images",
            },
        ],
        gridCols: 3,
    },
    {
        name: "Support",
        subMenu: [
            {
                name: "Help",
                desc: "Center",
                href: "/support/help",
                iconName: "CircleHelp",
            },
            {
                name: "Community",
                desc: "Project help",
                href: "/support/community",
                iconName: "MessageCircle",
            },
            {
                name: "Emergency",
                desc: "Urgent issues",
                href: "/support/emergency",
                iconName: "TriangleAlert",
            },
        ],
        gridCols: 1,
    },
    {
        name: "Enterprise",
        subMenuHeading: ["Overview", "Features"],
        subMenu: [
            {
                name: "Enterprise",
                desc: "Overview",
                href: "/enterprise",
                iconName: "ShieldPlus",
            },
            {
                name: "Collaboration",
                desc: "Design together",
                href: "/enterprise/collaboration",
                iconName: "Users",
            },
            {
                name: "Customers",
                desc: "Stories",
                href: "/enterprise/customers",
                iconName: "Dessert",
            },
            {
                name: "Security",
                desc: "Your site secured",
                href: "/enterprise/security",
                iconName: "Lock",
            },
        ],
        gridCols: 2,
    },
    {
        name: "Pricing",
        href: "/pricing"
    },
    {
        name: "Contact",
        href: "/contact"
    },
] as const satisfies MenuItem[];

export type NavigationMenu = typeof NAVIGATION_MENUS[number]; 