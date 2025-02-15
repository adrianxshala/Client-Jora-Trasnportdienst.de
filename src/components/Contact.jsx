import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    address:"",
    tel:"",
    access_key: "30b0de0d-5b53-4da2-9c80-d0e98bbe6828", // Replace with your Web3Forms Access Key
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "",address:"",tel:"", access_key: "30b0de0d-5b53-4da2-9c80-d0e98bbe6828" });
    } else {
      setErrors(result.errors || { form: "There was an error sending the message." });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Rufen Sie uns an",
      details: "017643407297",
    },
    {
      icon: Mail,
      title: "E-Mail",
      details: "joratransportdienst@hotmail.com",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: `Rathausplatz 22
      52531 Übach-Palenberg`,
    }
  ];


  return (
    <section id="contact" className="relative py-14 overflow-hidden">
      {/* Grid Pattern Background Overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              Kontaktieren Sie uns
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
           Kontaktieren Sie uns – wir helfen Ihnen gerne weiter!"
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              // Array of Tailwind color classes for icons.
              const colorClasses = [
                "text-orange-500",
                "text-blue-500",
                "text-green-500",
              ];
              return (
                <div key={item.title} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gray-100 backdrop-blur-lg rounded-lg border border-gray-300 transition-transform duration-300 hover:scale-110">
                      <Icon className={`h-6 w-6 ${colorClasses[index]}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{item.details}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value={formData.access_key} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm bg-gray-100 text-gray-900 p-3 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="joratransportdienst@hotmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm bg-gray-100 text-gray-900 p-3 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-900">
                Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Adresse"
                  value={formData.address}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm bg-gray-100 text-gray-900 p-3 ${
                    errors.address ? "border-red-500" : ""
                  }`}
                />
                {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-900">
                Telefonnummer
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Telefonnummer eingeben"
                  value={formData.tel}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm bg-gray-100 text-gray-900 p-3 ${
                    errors.tel ? "border-red-500" : ""
                  }`}
                />
                {errors.tel && <p className="mt-1 text-sm text-red-500">{errors.tel}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Geben Sie hier Ihre Bestellung oder Anfrage ein..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm bg-gray-100 text-gray-900 p-3 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="relative inline-flex items-center ml-20 md:ml-1 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                >
                  Nachricht senden
                </button>
              </div>

              {successMessage && <p className="text-green-500">{successMessage}</p>}
              {errors.form && <p className="text-red-500">{errors.form}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
