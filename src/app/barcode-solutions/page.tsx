import FAQ from "@/components/BarCode/FAQ";
import Features from "@/components/BarCode/Features/Features";
import SecurityFeatures from "@/components/BarCode/Features/SecurityFeatures";
import HowItWorks from "@/components/BarCode/HowItWorks";
import Integration from "@/components/BarCode/Integration";
import Services from "@/components/BarCode/Services/Services";
import Stats from "@/components/BarCode/Stats";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function BarcodeSolutions() {
  const barcodeSolutionsHeroProps = {
    badge: "Barcode Solutions",
    title: "Enhance Your IT Infrastructure with",
    description:
      "Advanced barcode solutions designed for seamless IT management. Improve accuracy, streamline operations, and increase productivity.",
    flipWords: ["Precision", "Efficiency", "Productivity"],
    imageSlides: [
      "https://www.valueappz.com/images/New-theme-assets/graphic-tabs-home1.png",
      "https://www.suffescom.com/assets/img/new-suff-img/mobile-app-development-company-in-dubai-banner-app.webp",
      "https://www.valueappz.com/images/New-theme-assets/graphic-tabs-home3.png",
      "https://www.valueappz.com/images/New-theme-assets/graphic-tabs-home2g.png",
      "https://www.suffescom.com/assets/img/new-suff-img/suffescom-metaverse-development-banner1.webp",
    ],
    teamMembers: [
      {
        id: 1,
        name: "Brijesh Joshi",
        designation: "CEO",
        image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      },
      {
        id: 2,
        name: "Manoj Kumar",
        designation: "Full Stack Developer",
        image: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      },
      {
        id: 3,
        name: "Mike Brown",
        designation: "Lead Architect",
        image: "https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg",
      },
    ],
  };
  return (
    <main className="overflow-hidden">
      <Hero {...barcodeSolutionsHeroProps} />
      <Features />
      <Services />
      <HowItWorks />
      <SecurityFeatures />
      <Stats />
      <Integration />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
