import Hero from "@/components/MVP/Hero";
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

export default async function MVPDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  return (
    <main>
      <Hero />
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
