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
    image: '/service_web_dev.png',
    icon: Globe,
    glow: 'group-hover:bg-brand-blue/10',
    border: 'group-hover:border-brand-blue/30',
    iconColor: 'text-brand-blue',
    numColor: 'text-brand-blue',
    gradient: 'from-brand-blue to-indigo-500',
    shadow: 'shadow-brand-blue/40',
    description: 'We create tailored websites with seamless functionality and stunning designs, ensuring a unique digital presence.',
    items: [
      { label: 'Front-End', detail: 'HTML, CSS, JavaScript UIs' },
      { label: 'Back-End', detail: 'Servers, databases & logic' },
      { label: 'Full-Stack', detail: 'End-to-end development' },
    ],
  },
  {
    num: '02',
    category: 'Product',
    title: 'Product Application Development',
    image: '/service_product_dev.png',
    icon: Cloud,
    glow: 'group-hover:bg-cyan-500/10',
    border: 'group-hover:border-cyan-500/30',
    iconColor: 'text-cyan-500',
    numColor: 'text-cyan-500',
    gradient: 'from-cyan-400 to-blue-600',
    shadow: 'shadow-cyan-500/40',
    description: 'We design and build robust software products and scalable SaaS applications optimized for rapid market entry and growth.',
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
    image: '/service_mobile_dev.png',
    icon: Smartphone,
    glow: 'group-hover:bg-indigo-500/10',
    border: 'group-hover:border-indigo-500/30',
    iconColor: 'text-indigo-500',
    numColor: 'text-indigo-500',
    gradient: 'from-indigo-500 to-purple-600',
    shadow: 'shadow-indigo-500/40',
    description: 'We build native iOS, Android, and cross-platform mobile apps that deliver exceptional performance and intuitive user experiences.',
    items: [
      { label: 'iOS', detail: 'Native iPhone & iPad apps' },
      { label: 'Android', detail: 'Native Android ecosystem' },
      { label: 'Cross-Platform', detail: 'React Native' },
      { label: 'ASO', detail: 'App store visibility' },
    ],
  },
  {
    num: '04',
    category: 'Marketing',
    title: 'Digital Marketing Services',
    image: '/service_digital_marketing.png',
    icon: TrendingUp,
    glow: 'group-hover:bg-brand-orange/10',
    border: 'group-hover:border-brand-orange/30',
    iconColor: 'text-brand-orange',
    numColor: 'text-brand-orange',
    gradient: 'from-brand-orange to-orange-600',
    shadow: 'shadow-brand-orange/40',
    description: 'We drive growth and visibility through optimized SEO campaigns, targeted paid ads, content strategy, and automated lead funnels.',
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
    image: '/service_graphic_design.png',
    icon: Palette,
    glow: 'group-hover:bg-fuchsia-500/10',
    border: 'group-hover:border-fuchsia-500/30',
    iconColor: 'text-fuchsia-500',
    numColor: 'text-fuchsia-500',
    gradient: 'from-fuchsia-500 to-pink-500',
    shadow: 'shadow-fuchsia-500/40',
    description: 'We craft stunning brand identity, digital layouts, UI/UX designs, motion graphics, and print collateral that stand out.',
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
    image: '/service_video_editing.png',
    icon: Video,
    glow: 'group-hover:bg-rose-500/10',
    border: 'group-hover:border-rose-500/30',
    iconColor: 'text-rose-500',
    numColor: 'text-rose-500',
    gradient: 'from-rose-500 to-red-500',
    shadow: 'shadow-rose-500/40',
    description: 'We produce engaging video ads, social content, corporate reels, and cinematic visual effects that capture attention.',
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
            className="relative w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[min(90dvh,800px)] overflow-y-auto bg-white dark:bg-dark-card rounded-t-3xl sm:rounded-3xl p-5 sm:p-8 pb-[max(1.25rem,env(safe-area-inset-bottom))] border border-light-border dark:border-dark-border shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-500 dark:text-slate-400 z-10"
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
                  className="font-outfit font-extrabold text-xl sm:text-3xl text-brand-navy dark:text-white leading-tight"
                >
                  {service.title}
                </h3>
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Our {service.title.toLowerCase()} are designed to provide maximum value and scalability. We utilize industry-leading technologies and best practices to ensure your business stays ahead of the curve, delivering secure, fast, and highly-optimized solutions.
              </p>

              <div>
                <h4 className="font-bold font-outfit text-brand-navy dark:text-white mb-3 sm:mb-4 text-sm sm:text-base border-b border-light-border dark:border-dark-border pb-2">
                  Key Capabilities & Offerings:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex flex-col text-sm p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/50 border border-light-border dark:border-dark-border shadow-sm">
                      <span className="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${service.numColor.replace('text-', 'bg-')}`} />
                        {item.label}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm pl-4">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-light-border dark:border-dark-border flex flex-col-reverse sm:flex-row justify-end gap-3">
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
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#070a13] transition-colors duration-300">
      {/* Background Mesh elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-orange/10 dark:bg-brand-orange/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-blue dark:text-brand-orange uppercase tracking-widest"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy dark:text-white"
          >
            Our Services
          </motion.h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-4" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 leading-relaxed text-base sm:text-lg mt-6"
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
              className={`px-6 py-2.5 rounded-full text-sm font-bold font-outfit transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/25'
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 border-light-border dark:border-dark-border hover:border-brand-blue/50 hover:text-brand-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.num}
                  variants={cardVariants}
                  onClick={() => setSelectedService(service)}
                  className="group relative rounded-3xl glass-card border border-light-border dark:border-dark-border shadow-md flex flex-col overflow-hidden cursor-pointer hover:shadow-xl hover:border-brand-blue/20 hover:-translate-y-1 transition-all duration-300 h-[480px]"
                >
                  {/* Glowing Hover Circle Indicator */}
                  <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-transparent transition-all duration-500 blur-2xl pointer-events-none ${service.glow}`} />

                  {/* Card Header Image (60% height) */}
                  <div className="relative w-full h-[60%] overflow-hidden rounded-t-3xl bg-slate-100 dark:bg-slate-800 shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                    
                    {/* Icon Badge on Overlay */}
                    <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg ${service.shadow} ring-1 ring-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" strokeWidth={2.5} />
                    </div>

                    {/* Number on Overlay */}
                    <span className="absolute top-4 right-6 text-sm font-bold font-outfit tracking-wider text-white bg-slate-950/40 backdrop-blur-md py-1 px-3 rounded-full border border-white/10">
                      {service.num}
                    </span>
                  </div>

                  {/* Content Container (40% height) */}
                  <div className="p-6 flex-grow flex flex-col justify-between h-[40%]">
                    <div>
                      <h3 className="font-outfit font-extrabold text-xl text-brand-navy dark:text-white mb-2.5 tracking-tight group-hover:text-brand-blue dark:group-hover:text-brand-orange transition-colors line-clamp-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-bold font-outfit text-brand-blue dark:text-brand-orange group-hover:gap-2.5 transition-all mt-4">
                      <span>Learn more</span>
                      <span className="text-[16px] font-bold">→</span>
                    </div>
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
