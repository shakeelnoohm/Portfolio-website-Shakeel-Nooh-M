import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Globe, Terminal, Layers } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    {
      category: 'Languages',
      icon: Code2,
      items: ['C', 'C++', 'Java', 'C#', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Frontend',
      icon: Layers,
      items: ['React', 'Next.js', 'Vite', 'TailwindCSS', 'Bootstrap', 'EJS'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Backend',
      icon: Terminal,
      items: ['Node.js', 'Express.js', 'REST APIs', 'WebSocket'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Database',
      icon: Database,
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      category: 'Cloud & Data',
      icon: Globe,
      items: ['Microsoft Azure', 'Microsoft Fabric', 'Snowflake', 'DBT'],
      color: 'from-indigo-500 to-violet-500',
    },
    {
      category: 'Tools & OS',
      icon: Globe,
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Microsoft Azure', 'Windows', 'Linux'],
      color: 'from-teal-500 to-emerald-500',
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-4">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full Stack Developer with a passion for building scalable applications 
              and exploring cutting-edge technologies.
            </p>
          </motion.div>

          {/* About Text */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a dedicated software engineer specializing in full-stack development. 
              With expertise in modern web technologies and a keen eye for user experience, 
              I transform complex problems into elegant, efficient solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From building intelligent AI-powered applications to creating seamless user interfaces, 
              I bring ideas to life with clean code and innovative design.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-3 mb-4`}>
                    <skill.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '9+', label: 'Projects Completed' },
              { number: '2+', label: 'Years Experience' },
              { number: '20+', label: 'Technologies' },
              { number: '100%', label: 'Commitment' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
