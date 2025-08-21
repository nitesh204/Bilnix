// src/pages/LandingPage.jsx

import React from 'react';
import Hero from '../components/Hero';
import AboutStats from '../components/AboutStats';
import HowItWorks from '../components/HowItWorks'; // <-- 1. CHANGE THIS IMPORT
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Pricing /> 
      <Testimonials />
      <Steps />
      <AboutStats />
    </>
  );
}