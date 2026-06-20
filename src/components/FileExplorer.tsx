import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FileNode } from '../data/portfolioData'
import { portfolioFiles } from '../data/portfolioData'

interface Props {
  onFileSelect: (file: FileNode) => void
  activeFile: FileNode | null
}

function FileTreeItem({
  node,
  depth,
  onFileSelect,
  activeFile,
}: {
  node: FileNode
  depth: number
  onFileSelect: (file: FileNode) => void
  activeFile: FileNode | null
}) {
  const [expanded, setExpanded] = useState(depth === 0)
  const isFolder = !!node.children
  const isActive = activeFile === node

  const handleClick = () => {
    if (isFolder) {
      setExpanded(!expanded)
    } else {
      onFileSelect(node)
    }
  }

  const fileIcon = (name: string, icon: string): string => {
    if (icon !== '📄') return icon
    const ext = name.split('.').pop()?.toLowerCase()
    const icons: Record<string, string> = {
      md: '📝',
      js: '🟨',
      jsx: '⚛️',
      ts: '🟦',
      tsx: '⚛️',
      json: '📋',
      php: '🐘',
      pdf: '📕',
      env: '🔒',
    }
    return icons[ext || ''] || '📄'
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full flex items-center gap-1.5 px-2 py-1 text-left text-xs transition-colors duration-150 cursor-pointer
          ${isActive
            ? 'bg-[#37373D] text-white'
            : 'text-[#CCCCCC] hover:bg-[#2A2D2E]'
          }`}
        style={{ paddingLeft: `${8 + depth * 16}px` }}
      >
        {isFolder && (
          <span className="text-[#808080] text-[10px] w-3 shrink-0">
            {expanded ? '▾' : '▸'}
          </span>
        )}
        <span className="shrink-0 text-xs">{fileIcon(node.name, node.icon)}</span>
        <span className="truncate">{node.name}</span>
      </button>
      <AnimatePresence>
        {isFolder && expanded && node.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            {node.children.map((child) => (
              <FileTreeItem
                key={child.name}
                node={child}
                depth={depth + 1}
                onFileSelect={onFileSelect}
                activeFile={activeFile}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FileExplorer({ onFileSelect, activeFile }: Props) {
  return (
    <div className="h-full flex flex-col bg-[#252526] select-none">
      <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-[#8F8F8F] font-semibold border-b border-[#3C3C3C]">
        Explorador
      </div>
      <div className="flex-1 overflow-auto py-1">
        <div className="text-[11px] uppercase tracking-wider text-[#8F8F8F] font-semibold px-4 py-1">
          PORTAFOLIO
        </div>
        {portfolioFiles.map((node) => (
          <FileTreeItem
            key={node.name}
            node={node}
            depth={0}
            onFileSelect={onFileSelect}
            activeFile={activeFile}
          />
        ))}
      </div>
    </div>
  )
}
