import BusinessModels from "@/components/FoodDelivery/BusinessModels/BusinessModels";
import { GrowBusiness } from "@/components/FoodDelivery/BusinessModels/GrowBusiness";
import Hero from "@/components/FoodDelivery/Hero/Hero";
import Services from "@/components/FoodDelivery/Services/Services";
import WhyChooseUs from "@/components/FoodDelivery/WhyChooseUs/WhyChooseUs";
import WhyLaunching from "@/components/FoodDelivery/WhyLaunching";
import BlogSection from "@/components/Home/BlogSection";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";

export default async function FoodDeliveryAppDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  return (
    <div>
      <Hero />
      <BusinessModels />
      <Services />
      <GrowBusiness />
      <WhyLaunching />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <OurProcess />
      <BlogSection posts={blogPosts} />
      <FAQ />
    </div>
  );
}
