import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Advanced Sound Processing',
    description: 'State-of-the-art algorithms that deliver crystal-clear audio quality',
    icon: '🎵',
  },
  {
    title: 'Comfortable Design',
    description: 'Ergonomic design that fits naturally and comfortably',
    icon: '✨',
  },
  {
    title: 'Long Battery Life',
    description: 'Extended battery performance for all-day use',
    icon: '🔋',
  },
  {
    title: 'Smart Connectivity',
    description: 'Seamlessly connect with your devices and apps',
    icon: '📱',
  },
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-blue-400/50 transition-all duration-300"
    >
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose Neu Bio?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the perfect blend of cutting-edge technology and user-friendly design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

