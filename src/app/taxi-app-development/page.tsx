import BlogSection from "@/components/Home/BlogSection";
import { Partners } from "@/components/Partners/Partners";
import AdminPanel from "@/components/TaxiApp/AppModels/AdminPanel";
import AppModels from "@/components/TaxiApp/AppModels/AppModels"; 
import CustomerApp from "@/components/TaxiApp/AppModels/CustomerApp";
import Dashboard from "@/components/TaxiApp/AppModels/Dashboard";
import Hero from "@/components/TaxiApp/Hero/Hero";
import WhyChooseUs from "@/components/TaxiApp/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { BlogPost } from "@/lib/blog/type";
import { getBlogPosts } from "@/lib/blog/api";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default async function TaxiAppDevelopment() {
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
      <CustomerApp />
      <Dashboard />
      <AdminPanel />
      <WhyChooseUs />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
