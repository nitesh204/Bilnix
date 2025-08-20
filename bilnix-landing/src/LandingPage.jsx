import React from "react";
import { motion } from "framer-motion";
import {
  FaStore,
  FaUtensils,
  FaMobileAlt,
  FaChartLine,
  FaSync,
  FaUsers,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 shadow-md bg-white sticky top-0 z-50">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-blue-600"
        >
          Bilnix
        </motion.h1>
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow-lg"
        >
          Get Started
        </motion.button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Powering the Future of{" "}
          <span className="text-blue-600">Business</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Modern solutions for billing, sales, and analytics with a sleek,
          user-friendly interface.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md">
            🚀 Launch Now
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose <span className="text-blue-600">Bilnix?</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: <FaStore />, title: "Smart Store Management" },
            { icon: <FaUtensils />, title: "Easy Inventory" },
            { icon: <FaMobileAlt />, title: "Mobile First" },
            { icon: <FaChartLine />, title: "Live Analytics" },
            { icon: <FaSync />, title: "Auto Updates" },
            { icon: <FaUsers />, title: "Team Collaboration" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md p-8 text-center"
            >
              <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>
              <h4 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Poster Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          🎉 New Launching Soon!
        </motion.h3>
        <p className="text-lg mb-8">
          Be the first to experience next-gen billing and analytics.
        </p>
        <button className="px-6 py-3 rounded-lg bg-white text-blue-600 font-bold shadow-lg">
          Join Waitlist
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        © {new Date().getFullYear()} Bilnix. All rights reserved.
      </footer>
    </div>
  );
}
