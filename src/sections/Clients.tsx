import React, { useState } from 'react';
import { motion } from 'framer-motion';

const clientList = [
  {
    name: 'SeVendor Solutions',
    url: 'https://sevendorsolutions.com/',
    logo: '/logo.png',
  },
  {
    name: 'Vero Moda',
    url: 'https://www.veromoda.com/',
  },
  {
    name: 'JetBulk SMS',
    url: 'https://smd.jetbulksmsservice.com/',
  },
  {
    name: 'Infomerica Inc',
    url: 'https://infomericainc.com/Home',
  },
  {
    name: 'Chalapathi Institute of Tech',
    url: 'https://city.ac.in/',
  },
  {
    name: 'Hiru Visas',
    url: 'https://www.hiruvisas.in/',
  },
  {
    name: 'Prathima Hospitals',
    url: 'https://prathimahospitals.com/',
  },
  {
    name: 'RVM IMS',
    url: 'https://www.rvmims.org/',
  },
  {
    name: 'R-Software',
    url: 'https://r-software.in/',
  },
  {
    name: 'ScoreLabs Inc',
    url: 'https://scorelabsinc.com/',
  },
  {
    name: 'Online IT Guru',
    url: 'https://onlineitguru.com/',
  },
  {
    name: 'Lalithakala Music Academy',
    url: 'https://lalithakalamusicacademy.com/',
  },
  {
    name: 'Chalapathi Pharmacy',
    url: 'https://ccpy.ac.in/',
  },
  {
    name: 'Sathyam Interiors',
    url: 'https://sathyaminterior.com/',
  },
  {
    name: 'Sri Chaturya School',
    url: 'https://srichaturyaschool.com/',
  },
  {
    name: 'Gopals Famous Dosa',
    url: 'https://www.gopalsfamousdosa.com/',
  },
  {
    name: 'JK Future',
    url: 'https://jk-future-uat.vercel.app/',
  },
];

const getClientTheme = (index: number) => {
  const themes = [
    // 0: Blue/Indigo
    {
      bgLight: 'bg-gradient-to-br from-blue-50/60 to-indigo-50/60',
      bgDark: 'dark:bg-gradient-to-br dark:from-[#0b1329] dark:to-[#0f1b3d]',
      border: 'border-blue-200/50 dark:border-blue-900/30',
      hoverBg: 'hover:from-blue-100 hover:to-indigo-100 dark:hover:from-[#0f1c3f] dark:hover:to-[#172b5c]',
      hoverBorder: 'hover:border-brand-blue/30 dark:hover:border-brand-blue/30',
      hoverGlow: 'hover:shadow-lg hover:shadow-brand-blue/10 dark:hover:shadow-brand-blue/20',
      glowColor: 'via-brand-blue',
    },
    // 1: Orange/Amber
    {
      bgLight: 'bg-gradient-to-br from-orange-50/60 to-amber-50/60',
      bgDark: 'dark:bg-gradient-to-br dark:from-[#24120a] dark:to-[#36170d]',
      border: 'border-orange-200/50 dark:border-orange-950/20',
      hoverBg: 'hover:from-orange-100 hover:to-amber-100 dark:hover:from-[#36170d] dark:hover:to-[#4e2213]',
      hoverBorder: 'hover:border-brand-orange/30 dark:hover:border-brand-orange/30',
      hoverGlow: 'hover:shadow-lg hover:shadow-brand-orange/10 dark:hover:shadow-brand-orange/20',
      glowColor: 'via-brand-orange',
    },
    // 2: Cyan/Emerald
    {
      bgLight: 'bg-gradient-to-br from-cyan-50/60 to-emerald-50/60',
      bgDark: 'dark:bg-gradient-to-br dark:from-[#051c24] dark:to-[#082a36]',
      border: 'border-cyan-200/50 dark:border-cyan-900/30',
      hoverBg: 'hover:from-cyan-100 hover:to-emerald-100 dark:hover:from-[#082a36] dark:hover:to-[#0c3e4f]',
      hoverBorder: 'hover:border-cyan-400/30 dark:hover:border-cyan-400/30',
      hoverGlow: 'hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20',
      glowColor: 'via-cyan-400',
    },
    // 3: Purple/Fuchsia
    {
      bgLight: 'bg-gradient-to-br from-purple-50/60 to-fuchsia-50/60',
      bgDark: 'dark:bg-gradient-to-br dark:from-[#1b0a24] dark:to-[#2a0f39]',
      border: 'border-purple-200/50 dark:border-purple-900/30',
      hoverBg: 'hover:from-purple-100 hover:to-fuchsia-100 dark:hover:from-[#2a0f39] dark:hover:to-[#3f1657]',
      hoverBorder: 'hover:border-purple-400/30 dark:hover:border-purple-400/30',
      hoverGlow: 'hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20',
      glowColor: 'via-purple-400',
    },
    // 4: Rose/Red
    {
      bgLight: 'bg-gradient-to-br from-rose-50/60 to-rose-100/60',
      bgDark: 'dark:bg-gradient-to-br dark:from-[#240a13] dark:to-[#3a0f1d]',
      border: 'border-rose-200/50 dark:border-rose-900/30',
      hoverBg: 'hover:from-rose-100 hover:to-red-100 dark:hover:from-[#3a0f1d] dark:hover:to-[#55162a]',
      hoverBorder: 'hover:border-rose-400/30 dark:hover:border-rose-400/30',
      hoverGlow: 'hover:shadow-lg hover:shadow-rose-500/10 dark:hover:shadow-rose-500/20',
      glowColor: 'via-rose-400',
    },
  ];
  return themes[index % themes.length];
};

const ClientCard: React.FC<{
  name: string;
  url: string;
  logo?: string;
  bgLight: string;
  bgDark: string;
  border: string;
  hoverBg: string;
  hoverBorder: string;
  hoverGlow: string;
  glowColor: string;
}> = ({
  name,
  url,
  logo,
  bgLight,
  bgDark,
  border,
  hoverBg,
  hoverBorder,
  hoverGlow,
  glowColor,
}) => {
  const getDomain = (u: string) => {
    try {
      return new URL(u).hostname.replace('www.', '');
    } catch {
      return '';
    }
  };

  const domain = getDomain(url);
  
  // Set up the primary logo source.
  // 1. If a local logo is provided (like SeVendor's logo), use it.
  // 2. Otherwise use Clearbit.
  // 3. Fallback: Google Favicon API.
  const getInitialLogo = () => {
    if (logo) return logo;
    if (domain) return `https://logo.clearbit.com/${domain}`;
    return '';
  };

  const [imgSrc, setImgSrc] = useState(getInitialLogo());
  const [fallbackLevel, setFallbackLevel] = useState(0);

  const handleError = () => {
    if (fallbackLevel === 0 && domain) {
      // First fallback: Google Favicon API
      setImgSrc(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`);
      setFallbackLevel(1);
    } else if (fallbackLevel === 1) {
      // Second fallback: Show text if images fail
      setImgSrc('');
      setFallbackLevel(2);
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center w-28 h-14 sm:w-32 sm:h-16 rounded-xl border ${border} ${bgLight} ${bgDark} ${hoverBg} ${hoverBorder} ${hoverGlow} hover:-translate-y-0.5 shadow-sm transition-all duration-300`}
    >
      {/* Subtle top indicator glow bar */}
      <div className={`absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent ${glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative z-10 flex items-center justify-center px-3 w-full h-full">
        {imgSrc ? (
          <img 
            src={imgSrc} 
            alt={`${name} Logo`} 
            onError={handleError}
            className="max-h-7 sm:max-h-9 max-w-[80%] object-contain dark:invert transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <span className="font-outfit font-bold tracking-normal text-[10px] text-slate-700 dark:text-slate-200 transition-all duration-300 group-hover:scale-105 group-hover:text-brand-orange block w-full truncate text-center">
            {name}
          </span>
        )}
      </div>
    </a>
  );
};

export const Clients: React.FC = () => {
  const row1 = clientList.filter((_, i) => i % 2 === 0);
  const row2 = clientList.filter((_, i) => i % 2 !== 0);

  // Repeat items to allow smooth looping on all screen sizes
  const marquee1 = [...row1, ...row1, ...row1, ...row1];
  const marquee2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <div id="clients" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      
      {/* Outer Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-5 sm:p-6 rounded-2xl glass-card border border-light-border dark:border-dark-border shadow-lg relative overflow-hidden bg-white/60 dark:bg-dark-card/50"
      >
        {/* Soft background highlights */}
        <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-brand-blue/5 dark:bg-brand-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-brand-orange/5 dark:bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 w-full">
          
          {/* Section Header */}
          <div className="text-center space-y-1 max-w-lg mx-auto">
            <div className="text-[10px] sm:text-xs font-bold text-brand-blue dark:text-brand-orange uppercase tracking-widest">
              Our Clients
            </div>
            <h2 className="font-outfit font-extrabold text-lg sm:text-xl md:text-2xl text-brand-navy dark:text-white leading-tight">
              Trusted by Brands & Institutions
            </h2>
          </div>

          {/* Double Marquee Tickers */}
          <div className="w-full space-y-3.5 relative py-1">
            {/* Smooth edge fades for the scrolling tracks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/90 dark:from-dark-card/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/90 dark:from-dark-card/90 to-transparent z-10 pointer-events-none" />

            {/* Row 1 LTR */}
            <div className="w-full overflow-hidden">
              <div className="flex w-max animate-marquee-ltr motion-reduce:animate-none hover:[animation-play-state:paused] py-0.5">
                {marquee1.map((client, index) => {
                  const theme = getClientTheme(index);
                  return (
                    <div key={`${client.name}-r1-${index}`} className="px-2">
                      <ClientCard {...client} {...theme} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2 RTL */}
            <div className="w-full overflow-hidden">
              <div className="flex w-max animate-marquee-rtl motion-reduce:animate-none hover:[animation-play-state:paused] py-0.5">
                {marquee2.map((client, index) => {
                  const theme = getClientTheme(index + 1);
                  return (
                    <div key={`${client.name}-r2-${index}`} className="px-2">
                      <ClientCard {...client} {...theme} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Clients;
