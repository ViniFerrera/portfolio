import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Expertise from '../components/sections/Expertise'
import TechStack from '../components/sections/TechStack'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

export default function PortfolioPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Expertise />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
