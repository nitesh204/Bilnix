import React from 'react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

export default function Steps() {
  return (
    <section className="py-20 bg-slate-50">
      <Container className="text-center">
        <SectionTitle>Get Started Today</SectionTitle>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Choose your preferred platform and start managing your business efficiently.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* PWA Card */}
          <div className="p-10 bg-white rounded-2xl shadow-lg border hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <h4 className="text-2xl font-bold text-slate-800 mb-2">PWA Version</h4>
            <p className="text-slate-500 mb-6">Access from any browser</p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105"
            >
              Install PWA
            </Link>
          </div>

          {/* EXE Card */}
          <div className="p-10 bg-white rounded-2xl shadow-lg border hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <h4 className="text-2xl font-bold text-slate-800 mb-2">Windows EXE</h4>
            <p className="text-slate-500 mb-6">Desktop application</p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition-transform hover:scale-105"
            >
              Download EXE
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}