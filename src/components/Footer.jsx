import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container } from './shared/Container';

export default function Footer() {
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
            <li><HashLink to="/#home" className="hover:text-white">Home</HashLink></li>
            <li><HashLink to="/#features" className="hover:text-white">Features</HashLink></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><HashLink to="/#pricing" className="hover:text-white">Pricing</HashLink></li>
            <li><HashLink to="/#contact" className="hover:text-white">Contact</HashLink></li>
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
        © {new Date().getFullYear()} Bilnix. All rights reserved.
      </div>
    </footer>
  );
}