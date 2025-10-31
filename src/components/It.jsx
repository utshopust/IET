import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";

const It = () => {
  const services = [
    {
      title: "Website Development",
      desc: "We build responsive and high-performance websites tailored to your business needs using HTML, CSS, and modern frameworks.",
      icon: "🌐",
    },
    {
      title: "Frontend Development",
      desc: "Create stunning user interfaces with React, ensuring a smooth and interactive experience.",
      icon: "⚛️",
    },
    {
      title: "Backend Development",
      desc: "Reliable server-side solutions using Node.js to manage databases, APIs, and business logic efficiently.",
      icon: "🛠️",
    },
    {
      title: "UI/UX Design",
      desc: "Professional designs focused on usability, accessibility, and aesthetics for the best user experience.",
      icon: "🎨",
    },
  ];

  return (
    <section
      // className="max-w-7xl mx-auto py-20 px-4 bg-gray-50 border-b-2"
      className="relative max-w-7xl mx-auto py-20 px-4 bg-gray-50 overflow-hidden
  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full 
  before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent"
      id="it"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our IT Services</h2>
        <p className="text-gray-600 text-sm lg:text-lg max-w-2xl mx-auto">
          Our company provides top-notch IT solutions including web development,
          frontend and backend programming, and modern UI/UX design.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Professional Contact Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto text-center text-white hover:scale-105 transition-transform duration-300"
      >
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="mb-6 text-gray-100">
          Contact us directly for IT solutions or project consultation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="tel:01721751591"
            className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <FiPhone className="text-xl" />
            <span>01721751591</span>
          </a>
          <a
            href="mailto:mcutsho96@gmail.com"
            className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <FiMail className="text-xl" />
            <span>mcutsho96@gmail.com</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default It;
