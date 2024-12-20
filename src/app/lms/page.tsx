import CommunityCollaboration from "@/components/LMS/CommunityCollaboration";
import CourseCatalog from "@/components/LMS/CourseCatalog";
import FAQ from "@/components/LMS/FAQ";
import Features from "@/components/LMS/Features/Features";
import Hero from "@/components/LMS/Hero/Hero";
import HowItWorks from "@/components/LMS/HowItWorks";
// import InstructorSpotlight from "@/components/LMS/InstructorSpotlight";
import LearningAnalytics from "@/components/LMS/LearningAnalytics";
import Services from "@/components/LMS/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <Services />
      <Features />
      <CourseCatalog />
      <HowItWorks />
      {/* <InstructorSpotlight /> */}
      <Testimonials />
      <LearningAnalytics />
      <CommunityCollaboration />
      <FAQ />
      <GetInTouch /> 
    </main>
  );
}
