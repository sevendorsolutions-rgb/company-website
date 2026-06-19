import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      desc: 'Ideal for early-stage MVPs and small startups seeking custom development.',
      price: { monthly: 1499, annual: 1199 },
      features: [
        'Dedicated Frontend Developer',
        'Weekly Architecture Syncs',
        'Standard Support (24hr SLA)',
        'Vite + React Static Setup',
        'Full Source Code Ownership',
      ],
      popular: false,
      cta: 'Start Project',
    },
    {
      name: 'Professional',
      desc: 'Perfect for scaling SaaS products and companies seeking dedicated full-stack squads.',
      price: { monthly: 3499, annual: 2799 },
      features: [
        '2 Full-Stack Senior Developers',
        'UI/UX Design Resource Included',
        'Daily Standups & Slack Syncs',
        '99.9% Uptime SLA Setup',
        'Continuous Cloud CI/CD Pipelines',
        'Detailed Codebase Security Audits',
      ],
      popular: true,
      cta: 'Hire Squad',
    },
    {
      name: 'Enterprise',
      desc: 'Tailored for large platforms demanding continuous product engineering squads.',
      price: { monthly: 7999, annual: 6399 },
      features: [
        'Complete Product Squad (PM, Devs, QA)',
        'Custom Multi-Cloud Orchestration',
        'Dedicated 24/7/365 Emergency SLA',
        'Legacy Codebase Integrations',
        'Unlimited Monthly Deployments',
        'Architectural Health Reports',
      ],
      popular: false,
      cta: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-violet-500/10 dark:bg-violet-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Pricing & Models
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Transparent Dev-Squad Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            No hidden costs. Choose a dedicated development plan that fits your startup's phase.
          </motion.p>
        </div>

        {/* Monthly vs Annual Toggle */}
        <div className="flex justify-center items-center gap-3 mb-16">
          <span className={`text-sm font-semibold transition-colors ${billingPeriod === 'monthly' ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-zinc-500'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setBillingPeriod(prev => prev === 'monthly' ? 'annual' : 'monthly')}
            className="relative w-12 h-6.5 rounded-full bg-slate-300 dark:bg-zinc-800 p-1 flex items-center transition-colors"
            aria-label="Toggle Billing Period"
          >
            <motion.div
              layout
              className="w-4.5 h-4.5 rounded-full bg-violet-600 dark:bg-cyan-400 shadow-sm"
              animate={{ x: billingPeriod === 'monthly' ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-sm font-semibold transition-colors ${billingPeriod === 'annual' ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-zinc-500'}`}>
              Annual Billing
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className={`rounded-2xl glass-card flex flex-col justify-between overflow-hidden shadow-lg border p-6 transition-all duration-300 ${
                plan.popular
                  ? 'border-violet-500/50 dark:border-cyan-500/40 shadow-violet-500/5 md:scale-[1.03] z-10 relative'
                  : 'border-slate-200/50 dark:border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-violet-600 to-cyan-500 text-white font-bold text-[10px] tracking-wider uppercase px-4 py-1.5 rounded-bl-xl font-outfit shadow-sm">
                  Most Value
                </div>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="font-outfit font-extrabold text-xl text-slate-800 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {plan.desc}
                </p>

                {/* Pricing Area */}
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-slate-400 dark:text-zinc-500 font-medium text-xl">$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
                    {billingPeriod === 'monthly' ? plan.price.monthly.toLocaleString() : plan.price.annual.toLocaleString()}
                  </span>
                  <span className="text-slate-400 dark:text-zinc-500 text-xs font-semibold">/ month</span>
                </div>

                {/* Features checklist */}
                <div className="space-y-3.5 border-t border-slate-200/50 dark:border-zinc-850 pt-6 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <a
                href="#contact"
                className={`w-full text-center py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-lg shadow-violet-500/20'
                    : 'bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200/50 dark:border-zinc-800'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Small Notice */}
        <div className="mt-12 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 dark:text-zinc-500 font-medium">
          <Info className="w-3.5 h-3.5 text-violet-500" />
          <span>Need custom developer stack arrangements? We construct dedicated teams on demand.</span>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
