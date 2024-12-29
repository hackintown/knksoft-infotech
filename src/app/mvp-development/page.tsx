import Services from "@/components/MVP/Services/Services";
import TechStackTabs from "@/components/ui/TechStackTabs";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import { whyChooseData } from "@/components/MVP/WhyChooseUs/why-choose-data";
import BlogSection from "@/components/Home/BlogSection";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export default async function MVPDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  const mvpDevelopmentHeroProps = {
    badge: "Enterprise-Grade Security Solutions",
    title: "Secure Your Cloud Infrastructure with",
    description:
      "Comprehensive cloud security solutions to protect your business data and applications. Advanced threat detection, compliance management, and 24/7 monitoring.",
    flipWords: [
      "Advanced Protection",
      "Real-time Monitoring",
      "Threat Detection",
      "Compliance Management",
      "Zero Trust Security",
    ],
    imageSlides: [
      "https://www.valueappz.com/images/New-theme-assets/graphic-tabs-home1.png",
      "https://www.suffescom.com/assets/img/new-suff-img/mobile-app-development-company-in-dubai-banner-app.webp",
      "https://www.valueappz.com/images/New-theme-assets/graphic-tabs-home3.png",
      "https://www.valueappz.com/images/New-theme-assets/graphic-tabs-home2g.png",
      "https://www.suffescom.com/assets/img/new-suff-img/suffescom-metaverse-development-banner1.webp",
    ],
    teamMembers: [
      {
        id: 1,
        name: "Brijesh Joshi",
        designation: "CEO",
        image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      },
      {
        id: 2,
        name: "Manoj Kumar",
        designation: "Full Stack Developer",
        image: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      },
      {
        id: 3,
        name: "Mike Brown",
        designation: "Lead Architect",
        image: "https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg",
      },
    ],
  };

  return (
    <main>
      <Hero {...mvpDevelopmentHeroProps} />
      <Services />
      <WhyChooseUs data={whyChooseData} />
      <Partners />
      <TechStackTabs />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
