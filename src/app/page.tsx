import Hero from "@/components/ui/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import { MarketplaceSection } from "@/components/Marketplace/MarketplaceSection";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { Partners } from "@/components/Partners/Partners";
import FAQ from "@/components/ui/FAQ";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";
import BlogSection from "@/components/Home/BlogSection";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default async function Home() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  const homeHeroProps = {
    title: "Professional IT Solutions for",
    description:
      "Comprehensive IT services including custom software development, cloud solutions, enterprise systems, and digital transformation. From MVF development to full-scale enterprise solutions, we deliver excellence.",
    flipWords: [
      "Enterprise Solutions",
      "Cloud Architecture",
      "Custom Development",
      "Digital Transformation",
      "DevOps Excellence",
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
      <Hero {...homeHeroProps} />
      <MarketplaceSection />
      <WhoWeAre />
      <WhyChooseUs />
      <Portfolio />
      <Services />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
