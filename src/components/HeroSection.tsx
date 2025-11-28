import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.error("Autoplay failed", e));
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Video background - behind the image */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Video/Video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Hero Text - Behind the image */}
      <div className="absolute inset-0 z-[5] flex items-center justify-start pl-8 md:pl-12 lg:pl-16 ">
        <motion.h1 
          className="text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] tracking-tight text-left"
          style={{ 
            fontFamily: 'var(--font-typekit, "Paralucent", Inter, sans-serif)',
            textShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
            fontWeight: 400
          }}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3
          }}
        >
          <span className="block">World Hears</span>
          <span className="block">from the UAE</span>
        </motion.h1>
      </div>

      {/* Full screen image - on top of video and text */}
      <motion.div
        className="absolute inset-0 w-full h-full z-10"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 2.0,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2
        }}
      >
        <img
          src="/Images/img1.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Additional Text Elements - Similar to reference */}
      {/* Vertical text on the right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <p 
          className="text-sm md:text-base font-normal text-white whitespace-nowrap"
          style={{ 
            fontFamily: 'var(--font-typekit, "Paralucent", Inter, sans-serif)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontWeight: 400
          }}
        >
          Next-gen hearing technology
        </p>
      </div>

      {/* Button - Bottom left area */}
      <div className="absolute bottom-20 left-8 md:left-12 z-20">
        <button 
          className="glassmorphism-button px-6 py-3 text-white text-sm md:text-base font-normal hover:opacity-90 transition-all flex items-center gap-2"
          style={{ 
            fontFamily: 'var(--font-typekit, "Paralucent", Inter, sans-serif)',
            fontWeight: 400
          }}
        >
          Explore technology
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom right text */}
      <div className="absolute bottom-12 right-8 md:right-12 z-20">
        <p 
          className="text-sm md:text-base font-normal text-white/80"
          style={{ 
            fontFamily: 'var(--font-typekit, "Paralucent", Inter, sans-serif)',
            fontWeight: 400
          }}
        >
          Tech-driven design
        </p>
      </div>
    </section>
  )
}

export default HeroSection
