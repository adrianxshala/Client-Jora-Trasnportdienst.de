import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-primary-dark/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: -15 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Bereit, loszulegen?
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 15 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto"
        >
          Kontaktieren Sie uns noch heute, um ein individuell angepasstes
          Angebot für Ihre Transportbedürfnisse zu erhalten.
        </motion.p>
        <div className="mt-8">
          <motion.a
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            href="#contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary transition-colors duration-300"
          >
            Angebot anfordern
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
