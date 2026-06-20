import { useState, useCallback, useRef } from 'react'
import FileExplorer from './FileExplorer'
import EditorArea from './EditorArea'
import IntegratedTerminal from './IntegratedTerminal'
import type { FileNode } from '../data/portfolioData'

export default function VSCodeLayout() {
  const [tabs, setTabs] = useState<FileNode[]>([])
  const [activeTab, setActiveTab] = useState<FileNode | null>(null)
  const [sidebarWidth, setSidebarWidth] = useState(260)
  const [terminalHeight, setTerminalHeight] = useState(200)
  const [draggingSidebar, setDraggingSidebar] = useState(false)
  const dragSidebarStartX = useRef(0)
  const dragSidebarStartW = useRef(0)

  const handleFileSelect = useCallback((file: FileNode) => {
    setActiveTab(file)
    setTabs(prev => prev.some(t => t.name === file.name) ? prev : [...prev, file])
  }, [])

  const handleTabClose = useCallback((file: FileNode) => {
    setTabs(prev => {
      const newTabs = prev.filter(t => t.name !== file.name)
      if (file === activeTab) {
        const idx = prev.indexOf(file)
        setActiveTab(newTabs[Math.min(idx, newTabs.length - 1)] || null)
      }
      return newTabs
    })
  }, [activeTab])

  const handleTabSelect = useCallback((file: FileNode) => {
    setActiveTab(file)
  }, [])

  const handleTerminalHeight = useCallback((h: number) => {
    setTerminalHeight(h)
  }, [])

  const sidebarDragStart = (e: React.MouseEvent) => {
    setDraggingSidebar(true)
    dragSidebarStartX.current = e.clientX
    dragSidebarStartW.current = sidebarWidth
  }

  const sidebarDragMove = useCallback((e: React.MouseEvent) => {
    if (!draggingSidebar) return
    const delta = e.clientX - dragSidebarStartX.current
    const newWidth = Math.max(180, Math.min(500, dragSidebarStartW.current + delta))
    setSidebarWidth(newWidth)
  }, [draggingSidebar])

  const sidebarDragUp = useCallback(() => {
    setDraggingSidebar(false)
  }, [])

  return (
    <div
      className="h-screen w-screen flex flex-col overflow-hidden select-none"
      style={{ background: '#1E1E1E' }}
      onMouseMove={sidebarDragMove}
      onMouseUp={sidebarDragUp}
    >
      {/* Title Bar */}
      <div className="flex items-center h-[35px] bg-[#3C3C3C] shrink-0 px-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 text-[#CCCCCC] text-xs">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29L8.648 8.228 3.88 4.438a.748.748 0 0 0-.805-.044L.252 5.742a.748.748 0 0 0-.242 1.002l3.273 5.247-3.273 5.247a.748.748 0 0 0 .242 1.002l2.823 1.348a.748.748 0 0 0 .805-.044l4.768-3.79 7.857 7.33a1.494 1.494 0 0 0 1.705.29l4.942-2.377A1.5 1.5 0 0 0 24 19.36V4.64a1.5 1.5 0 0 0-.85-2.053zM18.96 17.88L10.205 9.697 18.96 3.153v14.727z" />
          </svg>
          <span className="font-semibold">PORTAFOLIO</span>
          <span className="text-[#808080]">— Visual Studio Code</span>
        </div>
        <div className="flex items-center gap-2 text-[#808080] text-xs">
          <span className="w-2 h-2 rounded-full bg-[#4EC9B0]" />
          <span>Darlin Saldarriaga</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex" style={{ height: `calc(100vh - 35px - ${terminalHeight}px)` }}>
        {/* Activity Bar */}
        <div className="w-[48px] bg-[#333333] flex flex-col items-center py-2 gap-3 shrink-0">
          <div className="w-8 h-8 flex items-center justify-center rounded bg-[#007ACC] text-white" title="Explorador">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M22.414 2.172a1.996 1.996 0 0 0-2.121-.461l-8.363 3.18L3.777 1.71A2 2 0 0 0 1.2 3.712v16.573a2 2 0 0 0 1.153 1.815l9.236 3.92a2 2 0 0 0 1.686.05l9.541-3.82A2 2 0 0 0 24 20.355V3.645a2 2 0 0 0-1.586-1.473zM10.47 21.164L3 17.795V4.311l7.47 3.368v13.485zm1.06 0V7.687l9.47-3.6v13.538l-9.47 3.539z" />
            </svg>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ width: sidebarWidth }} className="shrink-0">
          <FileExplorer onFileSelect={handleFileSelect} activeFile={activeTab} />
        </div>

        {/* Resize Handle */}
        <div
          className="w-[4px] bg-transparent hover:bg-[#007ACC]/50 cursor-col-resize shrink-0 transition-colors"
          onMouseDown={sidebarDragStart}
        />

        {/* Editor Area */}
        <div className="flex-1 flex flex-col">
          <EditorArea
            tabs={tabs}
            activeTab={activeTab}
            onTabClose={handleTabClose}
            onTabSelect={handleTabSelect}
          />
        </div>
      </div>

      {/* Terminal */}
      <IntegratedTerminal
        height={terminalHeight}
        onHeightChange={handleTerminalHeight}
      />

      {/* Status Bar */}
      <div className="flex items-center h-[24px] bg-[#007ACC] text-white text-[11px] px-3 shrink-0">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor">
              <path d="M8.5 1.5a.5.5 0 0 0-.5-.5H1a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V8.5h1V12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5H8.5V1.5z" />
            </svg>
            main
          </span>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-3">
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
          <span>Prettier</span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#4EC9B0]" />
            {activeTab ? activeTab.name : 'Sin archivo'}
          </span>
        </div>
      </div>
    </div>
  )
}
