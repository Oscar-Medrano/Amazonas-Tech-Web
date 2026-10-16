import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import TechSpecs from './components/TechSpecs'
import Marquee from './components/Marquee'
import Clients from './components/Clients'
import SafetyHSE from './components/SafetyHSE'
import Locations from './components/Locations'
import Empleo from './components/Empleo'
import Instagram from './components/Instagram'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-emerald-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      <Navbar />

       <main>
         <Hero />
         <Stats />
         <About />
         <Marquee />
         <TechSpecs />
         <Clients />
         <SafetyHSE />
         <Locations />
         <Empleo />
         <Instagram />
       </main>

      <Footer />
    </div>
  )
}
