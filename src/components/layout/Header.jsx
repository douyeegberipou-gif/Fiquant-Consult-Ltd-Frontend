import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, companyInfo } from '../../data/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={companyInfo.logoUrl}
              alt={companyInfo.name}
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span 
              className="text-white font-semibold tracking-widest transition-transform duration-300 group-hover:scale-105"
              style={{ 
                fontSize: '12px',
                letterSpacing: '0.15em',
                fontFamily: "'Inter', 'Segoe UI', sans-serif"
              }}
            >
              FIQUANT CONSULT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative group ${
                  location.pathname === link.path
                    ? 'text-gold-400'
                    : 'text-white hover:text-gold-400'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gold-400 transition-transform duration-200 origin-left ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gold-400 text-black font-semibold text-sm rounded hover:bg-gold-300 transition-all duration-300 shadow-lg hover:shadow-gold-400/25"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-gold-400 bg-gold-400/10'
                  : 'text-white hover:text-gold-400 hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-4 px-4 py-3 bg-gold-400 text-black font-semibold text-center rounded-lg"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
