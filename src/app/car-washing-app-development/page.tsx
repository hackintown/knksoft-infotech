import AppModels from "@/components/CarWashing/AppModels/AppModels";
import Architecture from "@/components/CarWashing/Architecture";
import OneWaySolutions from "@/components/CarWashing/Features/OneWaySolutions";
import Hero from "@/components/CarWashing/Hero/Hero";
import HowWorks from "@/components/CarWashing/HowWorks";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { BlogPost } from "@/lib/blog/type";
import { getBlogPosts } from "@/lib/blog/api";
import BlogSection from "@/components/Home/BlogSection";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default async function CarWashingAppDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  return (
    <div>
      <Hero />
      <AppModels />
      <OneWaySolutions />
      <HowWorks />
      <Architecture />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
