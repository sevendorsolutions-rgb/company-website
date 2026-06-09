import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Globe, Cloud, Smartphone, TrendingUp, Palette, Video, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const categories = ['All', 'Web', 'Product', 'Mobile', 'Marketing', 'Design', 'Video'];

const allServices = [
  {
    num: '01',
    category: 'Web',
    title: 'Website Development',
    icon: Globe,
    glow: 'group-hover:bg-violet-500/10',
    border: 'group-hover:border-violet-500/30',
    iconColor: 'text-violet-500',
    numColor: 'text-violet-500',
    gradient: 'from-violet-500 to-fuchsia-500',
    shadow: 'shadow-violet-500/40',
    items: [
      { label: 'Front-End', detail: 'HTML, CSS, JavaScript UIs' },
      { label: 'Back-End', detail: 'Servers, databases & logic' },
     // { label: 'CMS', detail: 'WordPress, Shopify, Webflow' },
      { label: 'Full-Stack', detail: 'End-to-end development' },
    ],
  },
  {
    num: '02',
    category: 'Product',
    title: 'Product Application Development',
    icon: Cloud,
    glow: 'group-hover:bg-cyan-500/10',
    border: 'group-hover:border-cyan-500/30',
    iconColor: 'text-cyan-500',
    numColor: 'text-cyan-500',
    gradient: 'from-cyan-400 to-blue-500',
    shadow: 'shadow-cyan-500/40',
    items: [
      { label: 'SaaS', detail: 'Web-delivered software platforms' },
      { label: 'MVP', detail: 'Test market viability fast' },
      { label: 'Enterprise', detail: 'ERPs, CRMs & internal tools' },
    ],
  },
  {
    num: '03',
    category: 'Mobile',
    title: 'Mobile Application Development',
    icon: Smartphone,
    glow: 'group-hover:bg-indigo-500/10',
    border: 'group-hover:border-indigo-500/30',
    iconColor: 'text-indigo-500',
    numColor: 'text-indigo-500',
    gradient: 'from-indigo-500 to-purple-500',
    shadow: 'shadow-indigo-500/40',
    items: [
      { label: 'iOS', detail: 'Native iPhone & iPad apps' },
      { label: 'Android', detail: 'Native Android ecosystem' },
      //{ label: 'Cross-Platform', detail: 'Flutter & React Native' },
      { label: 'Cross-Platform', detail: 'React Native' },
      { label: 'ASO', detail: 'App store visibility' },
    ],
  },
  {
    num: '04',
    category: 'Marketing',
    title: 'Digital Marketing Services',
    icon: TrendingUp,
    glow: 'group-hover:bg-amber-500/10',
    border: 'group-hover:border-amber-500/30',
    iconColor: 'text-amber-500',
    numColor: 'text-amber-500',
    gradient: 'from-amber-400 to-orange-500',
    shadow: 'shadow-amber-500/40',
    items: [
      { label: 'SEO', detail: 'Organic Google rankings' },
      { label: 'PPC', detail: 'Google, Bing & social ads' },
      { label: 'SMM', detail: 'Instagram, LinkedIn, TikTok' },
      { label: 'Content', detail: 'Blogs, newsletters & case studies' },
      { label: 'Email', detail: 'Automated nurture funnels' },
    ],
  },
  {
    num: '05',
    category: 'Design',
    title: 'Graphic Design Services',
    icon: Palette,
    glow: 'group-hover:bg-fuchsia-500/10',
    border: 'group-hover:border-fuchsia-500/30',
    iconColor: 'text-fuchsia-500',
    numColor: 'text-fuchsia-500',
    gradient: 'from-fuchsia-500 to-pink-500',
    shadow: 'shadow-fuchsia-500/40',
    items: [
      { label: 'Branding', detail: 'Logos, palettes & typography' },
      { label: 'Collateral', detail: 'Brochures, banners & decks' },
      { label: 'UI/UX Design', detail: 'Screen styling & interactions' },
      { label: 'Packaging', detail: 'Labels, boxes & merchandise' },
      { label: 'Motion', detail: 'Animated videos & GIFs' },
    ],
  },
  {
    num: '06',
    category: 'Video',
    title: 'Video Editing Services',
    icon: Video,
    glow: 'group-hover:bg-rose-500/10',
    border: 'group-hover:border-rose-500/30',
    iconColor: 'text-rose-500',
    numColor: 'text-rose-500',
    gradient: 'from-rose-500 to-red-500',
    shadow: 'shadow-rose-500/40',
    items: [
      { label: 'Ads', detail: 'Social, TV & web promos' },
      { label: 'Social Content', detail: 'Reels, Shorts & vlogs' },
      { label: 'Corporate', detail: 'Training & event videos' },
      { label: 'Post-Production', detail: 'Color, sound & mixing' },
      { label: 'VFX', detail: 'Green screen & cinematic FX' },
    ],
  },
];

type Service = (typeof allServices)[number];

const ServiceModal: React.FC<{
  service: Service;
  onClose: () => void;
}> = ({ service, onClose }) => {
  const IconComponent = service.icon;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <div className="fixed inset-0 overflow-y-auto overscroll-contain">
        <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[min(90dvh,800px)] overflow-y-auto bg-white dark:bg-zinc-900 rounded-t-3xl sm:rounded-3xl p-5 sm:p-8 pb-[max(1.25rem,env(safe-area-inset-bottom))] border border-slate-200 dark:border-white/10 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors text-slate-500 dark:text-zinc-400 z-10"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6 pr-10">
              <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-xl ${service.shadow} ring-1 ring-white/20 flex items-center justify-center shrink-0`}>
                <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
              </div>
              <div className="min-w-0">
                <span className={`text-xs font-bold uppercase tracking-wider ${service.numColor}`}>
                  {service.category} Services
                </span>
                <h3
                  id="service-modal-title"
                  className="font-outfit font-bold text-xl sm:text-3xl text-slate-800 dark:text-white leading-tight"
                >
                  {service.title}
                </h3>
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Our {service.title.toLowerCase()} are designed to provide maximum value and scalability. We utilize industry-leading technologies and best practices to ensure your business stays ahead of the curve, delivering secure, fast, and highly-optimized solutions.
              </p>

              <div>
                <h4 className="font-bold text-slate-800 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base border-b border-slate-200 dark:border-zinc-800 pb-2">
                  Key Capabilities & Offerings:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex flex-col text-sm p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50">
                      <span className="font-bold text-slate-800 dark:text-zinc-100 mb-1 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${service.numColor.replace('text-', 'bg-')}`} />
                        {item.label}
                      </span>
                      <span className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm pl-4">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-slate-200/50 dark:border-zinc-800/60 flex flex-col-reverse sm:flex-row justify-end gap-3">
                <button type="button" onClick={onClose} className="btn-secondary py-2.5 px-6 w-full sm:w-auto">
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    const element = document.getElementById('contact');
                    if (element) {
                      const navHeight = 80;
                      const offset = element.getBoundingClientRect().top + window.scrollY - navHeight;
                      window.scrollTo({ top: offset, behavior: 'smooth' });
                    }
                  }}
                  className="btn-primary py-2.5 px-6 text-center w-full sm:w-auto"
                >
                  Discuss Your Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filtered =
    activeCategory === 'All'
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-x-hidden bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
      {/* Background Mesh elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            End-to-end digital expertise spanning modern frontend frameworks like React, to robust backends using .NET Core, MVC, and Node.js. We tailor our technology stack entirely based on the client's unique requirements.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-500/25'
                  : 'bg-white dark:bg-zinc-800/60 text-slate-600 dark:text-zinc-300 border-slate-200 dark:border-zinc-700 hover:border-violet-400 dark:hover:border-cyan-500 hover:text-violet-600 dark:hover:text-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.num}
                  variants={cardVariants}
                  onClick={() => setSelectedService(service)}
                  className="group relative rounded-2xl glass-card p-6 border border-slate-200/50 dark:border-white/5 shadow-md flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Glowing Hover Circle Indicator */}
                  <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-transparent transition-all duration-500 blur-2xl pointer-events-none ${service.glow}`} />

                  <div>
                    {/* Icon + Number Row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg ${service.shadow} ring-1 ring-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:rotate-6" strokeWidth={2.5} />
                      </div>
                      <span className={`text-sm font-bold font-outfit tracking-wider ${service.numColor} opacity-80`}>
                        {service.num}
                      </span>
                    </div>

                    <h3 className="font-outfit font-bold text-lg text-slate-800 dark:text-white mb-4 tracking-tight group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Sub-items list */}
                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed flex items-baseline gap-1">
                          <span className="font-bold text-slate-700 dark:text-zinc-200 shrink-0">{item.label}</span>
                          <span className="text-slate-400 dark:text-zinc-500">—</span>
                          <span>{item.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-cyan-400 group-hover:gap-2.5 transition-all mt-4">
                    <span>Learn more</span>
                    <span className="text-[14px] font-bold">→</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            key={selectedService.num}
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
