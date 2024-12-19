import Hero from "@/components/GroceryDelivery/Hero/Hero";
import Services from "@/components/GroceryDelivery/Services/Services";
import WhyChooseUs from "@/components/GroceryDelivery/WhyChooseUs";
import BlogSection from "@/components/Home/BlogSection";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";

export default async function GroceryAppDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} /> 
      <OurProcess />
      <FAQ />
    </div>
  );
}
