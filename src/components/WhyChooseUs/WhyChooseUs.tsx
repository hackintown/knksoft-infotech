"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button/Button";

const features = [
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/product-development.svg",
    title: "Product Development Culture",
    description: "Value-logic is leading the future of software development with agile software development methodologies, efficient project management practices, and a dedicated product manager to live business requirements into software specification."
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/software.svg",
    title: "Pre-Built Software Packages",
    description: "Get a diverse range of modules and pre-built software packages to power business tasks. From accounting to inventory management, learning content management, rating systems, referrals, coupons, loyalty management and many more."
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/ux-design-icon.svg",
    title: "User Experience and Design",
    description: "Our developers are trained in developing engaging UX/UI design to keep the users engaged with the application. We work with an excellent user interface and get trending content with the use of Generation AI."
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/web.svg",
    title: "Low-Code App Development",
    description: "We combine industry-leading code and build development practices for rapid application development. We use the latest technologies like DOTNET Java & low-code software that aligns with your business specification."
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/dashboard.svg",
    title: "Data Analysis and Localization",
    description: "Data-intensive business insights with robust data mining and framework. Get a clear dashboard with analytics, reporting, currency, location, and more."
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/technology.svg",
    title: "Cutting-Edge Technology",
    description: "We're leading tech stack to provide comprehensive support, seamless integration and automation. We work with modern technology like AWS, SAAS, and Flutter, Firebase, git & cloud-based coding and deployment practices."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground">
            We are a company with a DNA of entrepreneurship, and hence, we value the time and money invested by our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-primary text-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-2">
            Ready to Launch A Digital Platform and Boost Your Business Growth?
          </h3>
          <p className="mb-6">Contact Us Today to Discuss the Best Ideas</p>
          <Button variant="outline" size="lg">
            Connect Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 