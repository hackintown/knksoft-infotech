
import CTA from "@/components/ECommerce/CTA/CTA";
import AdvancedFeatures from "@/components/ECommerce/Features/AdvancedFeatures";
import EcommerceFeatures from "@/components/ECommerce/Features/EcommerceFeatures";
import Hero from "@/components/ECommerce/Hero/Hero";
import Statistics from "@/components/ECommerce/Stats/Statistics";

export default function eCommerce() {
    return (

        <div>
            <Hero />
            <EcommerceFeatures />
            <CTA />
            <AdvancedFeatures />
            <Statistics />
        </div>
    )
}