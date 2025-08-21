import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from './shared/Container';
import { AnimatedButton } from './shared/AnimatedButton';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { title: "Home", href: "/#home" },
    { title: "Services", href: "/services" },
    { title: "Pricing", href: "/#pricing" },
    { title: "Get in Touch", href: "/contact" },
     { title: "About", href: "/#about" },

  ];

  return (
    <>
      {/* === TOP NAVBAR === */}
      <motion.header
        initial={{ y: -44, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-opacity-70 border-b border-slate-200 bg-white/60"
      >
        <Container className="py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-sky-400 grid place-items-center text-white font-black shadow-xl"
            >
              B
            </motion.div>
            <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              Bilnix
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-base font-medium">
            {navLinks.map(link => {
              const isHashLink = link.href.includes('/#');
              const LinkComponent = isHashLink ? HashLink : Link;
              return (
                <LinkComponent key={link.title} to={link.href} smooth className="relative">
                  <motion.div
                    whileHover="hover"
                    animate="rest"
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <motion.span
                      variants={{
                        rest: { scale: 1, color: "#334155" },
                        hover: { scale: 1.2, color: "#2563eb" },
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-semibold"
                    >
                      {link.title}
                    </motion.span>
                    <motion.div
                      className="absolute bottom-[-6px] left-0 h-0.5 bg-blue-600"
                      variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
                      transition={{ duration: 0.35 }}
                    />
                  </motion.div>
                </LinkComponent>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <AnimatedButton
            onClick={() => setMenuOpen(true)}
            className="md:hidden px-3 py-2 rounded-lg border bg-white shadow"
          >
            <Menu className="w-6 h-6" />
          </AnimatedButton>
        </Container>
      </motion.header>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white md:hidden flex flex-col"
          >
            {/* Top Bar */}
            <div className="p-6 flex items-center justify-between border-b">
              <div className="text-lg font-black text-blue-800">Menu</div>
              <button onClick={() => setMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Centered Menu Links */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-10 text-2xl font-semibold text-blue-800">
              {navLinks.map(link => {
                const isHashLink = link.href.includes('/#');
                const LinkComponent = isHashLink ? HashLink : Link;
                return (
                  <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.2, color: "#2563eb" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <LinkComponent
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="cursor-pointer"
                    >
                      {link.title}
                    </LinkComponent>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
