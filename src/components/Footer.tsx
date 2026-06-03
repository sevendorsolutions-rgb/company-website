import React from 'react';
import { Github, Linkedin, Twitter, Dribbble, Cpu } from 'lucide-react';

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
    <footer className="relative border-t border-slate-200/50 dark:border-white/5 bg-slate-50 dark:bg-zinc-950/40 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-16">
          {/* Logo & Info */}
          <div className="sm:col-span-2 lg:col-span-2 pr-0 lg:pr-12">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2 mb-4 sm:mb-6 group">
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30 transition-all ring-1 ring-white/20">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
              </div>
              <span className="font-outfit font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
                Synapse<span className="text-violet-500 dark:text-cyan-400">Digital</span>
              </span>
            </a>
            <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Engineering cutting-edge software, web applications, and intelligent cloud systems to scale modern businesses worldwide.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" onClick={(e) => handleNavClick(e, '#')} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white shadow-md shadow-sky-500/30 flex items-center justify-center ring-1 ring-white/20 hover:scale-110 transition-transform duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" strokeWidth={2.5} />
              </a>
              <a href="#" onClick={(e) => handleNavClick(e, '#')} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30 flex items-center justify-center ring-1 ring-white/20 hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" strokeWidth={2.5} />
              </a>
              <a href="#" onClick={(e) => handleNavClick(e, '#')} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-md shadow-slate-500/30 flex items-center justify-center ring-1 ring-white/20 hover:scale-110 transition-transform duration-300" aria-label="Github">
                <Github className="w-4 h-4" strokeWidth={2.5} />
              </a>
              <a href="#" onClick={(e) => handleNavClick(e, '#')} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/30 flex items-center justify-center ring-1 ring-white/20 hover:scale-110 transition-transform duration-300" aria-label="Dribbble">
                <Dribbble className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6 uppercase tracking-wider text-[11px] sm:text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: 'Home', href: '#Home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Why Us', href: '#whyus' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6 uppercase tracking-wider text-[11px] sm:text-xs">
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {['Website Development', 'Product Application', 'Mobile App Development', 'Digital Marketing', 'Graphic Design', 'Video Editing'].map((service) => (
                <li key={service}>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200/50 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-slate-400 dark:text-zinc-500 text-[10px] sm:text-xs">
            &copy; {new Date().getFullYear()} Synapse Digital. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300 text-[10px] sm:text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300 text-[10px] sm:text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
