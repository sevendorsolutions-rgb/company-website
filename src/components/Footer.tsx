import React from 'react';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href === '#' ? 'Home' : href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 10);
      } else if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative border-t border-light-border dark:border-dark-border bg-white dark:bg-[#070a13] pt-16 sm:pt-20 pb-10 transition-colors duration-300">
      {/* Decorative top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue via-indigo-500 to-brand-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Column 1: Logo, Brief description, Socials */}
          <div className="sm:col-span-2 lg:col-span-2 pr-0 lg:pr-12 space-y-6">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2 group inline-block">
              <img 
                src="/logo.png" 
                alt="SeVenDor Solutions" 
                className="h-16 w-auto object-contain dark:invert transition-transform duration-300 group-hover:scale-102" 
              />
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Engineering cutting-edge software, web applications, and intelligent cloud systems to scale modern businesses worldwide.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/sevendorsolutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange dark:hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm" 
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" strokeWidth={2} />
              </a>
              <a 
                href="https://www.facebook.com/people/Sevendor-Solutions/61590485493499/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue dark:hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm" 
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-outfit font-extrabold text-brand-navy dark:text-white mb-6 uppercase tracking-wider text-xs sm:text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#Home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Why Us', href: '#whyus' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className="text-slate-500 dark:text-slate-400 text-sm hover:text-brand-orange hover:pl-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-outfit font-extrabold text-brand-navy dark:text-white mb-6 uppercase tracking-wider text-xs sm:text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {['Website Development', 'Product Application', 'Mobile App Development', 'Digital Marketing', 'Graphic Design', 'Video Editing'].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    onClick={(e) => handleNavClick(e, '#services')} 
                    className="text-slate-500 dark:text-slate-400 text-sm hover:text-brand-blue hover:pl-1 transition-all duration-300 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Products & Direct Info */}
          <div>
            <h4 className="font-outfit font-extrabold text-brand-navy dark:text-white mb-6 uppercase tracking-wider text-xs sm:text-sm">
              Products
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="#products"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-brand-blue hover:pl-1 transition-all duration-300 flex items-center gap-1 group inline-block"
                >
                  HRMS
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-brand-orange hover:pl-1 transition-all duration-300 flex items-center gap-1 group inline-block"
                >
                  Net Banking
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-violet-500 hover:pl-1 transition-all duration-300 flex items-center gap-1 group inline-block"
                >
                  LMS
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-emerald-500 hover:pl-1 transition-all duration-300 flex items-center gap-1 group inline-block"
                >
                  CRM
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-pink-500 hover:pl-1 transition-all duration-300 flex items-center gap-1 group inline-block"
                >
                  E-Shop
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-cyan-500 hover:pl-1 transition-all duration-300 flex items-center gap-1 group inline-block"
                >
                  Intellect
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-purple-500 hover:pl-1 transition-all duration-300 flex items-center gap-1 group inline-block"
                >
                  CloudOps
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-rose-500 hover:pl-1 transition-all duration-300 flex items-center gap-1 group inline-block"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-teal-500 hover:pl-1 transition-all duration-300 flex items-center gap-1 group inline-block"
                >
                  AssetFlow
                </a>
              </li>
            </ul>
            
            {/* Quick Contacts */}
            <div className="space-y-2.5 pt-2 border-t border-light-border dark:border-dark-border">
              <a href="tel:+917995888660" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>+91 7995888660</span>
              </a>
              <a href="mailto:sevendorsolutions@gmail.com" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 hover:text-brand-orange transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                <span className="truncate">sevendorsolutions@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom area (Inspire by dizisolutions copyright styling) */}
        <div className="pt-8 border-t border-light-border dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-slate-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} SeVenDor Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-brand-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-brand-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
