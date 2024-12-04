import Hero from "@/components/Hero/Hero";
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

export default async function Home() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  return (
    <main>
      <Hero />
      <MarketplaceSection />
      <Portfolio />
      <Services />
      <WhoWeAre />
      <WhyChooseUs />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
    </main>
  );
}
