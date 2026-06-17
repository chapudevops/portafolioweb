import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

const projects = [
  {
    icon: '🚀',
    title: 'SoPtickes IA',
    desc: 'Sistema de tickets inteligente con IA, clasificación automática y dashboard analítico.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI', 'Docker'],
  },
  {
    icon: '📦',
    title: 'ERP Empresarial',
    desc: 'Sistema de inventario, cotizaciones y órdenes que mejoró la eficiencia operativa en un 60%.',
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  },
  {
    icon: '🌐',
    title: 'Sitios Web Empresariales',
    desc: 'Desarrollo web para clientes corporativos con tecnologías modernas y diseño responsivo.',
    tags: ['React', 'Vue', 'Tailwind', 'Node.js'],
  },
  {
    icon: '🤖',
    title: 'Automatizaciones IA',
    desc: 'Flujos de automatización empresarial con n8n, MCP y agentes de IA personalizados.',
    tags: ['n8n', 'MCP', 'OpenAI', 'Python'],
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-dark-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Proyectos <span className="text-primary">destacados</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={item}>
              <TiltCard className="h-full">
                <div className="group bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 cursor-default h-full">
                  <motion.div
                    className="text-3xl mb-3 inline-block"
                    whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {p.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-dark-bg border border-dark-border text-text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
