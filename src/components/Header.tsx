import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="w-8 h-8 border-2 border-white rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="ml-2 text-white font-bold text-lg" style={{ fontFamily: 'Paralucent, Inter, sans-serif' }}>Neu Bio</span>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-8"
          >
            <a href="#technology" className="text-white hover:text-blue-400 transition-colors text-sm font-normal" style={{ fontFamily: 'Paralucent, Inter, sans-serif' }}>
              Technology
            </a>
            <a href="#careers" className="text-white hover:text-blue-400 transition-colors text-sm font-normal" style={{ fontFamily: 'Paralucent, Inter, sans-serif' }}>
              Careers
            </a>
            <a href="#updates" className="text-white hover:text-blue-400 transition-colors text-sm font-normal" style={{ fontFamily: 'Paralucent, Inter, sans-serif' }}>
              Updates
            </a>
            <button className="glassmorphism-button px-4 py-2 text-white hover:opacity-90 transition-all text-sm font-normal" style={{ fontFamily: 'Paralucent, Inter, sans-serif' }}>
              Clinical Trials
            </button>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

export default Header

