import React from 'react';
import { Target, Eye, Code, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-white dark:bg-[#070a13] transition-colors duration-300"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-brand-orange/10 dark:bg-brand-orange/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-blue dark:text-brand-orange uppercase tracking-widest"
          >
            About Our Company
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy dark:text-white"
          >
            Accelerating Digital Transformation
          </motion.h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-4" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 leading-relaxed text-base sm:text-lg mt-6"
          >
            We are expert engineers and creators crafting robust digital ecosystems. We combine architectural excellence with sleek design to deliver solutions that drive real business impact.
          </motion.p>
        </div>

        {/* Main Content: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Visual Metrics panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Success Card */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-brand-navy via-[#0f172a] to-[#070a13] text-white shadow-2xl border border-white/10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-brand-orange/20 blur-2xl group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-brand-blue/20 blur-xl" />
              
              <div className="relative z-10 space-y-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-brand-orange text-xs font-bold uppercase tracking-wider">
                  Performance Metric
                </span>
                
                <div>
                  <div className="text-6xl font-extrabold font-outfit tracking-tight flex items-baseline gap-1">
                    <span>95%</span>
                    <span className="text-2xl text-brand-orange">+</span>
                  </div>
                  <h3 className="text-xl font-bold font-outfit mt-2">Project Success Rate</h3>
                </div>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  We blend technical excellence with agile strategies to deliver target business outcomes.
                </p>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" /> Expert Team
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" /> SLA Compliant
                  </span>
                </div>
              </div>
            </div>

            {/* Back decorative stack card */}
            <div className="absolute inset-0 bg-brand-blue rounded-3xl -rotate-3 translate-x-2 translate-y-2 -z-10 opacity-20" />
            <div className="absolute inset-0 bg-brand-orange rounded-3xl rotate-2 -translate-x-2 -translate-y-2 -z-20 opacity-10" />
          </motion.div>

          {/* Right Column: Mission & Vision */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-brand-blue/30 dark:hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Side highlight accent */}
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-brand-blue" />
              {/* Soft backglow */}
              <div className="absolute -right-20 -top-20 w-44 h-44 rounded-full bg-brand-blue/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-start gap-5 relative z-10">
                <div className="p-3 rounded-2xl bg-brand-blue/10 text-brand-blue flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-md shadow-brand-blue/10">
                  <Target className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-outfit font-extrabold text-lg sm:text-xl text-brand-navy dark:text-white mb-1.5">Our Mission</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    To build high-performance, intelligent digital products that solve complex hurdles, empowering startups and enterprise teams to innovate and grow at scale.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-brand-orange/30 dark:hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Side highlight accent */}
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-brand-orange" />
              {/* Soft backglow */}
              <div className="absolute -right-20 -top-20 w-44 h-44 rounded-full bg-brand-orange/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-start gap-5 relative z-10">
                <div className="p-3 rounded-2xl bg-brand-orange/10 text-brand-orange flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-md shadow-brand-orange/10">
                  <Eye className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-outfit font-extrabold text-lg sm:text-xl text-brand-navy dark:text-white mb-1.5">Our Vision</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    To become the global cornerstone of software excellence, setting design and architectural benchmarks for the web, mobile, and cloud environments of tomorrow.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Professional Core Values Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Approach Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-slate-50/50 dark:bg-dark-card/20 border border-light-border dark:border-dark-border hover:border-brand-blue/30 dark:hover:border-brand-blue/30 hover:bg-white dark:hover:bg-dark-card hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 space-y-5 group relative overflow-hidden"
          >
            {/* Top tiny border indicator */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="p-3.5 rounded-2xl bg-brand-blue/10 text-brand-blue inline-flex shadow-sm group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
              <Code className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-outfit text-brand-navy dark:text-white group-hover:text-brand-blue transition-colors">Our Approach</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We blend agile methodology with technical expertise to deliver scalable solutions. We prioritize clean code and robust architecture.
            </p>
          </motion.div>

          {/* Core Values Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-slate-50/50 dark:bg-dark-card/20 border border-light-border dark:border-dark-border hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:bg-white dark:hover:bg-dark-card hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 space-y-5 group relative overflow-hidden"
          >
            {/* Top tiny border indicator */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-500 inline-flex shadow-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-outfit text-brand-navy dark:text-white group-hover:text-emerald-500 transition-colors">Core Values</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Transparency, excellence, and continuous innovation drive us. We prioritize open communication and exceed expectations.
            </p>
          </motion.div>

          {/* Commitment Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-slate-50/50 dark:bg-dark-card/20 border border-light-border dark:border-dark-border hover:border-brand-orange/30 dark:hover:border-brand-orange/30 hover:bg-white dark:hover:bg-dark-card hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 space-y-5 group relative overflow-hidden"
          >
            {/* Top tiny border indicator */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="p-3.5 rounded-2xl bg-brand-orange/10 text-brand-orange inline-flex shadow-sm group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-outfit text-brand-navy dark:text-white group-hover:text-brand-orange transition-colors">Commitment</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We build long-term partnerships, providing support and strategic guidance long after launch to ensure competitive success.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
