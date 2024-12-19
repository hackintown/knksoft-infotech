import Benefits from "@/components/HandyManApp/Benifits";
import Hero from "@/components/HandyManApp/Hero/Hero";
import HowWorks from "@/components/HandyManApp/HowWorks";
import Services from "@/components/HandyManApp/Services/Services";
import { Partners } from "@/components/Partners/Partners";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";
import BlogSection from "@/components/Home/BlogSection";

export default async function HandymanAppDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  return (
    <div>
      <Hero />
      <Benefits />
      <Services />
      <Portfolio />
      <HowWorks />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
    </div>
  );
}
