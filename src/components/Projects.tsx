import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ArrowUpRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
  category: string
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('All')

  const projects: Project[] = [
    {
      id: 1,
      title: 'RentNest',
      description: 'A comprehensive paying guest and rent management system with automated billing, tenant management, and financial tracking capabilities.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/shakeelnoohm/RentNest-Paying-Guest-Rent-Manager',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Campus Blood Connect',
      description: 'Blood donation platform connecting donors with recipients on campus. Features real-time matching, emergency alerts, and donor history.',
      tech: ['React', 'Firebase', 'Node.js', 'Socket.io'],
      github: 'https://github.com/shakeelnoohm/Campus-Blood-Connect',
      category: 'Web App',
    },
    {
      id: 3,
      title: 'TimePilot',
      description: 'An intelligent, constraint-based timetable scheduler for schools and colleges. Features Excel export, localStorage persistence, and intelligent scheduling algorithms.',
      tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'xlsx', 'React Router'],
      github: 'https://github.com/shakeelnoohm/TimePilot-An-Automatic-TimeTable-Scheduler',
      category: 'Full Stack',
    },
    {
      id: 4,
      title: 'Finora',
      description: 'AI-powered stock market analysis platform for NSE & BSE Indian markets. Features live quotes, technical analysis, portfolio tracking, pattern scanning, and LSTM-based predictions using TensorFlow.js.',
      tech: ['Next.js 16', 'TypeScript', 'TailwindCSS v4', 'TensorFlow.js', 'Yahoo Finance API'],
      github: 'https://github.com/shakeelnoohm/Finora-Stock-Market-Predictor',
      category: 'AI/ML',
    },
    {
      id: 5,
      title: 'HallEase',
      description: 'MERN stack Exam Hall Allocation System with intelligent seating algorithms. Features comprehensive admin tools, automatic conflict resolution, and modern responsive interface.',
      tech: ['React 18', 'Node.js', 'Express.js 5', 'MongoDB 6', 'Mongoose 8', 'TailwindCSS'],
      github: 'https://github.com/shakeelnoohm/HallEase-Exam-Hall-Allocater',
      category: 'Full Stack',
    },
    {
      id: 6,
      title: 'AI HR Suite',
      description: 'HR management platform with AI-powered resume screening using Google Gemini AI. Features candidate matching, automated interview scheduling, and intelligent candidate ranking.',
      tech: ['Next.js', 'TypeScript', 'Google Gemini AI', 'MongoDB', 'TailwindCSS'],
      github: 'https://github.com/shakeelnoohm/AI-HR-Suite',
      category: 'AI/ML',
    },
    {
      id: 7,
      title: 'CTracker',
      description: 'Asset management solution for technical institutes. MERN stack based system for resource allocation, asset tracking, item issuance, and real-time data management.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
      github: 'https://github.com/shakeelnoohm/CTracker',
      category: 'Full Stack',
    },
    {
      id: 8,
      title: 'CineStack',
      description: 'Personal movie library and tracking companion. Full-stack app for discovering movies, building watchlists, and tracking watched content with Express.js and MongoDB backend.',
      tech: ['Node.js', 'Express.js v5', 'EJS', 'MongoDB', 'Mongoose', 'Bootstrap'],
      github: 'https://github.com/shakeelnoohm/CineStack',
      category: 'Full Stack',
    },
    {
      id: 9,
      title: 'WordPulse',
      description: 'Fast web-based text analysis tool with instant word count, character count, sentences, paragraphs, reading time and speaking time estimation. Clean responsive UI with vanilla JavaScript.',
      tech: ['HTML', 'CSS', 'Vanilla JavaScript', 'Responsive Design'],
      github: 'https://github.com/shakeelnoohm/WordPulse',
      category: 'Web App',
    },
  ]

  const categories = ['All', 'Full Stack', 'Web App', 'AI/ML']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of my work spanning full-stack applications, AI/ML solutions, 
              and innovative web applications.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 project-card flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm transition-colors flex-1 justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 text-sm transition-colors flex-1 justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ArrowUpRight size={16} />
                      View
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Link */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/shakeelnoohm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-white/10 text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              View All Projects on GitHub
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
