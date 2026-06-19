import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#Home' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false); // Close mobile menu if open

      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        setTimeout(() => {
          const navHeight = isScrolled ? 72 : 110;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 10);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg'
          : 'bg-white/80 dark:bg-[#070a13]/80 backdrop-blur-md border-b border-light-border dark:border-dark-border'
      }`}
    >
      {/* Redesigned Premium Topbar (Inspired by dizisolutions.in header info bar) */}
      <div 
        className={`bg-brand-navy dark:bg-dark-card text-slate-300 dark:text-slate-300 border-b border-slate-800 dark:border-dark-border text-xs transition-all duration-300 overflow-hidden ${
          isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+917995888660" 
              className="flex items-center gap-1.5 text-slate-300 dark:text-slate-300 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>+91 7995888660</span>
            </a>
            <a 
              href="mailto:sevendorsolutions@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 text-slate-300 dark:text-slate-300 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              <span>sevendorsolutions@gmail.com</span>
            </a>
          </div>
          
          {/* Social Links & Theme */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/people/Sevendor-Solutions/61590485493499/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 dark:text-slate-300 hover:text-brand-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 text-brand-orange" />
              </a>
              <a 
                href="https://www.instagram.com/sevendorsolutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 dark:text-slate-300 hover:text-brand-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-brand-orange" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 transition-all duration-300">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#Home')} className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="SeVenDor Solutions" 
              className="h-16 md:h-20 w-auto object-contain dark:invert transition-transform duration-300 group-hover:scale-105" 
              loading="lazy" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-bold font-outfit text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-orange transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Panel */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')} 
              className="btn-primary py-2 px-5 text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-light-border dark:border-dark-border bg-white/95 dark:bg-dark-bg/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2.5 rounded-lg text-base font-bold font-outfit text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-blue dark:hover:text-brand-orange transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-light-border dark:border-dark-border flex flex-col gap-3">
                <a 
                  href="tel:+917995888660" 
                  className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400 py-1"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>+91 7995888660</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center btn-primary py-2.5"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
