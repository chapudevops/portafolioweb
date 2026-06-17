import { motion } from 'framer-motion'

const roles = [
  {
    title: 'Líder Técnico - Desarrollo de Software',
    period: '2026 - Actualidad',
    highlights: ['Dirección técnica de proyectos', 'Arquitectura de sistemas escalables', 'Liderazgo y gestión de equipo'],
  },
  {
    title: 'Full Stack Developer',
    period: '2025',
    highlights: ['Desarrollo de aplicaciones web full stack', 'Integración de APIs REST y servicios', 'Implementación de soluciones escalables'],
  },
  {
    title: 'Administrador de Sistemas',
    period: '2025',
    highlights: ['ERP empresarial (+60% eficiencia)', 'Reducción de tiempos de entrega en 20%', 'Capacitación a +50 usuarios'],
  },
  {
    title: 'Desarrollador de Software Junior',
    period: '2024',
    highlights: ['Desarrollo de módulos ERP', 'Trabajo con TCL y Xiaomi', 'Soporte a sistemas empresariales'],
  },
  {
    title: 'Soporte TI de Campo',
    period: '2024',
    highlights: ['Soporte técnico presencial a usuarios', 'Mantenimiento de infraestructura TI', 'Atención y resolución de incidencias'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-dark-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Experiencia <span className="text-primary">profesional</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-2" />
          <p className="text-text-muted mb-8">GKM Technology SAC</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-border md:-translate-x-px" />

          <div className="space-y-8">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block flex-1" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-dark-bg z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </div>
                <div className={`flex-1 ml-10 md:ml-0 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
                    whileHover={{ x: i % 2 === 0 ? 4 : -4, scale: 1.01 }}
                  >
                    <span className="text-xs text-primary-light font-medium">{role.period}</span>
                    <h3 className="text-lg font-semibold text-white mt-1">{role.title}</h3>
                    <ul className={`mt-3 space-y-1 ${i % 2 === 0 ? 'md:list-none' : ''}`}>
                      {role.highlights.map((h) => (
                        <li key={h} className="text-sm text-text-muted flex items-start gap-2">
                          <span className="text-primary mt-1 shrink-0">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
