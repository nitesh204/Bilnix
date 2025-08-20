import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Zap, Sun, Gift, Star, CheckCircle, Scissors, Coffee,
  Smartphone, Menu, X, MessageCircle, ShoppingCart, Shirt, Pill, Download
} from "lucide-react";
import CountUp from "react-countup";
import ContactForm from "./contact";
import image from "./assets/image.png";


const themeGradient = "bg-gradient-to-br from-blue-600 via-blue-400 to-sky-400";

const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</div>
);

const SectionTitle = ({ children }) => (
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

const AnimatedButton = ({ children, className = "", ...rest }) => (
  <motion.button
    whileHover={{ scale: 1.08, boxShadow: "0 8px 24px #3b82f6aa" }}
    transition={{ type: "spring", stiffness: 400, damping: 12 }}
    className={className}
    {...rest}
  >
    {children}
  </motion.button>
);

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Features", href: "#features" },
    // UPDATE: Changed "Industries" to "Services" to match the new section
    { title: "Services", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -44, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-opacity-70 border-b border-slate-200 bg-white/60"
      >
        <Container className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-sky-400 grid place-items-center text-white font-black shadow-xl"
            >
              B
            </motion.div>
            <motion.div
              className="text-3xl font-extrabold tracking-tight 
               bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-600 
               bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient"
            >
              Bilnix
            </motion.div>


          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-blue-700 font-medium">
            {navLinks.map(link => (
              <motion.a
                key={link.title}
                href={link.href}
                className="relative"
                whileHover="hover"
                animate="rest"
              >
                <motion.span variants={{ rest: { color: '#334155' }, hover: { color: '#2563eb' } }}>
                  {link.title}
                </motion.span>
                <motion.div
                  className="absolute bottom-[-4px] left-0 h-0.5 bg-blue-600"
                  variants={{ rest: { width: 0 }, hover: { width: '100%' } }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>
          
          <AnimatedButton onClick={() => setMenuOpen(true)} className="md:hidden px-3 py-2 rounded-lg border bg-white shadow">
            <Menu className="w-5 h-5" />
          </AnimatedButton>
        </Container>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="p-6 flex items-center justify-between border-b">
              <div className="text-lg font-black text-blue-800">Menu</div>
              <button onClick={() => setMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-6 flex flex-col gap-6 text-lg font-medium">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                  {link.title}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const AnimatedBubbles = () => (
  <div className="absolute inset-0 pointer-events-none -z-10">
    <svg width="100%" height="100%" className="absolute">
      <circle cx="15%" cy="18%" r="90" fill="#2563eb" opacity="0.14" />
      <circle cx="92%" cy="74%" r="180" fill="#0ea5e9" opacity="0.17" />
      <circle cx="65%" cy="10%" r="80" fill="#38bdf8" opacity="0.13" />
      <circle cx="40%" cy="80%" r="100" fill="#3b82f6" opacity="0.10" />
    </svg>
  </div>
);

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-100 pt-24"
    >
      {/* Animated bubbles */}
      <AnimatedBubbles />

      {/* Radial glow with pulsing */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-transparent to-sky-200/40 blur-3xl"
      />

      <Container className="text-center py-28 min-h-[70vh] flex flex-col items-center justify-center relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
        >
          Modern Billing <br />
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent bg-[length:200%_200%]"
          >
            Analytics Done Right
          </motion.span>
        </motion.h1>

        {/* Sub-text inside glass box */}
       <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        whileHover={{ scale: 1.03 }}
        className="mt-3 text-lg text-blue-800 max-w-2xl mx-auto backdrop-blur-md bg-white/60 px-6 py-3 rounded-xl shadow-sm"
      >
        <motion.span
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          All-in-one platform for invoices, inventory, and analytics — ultra-fast,
          elegant & offline-ready.
        </motion.span>
      </motion.p>


        {/* Feature cards with stagger */}
<motion.div
  className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }}
>
  {[
    { title: "Smart Sync 2.0", subtitle: "Lightning sync, cloud backup", tag: "New", color: "blue" },
    { title: "Insightful Reports", subtitle: "Breakdown by store, item, staff", tag: "Exclusive", color: "sky" },
    { title: "POS Dashboard", subtitle: "Real-time stats at your fingertips", tag: "Pro", color: "indigo" },
  ].map((card, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <PosterCard {...card} />
    </motion.div>
  ))}
</motion.div>

      </Container>
    </motion.section>
  );
}

function PosterCard({ title, subtitle, tag, color = "blue" }) {
  const colorMap = {
    blue: { bg: "from-blue-500 to-blue-400", text: "text-white", glow: "shadow-[0_0_8px_#2563eb]" },       
    sky: { bg: "from-sky-400 to-sky-300", text: "text-white" , glow: "shadow-[0_0_8px_#2563eb]"},       
    indigo: { bg: "from-indigo-500 to-sky-400", text: "text-white", glow: "shadow-[0_0_8px_#2563eb]"}, // "Pro"
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.36, type: "spring" }}
      className="rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 bg-white/95 shadow relative"
    >
      <div className={`p-6 bg-gradient-to-br ${colorMap.bg} text-white`}>
        <div className="flex justify-between items-start">
          <div>
            <div
              className={`inline-block text-xs uppercase font-bold tracking-wide mb-1 px-2 py-0.5 rounded bg-white/30 ${colorMap.text}`}
              style={{ textShadow: colorMap.glow }}
            >
              {tag}
            </div>

            <div className="text-xl font-bold mt-2">{title}</div>
            <div className="mt-1 ml-4 text-sm opacity-90 font-light text-white">{subtitle}</div>
          </div>
          <motion.div
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl opacity-20"
          >
            🚀
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}


function FeaturesGrid() {
  const features = [
    { Icon: Zap, title: "Superfast & Offline", desc: "Billing that works even without internet, syncs automatically." },
    { Icon: Sun, title: "Advanced Analytics", desc: "Get sales, inventory, and staff insights at a glance." },
    { Icon: Gift, title: "Industry Templates", desc: "Pre-designed workflows for all business types." },
  ];

  return (
    <section id="features" className="bg-white py-20">
      <Container>
        <SectionTitle>Why Choose Bilnix?</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border bg-white shadow-lg group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-sky-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 rounded-xl bg-blue-100 grid place-items-center mb-4 relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <f.Icon className="w-8 h-8 text-blue-500" />
                </motion.div>
              </div>
              <h4 className="text-xl font-semibold mb-2 relative z-10">{f.title}</h4>
              <p className="text-blue-700 relative z-10">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ==============================================================================
// === NEW COMPONENT: ServicesSection (Replaces IndustriesSection) =============
// ==============================================================================

const servicesData = [
  {
    icon: Scissors,
    title: "Salon Billing & Analytics",
    description: "Complete salon management solution with appointment scheduling, staff performance tracking, inventory management, and detailed analytics.",
    keyFeatures: ["Appointment Scheduling & Management", "Staff Performance Analytics", "Inventory & Product Tracking"],
  },
  {
    icon: Coffee,
    title: "Café & Restaurant Billing",
    description: "Streamline your food service operations with table management, order tracking, menu analytics, and comprehensive sales reporting.",
    keyFeatures: ["Table Management & Reservations", "Order Tracking & Kitchen Display", "Menu Analytics & Popular Items"],
  },
  {
    icon: Smartphone,
    title: "Mobile Shop POS & Reports",
    description: "Complete mobile store management with inventory tracking, sales reports, customer management, and warranty tracking.",
    keyFeatures: ["Multi-brand Inventory Management", "Sales Analytics & Reports", "Warranty & Service Tracking"],
  },
  {
    icon: ShoppingCart,
    title: "Kirana Store Management",
    description: "Complete grocery store management with barcode scanning, inventory control, supplier management, and expiry tracking.",
    keyFeatures: ["Barcode Scanning & Inventory", "Supplier Management", "GST & Tax Calculation"],
  },
  {
    icon: Shirt,
    title: "Boutique & Fashion Retail",
    description: "Fashion retail management with size tracking, seasonal inventory analysis, customer preferences, and trend reporting.",
    keyFeatures: ["Size & Variant Management", "Seasonal Inventory Planning", "Customer Style Preferences"],
  },
  {
    icon: Pill,
    title: "Medical Store & Pharmacy",
    description: "Pharmacy management with expiry tracking, prescription handling, drug interaction alerts, and regulatory compliance.",
    keyFeatures: ["Prescription Management", "Expiry Date Alerts", "Drug Interaction Warnings"],
  },
];

function ServiceCard({ icon: Icon, title, description, keyFeatures }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring" } }
      }}
      whileHover={{ y: -10, scale: 1.03, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)" }}
      className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden flex flex-col h-full"
    >
      <div className="p-8 flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-blue-100 rounded-xl grid place-items-center flex-shrink-0">
            <Icon className="w-7 h-7 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-blue-800">{title}</h3>
        </div>
        <p className="text-blue-700 leading-relaxed mb-6">{description}</p>
        <h4 className="font-semibold text-blue-800 mb-3">Key Features:</h4>
        <ul className="space-y-3 text-blue-700">
          {keyFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-blue-50/50 mt-auto flex items-center justify-around gap-4 border-t">
          {/* UPDATED: Changed button to an anchor tag linking to #pricing */}
          <a href="#pricing" className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition-colors">
              <Download className="w-5 h-5" /> Mobile PWA
          </a>
          {/* UPDATED: Changed button to an anchor tag linking to #pricing */}
          <a href="#pricing" className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition-colors">
              <Download className="w-5 h-5" /> Windows EXE
          </a>
      </div>
    </motion.div>
  );
}
function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <section id="services" className="py-20 bg-blue-50">
      <Container>
        <SectionTitle>Solutions Tailored for Your Business</SectionTitle>
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-blue-700 max-w-3xl mx-auto text-center"
        >
            Industry-specific billing and analytics solutions designed to meet your unique needs and drive growth.
        </motion.p>

        <motion.div
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function Steps() {
  const steps = [
    { title: "Select Your Business Type", desc: "Salon, cafe, or mobile shop preset — ready in minutes." },
    { title: "Powered by AI Analytics", desc: "Out-of-the-box machine learning for business forecasting." },
    { title: "One-click Onboarding", desc: "Easy migration and setup, with live chat help." },
  ];

  return (
<section className="py-16 bg-white">
  <Container>
    {/* Platform Selection */}
    <div className="mt-20 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
        Choose your preferred platform and start managing your business efficiently
      </h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* PWA */}
        <div className="p-8 bg-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h4 className="text-xl font-semibold text-blue-700 mb-2">PWA Version</h4>
          <p className="text-blue-600 mb-4">Access from any browser</p>
          <a
            href="#pricing" // UPDATED: Changed href to redirect to pricing
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Install PWA
          </a>
        </div>
        {/* EXE */}
        <div className="p-8 bg-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h4 className="text-xl font-semibold text-blue-700 mb-2">Windows EXE</h4>
          <p className="text-blue-600 mb-4">Desktop application</p>
          <a
            href="#pricing" // UPDATED: Changed href to redirect to pricing
            // REMOVED: the "download" attribute
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Download EXE
          </a>
        </div>
      </div>
    </div>
  </Container>
</section>

  );
}

function Testimonials() {
  const testimonials = [
    { name: "Riya Sharma", text: "Bilnix's new blue UI and analytics are a gamechanger for us!", stars: 5 },
    { name: "Amit Patel", text: "Love the insights, support, and ease of use. We're true fans.", stars: 5 },
    { name: "Cafe Blue", text: "Instant reports and billing speed up my team's daily workflow.", stars: 4 },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <Container>
        <SectionTitle>Our Customers Love Us</SectionTitle>
        <div className="mt-8">
          <motion.div
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
            className="flex gap-6 cursor-grab"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-80 p-6 rounded-xl border shadow bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 grid place-items-center text-lg">👤</div>
                  <div>
                    <div className="font-medium text-blue-800">{t.name}</div>
                    <div className="text-sm text-blue-400">Customer</div>
                  </div>
                </div>
                <p className="text-blue-800">{t.text}</p>
                <div className="mt-4 flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: t.stars }).map((_, k) => (
                    <Star key={k} className="w-4 h-4" fill="#facc15" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
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
              {p.highlight && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 border-2 border-blue-500 rounded-2xl pointer-events-none"
                  style={{ filter: 'blur(10px)' }}
                />
              )}

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
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`mt-6 w-full py-3 rounded-lg font-semibold transition-transform hover:scale-105 cursor-pointer ${
                  p.highlight ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                Choose Plan
              </button>

            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AboutStats() {
  return (
    <section className="bg-blue-50 py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-800">About Bilnix</h3>
            <p className="mt-4 text-blue-700 leading-relaxed">
              Bilnix is an all-in-one business management platform built to empower small and medium enterprises with smart billing and advanced analytics. We recognize the unique challenges of diverse industries and deliver tailored solutions that drive efficiency and growth.
              Our mission is to simplify business operations through innovation, so entrepreneurs can focus on what matters most — scaling their business. With Bilnix, you gain more than billing software — you unlock a complete business intelligence platform.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-2xl font-extrabold text-blue-700">
                  <CountUp end={500} duration={3} enableScrollSpy />+
                </h4>
                <p className="text-sm text-blue-600">Happy Businesses</p>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-blue-700">
                  <CountUp end={15} duration={3} enableScrollSpy />+
                </h4>
                <p className="text-sm text-blue-600">Industries Served</p>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-blue-700">
                  <CountUp end={99.9} duration={3} decimals={1} enableScrollSpy />%
                </h4>
                <p className="text-sm text-blue-600">Uptime</p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.64 }}
            className="flex justify-center"
          >
            <img
              src={image}
              alt="About Bilnix"
              className="h-64 w-full object-cover rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section id="get-started" className="py-20 bg-white">
    </section>
  );
}


function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-200">
      <Container className="py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-bold text-lg mb-3">Bilnix</div>
          <div className="text-sm">
            Empowering businesses with intelligent billing & analytics solutions.
          </div>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Contact Info</div>
          <div className="text-sm">
            bilnix@gmail.com<br />
            +91 9322880059<br />
            +91 9022035808<br />
            Nagpur, Maharashtra
          </div>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-blue-800 text-center text-sm py-4 text-blue-400">
        © {new Date().getFullYear()} bilnix. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingWhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // IMPORTANT: Replace this with your actual WhatsApp number
  const phoneNumber = "919322880059"; // Using one of your numbers from the footer
  const message = "Hello! I'm interested in Bilnix and would like to know more.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { type: "spring", stiffness: 260, damping: 20, delay: 1.5 }
      }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-40 flex items-center h-16 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full shadow-2xl shadow-green-500/30 cursor-pointer"
    >
      {/* Continuous Pulse Effect */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.4)",
            "0 0 0 15px rgba(34, 197, 94, 0)",
            "0 0 0 0 rgba(34, 197, 94, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className="absolute inset-0 rounded-full"
      />

      {/* Icon Container */}
      <div className="grid place-items-center w-16 h-16">
        <MessageCircle className="w-8 h-8" />
      </div>
      
      {/* Text Label that appears on hover */}
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


export default function App() {
  return (
    <div className="font-sans text-blue-900 bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutStats />
        <FeaturesGrid />
        {/* UPDATE: Replaced the old IndustriesSection with the new, complete ServicesSection */}
        <ServicesSection />
        <Steps />
        <Testimonials />
        <Pricing />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}