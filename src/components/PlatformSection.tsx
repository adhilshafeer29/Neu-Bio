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

      {/* Warm amber and cyan gradient layers - more prominent */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(245, 166, 35, 0.4), rgba(0, 212, 255, 0.3), rgba(245, 166, 35, 0.25))',
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
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.35), rgba(245, 166, 35, 0.3), rgba(0, 212, 255, 0.2))',
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

const PlatformSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12 py-20"
      style={{ 
        backgroundColor: 'var(--color-bg-primary)',
        background: 'linear-gradient(to right, var(--color-bg-primary), rgba(245, 166, 35, 0.05))'
      }}
    >
      {/* Background gradient glow - warm amber */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full"
        style={{
          background: 'linear-gradient(to left, rgba(245, 166, 35, 0.08), transparent)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="relative z-10">
          {/* Large Headline - Editorial serif */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] mb-8"
            style={{ color: 'var(--color-text-primary)' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Joy Intelligence is Neubio's adaptive AI platform that transforms every Neubio hearing device into a continuously learning ecosystem.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-2xl font-light"
            style={{ color: 'var(--color-text-secondary)' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
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

