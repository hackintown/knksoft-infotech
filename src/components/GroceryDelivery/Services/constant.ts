import {
  MdWorkOutline,
  MdSchedule,
  MdAttachMoney,
  MdMap,
  MdChat,
} from "react-icons/md";
import {
  FaUsers,
  FaFolderOpen,
  FaChartLine,
  FaMoneyBillWave,
  FaBalanceScale,
  FaCog,
  FaListUl,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface Service {
  id: number;
  title: string;
  image: string;
  tab: number;
  icon: IconType;
}

export const TABS = [
  { id: 1, title: "Customer" },
  { id: 2, title: "Merchant" },
  { id: 3, title: "Delivery" },
  { id: 4, title: "Admin Panel" },
] as const;

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Manage Restaurant List",
    image:
      "https://www.valueappz.com/online-food-delivery-solution/images/resturant_profile.png",
    tab: 1,
    icon: FaFolderOpen,
  },
  {
    id: 2,
    title: "Categories Management",
    image:
      "https://www.valueappz.com/online-food-delivery-solution/images/search_by_category.png",
    tab: 1,
    icon: FaListUl,
  },
  {
    id: 3,
    title: "App Updates ",
    image:
      "https://www.valueappz.com/online-food-delivery-solution/images/discount_and_coupons.png",
    tab: 1,
    icon: FaCog,
  },
  {
    id: 4,
    title: "Revenue Management ",
    image:
      "https://www.valueappz.com/online-food-delivery-solution/images/seamless_payment.png",
    tab: 1,
    icon: FaMoneyBillWave,
  },
  {
    id: 5,
    title: "Marketing and Promotion",
    image:
      "https://www.valueappz.com/online-food-delivery-solution/images/push-notifications.png",
    tab: 1,
    icon: FaChartLine,
  },
  {
    id: 6,
    title: "Website Earnings",
    image: "/images/profile.png",
    tab: 1,
    icon: MdAttachMoney,
  },

  // Service Provider App Services
  {
    id: 7,
    title: "Job Request Management",
    image: "/images/job-request.png",
    tab: 2,
    icon: MdWorkOutline,
  },
  {
    id: 8,
    title: "Schedule Management",
    image: "/images/schedule.png",
    tab: 2,
    icon: MdSchedule,
  },
  {
    id: 9,
    title: "Earnings Dashboard",
    image: "/images/earnings.png",
    tab: 2,
    icon: MdAttachMoney,
  },
  {
    id: 10,
    title: "Service Area Setup",
    image: "/images/service-area.png",
    tab: 2,
    icon: MdMap,
  },
  {
    id: 11,
    title: "Customer Communication",
    image: "/images/communication.png",
    tab: 2,
    icon: MdChat,
  },
  {
    id: 12,
    title: "Service Portfolio",
    image: "/images/portfolio.png",
    tab: 2,
    icon: FaFolderOpen,
  },

  // Admin Panel Services
  {
    id: 13,
    title: "User Management",
    image: "/images/user-management.png",
    tab: 3,
    icon: FaUsers,
  },
  {
    id: 14,
    title: "Service Category Management",
    image: "/images/category-management.png",
    tab: 3,
    icon: FaFolderOpen,
  },
  {
    id: 15,
    title: "Analytics Dashboard",
    image: "/images/analytics.png",
    tab: 3,
    icon: FaChartLine,
  },
  {
    id: 16,
    title: "Payment Management",
    image: "/images/payment-management.png",
    tab: 3,
    icon: FaMoneyBillWave,
  },
  {
    id: 17,
    title: "Dispute Resolution",
    image: "/images/dispute.png",
    tab: 3,
    icon: FaBalanceScale,
  },
  {
    id: 18,
    title: "System Configuration",
    image: "/images/configuration.png",
    tab: 3,
    icon: FaCog,
  },
];
