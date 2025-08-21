import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "919322880059";
  const message = "Hello! I'm interested in Bilnix and would like to know more.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20, delay: 1.5 } }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-40 flex items-center h-16 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full shadow-2xl shadow-green-500/30 cursor-pointer"
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.4)",
            "0 0 0 15px rgba(34, 197, 94, 0)",
            "0 0 0 0 rgba(34, 197, 94, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        className="absolute inset-0 rounded-full"
      />

      <div className="grid place-items-center w-16 h-16">
        <MessageCircle className="w-8 h-8" />
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1, marginRight: '1.25rem' }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-base font-semibold whitespace-nowrap overflow-hidden"
          >
            Chat with us
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}