import { useState, useEffect, useRef, useCallback } from 'react'
import { personalInfo } from '../data/portfolioData'

interface Props {
  height: number
  onHeightChange: (h: number) => void
}

const WELCOME = `Bienvenido al terminal integrado de ${personalInfo.name}
Escribe 'help' para ver los comandos disponibles.`

const commandsList = [
  { cmd: 'help', desc: 'Muestra esta ayuda' },
  { cmd: 'about', desc: 'Información personal' },
  { cmd: 'whoami', desc: 'Información personal' },
  { cmd: 'skills', desc: 'Habilidades técnicas' },
  { cmd: 'experience', desc: 'Experiencia profesional' },
  { cmd: 'projects', desc: 'Proyectos destacados' },
  { cmd: 'certifications', desc: 'Certificaciones' },
  { cmd: 'contact', desc: 'Información de contacto' },
  { cmd: 'clear', desc: 'Limpiar la terminal' },
  { cmd: 'date', desc: 'Mostrar fecha actual' },
  { cmd: 'banner', desc: 'Mostrar bienvenida' },
  { cmd: 'linkedin', desc: 'Abrir LinkedIn' },
  { cmd: 'github', desc: 'Abrir GitHub' },
]

export default function IntegratedTerminal({ height, onHeightChange }: Props) {
  const [lines, setLines] = useState<string[]>([WELCOME])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const dragStartY = useRef(0)
  const dragStartH = useRef(0)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const processCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    setHistory(prev => [...prev, cmd])
    setHistoryIndex(-1)

    const addLine = (text: string) => setLines(prev => [...prev, `$ ${cmd}`, text])

    switch (trimmed) {
      case 'help':
        addLine(commandsList.map(c => `  ${c.cmd.padEnd(15)} ${c.desc}`).join('\n'))
        break
      case 'about':
      case 'whoami':
        addLine(
          `  Nombre:    ${personalInfo.name}\n` +
          `  Título:    ${personalInfo.title}\n` +
          `  Rol:       ${personalInfo.role}\n` +
          `  Ubicación: ${personalInfo.location}\n` +
          `  Email:     ${personalInfo.email}\n` +
          `  Web:       ${personalInfo.web}`
        )
        break
      case 'skills':
        addLine(
          '  Frontend:    React 92% | TypeScript 85% | Tailwind 90%\n' +
          '  Backend:     Python 88% | Laravel 80% | Node.js 78%\n' +
          '  DevOps:      Linux 85% | Docker 75% | Git 90%\n' +
          '  IA:          OpenAI 85% | n8n 80% | Python IA 78%\n' +
          '  DB:          MySQL 85% | SQL Server 75% | PostgreSQL 70%'
        )
        break
      case 'experience':
        addLine(
          '  Líder Técnico @ GKM Technology (2026- )\n' +
          '  Full Stack Developer @ GKM Technology (2025)\n' +
          '  Administrador de Sistemas @ GKM Technology (2025)\n' +
          '  Desarrollador Junior @ GKM Technology (2024)\n' +
          '  Soporte TI @ GKM Technology (2024)'
        )
        break
      case 'projects':
        addLine(
          '  🚀 SoPtickes IA - Tickets inteligentes con IA\n' +
          '  📦 ERP Empresarial - Gestión empresarial\n' +
          '  🌐 Sitios Web - Desarrollo corporativo\n' +
          '  🤖 Automatizaciones IA - n8n + MCP'
        )
        break
      case 'certifications':
        addLine(
          '  ✅ Desarrollo Web y Apps Móviles - UCV\n' +
          '  ✅ Power BI - UPC\n' +
          '  ✅ SCRUM\n' +
          '  ✅ Ciberseguridad - Cisco\n' +
          '  ✅ Desarrollo con IA - BIG School\n' +
          '  ✅ Cloud Computing - Huawei ICT Academy'
        )
        break
      case 'contact':
        addLine(
          `  Email: ${personalInfo.email}\n` +
          `  Tel:   ${personalInfo.phone}\n` +
          `  Web:   ${personalInfo.web}\n` +
          `  LinkedIn:  ${personalInfo.linkedin}\n` +
          `  GitHub:    ${personalInfo.github}`
        )
        break
      case 'clear':
        setLines([])
        break
      case 'date':
        addLine(new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' }))
        break
      case 'banner':
        addLine(WELCOME)
        break
      case 'linkedin':
        addLine('Abriendo LinkedIn...')
        window.open(`https://${personalInfo.linkedin}`, '_blank')
        break
      case 'github':
        addLine('Abriendo GitHub...')
        window.open(`https://${personalInfo.github}`, '_blank')
        break
      default:
        addLine(`Comando no encontrado: ${cmd}. Escribe 'help' para ver los comandos.`)
    }
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const newIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIdx)
        setInput(history[newIdx])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        if (historyIndex + 1 >= history.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(historyIndex + 1)
          setInput(history[historyIndex + 1])
        }
      }
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    dragStartY.current = e.clientY
    dragStartH.current = height
  }

  useEffect(() => {
    if (!dragging) return

    const handleMove = (e: MouseEvent) => {
      const delta = dragStartY.current - e.clientY
      const newHeight = Math.max(80, Math.min(500, dragStartH.current + delta))
      onHeightChange(newHeight)
    }

    const handleUp = () => setDragging(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleUp)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [dragging, height, onHeightChange])

  const handleTerminalClick = () => inputRef.current?.focus()

  return (
    <div
      className="bg-[#1E1E1E] border-t border-[#3C3C3C] flex flex-col"
      style={{ height }}
    >
      <div
        className="h-[5px] bg-transparent hover:bg-[#007ACC]/20 cursor-row-resize shrink-0 transition-colors relative"
        onMouseDown={handleMouseDown}
      >
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#3C3C3C]" />
      </div>
      <div className="flex items-center justify-between px-4 py-[5px] bg-[#252526] border-b border-[#3C3C3C] shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-[#CCCCCC] text-xs font-semibold">TERMINAL</span>
        </div>
        <div className="flex items-center gap-2 text-[#808080] text-[10px]">
          <span
            className="w-2 h-2 rounded-full bg-[#4EC9B0] inline-block"
            title="Terminal listo"
          />
          <span>bash</span>
        </div>
      </div>
      <div
        ref={terminalRef}
        onClick={handleTerminalClick}
        className="flex-1 overflow-auto p-3 font-mono text-[13px] leading-[1.5] bg-[#1E1E1E]"
      >
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-all">
            <span style={{ color: line.startsWith('$ ') ? '#569CD6' : '#D4D4D4' }}>
              {line.startsWith('$ ') ? (
                <>
                  <span style={{ color: '#4EC9B0' }}>┌──(</span>
                  <span style={{ color: '#569CD6' }}>darlin</span>
                  <span style={{ color: '#D4D4D4' }}>@</span>
                  <span style={{ color: '#CE9178' }}>portafolio</span>
                  <span style={{ color: '#4EC9B0' }}>)─[</span>
                  <span style={{ color: '#9CDCFE' }}>~</span>
                  <span style={{ color: '#4EC9B0' }}>]</span>
                  {'\n'}
                  <span style={{ color: '#4EC9B0' }}>└──$ </span>
                  <span>{line.slice(2)}</span>
                </>
              ) : line}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-0 mt-1">
          <span style={{ color: '#4EC9B0' }}>┌──(</span>
          <span style={{ color: '#569CD6' }}>darlin</span>
          <span style={{ color: '#D4D4D4' }}>@</span>
          <span style={{ color: '#CE9178' }}>portafolio</span>
          <span style={{ color: '#4EC9B0' }}>)─[</span>
          <span style={{ color: '#9CDCFE' }}>~</span>
          <span style={{ color: '#4EC9B0' }}>]</span>
        </div>
        <div className="flex items-center">
          <span style={{ color: '#4EC9B0' }}>└──$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoFocus
            className="flex-1 bg-transparent border-none outline-none text-[#D4D4D4] font-mono text-[13px] ml-1"
            style={{ caretColor: '#569CD6' }}
          />
        </div>
        <div className="h-2" />
      </div>
    </div>
  )
}
