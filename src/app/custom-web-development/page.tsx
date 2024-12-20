import Services from "@/components/WebDevelopment/Services/Services";
import Hero from "@/components/WebDevelopment/Hero";
import CompanyServe from "@/components/WebDevelopment/CompanyServe/CompanyServe";
import PartnerSection from "@/components/WebDevelopment/PartnerReasons/PartnerReasons";
import { partnerReasons, sectionContent } from "@/components/WebDevelopment/PartnerReasons/PartnerData";
import Strategies from "@/components/WebDevelopment/Strategies/Strategies";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import { Partners } from "@/components/Partners/Partners";
import BlogSection from "@/components/Home/BlogSection";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default async function CustomWebDevelopment() {
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
      <div className="bg-primary/5">
        <CompanyServe />
      </div>
      <Strategies />

      <PartnerSection
        title={sectionContent.title}
        subtitle={sectionContent.subtitle}
        reasons={partnerReasons}
      />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
