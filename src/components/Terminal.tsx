import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react'

interface Props {
  onExit?: () => void
}

/* ────────────────────────────────────────────
   TYPES
   ──────────────────────────────────────────── */
interface Line {
  id: number
  content: string | ReactNode
}

/* ────────────────────────────────────────────
   ASCII BANNER
   ──────────────────────────────────────────── */
const BANNER = `
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   ██████  ██████   ██████  ██████  ████████ ███████  ║
║   ██   ██ ██   ██ ██    ██ ██   ██    ██    ██       ║
║   ██████  ██████  ██    ██ ██████     ██    █████    ║
║   ██      ██   ██ ██    ██ ██   ██    ██    ██       ║
║   ██      ██   ██  ██████  ██   ██    ██    ███████  ║
║                                                       ║
║   ╔═══════════════════════════════════════════════╗   ║
║   ║  KALI LINUX PORTFOLIO EDITION v1.0           ║   ║
║   ║  ~ Darlin Josue Saldarriaga Cruz ~           ║   ║
║   ╚═══════════════════════════════════════════════╝   ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝

Type 'help' to see available commands.
`

/* ────────────────────────────────────────────
   BOOT MESSAGES
   ──────────────────────────────────────────── */
const bootLines = [
  { msg: '[    0.000000] Booting Kali Linux Portfolio kernel...', type: 'info' },
  { msg: '[    0.123456] CPU: AMD Ryzen 7 5800X @ 3.8GHz detected', type: 'info' },
  { msg: '[    0.234567] Memory: 32GB DDR4 @ 3600MHz available', type: 'info' },
  { msg: '[    0.345678] Network: Stack IPv4/IPv6 initialized', type: 'info' },
  { msg: '[    0.456789] Storage: NVMe SSD 1TB - ext4 mounted', type: 'info' },
  { msg: '[    0.567890] GPU: NVIDIA RTX 3070 - drivers loaded', type: 'info' },
  { msg: '[    0.678901] Audio: ALSA sound subsystem initialized', type: 'info' },
  { msg: '[    0.789012] USB: HID keyboard/mouse detected', type: 'info' },
  { msg: '[    0.890123] Starting portfolio services...', type: 'info' },
  { msg: '[    0.950000] Loading Darlin Saldarriaga profile...', type: 'info' },
  { msg: '[    0.980000] System: ready', type: 'ok' },
  { msg: '', type: 'info' },
  { msg: '  Welcome to Kali Linux Portfolio Edition', type: 'system' },
  { msg: '  ─────────────────────────────────────────', type: 'system' },
  { msg: `  Hostname: kali  Kernel: 6.1.0-kali5-amd64  Uptime: 0 min`, type: 'system' },
  { msg: '', type: 'info' },
]

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */
const projects = [
  {
    icon: '\uD83D\uDE80', title: 'SoPtickes IA',
    desc: 'Sistema de tickets inteligente con IA, clasificacion automatica y dashboard analitico.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI', 'Docker'],
  },
  {
    icon: '\uD83D\uDCE6', title: 'ERP Empresarial',
    desc: 'Sistema de inventario, cotizaciones y ordenes que mejoro la eficiencia operativa en un 60%.',
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  },
  {
    icon: '\uD83C\uDF10', title: 'Sitios Web Empresariales',
    desc: 'Desarrollo web para clientes corporativos con tecnologias modernas y diseño responsivo.',
    tags: ['React', 'Vue', 'Tailwind', 'Node.js'],
  },
  {
    icon: '\uD83E\uDD16', title: 'Automatizaciones IA',
    desc: 'Flujos de automatizacion empresarial con n8n, MCP y agentes de IA personalizados.',
    tags: ['n8n', 'MCP', 'OpenAI', 'Python'],
  },
]

const experience = [
  {
    title: 'Lider Tecnico - Desarrollo de Software',
    company: 'GKM Technology SAC',
    period: '2026 - Actualidad',
    highlights: [
      'Direccion tecnica de proyectos de software',
      'Arquitectura de sistemas escalables',
      'Liderazgo y gestion de equipo de desarrollo',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'GKM Technology SAC',
    period: '2025',
    highlights: [
      'Desarrollo de aplicaciones web full stack',
      'Integracion de APIs REST y servicios',
      'Implementacion de soluciones escalables',
    ],
  },
  {
    title: 'Administrador de Sistemas',
    company: 'GKM Technology SAC',
    period: '2025',
    highlights: [
      'Implementacion de ERP empresarial (+60% eficiencia)',
      'Reduccion de tiempos de entrega en 20%',
      'Capacitacion a mas de 50 usuarios',
    ],
  },
  {
    title: 'Desarrollador de Software Junior',
    company: 'GKM Technology SAC',
    period: '2024',
    highlights: [
      'Desarrollo de modulos ERP',
      'Trabajo con TCL y Xiaomi',
      'Soporte a sistemas empresariales',
    ],
  },
  {
    title: 'Soporte TI de Campo',
    company: 'GKM Technology SAC',
    period: '2024',
    highlights: [
      'Soporte tecnico presencial a usuarios',
      'Mantenimiento de infraestructura TI',
      'Atencion y resolucion de incidencias',
    ],
  },
]

const skillCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Angular', level: 70 },
      { name: 'Vue', level: 65 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Python', level: 88 },
      { name: 'Laravel', level: 80 },
      { name: 'Node.js', level: 78 },
      { name: 'PHP', level: 75 },
      { name: 'Java', level: 60 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'Linux', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 65 },
      { name: 'Git', level: 90 },
    ],
  },
  {
    title: 'IA & Automatizacion',
    items: [
      { name: 'OpenAI API', level: 85 },
      { name: 'n8n', level: 80 },
      { name: 'Python IA', level: 78 },
      { name: 'MCP', level: 70 },
    ],
  },
  {
    title: 'Bases de Datos',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'SQL Server', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
]

const certifications = [
  'Desarrollo Web y Aplicaciones Moviles - UCV',
  'Power BI - UPC',
  'SCRUM',
  'Introduccion a la Ciberseguridad - Cisco',
  'Iniciacion al Desarrollo con IA - BIG School',
  'Development and Basic Concepts of Cloud Computing - Huawei ICT Academy',
]

/* ────────────────────────────────────────────
   COLOR HELPERS
   ──────────────────────────────────────────── */
const c = {
  green: (s: string) => <span style={{ color: '#00ff41' }}>{s}</span>,
  greenBright: (s: string) => <span style={{ color: '#33ff77' }}>{s}</span>,
  greenDim: (s: string) => <span style={{ color: '#00cc33' }}>{s}</span>,
  red: (s: string) => <span style={{ color: '#ff0033' }}>{s}</span>,
  yellow: (s: string) => <span style={{ color: '#ffff00' }}>{s}</span>,
  cyan: (s: string) => <span style={{ color: '#00ffff' }}>{s}</span>,
  magenta: (s: string) => <span style={{ color: '#ff00ff' }}>{s}</span>,
  gray: (s: string) => <span style={{ color: '#666' }}>{s}</span>,
  white: (s: string) => <span style={{ color: '#e0e0e0' }}>{s}</span>,
}

/* ────────────────────────────────────────────
   RENDER HELPERS
   ──────────────────────────────────────────── */
function progressBar(level: number, width = 16) {
  const filled = Math.round((level / 100) * width)
  const empty = width - filled
  return (
    <span style={{ color: '#00ff41' }}>
      {'['}
      <span style={{ color: '#33ff77' }}>{'\u2588'.repeat(filled)}</span>
      <span style={{ color: '#333' }}>{'\u2591'.repeat(empty)}</span>
      {']'}
    </span>
  )
}

function sectionHeader(title: string) {
  const line = '\u2550'.repeat(44)
  return (
    <div style={{ color: '#00ff41', margin: '8px 0' }}>
      {'\u2554'}{line}{'\u2557'}
      <br />
      {'\u2551'}  {c.greenBright(title)}{' '.repeat(Math.max(0, 44 - title.length - 4))}{'\u2551'}
      <br />
      {'\u255A'}{line}{'\u255D'}
    </div>
  )
}

/* ────────────────────────────────────────────
   COMMAND OUTPUTS
   ──────────────────────────────────────────── */
function renderHelp() {
  const commands = [
    { cmd: 'about / whoami', desc: 'Informacion personal' },
    { cmd: 'experience', desc: 'Experiencia profesional' },
    { cmd: 'projects', desc: 'Proyectos destacados' },
    { cmd: 'skills / tech', desc: 'Stack tecnologico' },
    { cmd: 'certifications', desc: 'Certificaciones' },
    { cmd: 'education', desc: 'Formacion academica' },
    { cmd: 'infinity', desc: 'Infinity Dev - proyecto destacado' },
    { cmd: 'contact', desc: 'Informacion de contacto' },
    { cmd: 'social', desc: 'Redes sociales' },
    { cmd: 'cv / resume', desc: 'Descargar curriculum vitae' },
    { cmd: 'neofetch', desc: 'Informacion del sistema' },
    { cmd: 'date', desc: 'Mostrar fecha actual' },
    { cmd: 'uptime', desc: 'Tiempo de sesion' },
    { cmd: 'banner', desc: 'Mostrar banner de Kali' },
    { cmd: 'clear', desc: 'Limpiar la terminal' },
    { cmd: 'gui / exit', desc: 'Cambiar a modo grafico' },
    { cmd: 'matrix', desc: 'Matrix rain effect' },
    { cmd: 'echo [text]', desc: 'Repetir un texto' },
    { cmd: 'sudo [cmd]', desc: 'Ejecutar comando como root' },
    { cmd: 'help', desc: 'Mostrar esta ayuda' },
  ]
  return (
    <div style={{ lineHeight: '1.8' }}>
      {sectionHeader('COMANDOS DISPONIBLES')}
      <br />
      {commands.map(({ cmd, desc }) => (
        <div key={cmd} style={{ display: 'flex', gap: '16px' }}>
          <span style={{ color: '#00ff41', minWidth: 180, display: 'inline-block' }}>
            {'  '}{cmd}
          </span>
          <span style={{ color: '#888' }}>{desc}</span>
        </div>
      ))}
    </div>
  )
}

function renderAbout() {
  return (
    <div style={{ lineHeight: '1.8' }}>
      {sectionHeader('SOBRE MI')}
      <br />
      <div>
        <span style={{ color: '#888', minWidth: 120, display: 'inline-block' }}>  Nombre:</span>
        <span style={{ color: '#00ff41' }}>Darlin Josue Saldarriaga Cruz</span>
      </div>
      <div>
        <span style={{ color: '#888', minWidth: 120, display: 'inline-block' }}>  Titulo:</span>
        <span style={{ color: '#33ff77' }}>Ingeniero de Sistemas</span>
      </div>
      <div>
        <span style={{ color: '#888', minWidth: 120, display: 'inline-block' }}>  Rol:</span>
        <span style={{ color: '#33ff77' }}>Full Stack Developer & AI Automation</span>
      </div>
      <div>
        <span style={{ color: '#888', minWidth: 120, display: 'inline-block' }}>  Location:</span>
        <span style={{ color: '#e0e0e0' }}>Peru</span>
      </div>
      <div>
        <span style={{ color: '#888', minWidth: 120, display: 'inline-block' }}>  Email:</span>
        <span style={{ color: '#00ffff' }}>saldarriagacruz31@gmail.com</span>
      </div>
      <br />
      <div style={{ color: '#aaa', maxWidth: 600 }}>
        Soy Ingeniero de Sistemas titulado y desarrollador de software con experiencia en
        desarrollo web, automatizacion e implementacion de sistemas empresariales.
        Actualmente me desempeño como Lider Tecnico en GKM Technology y fundador de
        Infinity Dev, donde desarrollo soluciones digitales para empresas utilizando
        tecnologias modernas e inteligencia artificial.
      </div>
      <br />
      <div style={{ color: '#888' }}>  Stats:</div>
      <div style={{ color: '#00ff41' }}>    [+] 2+ años de experiencia</div>
      <div style={{ color: '#00ff41' }}>    [+] 10+ proyectos completados</div>
      <div style={{ color: '#00ff41' }}>    [+] 50+ usuarios capacitados</div>
    </div>
  )
}

function renderSkills() {
  return (
    <div style={{ lineHeight: '1.6' }}>
      {sectionHeader('STACK TECNOLOGICO')}
      <br />
      {skillCategories.map((cat) => (
        <div key={cat.title} style={{ marginBottom: 12 }}>
          <div style={{ color: '#ffff00', marginBottom: 4 }}>  [{cat.title}]</div>
          {cat.items.map((sk) => (
            <div key={sk.name} style={{ display: 'flex', gap: 8, alignItems: 'center', marginLeft: 16 }}>
              {progressBar(sk.level)}
              <span style={{ color: '#e0e0e0', minWidth: 100 }}>{sk.name}</span>
              <span style={{ color: '#00ff41' }}>{sk.level}%</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function renderProjects() {
  return (
    <div style={{ lineHeight: '1.6' }}>
      {sectionHeader('PROYECTOS DESTACADOS')}
      <br />
      {projects.map((p) => (
        <div key={p.title} style={{ marginBottom: 12, color: '#e0e0e0' }}>
          <div style={{ color: '#00ff41' }}>
            {'  \u250C'}{'\u2500'.repeat(48)}{'\u2510'}
          </div>
          <div>
            {'  \u2502'}  {p.icon}  <span style={{ color: '#33ff77' }}>{p.title}</span>
            {'  '.repeat(Math.max(0, 48 - p.title.length - 4))}{'\u2502'}
          </div>
          <div style={{ color: '#aaa' }}>
            {'  \u2502'}     {p.desc.slice(0, 46)}{p.desc.length > 46 ? '...' : ''}{' '.repeat(Math.max(0, 46 - Math.min(p.desc.length, 46)))}{'\u2502'}
          </div>
          <div style={{ color: '#888' }}>
            {'  \u2502'}     Tags: {c.cyan(p.tags.join(' \u00B7 '))}{' '.repeat(Math.max(0, 44 - p.tags.join(' \u00B7 ').length))}{'\u2502'}
          </div>
          <div style={{ color: '#00ff41' }}>
            {'  \u2514'}{'\u2500'.repeat(48)}{'\u2518'}
          </div>
        </div>
      ))}
    </div>
  )
}

function renderExperience() {
  return (
    <div style={{ lineHeight: '1.6' }}>
      {sectionHeader('EXPERIENCIA PROFESIONAL')}
      <div style={{ color: '#888', marginBottom: 8, marginLeft: 16 }}>GKM Technology SAC</div>
      {experience.map((exp) => (
        <div key={exp.title} style={{ marginBottom: 12 }}>
          <div style={{ color: '#00ff41' }}>
            {c.yellow('  \u2564 ')}{exp.period}
          </div>
          <div style={{ marginLeft: 24, color: '#33ff77' }}>
            {'  \u2502 '}{exp.title}
          </div>
          {exp.highlights.map((h) => (
            <div key={h} style={{ marginLeft: 32, color: '#aaa' }}>
              {'  \u251C '}{h}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function renderCertifications() {
  return (
    <div style={{ lineHeight: '1.8' }}>
      {sectionHeader('CERTIFICACIONES')}
      {certifications.map((cert) => (
        <div key={cert} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ color: '#00ff41' }}>  {'\u2713'}</span>
          <span style={{ color: '#e0e0e0' }}>{cert}</span>
        </div>
      ))}
    </div>
  )
}

function renderEducation() {
  return (
    <div style={{ lineHeight: '1.8' }}>
      {sectionHeader('EDUCACION')}
      <div style={{ marginLeft: 8 }}>
        <div style={{ color: '#33ff77', fontSize: '1.1em' }}>  Universidad Cesar Vallejo</div>
        <div style={{ color: '#00ff41', marginLeft: 16 }}>  Ingenieria de Sistemas</div>
        <div style={{ color: '#888', marginLeft: 16 }}>  Titulado (2025)</div>
        <br />
        <div style={{ marginLeft: 16, display: 'flex', gap: 12 }}>
          <span style={{ color: '#ffff00', border: '1px solid #333', padding: '2px 8px' }}>
            {'\uD83C\uDFC6'} Quinto Superior (2024)
          </span>
          <span style={{ color: '#ffff00', border: '1px solid #333', padding: '2px 8px' }}>
            {'\uD83C\uDFC6'} Tercio Superior (2025)
          </span>
        </div>
      </div>
    </div>
  )
}

function renderInfinityDev() {
  return (
    <div style={{ lineHeight: '1.8' }}>
      {sectionHeader('INFINITY DEV')}
      <div style={{ marginLeft: 8 }}>
        <div style={{ color: '#ffff00' }}>  Fundador & Full Stack Developer</div>
        <br />
        <div style={{ color: '#aaa' }}>
          Desarrollo de soluciones web modernas, automatizacion empresarial e integracion de
          inteligencia artificial para empresas.
        </div>
        <br />
        <div style={{ color: '#00ff41' }}>
          {'  \u2554'}{'\u2550'.repeat(36)}{'\u2557'}
        </div>
        <div style={{ color: '#33ff77' }}>
          {'  \u2551'}  {'\uD83D\uDE80'} SoPtickes IA{' '.repeat(23)}{'\u2551'}
        </div>
        <div style={{ color: '#00ff41' }}>
          {'  \u255A'}{'\u2550'.repeat(36)}{'\u255D'}
        </div>
        <div style={{ color: '#aaa', marginTop: 4 }}>
          Sistema inteligente de gestion de tickets desarrollado con inteligencia artificial
          para automatizar procesos de soporte tecnico.
        </div>
        <br />
        <div style={{ color: '#888' }}>  Caracteristicas:</div>
        <div style={{ color: '#00ff41', marginLeft: 16 }}>
          {'\u251C'} Clasificacion automatica de tickets mediante IA<br />
          {'\u251C'} Deteccion de prioridad<br />
          {'\u251C'} Asignacion automatica de tecnicos<br />
          {'\u251C'} Respuestas generadas por IA<br />
          {'\u251C'} Dashboard analitico en tiempo real<br />
          {'\u2514'} Automatizacion de flujos empresariales
        </div>
        <br />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginLeft: 16 }}>
          {['React', 'Python', 'FastAPI', 'OpenAI', 'Docker'].map((t) => (
            <span key={t} style={{ color: '#00ffff', border: '1px solid #333', padding: '0 6px', fontSize: '0.9em' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function renderContact() {
  const items = [
    { label: 'Email', value: 'saldarriagacruz31@gmail.com', href: 'mailto:saldarriagacruz31@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/darlin-saldarriaga', href: 'https://linkedin.com' },
    { label: 'GitHub', value: 'github.com/darlinsaldarriaga', href: 'https://github.com' },
    { label: 'WhatsApp', value: '+51 993 978 303', href: 'https://wa.me/51993978303' },
    { label: 'Web', value: 'darlinsaldarriaga.dev', href: 'https://darlinsaldarriaga.dev' },
  ]
  return (
    <div style={{ lineHeight: '1.8' }}>
      {sectionHeader('CONTACTO')}
      {items.map((item) => (
        <div key={item.label} style={{ display: 'flex', gap: 12 }}>
          <span style={{ color: '#888', minWidth: 80, display: 'inline-block' }}>  {item.label}:</span>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#00ffff', textDecoration: 'none' }}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            {item.value}
          </a>
        </div>
      ))}
    </div>
  )
}

function renderSocial() {
  return (
    <div style={{ lineHeight: '1.8' }}>
      {sectionHeader('REDES SOCIALES')}
      {[
        { name: 'GitHub', url: 'https://github.com/darlinsaldarriaga', color: '#fff' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/darlin-saldarriaga', color: '#0a66c2' },
        { name: 'WhatsApp', url: 'https://wa.me/51993978303', color: '#25d366' },
        { name: 'Email', url: 'mailto:saldarriagacruz31@gmail.com', color: '#ea4335' },
      ].map((s) => (
        <div key={s.name} style={{ display: 'flex', gap: 12 }}>
          <span style={{ color: '#888', minWidth: 80 }}>  {s.name}:</span>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#00ffff', textDecoration: 'none' }}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            {s.url}
          </a>
        </div>
      ))}
    </div>
  )
}

function renderNeofetch() {
  const art = [
    '            ',
    '  , _.      ',
    ' .\' \'.\\    ',
    ' | |\\ |    ',
    ' | |/ |    ',
    ' \'. .\'     ',
    '  \'-\'      ',
    '            ',
  ]
  const info = [
    { k: 'OS', v: 'Kali Linux 2024.1 x86_64' },
    { k: 'Host', v: 'Darlin Saldarriaga' },
    { k: 'Kernel', v: '6.1.0-kali5-amd64' },
    { k: 'Uptime', v: '0 min' },
    { k: 'Shell', v: 'bash 5.2.21' },
    { k: 'DE', v: 'Portfolio Edition v1.0' },
    { k: 'CPU', v: 'Full Stack Developer' },
    { k: 'GPU', v: 'AI Automation Developer' },
    { k: 'Memory', v: 'Ingeniero de Sistemas' },
  ]
  return (
    <div style={{ lineHeight: '1.4', display: 'flex', gap: 8 }}>
      <div style={{ color: '#00ff41', whiteSpace: 'pre', lineHeight: '1.2' }}>
        {art.join('\n')}
      </div>
      <div>
        {info.map((i) => (
          <div key={i.k} style={{ display: 'flex', gap: 8 }}>
            <span style={{ color: '#ffff00', minWidth: 60 }}>{i.k}</span>
            <span style={{ color: '#e0e0e0' }}>{i.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function renderMatrix() {
  const chars = '\u30A0\u30A1\u30A2\u30A3\u30A4\u30A5\u30A6\u30A7\u30A8\u30A9\u30AA\u30AB\u30AC\u30AD\u30AE\u30AF\u30B0\u30B1\u30B2\u30B3\u30B4\u30B5\u30B6\u30B7\u30B8\u30B9\u30BA\u30BB\u30BC\u30BD\u30BE\u30BF\u30C0\u30C1\u30C2\u30C3\u30C4\u30C5\u30C6\u30C7\u30C8\u30C9\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D0\u30D1\u30D2\u30D3\u30D4\u30D5\u30D6\u30D7\u30D8\u30D9\u30DA\u30DB\u30DC\u30DD\u30DE\u30DF\u30E0\u30E1\u30E2\u30E3\u30E4\u30E5\u30E6\u30E7\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EE\u30EF\u30F0\u30F1\u30F2\u30F3'
  const cols = 8
  const rows = 12
  const grid: string[][] = []
  for (let r = 0; r < rows; r++) {
    const row: string[] = []
    for (let c = 0; c < cols; c++) {
      row.push(chars[Math.floor(Math.random() * chars.length)])
    }
    grid.push(row)
  }
  return (
    <div style={{ lineHeight: '1.4', fontFamily: 'monospace', fontSize: '14px' }}>
      {sectionHeader('MATRIX MODE')}
      <div style={{ color: '#00ff41', opacity: 0.8 }}>
        {grid.map((row, ri) => (
          <div key={ri}>
            {'  '}{row.map((ch, ci) => (
              <span
                key={ci}
                style={{
                  color: Math.random() > 0.7 ? '#33ff77' : '#00ff41',
                  opacity: Math.random() > 0.5 ? 1 : 0.4,
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        ))}
      </div>
      <br />
      <div style={{ color: '#00ff41' }}>{'  [} Matrix rain initialized...'}</div>
    </div>
  )
}



/* ────────────────────────────────────────────
   TERMINAL COMPONENT
   ──────────────────────────────────────────── */
export default function Terminal({ onExit }: Props) {
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [bootComplete, setBootComplete] = useState(false)
  const [sessionStart] = useState(Date.now())

  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const lineIdRef = useRef(0)

  const addLine = useCallback((content: string | ReactNode) => {
    setLines((prev) => [...prev, { id: lineIdRef.current++, content }])
  }, [])

  /* Auto-scroll */
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  /* Boot sequence */
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        const bl = bootLines[i]
        let content: string | ReactNode
        if (bl.type === 'info') {
          content = <span style={{ color: '#666' }}>{bl.msg}</span>
        } else if (bl.type === 'ok') {
          content = (
            <span>
              <span style={{ color: '#00ff41' }}>{'[  OK  ]'}</span>
              <span style={{ color: '#888' }}> System ready.</span>
            </span>
          )
        } else if (bl.type === 'system') {
          content = <span style={{ color: '#00ff41' }}>{bl.msg}</span>
        } else {
          content = bl.msg
        }
        addLine(content)
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          // Show banner
          const bannerLines = BANNER.split('\n')
          bannerLines.forEach((bl) => {
            if (bl.trim()) {
              addLine(<span style={{ color: '#00ff41', whiteSpace: 'pre' }}>{bl}</span>)
            }
          })
          setBootComplete(true)
          // Auto-focus after boot
          setTimeout(() => inputRef.current?.focus(), 100)
        }, 200)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [addLine])

  /* Command handler */
  const handleCommand = useCallback((raw: string) => {
    const trimmed = raw.trim()
    if (!trimmed) {
      addLine(
        <span>
          <span style={{ color: '#00ff41' }}>darlin@kali:~$</span>{' '}
          <span style={{ color: '#e0e0e0' }}>{trimmed}</span>
        </span>
      )
      return
    }

    addLine(
      <span>
        <span style={{ color: '#00ff41' }}>darlin@kali:~$</span>{' '}
        <span style={{ color: '#e0e0e0' }}>{trimmed}</span>
      </span>
    )

    setHistory((prev) => [...prev, trimmed])
    setHistoryIndex(-1)

    const parts = trimmed.split(/\s+/)
    const command = parts[0].toLowerCase()
    const args = parts.slice(1)
    const fullText = args.join(' ')

    const unknown = () => {
      addLine(
        <span style={{ color: '#ff0033' }}>
          bash: {command}: command not found. Type 'help' for available commands.
        </span>
      )
    }

    switch (command) {
      case 'help':
        addLine(renderHelp())
        break
      case 'about':
      case 'whoami':
        addLine(renderAbout())
        break
      case 'experience':
      case 'exp':
        addLine(renderExperience())
        break
      case 'projects':
      case 'project':
      case 'proyects':
        addLine(renderProjects())
        break
      case 'skills':
      case 'tech':
      case 'stack':
      case 'tecnologias':
        addLine(renderSkills())
        break
      case 'certifications':
      case 'certs':
      case 'certificaciones':
        addLine(renderCertifications())
        break
      case 'education':
      case 'educacion':
      case 'estudios':
        addLine(renderEducation())
        break
      case 'infinity':
      case 'infinitydev':
        addLine(renderInfinityDev())
        break
      case 'contact':
      case 'contacto':
        addLine(renderContact())
        break
      case 'social':
      case 'redes':
        addLine(renderSocial())
        break
      case 'neofetch':
        addLine(renderNeofetch())
        break
      case 'matrix':
        addLine(renderMatrix())
        break
      case 'banner': {
        const bannerLines = BANNER.split('\n')
        bannerLines.forEach((bl) => {
          if (bl.trim()) {
            addLine(<span style={{ color: '#00ff41', whiteSpace: 'pre' }}>{bl}</span>)
          }
        })
        break
      }
      case 'date':
        addLine(
          <span style={{ color: '#00ff41' }}>
            {new Date().toLocaleString('es-PE', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              timeZone: 'America/Lima',
            })}
          </span>
        )
        break
      case 'uptime': {
        const elapsed = Math.floor((Date.now() - sessionStart) / 1000)
        const hours = Math.floor(elapsed / 3600)
        const mins = Math.floor((elapsed % 3600) / 60)
        const secs = elapsed % 60
        addLine(
          <span style={{ color: '#00ff41' }}>
            up {hours > 0 ? `${hours} hours, ` : ''}{mins} min, {secs} sec
          </span>
        )
        break
      }
      case 'cv':
      case 'resume':
        addLine(
          <span style={{ color: '#00ff41' }}>
            Descargando CV... (funcionalidad pendiente)
          </span>
        )
        break
      case 'clear':
        setLines([])
        break
      case 'gui':
      case 'exit':
        onExit?.()
        break
      case 'echo':
        addLine(<span style={{ color: '#e0e0e0' }}>{fullText}</span>)
        break
      case 'sudo':
        if (fullText.toLowerCase() === 'apt update') {
          addLine(<span style={{ color: '#00ff41' }}>Leyendo listas de paquetes... Hecho</span>)
        } else if (fullText.toLowerCase().includes('apt install')) {
          const pkg = fullText.replace('apt install', '').trim()
          addLine(<span style={{ color: '#00ff41' }}>Leyendo listas de paquetes... Hecho</span>)
          addLine(<span style={{ color: '#00ff41' }}>Instalando {pkg || 'paquete'}...</span>)
          addLine(<span style={{ color: '#33ff77' }}>Hecho. {pkg || 'Paquete'} instalado correctamente.</span>)
        } else if (fullText.toLowerCase() === 'make me a sandwich') {
          addLine(<span style={{ color: '#ffff00' }}>sudo: make: command not found</span>)
          addLine(<span style={{ color: '#888' }}>  (Pero aqui tienes un sandwich virtual: {'\uD83E\uDD6A'})</span>)
        } else {
          addLine(<span style={{ color: '#ff0033' }}>Permiso denegado. Eres root? Lo dudo.</span>)
        }
        break
      case 'man':
        addLine(
          <span style={{ color: '#ffff00' }}>
            No manual entry for {fullText || 'command'}. Try 'help'.
          </span>
        )
        break
      case 'ls':
        addLine(
          <span style={{ color: '#00ffff' }}>
            about  experience  projects  skills  certifications  education  contact  cv
          </span>
        )
        break
      default:
        unknown()
    }
  }, [addLine, sessionStart])

  /* Key handler */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= history.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(history[newIndex])
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Simple tab completion
      const cmds = [
        'help', 'about', 'whoami', 'experience', 'projects',
        'skills', 'tech', 'certifications', 'education', 'infinity',
        'contact', 'social', 'neofetch', 'matrix', 'banner',
        'clear', 'gui', 'exit', 'date', 'uptime', 'cv', 'resume', 'echo',
      ]
      const partial = input.toLowerCase()
      const matches = cmds.filter((c) => c.startsWith(partial))
      if (matches.length === 1) {
        setInput(matches[0])
      } else if (matches.length > 1) {
        setInput(matches[0] + '  ')
      }
    }
  }

  /* Focus terminal on click */
  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }


  
  return (
    <div
      className="terminal-scanline"
      onClick={handleTerminalClick}
      style={{
        height: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        fontSize: 14,
        lineHeight: 1.5,
        color: '#e0e0e0',
        overflow: 'hidden',
      }}
    >
      {/* Terminal Window Title Bar */}
      <div
        style={{
          background: '#1a1a1a',
          borderBottom: '1px solid #333',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexShrink: 0,
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{ color: '#888', fontSize: 12, textAlign: 'center', flex: 1 }}>
          darlin@kali:~/portfolio
        </div>
        <div style={{ width: 60 }} />
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '12px 16px',
          background: '#0a0a0a',
        }}
      >
        {lines.map((line) => (
          <div key={line.id} className="animate-boot-fade" style={{ marginBottom: 2 }}>
            {line.content}
          </div>
        ))}

        {/* Input line */}
        {bootComplete && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 4, gap: 0 }}>
            <span style={{ color: '#00ff41', whiteSpace: 'pre', flexShrink: 0 }}>
              darlin@kali:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoFocus
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#e0e0e0',
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: 14,
                flex: 1,
                marginLeft: 8,
                caretColor: '#00ff41',
              }}
            />
          </div>
        )}

        {/* Blinking cursor when no input */}
        {bootComplete && !input && (
          <span className="animate-blink" style={{ color: '#00ff41', marginLeft: 2 }}>
            {'\u2588'}
          </span>
        )}

        {/* Bottom padding */}
        <div style={{ height: 20 }} />
      </div>
    </div>
  )
}
