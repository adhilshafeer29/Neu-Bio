import { motion } from 'framer-motion'

const GlowingOrb = ({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) => {
  const sizeClasses = {
    small: 'w-64 h-64',
    medium: 'w-80 h-80',
    large: 'w-96 h-96',
  }

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      {/* Dark center core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-black rounded-full"></div>
      </div>

      {/* Gradient layers */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(88, 28, 135, 0.4), rgba(219, 39, 119, 0.3), rgba(59, 130, 246, 0.2))',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(219, 39, 119, 0.3), rgba(126, 34, 206, 0.25), rgba(96, 165, 250, 0.15))',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

const EcosystemSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          {/* Gradient Headline */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'linear-gradient(to bottom, #f97316, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Building the first intelligent hearing ecosystem — from hardware to health data.
          </motion.h2>

          {/* Smaller Glowing Orb */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlowingOrb size="small" />
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Portrait image */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="/Video/Img1.png"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Left: Neubio AI Hearing Ecosystem™ */}
      <div className="absolute bottom-8 left-8 z-30">
        <p className="text-white/60 text-xs font-medium">Neubio AI Hearing Ecosystem™</p>
      </div>

      {/* Bottom Right: Four-pointed star icon */}
      <div className="absolute bottom-8 right-8 z-30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/60">
          <path
            d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  )
}

export default EcosystemSection

