import { motion } from 'framer-motion'

export default function InfinityDev() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-card via-dark-card to-primary/5 p-8 md:p-12"
        >
          <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none">
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #3b82f6, transparent, #60a5fa, transparent)',
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-[1px] rounded-2xl bg-dark-card" />
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-wider text-primary-light font-medium">Destacado</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-2">
              Infinity <span className="text-primary">Dev</span>
            </h2>
            <p className="text-text-muted mb-2">Fundador & Full Stack Developer</p>
            <p className="text-text-muted/80 mb-8 max-w-2xl leading-relaxed">
              Desarrollo de soluciones web modernas, automatización empresarial e integración de 
              inteligencia artificial para empresas.
            </p>

            <div className="border-t border-dark-border pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                🚀 SoPtickes IA
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Sistema inteligente de gestión de tickets desarrollado con inteligencia artificial 
                para automatizar procesos de soporte técnico.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Clasificación automática de tickets mediante IA',
                  'Detección de prioridad',
                  'Asignación automática de técnicos',
                  'Respuestas generadas por IA',
                  'Dashboard analítico en tiempo real',
                  'Automatización de flujos empresariales',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-text-muted">
                    <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {['React', 'Python', 'FastAPI', 'OpenAI API', 'MySQL/PostgreSQL', 'Docker', 'IA Generativa'].map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full border border-dark-border bg-dark-bg text-text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
