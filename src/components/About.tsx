import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '../hooks/useCountUp'
import SkillBars from './SkillBars'

function StatItem({ target, label, suffix = '' }: { target: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(target, 2000, inView)

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-bold text-primary-light">
        {suffix === '+' ? '+' : ''}{count}{suffix}
      </div>
      <div className="text-xs text-text-muted">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Sobre <span className="text-primary">mí</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square max-w-xs mx-auto md:mx-0 rounded-2xl border border-dark-border bg-dark-card p-2">
              <motion.div
                className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-dark-card to-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.span
                  className="text-6xl"
                  animate={{ rotate: [0, -5, 5, -3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  👨‍💻
                </motion.span>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 justify-center md:justify-start">
              <StatItem target={2} label="Experiencia" suffix="+ años" />
              <StatItem target={10} label="Proyectos" suffix="+" />
              <StatItem target={50} label="Usuarios capacitados" suffix="+" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <motion.p
              className="text-text-muted leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Soy Ingeniero de Sistemas titulado y desarrollador de software con experiencia en 
              desarrollo web, automatización e implementación de sistemas empresariales. 
              Actualmente me desempeño como <span className="text-white font-medium">Líder Técnico en GKM Technology</span> 
              y fundador de <span className="text-primary-light font-medium">Infinity Dev</span>, donde desarrollo 
              soluciones digitales para empresas utilizando tecnologías modernas e inteligencia artificial.
            </motion.p>
            <motion.p
              className="text-text-muted leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Mi objetivo es crear productos tecnológicos que generen impacto real en los negocios 
              y especializarme en <span className="text-white font-medium">ciberseguridad</span> y{' '}
              <span className="text-white font-medium">cloud computing</span>.
            </motion.p>

            <SkillBars />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
