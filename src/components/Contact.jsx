"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";  // ⬅️ Import EmailJS
import { Send, User, Mail, MessageSquare } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import contactAnimation from "../animations/contact.json";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);  // ⬅️ Error state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const serviceID = "service_tma1txo";
    const templateID = "template_yhbc2ee";
    const publicKey = "s6MdDHMR7W3P6s2EJ";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("Email send error:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-16 px-6 sm:px-12 transition-colors">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Lottie animationData={contactAnimation} loop autoPlay className="w-72 sm:w-96" />
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3 text-center tracking-tight leading-tight text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8 text-base max-w-sm mx-auto leading-relaxed">
            Have a project in mind?
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full pl-10 p-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                required 
                aria-label="Your Name"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full pl-10 p-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                required 
                aria-label="Your Email"
              />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="4" 
                className="w-full pl-10 p-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y"
                required
                aria-label="Your Message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`w-full p-3 flex justify-center items-center gap-2 rounded-lg text-white transition-all duration-300 ${
                isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={isSubmitting}
              aria-label="Send Message"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="w-4 h-4" />}
            </button>
          </form>
          {submitted && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-lg text-center" role="status" aria-live="polite">
              Message sent successfully!
            </motion.div>
          )}
          {error && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg text-center" role="alert" aria-live="assertive">
              Failed to send message. Please try again.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
