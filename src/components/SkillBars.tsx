import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '../hooks/useCountUp'

const skills = [
  { name: 'React', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'Python', level: 88 },
  { name: 'Laravel', level: 80 },
  { name: 'Node.js', level: 78 },
  { name: 'Docker', level: 75 },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(level, 1500, inView)

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-text-muted">{name}</span>
        <span className="text-primary-light font-medium">{count}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-dark-border overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function SkillBars() {
  return (
    <div className="space-y-4 pt-6 border-t border-dark-border mt-6">
      {skills.map((s) => (
        <SkillBar key={s.name} name={s.name} level={s.level} />
      ))}
    </div>
  )
}
