import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Top Center: neubio pill + Joy Intelligence */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
        <button className="px-4 py-1.5 bg-black border border-white/20 rounded-full text-white text-sm font-medium hover:border-white/40 transition-colors">
          neubio
        </button>
        <p className="text-[#00D4FF] text-sm font-medium">Joy Intelligence</p>
      </div>

      {/* Central Visual Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* 1. The Gradient Nebula Glow - Increased spread */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[60px]"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(105, 197, 240, 0.4), transparent 60%),
              radial-gradient(circle at 70% 60%, rgba(179, 71, 234, 0.5), transparent 60%),
              radial-gradient(circle at 40% 80%, rgba(58, 26, 138, 0.6), transparent 70%)
            `,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 2. The Soundwaves (Radiation Rings) */}
        {[0, 1, 2].map((delay) => (
          <motion.div
            key={delay}
            className="absolute rounded-full border border-white/10"
            style={{
              width: '50px',
              height: '50px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              width: ['50px', '500px'],
              height: ['50px', '500px'],
              opacity: [0.8, 0],
              borderColor: [
                'rgba(255, 255, 255, 0.4)',
                'rgba(179, 71, 234, 0)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: delay,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Additional sound waves for more depth */}
        {[0.5, 1.5, 2.5].map((delay) => (
          <motion.div
            key={`wave-${delay}`}
            className="absolute rounded-full border border-white/5"
            style={{
              width: '50px',
              height: '50px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              width: ['50px', '600px'],
              height: ['50px', '600px'],
              opacity: [0.6, 0],
              borderColor: [
                'rgba(105, 197, 240, 0.3)',
                'rgba(105, 197, 240, 0)',
              ],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Hero Text - Positioned at bottom of center visual */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
        <div className="relative" style={{ marginTop: '350px' }}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white text-center leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            AI-driven sound
            <br />
            processing
          </motion.h1>
        </div>
      </div>

      {/* Bottom Left: Neubio AI Hearing Ecosystem™ */}
      <div className="absolute bottom-8 left-8 z-30">
        <p className="text-white/60 text-xs font-medium">Neubio AI Hearing Ecosystem™</p>
      </div>
    </section>
  )
}

export default HeroSection
