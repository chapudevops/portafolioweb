import { motion } from 'framer-motion'

const certs = [
  'Desarrollo Web y Aplicaciones Móviles – UCV',
  'Power BI – UPC',
  'SCRUM',
  'Introducción a la Ciberseguridad – Cisco',
  'Iniciación al Desarrollo con IA – BIG School',
  'Development and Basic Concepts of Cloud Computing – Huawei ICT Academy',
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export default function Certifications() {
  return (
    <section className="py-20 px-4 bg-dark-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Certificaciones
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {certs.map((c) => (
            <motion.div
              key={c}
              variants={item}
              whileHover={{ x: 4, borderColor: 'rgba(59,130,246,0.3)' }}
              className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-lg p-4 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span className="text-sm text-text-muted">{c}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
