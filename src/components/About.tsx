import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transforming Lives Through Innovation
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At Neu Bio, we're dedicated to revolutionizing hearing technology. Our advanced
              cochlear implants combine cutting-edge engineering with compassionate design to
              help people reconnect with the world of sound.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every detail is crafted with precision, from the sophisticated sound processing
              algorithms to the comfortable, discreet design that fits seamlessly into your life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Consultation</h3>
                    <p className="text-gray-300">Expert assessment and personalized recommendations</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Customization</h3>
                    <p className="text-gray-300">Tailored to your specific hearing needs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Support</h3>
                    <p className="text-gray-300">Ongoing care and assistance every step of the way</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

