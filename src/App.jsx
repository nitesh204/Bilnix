// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // <-- 1. Import the component

// Layout & Page Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <div className="font-sans text-blue-900 bg-white overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} /> 
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </BrowserRouter>
  );
}