import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo png.png"; // Adjust the path as needed

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black backdrop-blur-lg border-t border-border "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-around">
          {/* Logo-Bereich */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="flex items-center space-x-2"
            >
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                href="/"
              >
                <img
                  src={logo}
                  alt="Firmenlogo"
                  width={120}
                  style={{ objectFit: "contain", cursor: "pointer" }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Kontaktbereich */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="font-semibold mb-4 text-white"
            >
              Kontakt
            </motion.h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <MapPin className="h-4 w-4" />
                <span>Rathausplatz 22 52531 Übach-Palenberg</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <Phone className="h-4 w-4" />
                <span>017643407297</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.9 }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <Mail className="h-4 w-4" />
                <span>joratransportdienst@hotmail.com</span>
              </motion.div>
            </div>
          </div>

          {/* Schnellzugriffsbereich (sichtbar auf md und größeren Bildschirmen) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.9 }}
            className="hidden md:block"
          >
            <h3 className="font-semibold mb-4 text-white">Schnellzugriffe</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="text-gray-400">Dienstleistungen</li>
              <li className="text-gray-400">Projekte</li>
              <li className="text-gray-400">Über uns</li>
              <li className="text-gray-400">Karriere</li>
            </ul>
          </motion.div>

          {/* Rechtliches (sichtbar auf md und größeren Bildschirmen) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
            className="hidden md:block"
          >
            <h3 className="font-semibold mb-4 text-white">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="text-gray-400">Datenschutzrichtlinie</li>
              <li className="text-gray-400">Nutzungsbedingungen</li>
              <li className="text-gray-400">Cookie-Richtlinie</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className=" pt-3 mt-3 border-t border-border text-gray-400 text-center text-sm text-muted-foreground">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            &copy; {new Date().getFullYear()} Developed by{" "}
            <span className="font-semibold text-gray-400">Adrian</span>. All
            rights reserved.
          </motion.p>
          <p className="mt-2"></p>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-4 mt-2">
            {/* WhatsApp Icon */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
              href="https://wa.me/38349153002"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-6 w-6" />
            </motion.a>

            {/* LinkedIn Icon */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.8 }}
              href="https://www.linkedin.com/in/adrian-shala-a80ba5198/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
