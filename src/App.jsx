import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Partners from "./components/Partners"
import Features from "./components/Features"
import MarketOpportunity from "./components/MarketOpportunity"
import Traction from "./components/Traction"
import About from "./components/About"
import Footer from "./components/Footer"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfUse from "./components/TermsOfUse"
import Disclaimer from "./components/Disclaimer"
import HowItWorks from "./components/HowItWorks"
import FAQ from "./components/FAQ"
import RegulatoryNote from "./components/Regulatory"
import TokenizedRWA from "./components/TokenizedRWA"
import ParallaxSection from "./components/ParralaxSection"

// Home page component
const HomePage = () => (
  <div className="min-h-screen  font-manrope ">
    <Header />
    <main>
      <Hero />
      {/* <Partners /> */}
      <Features />
      <HowItWorks />
      <MarketOpportunity />
      <Traction />
      <ParallaxSection />
      <About />
      <FAQ />
    </main>
    <Footer />
  </div>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  )
}

export default App
