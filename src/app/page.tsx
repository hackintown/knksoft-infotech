import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
// import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Portfolio from "@/components/Portfolio/Portfolio";
// import Testimonials from "@/components/Testimonials/Testimonials";
// import ClientsPartner from "@/components/ClientsPartner/ClientsPartner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      {/* <Testimonials />
      <WhyChooseUs />
      <ClientsPartner /> */}
    </main>
  );
}
