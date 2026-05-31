import { motion } from 'framer-motion'
import { Github, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/shakeelnoohm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shakeelnoohm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center">
            &copy; {currentYear} Shakeel Nooh M. All rights reserved.
          </p>

          {/* Made with love */}
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> and Code.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
