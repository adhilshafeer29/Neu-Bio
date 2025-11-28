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

      {/* Blue/pink gradient layers - more prominent */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.5), rgba(236, 72, 153, 0.4), rgba(147, 51, 234, 0.3))',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
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
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4), rgba(59, 130, 246, 0.35), rgba(168, 85, 247, 0.25))',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.7, 0.5],
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

const PlatformSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-black via-black to-purple-900/20 px-6 lg:px-12 py-20">
      {/* Background gradient glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-purple-900/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="relative z-10">
          {/* Large White Headline */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Joy Intelligence is Neubio's adaptive AI platform that transforms every Neubio hearing device into a continuously learning ecosystem.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            By analyzing and adapting to real-world listening data, it bridges user experience, clinical insight, and population-level hearing intelligence – redefining how hearing health is managed.
          </motion.p>
        </div>

        {/* Right Content - Glowing Orb */}
        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GlowingOrb size="medium" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PlatformSection

