import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Container } from "./shared/Container";

// Floating bubbles background with subtle motion
const AnimatedBubbles = () => (
  <div className="absolute inset-0 pointer-events-none -z-10">
    <motion.svg
      width="100%"
      height="100%"
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.circle
        cx="15%"
        cy="18%"
        r="90"
        fill="#2563eb"
        opacity="0.14"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="92%"
        cy="74%"
        r="180"
        fill="#0ea5e9"
        opacity="0.17"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="65%"
        cy="10%"
        r="80"
        fill="#38bdf8"
        opacity="0.13"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="40%"
        cy="80%"
        r="100"
        fill="#3b82f6"
        opacity="0.10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  </div>
);

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-100 pt-32 pb-28"
    >
      <AnimatedBubbles />

      {/* Animated Glow Layer */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-200/50 via-transparent to-sky-200/50 blur-3xl"
      />

      <Container className="text-center flex flex-col items-center justify-center relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-lg"
        >
          The Future of <br />
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 bg-clip-text text-transparent bg-[length:300%_300%]"
          >
            Billing & Analytics
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          className="mt-3 text-lg md:text-xl text-blue-900 max-w-2xl mx-auto backdrop-blur-md bg-white/70 px-8 py-4 rounded-2xl shadow-lg"
        >
          <motion.span
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            One platform for invoices, inventory, and insights — <br />
            <span className="font-semibold text-blue-700">
              fast, elegant & offline-ready.
            </span>
          </motion.span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="inline-block rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-4 text-lg font-semibold text-white shadow-2xl hover:shadow-blue-400/40 transition-all duration-300"
            >
               Explore Solutions
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <HashLink
              smooth
              to="/#pricing"
              className="inline-block rounded-2xl border-2 border-blue-600 bg-white px-10 py-4 text-lg font-semibold text-blue-700 shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
               Download App
            </HashLink>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
