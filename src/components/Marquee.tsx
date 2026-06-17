import { motion } from 'framer-motion'

const techs = [
  'React', 'Angular', 'Vue', 'JavaScript', 'TypeScript', 'Tailwind CSS',
  'Bootstrap', 'PHP', 'Laravel', 'Node.js', 'Python', 'Java',
  'MySQL', 'SQL Server', 'Linux', 'AWS', 'Docker', 'Git',
  'OpenAI API', 'n8n', 'MCP', 'FastAPI',
]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-dark-border">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...techs, ...techs].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex items-center gap-2 text-sm text-text-muted"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
