export const ReadymadeServices = () => {
  const services = [
    {
      title: "Handyman Services",
      image: "https://www.valueappz.com/img/home-services/webp/sp1.webp",
    },
    {
      title: "Beauty Services",
      image: "https://www.valueappz.com/img/home-services/webp/sp2.webp",
    },
    {
      title: "Dog Walking Services",
      image: "https://www.valueappz.com/img/home-services/webp/sp3.webp",
    },
    {
      title: "Car Washing Services",
      image: "https://www.valueappz.com/img/home-services/webp/sp4.webp",
    },
    {
      title: "Gardening Services",
      image: "https://www.valueappz.com/img/home-services/webp/sp5.webp",
    },
    {
      title: "Laundry Services",
      image: "https://www.valueappz.com/img/home-services/webp/sp6.webp",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-slate-800">Readymade</span>
          <span className="text-[#ff5733]">Home Services Marketplace Apps</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Leverage our industrial & technological expertise to launch your home
          services marketplace app. We have a variety of white label apps across a
          wide range of industries, ready-to-launch within 24 Hours. To know more,
          contact us now.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-800">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#ff5733] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff4520] transition-colors duration-300">
          Book a Free Demo
        </button>
      </div>
    </div>
  );
};
