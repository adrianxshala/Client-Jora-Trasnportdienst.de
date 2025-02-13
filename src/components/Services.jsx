'use client';

import React from 'react';
import { motion, useInView, stagger, delay } from 'framer-motion';
import { Truck, Globe, Package, Warehouse } from 'lucide-react';

const Services = () => {
  const sectionRef = React.useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  return (
    <section id="services" ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                Unsere Dienstleistungen
              </span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir bieten umfassende Transportlösungen für all Ihre Bedürfnisse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceBox 
            icon={<Globe className="h-12 w-12 text-cyan-500 mb-4" />} 
            title="Internationaler Transport" 
            description="Transportdienste in ganz Europa mit unserer modernen Flotte." 
            delay={0.2} 
          />
          <ServiceBox 
            icon={<Truck className="h-12 w-12 text-blue-500 mb-4" />} 
            title="Inlandstransport" 
            description="Umfassende Abdeckung des deutschen Territoriums mit schnellem und zuverlässigem Transportservice." 
            delay={0.4} 
          />
          <ServiceBox 
            icon={<Package className="h-12 w-12 text-pink-500 mb-4" />} 
            title="Logistik" 
            description="Integrierte Logistiklösungen für Ihr Unternehmen." 
            delay={0.6} 
          />
          <ServiceBox 
            icon={<Warehouse className="h-12 w-12 text-purple-500 mb-4" />} 
            title="Lagerung" 
            description="Sichere und professionelle Lagerlösungen für Ihre Waren." 
            delay={0.8} 
          />
        </div>
      </div>
    </section>
  );
};

const ServiceBox = ({ icon, title, description, delay }) => {
  const serviceRef = React.useRef(null);
  const isServiceInView = useInView(serviceRef, { once: true });

  return (
    <motion.div
      ref={serviceRef}
      initial={{ opacity: 0, x: 15 }}
      animate={isServiceInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-6 rounded-lg border border-gray-200 bg-white shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default Services;