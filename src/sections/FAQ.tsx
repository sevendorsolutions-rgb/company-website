import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What technologies do you specialize in?',
      a: 'We specialize in modern frontend stacks (React, TypeScript, Tailwind CSS), powerful enterprise backend environments (.NET, Node.js), robust relational database systems (SQL Server), and secure cloud deployment architectures (Azure, AWS, Docker).',
    },
    {
      q: 'How long does a typical software project take?',
      a: 'Small MVP applications usually take 4-8 weeks. Larger SaaS products, enterprise resource planning dashboards, and complex cloud integrations take 3-6 months. We design in agile sprints to deploy usable code segments continuously.',
    },
    {
      q: 'Do we own the source code of our project?',
      a: 'Yes, absolutely. Once payment milestones are completed, you retain 100% ownership of the repository, assets, and intellectual property. We configure the servers and hand over git keys cleanly.',
    },
    {
      q: 'How do you handle post-launch maintenance and support?',
      a: 'We provide dedicated support contracts (SLA-based), offering active monitoring, security patches, library upgrades, database optimization, and quick troubleshooting cycles to keep systems operational.',
    },
    {
      q: 'Can we change the size of our development squad on demand?',
      a: 'Yes. Our plans are highly agile. You can request to scale up from a single developer to a complete squad (PM, UI/UX, Devs, QA) or scale back as your product milestones change.',
    },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 80;
      const offset = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="faq" 
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#070a13] transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/12 w-64 h-64 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-72 h-72 rounded-full bg-brand-orange/10 dark:bg-brand-orange/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Left Column (Headers & CTA) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold text-brand-blue dark:text-brand-orange uppercase tracking-widest"
              >
                FAQ
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-outfit font-extrabold text-3xl sm:text-4xl text-brand-navy dark:text-white leading-tight"
              >
                Frequently Asked Questions
              </motion.h2>
              <div className="w-12 h-1 bg-brand-blue rounded-full" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base pt-2"
              >
                Get clear, quick answers about how we build products, scale developer teams, and transfer project keys.
              </motion.p>
            </div>

            {/* Premium CTA Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-3xl p-6 sm:p-8 border border-light-border dark:border-dark-border bg-white dark:bg-dark-card/50 shadow-lg group"
            >
              {/* Radial gradient background accent */}
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-brand-blue/10 dark:bg-brand-orange/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-orange/10 flex items-center justify-center text-brand-blue dark:text-brand-orange">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="font-outfit font-extrabold text-lg text-brand-navy dark:text-white">
                  Still have questions?
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Can't find the answer you are looking for? Reach out to our team for a direct, free consultation.
                </p>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-blue hover:bg-brand-blue/90 dark:bg-brand-orange dark:hover:bg-brand-orange/90 transition-all duration-300 shadow-md hover:shadow-lg shadow-brand-blue/20 dark:shadow-brand-orange/20 cursor-pointer text-center"
                >
                  Discuss with an Expert
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-brand-blue/30 dark:border-brand-orange/30 bg-white dark:bg-dark-card shadow-md shadow-brand-blue/5' 
                      : 'border-light-border dark:border-dark-border bg-white/60 dark:bg-dark-card/20 hover:border-brand-blue/20 dark:hover:border-brand-orange/20 hover:bg-white dark:hover:bg-dark-card/40 shadow-sm'
                  }`}
                >
                  {/* Left accent indicator bar when open */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue to-indigo-600 dark:from-brand-orange dark:to-orange-500 transition-all duration-300 ${
                    isOpen ? 'h-full' : 'h-0'
                  }`} />

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold font-outfit text-slate-800 dark:text-white text-sm sm:text-base cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5 pr-4">
                      {/* Interactive Badge Icon */}
                      <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ring-1 ring-white/10 ${
                        isOpen 
                          ? 'bg-gradient-to-br from-brand-blue to-indigo-600 dark:from-brand-orange dark:to-orange-500 text-white shadow-md' 
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700/60'
                      }`}>
                        <HelpCircle className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                      </div>
                      <span className={`transition-colors duration-250 ${isOpen ? 'text-brand-blue dark:text-brand-orange' : ''}`}>{faq.q}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`text-slate-400 dark:text-slate-500 shrink-0 ${isOpen ? 'text-brand-blue dark:text-brand-orange' : ''}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="p-5 pl-5 sm:pl-[3.25rem] pt-0 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-1">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
