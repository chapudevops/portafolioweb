import type { ReactNode } from 'react'

const colors = {
  keyword: '#569CD6',
  string: '#CE9178',
  number: '#B5CEA8',
  comment: '#6A9955',
  function: '#DCDCAA',
  property: '#9CDCFE',
  punctuation: '#D4D4D4',
  tag: '#569CD6',
  attr: '#9CDCFE',
  value: '#CE9178',
  selector: '#D7BA7D',
  boolean: '#569CD6',
  type: '#4EC9B0',
  param: '#9CDCFE',
  variable: '#9CDCFE',
  operator: '#D4D4D4',
  regexp: '#D16969',
  className: '#4EC9B0',
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

interface TokenPattern {
  pattern: RegExp
  type: string
}

const commonPatterns: TokenPattern[] = [
  { pattern: /\/\/.*$/, type: 'comment' },
  { pattern: /\/\*[\s\S]*?\*\//, type: 'comment' },
  { pattern: /"([^"\\]|\\.)*"/, type: 'string' },
  { pattern: /'([^'\\]|\\.)*'/, type: 'string' },
  { pattern: /`([^`\\]|\\.)*`/, type: 'string' },
  { pattern: /\b\d+\.?\d*\b/, type: 'number' },
  { pattern: /\b(true|false|null|undefined|NaN|Infinity)\b/, type: 'boolean' },
]

function getLanguagePatterns(language: string): TokenPattern[] {
  const base = [...commonPatterns]

  switch (language) {
    case 'javascript':
    case 'typescript':
    case 'jsx':
      base.unshift(
        { pattern: /(\bimport\s+[\s\S]*?from\s+)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g as any, type: 'keyword' },
        { pattern: /(<\/?[\w-]+[\s\S]*?>)/g as any, type: 'tag' },
      )
      return base
    case 'php':
      base.unshift(
        { pattern: /<\?php|\?>/, type: 'keyword' },
        { pattern: /\$[\w_]+/, type: 'variable' },
        { pattern: /\b(public|private|protected|static|function|class|return|new|if|else|foreach|echo|namespace|use|interface|implements|extends|abstract|final|trait|as|const|var|include|require|array|true|false|null)\b/, type: 'keyword' },
      )
      return base
    case 'json':
      base.unshift(
        { pattern: /"[^"]*"\s*(?=:)/, type: 'property' },
        { pattern: /\b(true|false|null)\b/, type: 'boolean' },
      )
      return base
    case 'markdown':
      return [
        { pattern: /(#{1,6}\s.*$)/gm, type: 'keyword' },
        { pattern: /(\*\*[^*]+\*\*|__[^_]+__)/g, type: 'string' },
        { pattern: /(`[^`]+`)/g, type: 'string' },
        { pattern: /(\*[^*]+\*|_[^_]+_)/g, type: 'comment' },
        { pattern: /\[([^\]]+)\]\(([^)]+)\)/g, type: 'function' },
        { pattern: /(---|___|\*\*\*)/g, type: 'comment' },
        { pattern: /(\|[^\n]+\|)/g, type: 'property' },
      ]
    case 'env':
      return [
        { pattern: /^#.*$/gm, type: 'comment' },
        { pattern: /^[A-Z_]+(?=\s*=)/gm, type: 'property' },
        { pattern: /(?<==).*$/, type: 'string' },
      ]
    case 'text':
    default:
      return []
  }
}

function applyPatterns(line: string, patterns: TokenPattern[]): ReactNode[] {
  if (patterns.length === 0) return [escapeHtml(line)]

  const elements: ReactNode[] = []
  let lastIndex = 0

  const combinedPatterns = patterns.map(p => ({
    regex: new RegExp(p.pattern.source, p.pattern.flags.replace('g', '') + 'g'),
    type: p.type,
  }))

  for (const { regex, type } of combinedPatterns) {
    regex.lastIndex = 0
    let match: RegExpExecArray | null
    while ((match = regex.exec(line)) !== null) {
      const before = line.slice(lastIndex, match.index)
      if (before) {
        elements.push(<span key={`${lastIndex}-text`} style={{ color: colors.punctuation }}>{escapeHtml(before)}</span>)
      }
      elements.push(
        <span key={`${match.index}-${type}`} style={{ color: colors[type as keyof typeof colors] || colors.punctuation }}>
          {escapeHtml(match[0])}
        </span>
      )
      lastIndex = regex.lastIndex
      if (match[0].length === 0) {
        lastIndex++
        break
      }
    }
  }

  const remaining = line.slice(lastIndex)
  if (remaining) {
    elements.push(<span key={`${lastIndex}-end`} style={{ color: colors.punctuation }}>{escapeHtml(remaining)}</span>)
  }

  return elements.length > 0 ? elements : [escapeHtml(line)]
}

export function highlightCode(code: string, language: string): ReactNode[][] {
  const lines = code.split('\n')
  const patterns = getLanguagePatterns(language)
  return lines.map(line => applyPatterns(line, patterns))
}

export function getLineCount(code: string): number {
  return code.split('\n').length
}
