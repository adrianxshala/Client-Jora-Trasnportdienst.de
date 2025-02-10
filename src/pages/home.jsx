import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import CTA from '../components/CTA'
import HowitWorks from "../components/HowItWorks"

const home = () => {
  return (
    <div><Hero/>
    <About/>
    <HowitWorks/>
    <CTA/>
    <Services/>
    <Contact/>
    </div>
  )
}

export default home