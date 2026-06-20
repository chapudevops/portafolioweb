import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FileNode } from '../data/portfolioData'
import { getFileContent } from '../data/portfolioData'
import { highlightCode, getLineCount } from '../utils/syntaxHighlight'

interface Props {
  tabs: FileNode[]
  activeTab: FileNode | null
  onTabClose: (file: FileNode) => void
  onTabSelect: (file: FileNode) => void
}

function EditorContent({ file }: { file: FileNode }) {
  const content = getFileContent(file)
  const language = file.language || 'text'
  const lines = useMemo(() => highlightCode(content, language), [content, language])
  const lineCount = getLineCount(content)

  return (
    <div className="flex font-mono text-[13px] leading-[1.6]">
      <div className="text-right pr-3 pl-4 py-3 text-[#858585] select-none border-r border-[#3C3C3C] bg-[#1E1E1E] min-w-[48px] shrink-0">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i + 1} className="leading-[1.6]">
            {i + 1}
          </div>
        ))}
      </div>
      <div className="flex-1 py-3 px-4 overflow-auto bg-[#1E1E1E]">
        {lines.map((tokens, lineIdx) => (
          <div key={lineIdx} className="leading-[1.6] whitespace-pre">
            {tokens.length > 0 ? tokens : <span>&nbsp;</span>}
          </div>
        ))}
        <span className="animate-blink inline-block w-[2px] h-[18px] bg-[#569CD6] ml-0.5 align-text-top" />
      </div>
    </div>
  )
}

const fileLabels: Record<string, string> = {
  markdown: 'Markdown',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  json: 'JSON',
  php: 'PHP',
  jsx: 'JavaScript JSX',
  text: 'Texto',
  env: 'Env File',
}

export default function EditorArea({ tabs, activeTab, onTabClose, onTabSelect }: Props) {
  return (
    <div className="h-full flex flex-col bg-[#1E1E1E]">
      {tabs.length > 0 ? (
        <>
          <div className="flex bg-[#252526] border-b border-[#3C3C3C] overflow-x-auto shrink-0">
            {tabs.map((tab) => {
              const isActive = tab === activeTab
              return (
                <div
                  key={tab.name}
                  onClick={() => onTabSelect(tab)}
                  className={`group flex items-center gap-1.5 px-3 py-1.5 text-xs cursor-pointer border-r border-[#3C3C3C] select-none shrink-0 transition-colors
                    ${isActive
                      ? 'bg-[#1E1E1E] text-white border-t-[3px] border-t-[#007ACC] pt-[3px]'
                      : 'bg-[#2D2D2D] text-[#969696] hover:text-[#CCCCCC]'
                    }`}
                >
                  <span className="text-xs">{tab.icon === '📄' ? '📄' : tab.icon}</span>
                  <span className="truncate max-w-[120px]">{tab.name}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onTabClose(tab)
                    }}
                    className="ml-1 w-4 h-4 flex items-center justify-center rounded hover:bg-[#ffffff1a] text-[#969696] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity text-[10px]"
                  >
                    ✕
                  </button>
                </div>
              )
            })}
          </div>
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab && (
                <motion.div
                  key={activeTab.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="h-full overflow-auto"
                >
                  <EditorContent file={activeTab} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="bg-[#007ACC] text-white text-[11px] px-4 py-[2px] shrink-0">
            {activeTab ? fileLabels[activeTab.language || 'text'] : ''}
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-[#858585] bg-[#1E1E1E] select-none">
          <div className="text-center">
            <div className="text-5xl mb-4 opacity-20">{'{ }'}</div>
            <p className="text-sm">Selecciona un archivo del explorador</p>
            <p className="text-xs mt-1 text-[#606060]">para comenzar</p>
          </div>
        </div>
      )}
    </div>
  )
}
