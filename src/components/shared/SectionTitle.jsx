import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl font-extrabold text-blue-800 text-center"
  >
    {children}
  </motion.h2>
);