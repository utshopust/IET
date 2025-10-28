// import { SERVICES_CONTENT } from "../constants";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const Services = () => {
//   return (
//     <section id="services" className="max-w-7xl mx-auto border-b-2 px-4 py-20">
//       {/* Section Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-center text-2xl lg:text-4xl font-semibold uppercase tracking-wider mb-16"
//       >
//         Our Services
//       </motion.h2>

//       <div className="space-y-20">
//         {SERVICES_CONTENT.map((service, index) => (
//           <motion.div
//             key={index}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={index}
//             viewport={{ once: true }}
//             className={`flex flex-col lg:flex-row items-center gap-10 ${
//               index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//             }`}
//           >
//             {/* Service Image */}
//             <div className="lg:w-1/2 relative group overflow-hidden rounded-2xl shadow-lg">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-[300px] lg:h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </div>

//             {/* Service Content */}
//             <div className="lg:w-1/2">
//               <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;


import { SERVICES_CONTENT } from "../constants";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative max-w-7xl mx-auto px-4 py-20 border-b-2 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100"></div>

      {/* Subtle Glow Border */}
      <div className="absolute inset-0 border-t border-white/30 shadow-[0_0_60px_rgba(255,255,255,0.3)] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl lg:text-4xl font-semibold uppercase tracking-wider mb-16 text-gray-800"
        >
          Our Services
        </motion.h2>

        {/* Services List */}
        <div className="space-y-20">
          {SERVICES_CONTENT.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] lg:h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text Section */}
              <div className="lg:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
