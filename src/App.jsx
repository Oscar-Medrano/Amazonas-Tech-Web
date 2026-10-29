import { useState } from 'react'
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
import Preloader from './components/Preloader'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50">
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <Navbar />

       <main>
         <Hero />
         <Stats />
         <About />
         <Clients />
         <TechSpecs />
         <Marquee />
         <SafetyHSE />
         <Locations />
         <Empleo />
         <Instagram />
       </main>

      <Footer />
    </div>
  )
}
