import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
// import EcosystemSection from './components/EcosystemSection'
import PlatformSection from './components/PlatformSection'
import { TestimonialSection, Testimonial } from './components/TestimonialSection'

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Neu-Bio's approach to sound is revolutionary. It's not just audio; it's a physical experience that resonates with your very core.",
    name: "Elena V.",
    role: "Sound Engineer",
    imageSrc: "/Images/p1.png",
  },
  {
    id: 2,
    quote: "The integration of organic textures with high-fidelity tech creates an atmosphere I've never felt before. Pure innovation.",
    name: "Marcus Chen",
    role: "Digital Artist",
    imageSrc: "/Images/p2.png",
  },
  {
    id: 3,
    quote: "Finally, technology that feels human. The acoustic ecosystem they've built changes how I interact with my environment.",
    name: "Sarah Jenkins",
    role: "Architect",
    imageSrc: "/Images/p3.png",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ProductSection />
      <EcosystemSection />
      <PlatformSection />
      <TestimonialSection 
        title="Voices of the Community"
        subtitle="Hear from those who have experienced the next evolution of sound."
        testimonials={testimonials}
      />
    </div>
  )
}

export default App
