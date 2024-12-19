
import Hero from "@/components/Careers/Hero";
import AboutUs from "@/components/Careers/AboutUs";
import BenefitsAndPerks from "@/components/Careers/BenefitsAndPerks";
import CurrentOpenings from "@/components/Careers/CurrentOpenings";

export default function page() {
    return (
        <div>
            <Hero />
            <AboutUs />
            <CurrentOpenings />
            <BenefitsAndPerks />
        </div>
    );
}
