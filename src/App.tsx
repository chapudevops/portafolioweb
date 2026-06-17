import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import InfinityDev from './components/InfinityDev'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'
import BackToTop from './components/BackToTop'
import Marquee from './components/Marquee'
import SmoothScroll from './components/SmoothScroll'

export default function App() {
  return (
    <>
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
    </>
  )
}
