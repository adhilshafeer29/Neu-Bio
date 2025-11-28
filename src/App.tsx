import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import EcosystemSection from './components/EcosystemSection'
import PlatformSection from './components/PlatformSection'
import Features from './components/Features'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-blue-500/30">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <EcosystemSection />
        <PlatformSection />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App

