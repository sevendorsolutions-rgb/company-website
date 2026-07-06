import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Clients } from './Clients';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section 
      id="Home" 
      className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden bg-grid-pattern bg-radial-glow transition-colors duration-300 bg-slate-50 dark:bg-dark-bg"
    >
      {/* Code Background Image Overlay (Subtle code details inspired by dizisolutions.in - Hero only) */}
      <div className="absolute inset-0 bg-[url('/faded_code_bg.png')] bg-cover bg-center bg-no-repeat opacity-[0.03] dark:opacity-[0.02] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      {/* Background Orbs simulating brand glowing nebulas */}
      <div className="absolute top-1/4 left-1/12 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-brand-blue/12 dark:bg-brand-blue/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/12 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-brand-orange/12 dark:bg-brand-orange/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-grow flex items-center mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Redesigned Bold Typography & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6 md:space-y-8"
          >
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue dark:text-brand-orange text-xs font-bold tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              <span>Custom Software Development</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-outfit font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] text-brand-navy dark:text-white"
            >
              Building Smart <br />
              <span className="text-gradient-primary">
                Websites & Digital Presence
              </span> <br />
              for Modern Businesses
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 text-lg max-w-xl leading-relaxed"
            >
              We design and develop high-performing websites and custom web applications that help modern brands grow, engage audiences, and scale.
            </motion.p>

            {/* Redesigned Button Actions (Matching dizisolutions.in CTA focus) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </motion.div>

            {/* Quick trust metrics line */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-light-border dark:border-dark-border flex flex-wrap gap-x-8 gap-y-3 text-slate-500 dark:text-slate-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                <span>99.9% Uptime Guarantee</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Static Tech Artwork */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] aspect-square flex items-center justify-center select-none">
              {/* Background ambient glow behind the image */}
              <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-brand-blue/10 to-brand-orange/5 dark:from-brand-blue/20 dark:to-brand-orange/10 blur-3xl pointer-events-none" />

              {/* Static tech artwork card (No float or hover animations - Borderless flush fit) */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/5 dark:shadow-brand-blue/10">
                {/* Light Mode Tech Artwork */}
                <img 
                  src="/hero_tech_artwork_light.png" 
                  alt="SeVendor Solutions Software Engineering Platform" 
                  className="w-full h-full object-cover rounded-3xl select-none block dark:hidden"
                  loading="eager"
                />
                {/* Dark Mode Tech Artwork */}
                <img 
                  src="/hero_tech_artwork_dark.png" 
                  alt="SeVendor Solutions Software Engineering Platform" 
                  className="w-full h-full object-cover rounded-3xl select-none hidden dark:block"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Clients carousel strip */}
      <div className="w-full bg-light-bg dark:bg-dark-bg relative z-20 border-t border-light-border/30 dark:border-dark-border/10">
        <Clients />
      </div>
    </section>
  );
};

export default Hero;
