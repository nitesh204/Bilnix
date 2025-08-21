import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ChevronDown, Headset, Wrench, GraduationCap, Shield, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Container } from '../components/shared/Container';

// Accordion Item for the FAQ section (no changes needed here)
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div layout className="border-b border-slate-200 py-4">
      <motion.button layout className="w-full flex justify-between items-center text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-semibold text-slate-800">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown className="w-5 h-5 text-slate-500" /></motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="text-slate-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ContactPage() {
    // --- DATA ARRAYS ---
    const contactInfo = [
        { icon: Mail, label: "Email", value: "bilnixdotin@gmail.com", href: "mailto:bilnixdotin@gmail.com" },
        { icon: Phone, label: "Phone", value: "+91 9322880059", href: "tel:+919322880059" },
        { icon: MapPin, label: "Address", value: "Nagpur, Maharashtra, India", href: "#" },
        { icon: Clock, label: "Business Hours", value: "Mon-Sat: 9AM - 6PM", href: "#" }
    ];
    
    const supportServices = [
        { icon: Headset, label: "24/7 Technical Support" }, { icon: Wrench, label: "Custom Development" },
        { icon: GraduationCap, label: "Training" }, { icon: Shield, label: "Data Security" },
    ];

    const socials = [
        { icon: Linkedin, href: "#", color: "bg-[#0077b5]" }, { icon: Twitter, href: "#", color: "bg-[#1DA1F2]" },
        { icon: Facebook, href: "#", color: "bg-[#4267B2]" }, { icon: Instagram, href: "#", color: "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500" },
    ];

    const faqData = [
      { question: "What is the pricing for custom software?", answer: "Custom software development starts from ₹2899. The final price depends on your specific requirements, features, and complexity. Contact us for a detailed quote." },
      { question: "How long does implementation take?", answer: "Standard software implementation takes 1-2 days. Custom software development typically takes 2-4 weeks depending on complexity." },
      { question: "Do you provide training?", answer: "Yes, we provide comprehensive training for all our software solutions. This includes initial setup, user training, and ongoing support." },
      { question: "Is there technical support available?", answer: "We offer 24/7 technical support for all our clients. You can reach us via phone, email, or through our support portal." },
    ];

    // --- ANIMATION VARIANTS ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

  return (
    <div className="relative bg-slate-50 overflow-hidden">
        {/* Aurora Background Effect */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

      {/* Page Header */}
      <header className="pt-32 pb-16 bg-white/50 backdrop-blur-sm text-center">
        <Container>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-extrabold text-blue-800">
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss your requirements and find the perfect solution.
          </motion.p>
        </Container>
      </header>

      {/* Form and Info Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-slate-200">
            {/* Left: Form */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Send us a Message</h3>
              <form className="space-y-4">
                <motion.div variants={itemVariants}><input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 bg-slate-100 rounded-lg border focus:ring-2 focus:ring-blue-500" /></motion.div>
                <motion.div variants={itemVariants}><input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 bg-slate-100 rounded-lg border focus:ring-2 focus:ring-blue-500" /></motion.div>
                <motion.div variants={itemVariants}><input type="text" placeholder="Phone Number" className="w-full px-4 py-3 bg-slate-100 rounded-lg border focus:ring-2 focus:ring-blue-500" /></motion.div>
                <motion.div variants={itemVariants}>
                  <select className="w-full px-4 py-3 bg-slate-100 rounded-lg border focus:ring-2 focus:ring-blue-500">
                    <option>Select your business type</option>
                    <option>Salon & Beauty</option><option>Café & Restaurant</option><option>Mobile Shop</option><option>Other</option>
                  </select>
                </motion.div>
                <motion.div variants={itemVariants}><textarea rows={4} placeholder="Message *" required className="w-full px-4 py-3 bg-slate-100 rounded-lg border focus:ring-2 focus:ring-blue-500" /></motion.div>
                <motion.div variants={itemVariants}>
                  <button type="submit" className="w-full bg-blue-600 text-white font-semibold rounded-lg py-3 hover:bg-blue-700 transition">Send Message</button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right: Info Panel */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
                <motion.div variants={itemVariants}>
                    <h4 className="text-xl font-bold mb-4 text-slate-800">Contact Information</h4>
                    <div className="space-y-4">
                        {contactInfo.map((info) => (
                            <motion.a key={info.label} href={info.href} whileHover={{ scale: 1.03, x: 4 }} className="flex items-start gap-4 group">
                                <info.icon className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
                                <div>
                                    <div className="font-semibold text-slate-700">{info.label}</div>
                                    <div className="text-sm text-slate-500 group-hover:text-blue-600 transition-colors">{info.value}</div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <h4 className="font-bold mb-3 text-slate-800">Support & Services</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {supportServices.map((s) => ( <div key={s.label} className="flex items-center gap-2"><s.icon className="text-blue-600 w-5 h-5" /><span className="text-sm text-slate-600">{s.label}</span></div> ))}
                    </div>
                </motion.div>
                {/* --- FOLLOW US SECTION ADDED HERE --- */}
                <motion.div variants={itemVariants}>
                    <h4 className="font-bold mb-4 text-slate-800">Follow Us</h4>
                    <div className="flex gap-3">
                        {socials.map((social) => (
                        <motion.a key={social.color} href={social.href} whileHover={{ scale: 1.1, y: -4 }} className={`w-10 h-10 grid place-items-center rounded-full text-white ${social.color} shadow-lg`}>
                            <social.icon className="w-5 h-5" />
                        </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="pb-24 pt-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqData.map((faq, i) => ( <FAQItem key={i} question={faq.question} answer={faq.answer} /> ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}