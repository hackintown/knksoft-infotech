import React from 'react';

const HowWorks = () => {
  const steps = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2"/>
          <path d="M7 8h10M7 12h10" strokeWidth="2"/>
        </svg>
      ),
      title: "Service Listing",
      description: "List all the handyman services like plumbing, carpentry, and more, along with descriptions and rates.",
      isUp: true
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2"/>
        </svg>
      ),
      title: "Professional Registration",
      description: "Let skilled professionals create profiles and showcase their expertise, certifications, and availability.",
      isUp: false
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2"/>
          <path d="M16 2v4M8 2v4m-5 4h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2"/>
        </svg>
      ),
      title: "User Booking",
      description: "Empower users to book a service through the app with desired time slot and location.",
      isUp: true
    },
    {
      id: 4,
      icon: (
        <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeWidth="2"/>
        </svg>
      ),
      title: "Service Delivery & Earnings",
      description: "Receive requests, accept/decline, perform the service, and receive payment via the app.",
      isUp: false
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          How Does Our <span className="text-red-500">Handyman App Works</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative ${step.isUp ? '-mt-8' : 'mt-8'} transition-all duration-300`}
          >
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl">
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {step.description}
              </p>
              <div className="absolute -top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center text-[45px] text-[#343643] opacity-5 font-extrabold">
                {step.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;
