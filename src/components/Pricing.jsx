import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { Link } from 'react-router-dom'; 
export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = {
    monthly: [
      { name: "Starter", price: "Free", bullets: ["Billing, Analytics", "1 store", "Community support"], highlight: false },
      { name: "Pro", price: "₹499", suffix: "/mo", bullets: ["Multi-store", "Advanced Analytics", "Priority support"], highlight: true },
      { name: "Enterprise", price: "Contact", bullets: ["Custom integrations", "SLA", "White-glove onboarding"], highlight: false },
    ],
    yearly: [
      { name: "Starter", price: "Free", bullets: ["Billing, Analytics", "1 store", "Community support"], highlight: false },
      { name: "Pro", price: "₹4990", suffix: "/yr", bullets: ["Multi-store", "Advanced Analytics", "Priority support", "2 Months Free"], highlight: true },
      { name: "Enterprise", price: "Contact", bullets: ["Custom integrations", "SLA", "Dedicated setup"], highlight: false },
    ],
  };

  const currentPlans = plans[billingCycle];

  return (
    <section id="pricing" className="py-16 bg-white">
      <Container>
        <SectionTitle>Pricing</SectionTitle>
        <div className="mt-8 flex justify-center items-center gap-4">
          <span className={`font-medium ${billingCycle === 'monthly' ? 'text-blue-600' : 'text-slate-500'}`}>Monthly</span>
          <div className="relative">
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 rounded-full bg-slate-200 flex items-center p-1 transition-colors"
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                className={`w-6 h-6 rounded-full bg-white shadow-md ${billingCycle === 'yearly' ? 'ml-6' : 'ml-0'}`}
              />
            </button>
          </div>
          <span className={`font-medium ${billingCycle === 'yearly' ? 'text-blue-600' : 'text-slate-500'}`}>
            Yearly <span className="text-emerald-500 font-semibold">(Save 17%)</span>
          </span>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {currentPlans.map((p, i) => (
            <motion.div
              key={p.name + billingCycle}
              initial={{ opacity: 0, y: 18, scale: 0.99 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.12 }}
              className={`relative p-6 rounded-2xl border bg-white ${p.highlight ? "border-blue-300 shadow-2xl shadow-blue-200/50" : "shadow"}`}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-blue-800">{p.name}</div>
                {p.highlight && <div className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">Popular</div>}
              </div>
              <div className="text-3xl font-bold mt-4 text-blue-700">{p.price}<span className="text-sm font-medium text-slate-500">{p.suffix}</span></div>
              <ul className="mt-4 space-y-2">
                {p.bullets.map((b, k) => (
                  <li key={k} className="flex items-center gap-3 text-blue-700">
                    <CheckCircle className="w-5 h-5 text-blue-500" /> {b}
                  </li>
                ))}
              </ul>
             <Link 
                to="/contact" 
                className={`mt-6 block w-full py-3 rounded-lg font-semibold text-center transition-transform hover:scale-105 ${
                    p.highlight 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-100 text-slate-700"
                }`}
                >
                Choose Plan
                </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}