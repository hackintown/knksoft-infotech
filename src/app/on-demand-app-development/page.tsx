import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function OnDemandAppDevelopment() {
  return (
    <div>
      <Partners />
      <OurProcess />
      <Testimonials />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
