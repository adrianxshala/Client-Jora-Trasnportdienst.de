import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo png.png"; // Ensure the path is correct
import logowhite from "../assets/llogo png e bardh.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { title: "Startseite", id: "home" },
    { title: "Dienstleistungen", id: "services" },
    { title: "Über uns", id: "about" },
    { title: "Kontakt", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/70 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" onClick={() => scrollToSection("home")}>
            <motion.img
              src={scrolled ? logowhite : logo}
              alt="Logo"
              className="w-40 h-36 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </a>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-400 hover:text-primary transition-all duration-300"
              >
                {link.title}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-all duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
              
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg rounded-xl p-4 absolute top-16 w-full left-0"
          >
            <div className="flex flex-col space-y-3 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="py-2 text-gray-700 hover:text-primary"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;



