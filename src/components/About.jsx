import React from "react";
import images from "../assets/about22.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      id="about"
      className="relative py-10 overflow-hidden bg-gradient-to-br from-white to-gray-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2
             initial={{ opacity: 0, y: 50 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                Über uns
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Wir führen die Revolution im futuristischen Frachttransport mit
            modernster Technologie und unvergleichlicher Zuverlässigkeit an.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side – Text & Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div className="relative p-6 rounded-3xl border border-gray-200 bg-white shadow-md">
                <div className="text-4xl font-extrabold text-cyan-400">
                  {inView ? <CountUp end={500} duration={2} suffix="+" /> : 0}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Tägliche Lieferungen
                </div>
              </motion.div>
              <motion.div className="relative p-6 rounded-3xl border border-gray-200 bg-white shadow-md">
                <div className="text-4xl font-extrabold text-purple-500">
                  {inView ? <CountUp end={98} duration={2} suffix="%" /> : 0}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Pünktliche Lieferquote
                </div>
              </motion.div>
              <motion.div className="relative p-6 rounded-3xl border border-gray-200 bg-white shadow-md">
                <div className="text-4xl font-extrabold text-green-500">
                  {inView ? <CountUp end={1200} duration={2} suffix="+" /> : 0}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Zufriedene Kunden
                </div>
              </motion.div>
              <motion.div className="relative p-6 rounded-3xl border border-gray-200 bg-white shadow-md">
                <div className="text-4xl font-extrabold text-yellow-500">
                  {inView ? <CountUp end={15} duration={2} suffix="+" /> : 0}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Jahre im Geschäft
                </div>
              </motion.div>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden md:block"
            >
              <h2 className="font-bold text-xl text-gray-900">
                Unsere Mission
              </h2>
              <p className="text-gray-600">
                Die Frachtbeförderung durch fortschrittliche Technologie und
                nachhaltige Praktiken zu revolutionieren, um einen Service zu
                bieten, der die Erwartungen übertrifft.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side – Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={images}
              alt="Futuristische Lagerbetriebe"
              className="relative rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
