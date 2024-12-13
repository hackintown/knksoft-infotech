import { Metadata } from 'next'
import Hero from '@/components/CRM/Hero/Hero'
import FeatureShowcase from '@/components/CRM/Features/FeatureShowcase'
import CaseStudies from '@/components/CRM/CaseStudies'
import IntegrationPartners from '@/components/CRM/IntegrationPartners'
import ProductTour from '@/components/CRM/ProductTour'
import Services from '@/components/CRM/Services/Services'
import Testimonials from '@/components/CRM/Testimonials'
import FAQ from '@/components/CRM/FAQ'
import Features from '@/components/CRM/Features/Features'


export const metadata: Metadata = {
  title: 'Advanced CRM Business Solutions | Your IT Company',
  description: 'Discover our cutting-edge CRM business solutions with advanced features, seamless integrations, and proven success stories. Transform your customer relationships today.',
}

export default function CRMBusinessSolution() {
  return (
    <main className="min-h-screen">
      <Hero />  
      <Features />
      <FeatureShowcase />
      <CaseStudies />
      <IntegrationPartners />
      <ProductTour />
      <Services />
      <Testimonials />
      <FAQ />
    </main>
  )
}

