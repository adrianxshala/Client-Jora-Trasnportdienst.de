import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardList, Truck, Package, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  // useInView for the overall section (title & connecting line)
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-16 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
            Wie wir arbeiten
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Unser einfacher und effizienter Prozess zur Erfüllung Ihrer Bedürfnisse.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"
            initial={{ scaleX: 0 }}
            animate={sectionInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
          />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Step 1 */}
            <Step
              Icon={ClipboardList}
              title="Bestellung"
              description="Füllen Sie das Online-Formular aus oder kontaktieren Sie uns direkt, um Ihre Bestellung aufzugeben."
            />

            {/* Step 2 */}
            <Step
              Icon={Package}
              title="Warenabholung"
              description="Unser Team holt die Waren zum vereinbarten Zeitpunkt an Ihrem Standort ab."
            />

            {/* Step 3 */}
            <Step
              Icon={Truck}
              title="Transport"
              description="Wir transportieren Ihre Waren mit größter Sorgfalt und in Echtzeit."
            />

            {/* Step 4 */}
            <Step
              Icon={CheckCircle}
              title="Lieferung"
              description="Wir liefern Ihre Waren an den gewünschten Zielort mit Empfangsbestätigung."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ Icon, title, description }) => {
  const [stepRef, stepInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 50 }}
      animate={stepInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="relative z-10">
        <motion.div
          className="w-20 h-20 mx-auto bg-gradient-to-tr from-primary via-primary-light to-primary rounded-2xl shadow-lg transform rotate-45"
          whileHover={{ scale: 1.1 }}
        >
          <div className="absolute inset-0 flex items-center justify-center -rotate-45">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      </div>
      <div className="mt-8 text-center">
        <motion.h3
          className="text-xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          animate={stepInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="mt-2 text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={stepInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HowItWorks;