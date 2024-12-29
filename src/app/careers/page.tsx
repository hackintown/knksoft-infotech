import AboutUs from "@/components/Careers/AboutUs";
import BenefitsAndPerks from "@/components/Careers/BenefitsAndPerks";
import CurrentOpenings from "@/components/Careers/CurrentOpenings";
import Hero from "@/components/ui/Hero/Hero";

export default function page() {
  const careersHeroProps = {
    badge: "Join Our Team",
    title: "Build Your Career With Us",
    description:
      "Join our dynamic team of innovators and tech enthusiasts. We offer exciting opportunities for growth, learning, and making an impact.\nWork with cutting-edge technologies in a collaborative environment.\nBe part of building next-generation solutions that transform businesses.",
    flipWords: [
      "Innovation",
      "Growth",
      "Learning",
      "Collaboration",
      "Excellence",
    ],
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
    <div>
      <Hero {...careersHeroProps} />
      <AboutUs />
      <CurrentOpenings />
      <BenefitsAndPerks />
    </div>
  );
}
