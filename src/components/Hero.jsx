import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import banner from "../assets/banner.jpg";
import kombi from "../assets/kombi3.png";
import caddy from "../assets/caddy3.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen md:min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <header className="space-y-8">
            <h1 className="text-3xl lg:text-6xl font-bold text-white">
              Transportdienst Jora
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="text-gray-200 max-w-2xl mx-auto"
            >
             Express / Briefzustellung – Schnelle und zuverlässige Zustellung Ihrer Briefe und Pakete, sicher und termingerecht. 🚛
            </motion.p>
          </header>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <a
              href="#about"
              title="Mehr über Transportdienst Jora erfahren"
              aria-label="Mehr über Transportdienst Jora erfahren"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              Mehr erfahren
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 🚚 Imazhi i Kombit */}
      <motion.img
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        src={kombi}
        alt="Transportfahrzeug Kombi"
        loading="lazy"
        className="absolute bottom-[-23px] md:bottom-[-15px] lg:bottom-[-120px] ml-[-15%] md:ml-[0%] w-[100%] md:w-[100%] lg:w-[80%]"
      />

      {/* 🚗 Imazhi i Caddy */}
      <motion.img
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 1 }}
        src={caddy}
        alt="Transportfahrzeug Caddy"
        loading="lazy"
        className="absolute bottom-[-9px] ml-[35%] md:ml-[50%] w-[55%] md:w-[30%] md:hidden"
      />
    </section>
  );
};

export default Hero;