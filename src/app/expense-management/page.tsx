import Benefits from "@/components/ExpenseManagement/Benefits";
import CaseStudies from "@/components/ExpenseManagement/CaseStudies";
import CTA from "@/components/ExpenseManagement/CTA";
import FAQ from "@/components/ExpenseManagement/FAQ";
import Hero from "@/components/ExpenseManagement/Hero/Hero";
import HowItWorks from "@/components/ExpenseManagement/HowItWorks";
import IntegrationPartners from "@/components/ExpenseManagement/IntegrationPartners";
import KeyFeatures from "@/components/ExpenseManagement/KeyFeatures";
import ROICalculator from "@/components/ExpenseManagement/ROICalculator";
import SupportOptions from "@/components/ExpenseManagement/SupportOptions";
import Testimonials from "@/components/Testimonials/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expense Management Solution | Your IT Company",
  description:
    "Streamline your expense management process with our cutting-edge solution tailored for IT companies.",
};

export default function ExpenseManagementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <Benefits />
      <IntegrationPartners />
      <ROICalculator />
      <CaseStudies />
      <SupportOptions />
      <CTA />
      <Testimonials />
      <FAQ />
    </main>
  );
}
