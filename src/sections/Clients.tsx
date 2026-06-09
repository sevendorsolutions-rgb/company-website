import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'SeVendor Solutions',
    url: 'https://sevendorsolutions.com/',
    description: 'Smart digital solutions for modern businesses',
    accent: 'from-violet-500 to-fuchsia-500',
    glow: 'shadow-violet-500/25',
    border: 'border-violet-500/40 dark:border-violet-400/30',
  },
  {
    name: 'Vero Moda',
    url: 'https://www.veromoda.com/',
    description: 'Global fashion brand & e-commerce experience',
    accent: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500/25',
    border: 'border-cyan-500/40 dark:border-cyan-400/30',
  },
] as const;

const ClientCard: React.FC<(typeof clients)[number] & { compact?: boolean }> = ({
  name,
  url,
  description,
  accent,
  glow,
  border,
  compact = false,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex shrink-0 items-center gap-3 sm:gap-4 ${
      compact
        ? 'px-4 py-3 rounded-xl w-full'
        : 'px-6 py-4 sm:px-8 sm:py-5 rounded-2xl min-w-[300px] sm:min-w-[320px]'
    } glass-card border-2 ${border} bg-white/90 dark:bg-zinc-900/80 shadow-lg ${glow} hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300`}
  >
    <div
      className={`absolute inset-0 ${compact ? 'rounded-xl' : 'rounded-2xl'} bg-gradient-to-r ${accent} opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none`}
    />
    <div
      className={`relative shrink-0 ${
        compact ? 'w-10 h-10 rounded-lg text-base' : 'w-12 h-12 sm:w-14 sm:h-14 rounded-xl text-lg sm:text-xl'
      } bg-gradient-to-br ${accent} text-white shadow-lg ${glow} ring-1 ring-white/25 flex items-center justify-center font-outfit font-bold`}
    >
      {name.charAt(0)}
    </div>
    <div className="relative flex-1 min-w-0 text-left">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <h3
          className={`font-outfit font-bold ${
            compact ? 'text-sm' : 'text-base sm:text-lg'
          } bg-gradient-to-r ${accent} bg-clip-text text-transparent truncate`}
        >
          {name}
        </h3>
        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-violet-500 dark:group-hover:text-cyan-400 shrink-0 transition-colors" />
      </div>
      <p className={`${compact ? 'text-[11px]' : 'text-xs sm:text-sm'} text-slate-500 dark:text-zinc-400 mt-0.5 line-clamp-1`}>
        {description}
      </p>
      <span
        className={`inline-block mt-1.5 sm:mt-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r ${accent} text-white`}
      >
        Featured Client
      </span>
    </div>
  </a>
);

export const Clients: React.FC = () => {
  // More duplications for a seamless marquee loop
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <div id="clients" className="py-6 sm:py-10 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-4 sm:mb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-xs sm:text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest mb-2 sm:mb-3">
            Our Clients
          </div>
          <h2 className="font-outfit font-bold text-xl sm:text-2xl md:text-3xl text-slate-900 dark:text-white">
            Trusted by Leading Brands
          </h2>
        </motion.div>
      </div>

      {/* Mobile: Vertical stacked cards */}
      <div className="block sm:hidden px-4 relative z-10">
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <ClientCard {...client} compact />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: Left-to-right marquee */}
      <div className="relative w-full overflow-hidden hidden sm:block">
        {/* Smooth edge fades matching Hero background */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-ltr motion-reduce:animate-none hover:[animation-play-state:paused]">
          {marqueeItems.map((client, index) => (
            <div key={`${client.name}-${index}`} className="px-3 sm:px-4">
              <ClientCard {...client} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
