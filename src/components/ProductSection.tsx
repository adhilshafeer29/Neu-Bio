import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ProductSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Opacity for smooth transitions between products
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.33], [1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.4, 0.66], [0, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.73, 1], [0, 1, 1])

  // Zoom scales for each product
  const scale1 = useTransform(scrollYProgress, [0, 0.33], [1, 1.5])
  const scale2 = useTransform(scrollYProgress, [0.33, 0.66], [1, 1.5])
  const scale3 = useTransform(scrollYProgress, [0.66, 1], [1, 1.3])

  // Progress indicator opacities
  const progressOpacity1 = useTransform(scrollYProgress, [0, 0.2, 0.33], [1, 1, 0.3])
  const progressOpacity2 = useTransform(scrollYProgress, [0.33, 0.4, 0.66], [0.3, 1, 0.3])
  const progressOpacity3 = useTransform(scrollYProgress, [0.66, 0.73, 1], [0.3, 1, 1])

  const products = [
    { src: '/Images/Pro1.png', alt: 'Product 1' },
    { src: '/Images/Pro2.png', alt: 'Product 2' },
    { src: '/Images/Pro3.png', alt: 'Product 3' },
  ]

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[300vh] px-6 lg:px-12 py-20"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="sticky top-0 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section - Text */}
          <div className="relative z-10">
            {/* Progress indicator - Warm amber accent */}
            <div className="absolute -left-8 top-0 bottom-0 flex flex-col items-center">
              <div 
                className="w-px h-full"
                style={{ backgroundColor: 'rgba(245, 166, 35, 0.15)' }}
              ></div>
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
                  top: '33.33%',
                  backgroundColor: 'var(--color-primary)',
                  opacity: progressOpacity2,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  top: '66.66%',
                  backgroundColor: 'var(--color-primary)',
                  opacity: progressOpacity3,
                }}
              />
            </div>

            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl mb-8 leading-[0.95] tracking-[-0.02em]"
              style={{ color: 'var(--color-text-primary)' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Implant
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl leading-relaxed max-w-xl font-light"
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
              Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go.
            </motion.p>
          </div>

          {/* Right Section - Product Images with Zoom Animation */}
          <div className="relative z-10 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-6xl h-[1000px] flex items-center justify-center">
              {/* Product 1 */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: opacity1,
                  scale: scale1,
                }}
              >
                <img
                  src={products[0].src}
                  alt={products[0].alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Product 2 */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: opacity2,
                  scale: scale2,
                }}
              >
                <img
                  src={products[1].src}
                  alt={products[1].alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Product 3 */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: opacity3,
                  scale: scale3,
                }}
              >
                <img
                  src={products[2].src}
                  alt={products[2].alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Skip This Section Link */}
      <div className="absolute bottom-8 left-8 z-30">
        <a 
          href="#next" 
          className="text-sm font-light tracking-wider uppercase underline transition-colors"
          style={{ color: 'var(--color-text-muted)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-text-secondary)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-muted)'
          }}
        >
          Skip This Section ↓
        </a>
      </div>
    </section>
  )
}

export default ProductSection
