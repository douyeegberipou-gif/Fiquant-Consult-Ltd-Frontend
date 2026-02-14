import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <img
                src={companyInfo.logoUrl}
                alt={companyInfo.name}
                className="h-12 w-auto"
              />
              <span 
                className="text-white font-semibold tracking-widest"
                style={{ 
                  fontSize: '14px',
                  letterSpacing: '0.2em',
                  fontFamily: "'Inter', 'Segoe UI', sans-serif"
                }}
              >
                FIQUANT CONSULT
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-gold-400 transition-colors">
                <MapPin size={18} className="text-gold-400" />
                <span className="text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-gold-400 transition-colors">
                <Phone size={18} className="text-gold-400" />
                <span className="text-sm">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-gold-400 transition-colors">
                <Mail size={18} className="text-gold-400" />
                <span className="text-sm">{companyInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-6 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services#business" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Business Consulting</Link></li>
              <li><Link to="/services#tax" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Tax Advisory</Link></li>
              <li><Link to="/services#risk" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Risk Consulting</Link></li>
              <li><Link to="/services#process" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Process Optimisation</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/about#team" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Leadership</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-6 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/insights" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Insights</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Products</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for the latest insights and updates.</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gold-400 text-black font-semibold hover:bg-gold-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>© 2025 {companyInfo.name}. All rights reserved.</p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms of Use</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
