import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'Vue', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Node.js', 'Python', 'Java'],
  },
  {
    title: 'Bases de datos',
    items: ['MySQL', 'SQL Server'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Linux', 'AWS', 'APIs REST', 'Git', 'Docker'],
  },
  {
    title: 'IA & Automatización',
    items: ['OpenAI API', 'n8n', 'MCP', 'Python IA'],
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function TechStack() {
  return (
    <section id="tech" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Stack <span className="text-primary">tecnológico</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-sm uppercase tracking-wider text-primary-light font-semibold mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: '#60a5fa' }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-bg border border-dark-border text-text-muted transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
