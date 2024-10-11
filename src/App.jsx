import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Qualifications from "./components/Qualifications"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero /> 
        <Navbar />
        <About />
        <Skills />
        <Qualifications />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App