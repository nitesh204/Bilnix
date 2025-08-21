import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import image from '../assets/image.png';
import { Container } from './shared/Container';

export default function AboutStats() {
  return (
    <section id="about" className="bg-blue-50 py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-800">About Bilnix</h3>
            <p className="mt-4 text-blue-700 leading-relaxed">
              Bilnix is an all-in-one business management platform built to empower small and medium enterprises with smart billing and advanced analytics. We recognize the unique challenges of diverse industries and deliver tailored solutions that drive efficiency and growth. Our mission is to simplify business operations through innovation, so entrepreneurs can focus on what matters most — scaling their business.
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