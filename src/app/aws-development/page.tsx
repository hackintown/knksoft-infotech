import Hero from "@/components/AWSDevelopment/Hero/Hero";
import { Features } from "@/components/AWSDevelopment/Features/Features";
import { Process } from "@/components/AWSDevelopment/Process";
import { Services } from "@/components/AWSDevelopment/Services/Services";
import { Stats } from "@/components/AWSDevelopment/Stats";
import { Testimonials } from "@/components/AWSDevelopment/Testimonials";
import { TechnologyStack } from "@/components/AWSDevelopment/TechnologyStack";
import { CaseStudies } from "@/components/AWSDevelopment/CaseStudies";
import { Expertise } from "@/components/AWSDevelopment/Expertise";
import { DevOpsServices } from "@/components/AWSDevelopment/DevOpsServices";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default function AWSDevelopment() {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <DevOpsServices />
      <Stats />
      <Process />
      <TechnologyStack />
      <CaseStudies />
      <Expertise />
      <Testimonials />
      <GetInTouch />
    </div>
  );
}
