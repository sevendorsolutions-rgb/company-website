import React from 'react';
import { Zap, Shield, Users, Clock, Rocket, HeartHandshake, Briefcase, Cpu, Calendar, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Agile Product Design',
      desc: 'We deliver functional prototypes rapidly, iterating closely based on user testing and real-world feedback to ensure pixel-perfect results.',
      gradient: 'from-brand-orange to-amber-500',
      shadow: 'shadow-brand-orange/30',
    },
    {
      icon: Shield,
      title: 'Robust Security Audited',
      desc: 'Enterprise-grade encryption and protocol testing baked into every system layer. Your data and applications stay protected at all times.',
      gradient: 'from-emerald-400 to-teal-500',
      shadow: 'shadow-emerald-500/30',
    },
    {
      icon: Users,
      title: 'Expert Dedicated Teams',
      desc: 'Access senior software engineers, solution architects, and professional designers who bring years of specialized experience to your project.',
      gradient: 'from-brand-blue to-indigo-500',
      shadow: 'shadow-brand-blue/30',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      desc: 'We follow strict milestone-based timelines with transparent progress tracking. Every sprint is planned, executed, and delivered on schedule.',
      gradient: 'from-cyan-400 to-blue-500',
      shadow: 'shadow-cyan-500/30',
    },
    {
      icon: Rocket,
      title: 'Scalable Architecture',
      desc: 'Our solutions are built to grow with your business. From microservices to cloud-native deployments, we architect for the future from day one.',
      gradient: 'from-rose-500 to-red-500',
      shadow: 'shadow-rose-500/30',
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Partnership',
      desc: "We don't just build and leave. Our ongoing support, maintenance, and optimization services ensure your product keeps performing at its best.",
      gradient: 'from-indigo-500 to-purple-500',
      shadow: 'shadow-indigo-500/30',
    },
  ];

  const stats = [
    {
      value: '60+',
      label: 'Team Members',
      icon: Users,
      gradient: 'from-brand-blue to-blue-600',
      shadow: 'shadow-brand-blue/20',
    },
    {
      value: '15',
      label: 'Dedicated Teams',
      icon: Briefcase,
      gradient: 'from-indigo-500 to-purple-600',
      shadow: 'shadow-indigo-500/20',
    },
    {
      value: '6+',
      label: 'Tech Domains',
      icon: Cpu,
      gradient: 'from-cyan-400 to-teal-500',
      shadow: 'shadow-cyan-500/20',
    },
    {
      value: '10+',
      label: 'Years Combined Exp',
      icon: Calendar,
      gradient: 'from-amber-400 to-brand-orange',
      shadow: 'shadow-brand-orange/20',
    },
    {
      value: '250+',
      label: 'Team Vision',
      icon: Target,
      gradient: 'from-rose-500 to-red-600',
      shadow: 'shadow-rose-500/20',
    },
    {
      value: '24/7',
      label: 'Support Ready',
      icon: Clock,
      gradient: 'from-emerald-400 to-teal-600',
      shadow: 'shadow-emerald-500/20',
    },
  ];

  return (
    <section 
      id="whyus" 
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#070a13] transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-orange/10 dark:bg-brand-orange/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-blue dark:text-brand-orange uppercase tracking-widest"
          >
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy dark:text-white"
          >
            Why Forward-Thinking Brands Choose SeVenDor Solutions
          </motion.h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-4" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 leading-relaxed text-base sm:text-lg mt-6"
          >
            We combine cutting-edge technology with proven methodologies to deliver exceptional digital products. Here's what sets us apart from the rest.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
              className="group p-8 rounded-3xl glass-card border border-light-border dark:border-dark-border relative overflow-hidden hover:shadow-xl hover:border-brand-blue/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Hover gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-orange/0 group-hover:from-brand-blue/[0.02] group-hover:to-brand-orange/[0.02] transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.gradient} text-white shadow-lg ${reason.shadow} ring-1 ring-white/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="font-outfit font-extrabold text-xl text-brand-navy dark:text-white mb-3 tracking-tight group-hover:text-brand-blue transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-12 border-t border-light-border dark:border-dark-border mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl glass-card border border-light-border/50 dark:border-dark-border/20 bg-white/40 dark:bg-dark-card/30 relative overflow-hidden group hover:-translate-y-1 hover:border-brand-blue/20 transition-all duration-300"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md ${stat.shadow}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="font-outfit font-extrabold text-2xl sm:text-3xl text-gradient-primary">
                {stat.value}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-bold mt-1 leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
