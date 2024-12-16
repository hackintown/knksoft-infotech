"use client";

import Image from "next/image";
import { useState } from "react";

const TABS = [
    { id: 1, title: "Customer " },
    { id: 2, title: "Service Provider " },
    { id: 3, title: "Admin Panel" },
];

const SERVICES = [
    // Customer App Services
    {
        id: 1,
        title: "Booking and Scheduling",
        image: "https://www.valueappz.com/online-food-delivery-solution/images/service-categories.png",
        tab: 1,
        icon: "📅"
    },
    {
        id: 2,
        title: "Service Search & Filtering",
        image: "https://www.valueappz.com/online-food-delivery-solution/images/booking.png",
        tab: 1,
        icon: "🔍"
    },
    {
        id: 3,
        title: "Real-time Service Tracking",
        image: "https://www.valueappz.com/online-food-delivery-solution/images/service-search.png",
        tab: 1,
        icon: "📍"
    },
    {
        id: 4,
        title: "Payment Integration",
        image: "https://www.valueappz.com/online-food-delivery-solution/images/service-request.png",
        tab: 1,
        icon: "💳"
    },
    {
        id: 5,
        title: "Service History",
        image: "https://www.valueappz.com/online-food-delivery-solution/images/push-notifications.png",
        tab: 1,
        icon: "📋"
    },
    {
        id: 6,
        title: "Profile Management",
        image: "/images/profile.png",
        tab: 1,
        icon: "👤"
    },

    // Service Provider App Services
    {
        id: 7,
        title: "Job Request Management",
        image: "/images/job-request.png",
        tab: 2,
        icon: "📝"
    },
    {
        id: 8,
        title: "Schedule Management",
        image: "/images/schedule.png",
        tab: 2,
        icon: "⏰"
    },
    {
        id: 9,
        title: "Earnings Dashboard",
        image: "/images/earnings.png",
        tab: 2,
        icon: "💰"
    },
    {
        id: 10,
        title: "Service Area Setup",
        image: "/images/service-area.png",
        tab: 2,
        icon: "🗺️"
    },
    {
        id: 11,
        title: "Customer Communication",
        image: "/images/communication.png",
        tab: 2,
        icon: "💬"
    },
    {
        id: 12,
        title: "Service Portfolio",
        image: "/images/portfolio.png",
        tab: 2,
        icon: "📊"
    },

    // Admin Panel Services
    {
        id: 13,
        title: "User Management",
        image: "/images/user-management.png",
        tab: 3,
        icon: "👥"
    },
    {
        id: 14,
        title: "Service Category Management",
        image: "/images/category-management.png",
        tab: 3,
        icon: "📁"
    },
    {
        id: 15,
        title: "Analytics Dashboard",
        image: "/images/analytics.png",
        tab: 3,
        icon: "📈"
    },
    {
        id: 16,
        title: "Payment Management",
        image: "/images/payment-management.png",
        tab: 3,
        icon: "💵"
    },
    {
        id: 17,
        title: "Dispute Resolution",
        image: "/images/dispute.png",
        tab: 3,
        icon: "⚖️"
    },
    {
        id: 18,
        title: "System Configuration",
        image: "/images/configuration.png",
        tab: 3,
        icon: "⚙️"
    },
];

const Services = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [activeService, setActiveService] = useState(SERVICES[0].id);

    const filteredServices = SERVICES.filter((service) => service.tab === activeTab);
    const activeImage = SERVICES.find((service) => service.id === activeService)?.image;

    const handleTabChange = (tabId: number) => {
        setActiveTab(tabId);
        const firstServiceOfTab = SERVICES.find(service => service.tab === tabId);
        if (firstServiceOfTab) {
            setActiveService(firstServiceOfTab.id);
        }
    };

    return (
        <div className="grid grid-cols-[60%_40%] justify-between lg:flex-row w-full max-w-7xl mx-auto p-5 space-y-8 lg:space-y-0 lg:space-x-4">
            {/* Left Tabs */}
            <div className="grid grid-cols-[30%_70%] bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex lg:flex-col justify-between py-16 bg-gradient-to-b from-orange-500 to-red-500 p-5 rounded-md">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`text-left text-white font-semibold py-3 px-4 hover:opacity-90 transition-all duration-300 ${activeTab === tab.id
                                ? "border-l-4 border-white bg-white/10 rounded-md"
                                : "border-l-4 border-transparent"
                                }`}
                        >
                            {tab.title}
                            <span className="text-base font-light text-white block">App</span>
                        </button>
                    ))}
                </div>

                {/* Middle Section */}
                <div className="flex-1 p-5">
                    <h3 className="text-xl font-semibold mb-4 text-red-500">
                        {TABS.find(tab => tab.id === activeTab)?.title} Features
                    </h3>
                    <ul className="space-y-2">
                        {filteredServices.map((service) => (
                            <li
                                key={service.id}
                                onClick={() => setActiveService(service.id)}
                                className={`flex items-center space-x-2 py-3 px-4 rounded-md cursor-pointer transition-all duration-300 ${activeService === service.id
                                    ? "bg-orange-100 text-orange-600"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                <span className="text-gray-700">{service.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            {/* Right Image */}
            <div className="hidden lg:flex justify-center items-center rounded-md p-4">
                {activeImage && (
                    <div className="relative w-full h-[400px] lg:h-[500px] mx-auto">
                        <Image
                            fill
                            src={activeImage}
                            alt="Service Feature"
                            className="object-contain rounded-md transition-all duration-300"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
