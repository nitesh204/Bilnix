import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedButton = ({ children, className = "", ...rest }) => (
  <motion.button
    whileHover={{ scale: 1.08, boxShadow: "0 8px 24px #3b82f6aa" }}
    transition={{ type: "spring", stiffness: 400, damping: 12 }}
    className={className}
    {...rest}
  >
    {children}
  </motion.button>
);