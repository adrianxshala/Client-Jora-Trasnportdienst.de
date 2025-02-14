import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import HowitWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HowitWorks />
      <CTA />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default home;
