import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'SeVendor Solutions',
    url: 'https://sevendorsolutions.com/',
    bgLight: 'bg-gradient-to-br from-blue-50/60 to-indigo-50/60',
    bgDark: 'dark:bg-gradient-to-br dark:from-[#0b1329] dark:to-[#0f1b3d]',
    border: 'border-blue-200/50 dark:border-blue-900/30',
    hoverBg: 'hover:from-blue-100 hover:to-indigo-100 dark:hover:from-[#0f1c3f] dark:hover:to-[#172b5c]',
    hoverBorder: 'hover:border-brand-blue/30 dark:hover:border-brand-blue/30',
    hoverGlow: 'hover:shadow-lg hover:shadow-brand-blue/10 dark:hover:shadow-brand-blue/20',
  },
  {
    name: 'Vero Moda',
    url: 'https://www.veromoda.com/',
    bgLight: 'bg-gradient-to-br from-orange-50/60 to-amber-50/60',
    bgDark: 'dark:bg-gradient-to-br dark:from-[#24120a] dark:to-[#36170d]',
    border: 'border-orange-200/50 dark:border-orange-950/20',
    hoverBg: 'hover:from-orange-100 hover:to-amber-100 dark:hover:from-[#36170d] dark:hover:to-[#4e2213]',
    hoverBorder: 'hover:border-brand-orange/30 dark:hover:border-brand-orange/30',
    hoverGlow: 'hover:shadow-lg hover:shadow-brand-orange/10 dark:hover:shadow-brand-orange/20',
  },
] as const;

const ClientCard: React.FC<(typeof clients)[number]> = ({
  name,
  url,
  bgLight,
  bgDark,
  border,
  hoverBg,
  hoverBorder,
  hoverGlow,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex items-center justify-center w-40 h-18 sm:w-44 sm:h-20 rounded-2xl border ${border} ${bgLight} ${bgDark} ${hoverBg} ${hoverBorder} ${hoverGlow} hover:-translate-y-1 shadow-md transition-all duration-300`}
  >
    {/* Subtle top indicator glow bar */}
    <div className={`absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent ${name === 'SeVendor Solutions' ? 'via-brand-blue' : 'via-brand-orange'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    
    <div className="relative z-10 flex items-center justify-center px-4">
      {name === 'SeVendor Solutions' ? (
        <img 
          src="/logo.png" 
          alt="SeVendor Solutions Logo" 
          className="max-h-10 sm:max-h-12 w-auto object-contain dark:invert transition-transform duration-300 group-hover:scale-108"
          loading="lazy"
        />
      ) : (
        <span className="font-outfit font-extrabold tracking-[0.25em] text-sm sm:text-base uppercase text-slate-800 dark:text-white transition-all duration-300 group-hover:scale-108 group-hover:text-brand-orange">
          VERO MODA
        </span>
      )}
    </div>
  </a>
);

export const Clients: React.FC = () => {
  // Multiply the 2 client logos to fill the marquee width and loop seamlessly
  const marqueeItems = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <div id="clients" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      
      {/* Outer Single Large Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-3xl glass-card border border-light-border dark:border-dark-border shadow-xl relative overflow-hidden bg-white/60 dark:bg-dark-card/50"
      >
        {/* Soft background highlights */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-blue/5 dark:bg-brand-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-44 h-44 rounded-full bg-brand-orange/5 dark:bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 w-full">
          
          {/* Section Header (Top Center of Card) */}
          <div className="text-center space-y-1 sm:space-y-2 max-w-lg mx-auto">
            <div className="text-xs font-bold text-brand-blue dark:text-brand-orange uppercase tracking-widest">
              Our Clients
            </div>
            <h2 className="font-outfit font-extrabold text-xl sm:text-2xl md:text-3xl text-brand-navy dark:text-white leading-tight">
              Trusted by Leading Brands
            </h2>
          </div>

          {/* Marquee Ticker (Below Header) */}
          <div className="w-full overflow-hidden relative py-2">
            {/* Smooth edge fades for the scrolling track inside the card */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/90 dark:from-dark-card/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/90 dark:from-dark-card/90 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee-rtl motion-reduce:animate-none hover:[animation-play-state:paused]">
              {marqueeItems.map((client, index) => (
                <div key={`${client.name}-${index}`} className="px-3">
                  <ClientCard {...client} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Clients;
