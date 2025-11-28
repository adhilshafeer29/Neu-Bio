import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Ethereal glow background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/20 via-teal-500/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Central Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        
        {/* UAE to World Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-center"
        >
          <p className="text-white/70 text-sm tracking-wider uppercase">
            Building from <span className="text-blue-400 font-semibold">UAE</span> to the <span className="text-blue-400 font-semibold">World</span>
          </p>
        </motion.div>

        {/* Animated Ear with Sound Waves */}
        <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center mb-12">
          {/* Sound Waves - Animated concentric circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2"
                style={{
                  width: `${180 + i * 70}px`,
                  height: `${180 + i * 70}px`,
                  borderColor: i % 2 === 0 ? 'rgba(96, 165, 250, 0.4)' : 'rgba(52, 211, 153, 0.3)',
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Sound wave lines radiating outward */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180)
              const distance = 150
              const centerX = 175
              const centerY = 225
              return (
                <motion.line
                  key={`wave-${i}`}
                  x1={centerX}
                  y1={centerY}
                  x2={centerX + Math.cos(angle) * distance}
                  y2={centerY + Math.sin(angle) * distance}
                  stroke="rgba(96, 165, 250, 0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              )
            })}
          </svg>

          {/* Central Ear with Glow */}
          <motion.div
            className="relative z-10"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
            }}
          >
            {/* Ear SVG with gradient glow */}
            <div className="relative">
              <motion.svg
                width="350"
                height="450"
                viewBox="0 0 200 300"
                className="relative z-10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <defs>
                  <linearGradient id="earGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.95" />
                    <stop offset="30%" stopColor="#34d399" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#a78bfa" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.98" />
                  </linearGradient>
                  <radialGradient id="earGlow" cx="50%" cy="30%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.3" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Outer ear shape - more detailed */}
                <path
                  d="M100 40 
                     Q125 35 145 55 
                     Q155 75 150 100 
                     Q145 125 135 150 
                     Q125 175 115 200 
                     Q105 225 100 250 
                     Q95 275 85 260 
                     Q75 240 70 220 
                     Q65 200 60 180 
                     Q55 160 50 140 
                     Q45 120 50 100 
                     Q55 80 65 65 
                     Q75 50 90 45 
                     Q95 42 100 40 Z"
                  fill="url(#earGradient)"
                  filter="url(#glow)"
                  opacity="0.95"
                />
                
                {/* Inner ear (concha) */}
                <path
                  d="M100 90 
                     Q110 85 120 95 
                     Q115 110 105 125 
                     Q95 120 90 110 
                     Q85 100 90 95 
                     Q95 90 100 90 Z"
                  fill="rgba(255,255,255,0.4)"
                />
                
                {/* Ear canal opening */}
                <ellipse
                  cx="100"
                  cy="130"
                  rx="8"
                  ry="12"
                  fill="rgba(0,0,0,0.3)"
                />
                
                {/* Highlight on ear */}
                <ellipse
                  cx="120"
                  cy="80"
                  rx="15"
                  ry="25"
                  fill="rgba(255,255,255,0.2)"
                />
              </motion.svg>

              {/* Pulsing glow effect around ear */}
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-teal-400 to-white rounded-full blur-2xl opacity-50"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional floating particles/notes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Headline Text */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
            style={{
              textShadow: '0 0 40px rgba(96, 165, 250, 0.5)',
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Breakthrough
            </motion.span>
            <br />
            <motion.span
              className="block mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              technology for hearing
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle - Emotional and hopeful */}
        <motion.p
          className="text-xl md:text-2xl text-white/80 text-center max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          Giving the gift of sound to those who have never heard
        </motion.p>
      </div>

      {/* Scroll Indicator - Bottom Left */}
      <motion.div
        className="absolute bottom-8 left-8 flex items-center gap-2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span className="text-sm font-medium underline">Scroll</span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path
            d="M8 2 L8 14 M2 8 L8 14 L14 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  )
}

export default Hero
