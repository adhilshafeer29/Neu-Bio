import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const ProductSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Component data with descriptions
  const components = [
    {
      src: '/Images/Pro1.png',
      alt: 'Outer Housing',
      name: 'Outer Housing',
      description: 'Lightweight, biocompatible casing designed for seamless integration with the body.',
    },
    {
      src: '/Images/Pro2.png',
      alt: 'Processing Unit',
      name: 'Processing Unit',
      description: 'Advanced neural processing chip that interprets and translates brain signals in real-time.',
    },
    {
      src: '/Images/Pro3.png',
      alt: 'Electrode Array',
      name: 'Electrode Array',
      description: 'Precision electrode system that interfaces directly with neural pathways for optimal signal capture.',
    }
  ]

  // Opacity and scale for each component - sequential appearance
  const component1Opacity = useTransform(smoothProgress, [0, 0.2, 0.33, 0.4], [0.4, 1, 1, 0.2])
  const component1Scale = useTransform(smoothProgress, [0, 0.3], [0.6, 3.5])
  const component1Y = useTransform(smoothProgress, [0, 0.3], [0, -150])

  const component2Opacity = useTransform(smoothProgress, [0.33, 0.5, 0.66, 0.75], [0.2, 1, 1, 0.2])
  const component2Scale = useTransform(smoothProgress, [0.33, 0.6], [0.6, 3.5])
  const component2Y = useTransform(smoothProgress, [0.33, 0.6], [0, -150])

  const component3Opacity = useTransform(smoothProgress, [0.66, 0.8, 1], [0.2, 1, 1])
  const component3Scale = useTransform(smoothProgress, [0.66, 0.95], [0.6, 3.2])
  const component3Y = useTransform(smoothProgress, [0.66, 0.95], [0, -150])

  // Description opacities - appear when component is in focus
  const desc1Opacity = useTransform(smoothProgress, [0.15, 0.25, 0.35], [0, 1, 0])
  const desc2Opacity = useTransform(smoothProgress, [0.45, 0.55, 0.7], [0, 1, 0])
  const desc3Opacity = useTransform(smoothProgress, [0.75, 0.85, 1], [0, 1, 1])

  // Progress indicator opacities
  const progressOpacity1 = useTransform(smoothProgress, [0, 0.2, 0.33], [1, 1, 0.3])
  const progressOpacity2 = useTransform(smoothProgress, [0.33, 0.5, 0.66], [0.3, 1, 0.3])
  const progressOpacity3 = useTransform(smoothProgress, [0.66, 0.8, 1], [0.3, 1, 1])

  // Text parallax
  const textY = useTransform(smoothProgress, [0, 1], [0, -30])

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[500vh] px-6 lg:px-12 py-20"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="sticky top-0 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section - Text with improved layout */}
          <motion.div 
            className="relative z-10"
            style={{ y: textY }}
          >
            {/* Progress indicator - Light blue dots and line */}
            <div className="absolute -left-8 md:-left-12 top-0 bottom-0 flex flex-col items-center">
              <div 
                className="w-px h-full"
                style={{ backgroundColor: 'rgba(74, 144, 226, 0.2)' }}
              ></div>
              
              {/* Three light blue dots */}
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  top: '0%',
                  backgroundColor: 'var(--color-primary)',
                  opacity: progressOpacity1,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  top: '50%',
                  backgroundColor: 'var(--color-primary)',
                  opacity: progressOpacity2,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  top: '100%',
                  backgroundColor: 'var(--color-primary)',
                  opacity: progressOpacity3,
                }}
              />
            </div>

            {/* Main Title */}
            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl mb-8 leading-[0.95] tracking-[-0.02em] font-bold"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'Paralucent, Inter, sans-serif' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Implant
            </motion.h2>

            {/* Main Description */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl font-normal mb-16"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'Paralucent, Inter, sans-serif' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go.
            </motion.p>

            {/* Component Descriptions - Only show when scrolling to that component */}
            <div className="space-y-12 mt-20">
              {/* Component 1 Description */}
              <motion.div
                className="border-l-2 pl-6 py-4"
                style={{ 
                  borderColor: 'var(--color-primary)',
                  opacity: desc1Opacity,
                }}
              >
                <h3 
                  className="text-3xl font-bold mb-3"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'Paralucent, Inter, sans-serif' }}
                >
                  {components[0].name}
                </h3>
                <p 
                  className="text-lg font-light leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)', fontFamily: 'Paralucent, Inter, sans-serif' }}
                >
                  {components[0].description}
                </p>
              </motion.div>

              {/* Component 2 Description */}
              <motion.div
                className="border-l-2 pl-6 py-4"
                style={{ 
                  borderColor: 'var(--color-primary)',
                  opacity: desc2Opacity,
                }}
              >
                <h3 
                  className="text-3xl font-bold mb-3"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'Paralucent, Inter, sans-serif' }}
                >
                  {components[1].name}
                </h3>
                <p 
                  className="text-lg font-light leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)', fontFamily: 'Paralucent, Inter, sans-serif' }}
                >
                  {components[1].description}
                </p>
              </motion.div>

              {/* Component 3 Description */}
              <motion.div
                className="border-l-2 pl-6 py-4"
                style={{ 
                  borderColor: 'var(--color-primary)',
                  opacity: desc3Opacity,
                }}
              >
                <h3 
                  className="text-3xl font-bold mb-3"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'Paralucent, Inter, sans-serif' }}
                >
                  {components[2].name}
                </h3>
                <p 
                  className="text-lg font-light leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)', fontFamily: 'Paralucent, Inter, sans-serif' }}
                >
                  {components[2].description}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Vertically Stacked Exploded View */}
          <div className="relative z-10 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-5xl h-[1600px] flex flex-col items-center justify-center">
              
              {/* Component 1 - Top position, zooms in first */}
              <motion.div
                className="absolute flex items-center justify-center"
                style={{
                  opacity: component1Opacity,
                  scale: component1Scale,
                  y: component1Y,
                  top: '5%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {/* Subtle glow background */}
                <div 
                  className="absolute inset-0 blur-3xl opacity-40"
                  style={{
                    background: 'radial-gradient(circle, rgba(74, 144, 226, 0.4), transparent 70%)',
                    width: '150%',
                    height: '150%',
                  }}
                />
                <img
                  src={components[0].src}
                  alt={components[0].alt}
                  className="relative w-full h-full object-contain"
                  style={{
                    maxWidth: '800px',
                    filter: 'drop-shadow(0 30px 60px rgba(74, 144, 226, 0.7)) brightness(1.15) contrast(1.3)',
                  }}
                />
              </motion.div>

              {/* Component 2 - Middle position */}
              <motion.div
                className="absolute flex items-center justify-center"
                style={{
                  opacity: component2Opacity,
                  scale: component2Scale,
                  y: component2Y,
                  top: '35%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {/* Subtle glow background */}
                <div 
                  className="absolute inset-0 blur-3xl opacity-40"
                  style={{
                    background: 'radial-gradient(circle, rgba(74, 144, 226, 0.4), transparent 70%)',
                    width: '150%',
                    height: '150%',
                  }}
                />
                <img
                  src={components[1].src}
                  alt={components[1].alt}
                  className="relative w-full h-full object-contain"
                  style={{
                    maxWidth: '800px',
                    filter: 'drop-shadow(0 30px 60px rgba(74, 144, 226, 0.7)) brightness(1.15) contrast(1.3)',
                  }}
                />
              </motion.div>

              {/* Component 3 - Bottom position */}
              <motion.div
                className="absolute flex items-center justify-center"
                style={{
                  opacity: component3Opacity,
                  scale: component3Scale,
                  y: component3Y,
                  top: '65%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {/* Subtle glow background */}
                <div 
                  className="absolute inset-0 blur-3xl opacity-40"
                  style={{
                    background: 'radial-gradient(circle, rgba(74, 144, 226, 0.4), transparent 70%)',
                    width: '150%',
                    height: '150%',
                  }}
                />
                <img
                  src={components[2].src}
                  alt={components[2].alt}
                  className="relative w-full h-full object-contain"
                  style={{
                    maxWidth: '800px',
                    filter: 'drop-shadow(0 30px 60px rgba(74, 144, 226, 0.7)) brightness(1.15) contrast(1.3)',
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Skip This Section Link */}
      <motion.div 
        className="absolute bottom-8 left-8 z-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <a 
          href="#next" 
          className="text-sm font-light tracking-wider uppercase underline transition-colors"
          style={{ color: 'var(--color-text-muted)', fontFamily: 'Paralucent, Inter, sans-serif' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-text-secondary)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-muted)'
          }}
        >
          Skip This Section ↓
        </a>
      </motion.div>
    </section>
  )
}

export default ProductSection
