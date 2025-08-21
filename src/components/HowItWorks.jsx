import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Download, BarChart3 } from 'lucide-react'; // <-- 1. IMPORT ICONS
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';

// 2. UPDATE THE DATA ARRAY WITH ICONS
const steps = [
  {
    icon: ClipboardCheck,
    title: "Select Your Business Type",
    description: "Choose from our industry-specific solutions tailored for your business needs and requirements."
  },
  {
    icon: Download,
    title: "Download PWA/EXE",
    description: "Get our lightweight application that works offline and syncs automatically when connected."
  },
  {
    icon: BarChart3,
    title: "Start Billing & View Analysis",
    description: "Begin managing your business with real-time analytics and insights from day one."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <Container>
        <SectionTitle>How It Works</SectionTitle>
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          Get up and running with Bilnix in three simple steps.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Dashed connector line for desktop view */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px">
            <svg width="100%" height="100%">
              <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="2" strokeDasharray="8, 8" className="stroke-slate-300" />
            </svg>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center p-4"
            >
              <div className="relative inline-block bg-white">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full grid place-items-center mb-5 border-4 border-white shadow-md">
                  {/* 3. RENDER THE ICON INSTEAD OF THE NUMBER */}
                  <step.icon className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}