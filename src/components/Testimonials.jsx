import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';

export default function Testimonials() {
  const testimonials = [
    { name: "Riya Sharma", text: "Bilnix's new blue UI and analytics are a gamechanger for our salon!", stars: 5 },
    { name: "Amit Patel", text: "Love the insights, support, and ease of use. We're true fans.", stars: 5 },
    { name: "Cafe Blue", text: "Instant reports and billing speed up my team's daily workflow.", stars: 4 },
  ];

  return (
    <section id="testimonials" className="bg-blue-50 py-16">
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