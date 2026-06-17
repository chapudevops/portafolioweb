import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Educación
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-dark-card border border-dark-border rounded-xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Universidad César Vallejo</h3>
              <p className="text-primary-light font-medium mt-1">Ingeniería de Sistemas</p>
              <p className="text-text-muted text-sm">Titulado (2025)</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 border border-primary/20 text-primary-light">
                🏆 Quinto Superior (2024)
              </span>
              <span className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 border border-primary/20 text-primary-light">
                🏆 Tercio Superior (2025)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
