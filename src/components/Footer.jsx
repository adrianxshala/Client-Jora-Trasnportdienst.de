// import React from 'react';
// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="col-span-1 md:col-span-2">
//             <h3 className="text-white text-lg font-semibold mb-4">TransAlb</h3>
//             <p className="mb-4">
//               Zgjidhja juaj e besueshme për transport mallrash në të gjithë Evropën.
//               Shërbim profesional dhe cilësor që nga viti 2010.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-white transition-colors">
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a href="#" className="hover:text-white transition-colors">
//                 <Twitter className="h-6 w-6" />
//               </a>
//               <a href="#" className="hover:text-white transition-colors">
//                 <Instagram className="h-6 w-6" />
//               </a>
//               <a href="#" className="hover:text-white transition-colors">
//                 <Linkedin className="h-6 w-6" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">Lidhje të Shpejta</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#home" className="hover:text-white transition-colors">
//                   Kryefaqja
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="hover:text-white transition-colors">
//                   Shërbimet
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="hover:text-white transition-colors">
//                   Rreth Nesh
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:text-white transition-colors">
//                   Kontakti
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">Kontakt</h3>
//             <ul className="space-y-2">
//               <li>Rruga e Durrësit, Tiranë</li>
//               <li>+355 69 123 4567</li>
//               <li>info@transalb.com</li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-gray-800 text-center">
//           <p>&copy; {currentYear} TransAlb. Të gjitha të drejtat të rezervuara.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
// import { Building2, Mail, MapPin, Phone } from "lucide-react";
// import logo from "../../public/assets/llogo edon.png"; // Adjust path based on your project structure

// export default function Footer() {
//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="bg-gray-900 text-white backdrop-blur-lg border-t border-gray-700 mt-20"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
//         <div className="flex flex-wrap justify-around">
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
//               className="flex items-center space-x-2"
//             >
//               <a href="/">
//                 <img
//                   src={logo}
//                   alt="Company Logo"
//                   width={160}
//                   height={80}
//                   style={{ objectFit: "contain", cursor: "pointer" }}
//                 />
//               </a>
//             </motion.div>
//           </div>

//           <div>
//             <motion.h3
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
//               className="font-semibold mb-4"
//             >
//               Contact
//             </motion.h3>
//             <div className="space-y-3 text-sm text-gray-400">
//               <motion.div className="flex items-center space-x-2">
//                 <MapPin className="h-4 w-4" />
//                 <span>23000 Suharekë, Prizren</span>
//               </motion.div>
//               <motion.div className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4" />
//                 <span>+ (383) 49 264-779</span>
//               </motion.div>
//               <motion.div className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4" />
//                 <span>lardiinvestshpk@gmail.com</span>
//               </motion.div>
//             </div>
//           </div>

//           <motion.div className="hidden md:block">
//             <h3 className="font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>Services</li>
//               <li>Projects</li>
//               <li>About Us</li>
//               <li>Careers</li>
//             </ul>
//           </motion.div>

//           <motion.div className="hidden md:block">
//             <h3 className="font-semibold mb-4">Legal</h3>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>Privacy Policy</li>
//               <li>Terms of Service</li>
//               <li>Cookie Policy</li>
//             </ul>
//           </motion.div>
//         </div>

//         <div className="mt-8 pt-5 border-t border-gray-700 text-center text-sm text-gray-400">
//           <motion.p>
//             &copy; {new Date().getFullYear()} Developed by <span className="font-semibold">Adrian</span>. All rights reserved.
//           </motion.p>

//           <div className="flex justify-center items-center space-x-4 mt-2">
//             <motion.a
//               href="https://wa.me/38349153002"
//               rel="noopener noreferrer"
//               target="_blank"
//               className="text-white hover:text-green-500"
//             >
//               <FaWhatsapp className="h-6 w-6" />
//             </motion.a>
//             <motion.a
//               href="https://www.linkedin.com/in/adrian-shala-a80ba5198/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-blue-500"
//             >
//               <FaLinkedin className="h-6 w-6" />
//             </motion.a>
//           </div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
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
        <span>23000 Suharekë, Prizren</span>
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
        <div className=" pt-5 border-t border-border text-gray-400 text-center text-sm text-muted-foreground">
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
