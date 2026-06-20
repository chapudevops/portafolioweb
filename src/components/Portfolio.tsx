import { useEffect } from 'react'
import SmoothScroll from './SmoothScroll'
import ParticleBackground from './ParticleBackground'
import ScrollProgress from './ScrollProgress'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Marquee from './Marquee'
import InfinityDev from './InfinityDev'
import Projects from './Projects'
import TechStack from './TechStack'
import Certifications from './Certifications'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'
import BackToTop from './BackToTop'

export default function Portfolio({ onTerminal }: { onTerminal: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'auto'
    return () => { document.body.style.overflow = 'hidden' }
  }, [])

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflow: 'auto', height: '100vh', background: '#0a0a0a' }}>
      <SmoothScroll />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Marquee />
        <InfinityDev />
        <Projects />
        <TechStack />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />

      <button
        onClick={onTerminal}
        className="fixed bottom-6 left-6 z-50 px-3 py-2 bg-dark-card border border-dark-border rounded-lg text-xs text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200 font-mono hidden md:flex items-center gap-2"
        title="Abrir terminal"
      >
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span>_terminal</span>
      </button>
    </div>
  )
}
