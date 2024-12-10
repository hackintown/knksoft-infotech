import DigitalFrontier from "@/components/MobileAppDevelopment/DigitalFrontier/DigitalFrontier";
import Hero from "@/components/MobileAppDevelopment/Hero/Hero";
import Innovate from "@/components/MobileAppDevelopment/Innovate/Innovate";
import Process from "@/components/MobileAppDevelopment/Process/Process";
import OurProject from "@/components/MobileAppDevelopment/OurProject/OurProject";
import TechStackTabs from "@/components/ui/TechStackTabs";
import { Partners } from "@/components/Partners/Partners";
import FAQ from "@/components/ui/FAQ";
import Services from "@/components/MobileAppDevelopment/Services/Services";

export default function MobileAppDevelopment() {
    return (
        <div>
            <Hero />
            <Services />
            <Process />
            <div className="bg-primary/5">
                <DigitalFrontier />
            </div>
            <OurProject />
            <TechStackTabs />
            <Innovate />
            <Partners />
            <FAQ />
        </div>
    )
}
