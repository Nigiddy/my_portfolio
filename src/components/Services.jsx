"use client";
import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Server, Brush } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      Icon: Code2,
      title: "Full-Stack Development",
      description: "Building scalable and efficient web applications tailored to your needs.",
      color: "text-blue-500",
    },
    {
      Icon: MonitorSmartphone,
      title: "Web Development",
      description: "Creating responsive, high-performance websites with a focus on user experience.",
      color: "text-green-500",
    },
    {
      Icon: Server,
      title: "API Development",
      description: "Designing and implementing robust, secure, and scalable API solutions.",
      color: "text-yellow-500",
    },
    {
      Icon: Brush,
      title: "UI/UX Design",
      description: "Crafting intuitive, user-friendly, and visually appealing interfaces.",
      color: "text-pink-500",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 py-20">
      {/* Heading */}
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold">My Services</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
          Offering a range of development and design services to bring your ideas to life.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-7xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            tabIndex={0}
            aria-label={`Service: ${service.title}. ${service.description}`}
          >
            <service.Icon className={`text-5xl ${service.color}`} />
            <h3 className="text-xl font-semibold mt-4 text-center">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-center text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
