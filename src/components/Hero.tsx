import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import MagnetButton from './MagnetButton'

const floatingOrbs = [
  { size: 300, top: '10%', left: '5%', delay: 0 },
  { size: 200, top: '60%', right: '10%', delay: 2 },
  { size: 150, top: '30%', right: '30%', delay: 4 },
  { size: 250, bottom: '10%', left: '20%', delay: 1 },
]

export default function Hero() {
  const typed = useTypewriter([
    'Full Stack Developer',
    'AI Automation Developer',
    'Ingeniero de Sistemas',
  ], 70, 30, 2000)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/5 blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block"
        >
          <motion.div
            className="w-32 h-32 mx-auto rounded-full border-2 border-primary/30 p-1"
            animate={{ boxShadow: ['0 0 0 0 rgba(59,130,246,0)', '0 0 0 12px rgba(59,130,246,0.1)', '0 0 0 0 rgba(59,130,246,0)'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-4xl font-bold text-primary">
              DJ
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary-light font-medium mb-2 tracking-wider text-sm uppercase"
        >
          Ingeniero de Sistemas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Darlin Josué{' '}
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Saldarriaga Cruz
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-text-muted mb-3 max-w-2xl mx-auto h-8"
        >
          <span>{typed}</span>
          <span className="animate-pulse ml-0.5 text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-base text-text-muted/80 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Construyo soluciones empresariales escalables utilizando desarrollo Full Stack, Inteligencia Artificial y automatización.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <MagnetButton
            href="#"
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            Descargar CV
          </MagnetButton>
          <MagnetButton
            href="#projects"
            className="px-6 py-3 border border-dark-border hover:border-primary/50 text-white rounded-lg font-medium transition-all duration-200 bg-dark-card/50 backdrop-blur-sm"
          >
            Ver proyectos
          </MagnetButton>
          <MagnetButton
            href="#contact"
            className="px-6 py-3 border border-dark-border hover:border-primary/50 text-white rounded-lg font-medium transition-all duration-200 bg-dark-card/50 backdrop-blur-sm"
          >
            Contactarme
          </MagnetButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block text-text-muted hover:text-primary-light transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
