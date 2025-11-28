import React from 'react'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import EcosystemSection from './components/EcosystemSection'
import PlatformSection from './components/PlatformSection'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import { TestimonialSection, Testimonial } from './components/TestimonialSection'

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Neu-Bio has transformed how we approach biological data. The interface is intuitive and the processing speed is unmatched.",
    name: "Dr. Sarah Chen",
    role: "Lead Researcher, BioTech Institute",
    imageSrc: "/Images/p1.png"
  },
  {
    id: 2,
    quote: "The scalability of the platform allowed us to process our entire dataset in hours instead of weeks. A game changer.",
    name: "Michael Ross",
    role: "CTO, GenomeX Systems",
    imageSrc: "/Images/p2.png"
  },
  {
    id: 3,
    quote: "Integration was seamless. The support team was incredibly helpful during our transition to the Neu-Bio ecosystem.",
    name: "Elena Rodriguez",
    role: "Director of Innovation, Future Health",
    imageSrc: "/Images/p3.png"
  }
];

function App() {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-blue-500/30">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        {/* <EcosystemSection /> */}
        {/* <PlatformSection /> */}
        {/* <Features /> */}
        <TestimonialSection 
          title="Trusted by Industry Leaders" 
          subtitle="See what our partners are saying about the future of biological data processing."
          testimonials={testimonials}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App

