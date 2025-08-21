import React from "react";
import { motion } from "framer-motion";
import { Scissors, Coffee, Smartphone, ShoppingCart, Shirt, Pill, CheckCircle, Download } from "lucide-react";
import { Container } from "../components/shared/Container.jsx";
import { SectionTitle } from "../components/shared/SectionTitle.jsx";

const servicesData = [
  { icon: Scissors, title: "Salon Billing & Analytics", description: "Complete salon management with appointment scheduling, staff performance tracking, and detailed analytics.", keyFeatures: ["Appointment Scheduling", "Staff Performance Analytics", "Inventory Tracking"] },
  { icon: Coffee, title: "Café & Restaurant Billing", description: "Streamline your food service with table management, order tracking, menu analytics, and sales reporting.", keyFeatures: ["Table Management", "Kitchen Display Sync", "Menu Analytics"] },
  { icon: Smartphone, title: "Mobile Shop POS & Reports", description: "Manage your store with inventory tracking, sales reports, customer management, and warranty tracking.", keyFeatures: ["Multi-brand Inventory", "Sales & Profit Reports", "Warranty Tracking"] },
  { icon: ShoppingCart, title: "Kirana Store Management", description: "Handle your grocery store with barcode scanning, inventory control, supplier management, and expiry tracking.", keyFeatures: ["Barcode Scanning", "Supplier Management", "GST Calculation"] },
  { icon: Shirt, title: "Boutique & Fashion Retail", description: "Control your fashion retail with size tracking, seasonal inventory analysis, and trend reporting.", keyFeatures: ["Size & Variant Management", "Seasonal Inventory", "Customer Preferences"] },
  { icon: Pill, title: "Medical Store & Pharmacy", description: "Pharmacy management with expiry tracking, prescription handling, and regulatory compliance.", keyFeatures: ["Prescription Management", "Expiry Date Alerts", "Drug Interaction Warnings"] },
];

function ServiceCard({ icon: Icon, title, description, keyFeatures }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
      whileHover={{ y: -10, scale: 1.03, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)" }}
      className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden flex flex-col h-full"
    >
      <div className="p-8 flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-blue-100 rounded-xl grid place-items-center flex-shrink-0"><Icon className="w-7 h-7 text-blue-600" /></div>
          <h3 className="text-xl font-bold text-blue-800">{title}</h3>
        </div>
        <p className="text-blue-700 leading-relaxed mb-6">{description}</p>
        <h4 className="font-semibold text-blue-800 mb-3">Key Features:</h4>
        <ul className="space-y-3 text-blue-700">
          {keyFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-blue-50/50 mt-auto flex items-center justify-around gap-4 border-t">
        <a href="/#pricing" className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition-colors">
          <Download className="w-5 h-5" /> Mobile PWA
        </a>
        <a href="/#pricing" className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition-colors">
          <Download className="w-5 h-5" /> Windows EXE
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  return (
    <section id="services" className="py-20 pt-28 bg-blue-50">
      <Container>
        <SectionTitle>Solutions Tailored for Your Business</SectionTitle>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-blue-700 max-w-3xl mx-auto text-center">
          Industry-specific billing and analytics solutions designed to meet your unique needs and drive growth.
        </motion.p>
        <motion.div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible" viewport={{ once: true, amount: 0.2 }}>
          {servicesData.map((service, i) => (<ServiceCard key={i} {...service} />))}
        </motion.div>
      </Container>
    </section>
  );
}