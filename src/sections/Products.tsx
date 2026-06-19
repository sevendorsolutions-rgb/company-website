import { motion, type Variants } from 'framer-motion';
import { Users, Building2, ArrowUpRight, Shield, CreditCard, BarChart3, Clock, Lock, Layers, CheckCircle } from 'lucide-react';

const products = [
  {
    id: 'hrms',
    badge: 'Human Resources',
    title: 'HRMS',
    subtitle: 'HR Management System',
    description:
      'A comprehensive cloud-based HR platform built to streamline workforce management — from onboarding to payroll, all in one unified dashboard.',
    link: 'https://hrms-product.vercel.app/login',
    icon: Users,
    gradient: 'from-brand-blue to-indigo-600',
    shadow: 'shadow-brand-blue/30',
    glow: 'bg-brand-blue/10',
    borderHover: 'hover:border-brand-blue/30',
    badgeColor: 'text-brand-blue dark:text-blue-400',
    badgeBg: 'bg-brand-blue/5 border border-brand-blue/10 dark:border-brand-blue/20',
    btnGradient: 'from-brand-blue to-indigo-600',
    btnShadow: 'shadow-brand-blue/20',
    features: [
      { icon: Users, label: 'Employee Profiles', detail: 'Centralized staff directory & records' },
      { icon: Clock, label: 'Attendance Tracking', detail: 'Real-time in/out monitoring' },
      { icon: BarChart3, label: 'Payroll Management', detail: 'Automated salary & tax computation' },
      { icon: Layers, label: 'Leave System', detail: 'Smart leave approvals & calendar' },
      { icon: CheckCircle, label: 'Performance Analytics', detail: 'KPI tracking & reviews' },
    ],
  },
  {
    id: 'netbanking',
    badge: 'Financial Technology',
    title: 'Net Banking',
    subtitle: 'Core Banking System',
    description:
      'A secure, feature-rich core banking platform engineered for modern financial institutions — enabling seamless digital banking experiences at scale.',
    link: 'https://core-banking-seven.vercel.app/login',
    icon: Building2,
    gradient: 'from-brand-orange to-red-600',
    shadow: 'shadow-brand-orange/30',
    glow: 'bg-brand-orange/10',
    borderHover: 'hover:border-brand-orange/30',
    badgeColor: 'text-brand-orange dark:text-brand-orange',
    badgeBg: 'bg-brand-orange/5 border border-brand-orange/10 dark:border-brand-orange/20',
    btnGradient: 'from-brand-orange to-red-600',
    btnShadow: 'shadow-brand-orange/20',
    features: [
      { icon: Shield, label: 'Secure Dashboard', detail: 'Encrypted data & role-based access' },
      { icon: CreditCard, label: 'Instant Transfers', detail: 'Real-time NEFT, IMPS & RTGS' },
      { icon: BarChart3, label: 'Account Analytics', detail: 'Spending insights & reports' },
      { icon: Lock, label: 'Multi-Factor Auth', detail: 'OTP, biometric & token security' },
      { icon: Layers, label: 'Transaction History', detail: 'Full audit trail & exports' },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring' as const,
      stiffness: 80,
      damping: 14,
    },
  }),
};

export const Products: React.FC = () => {
  return (
    <section
      id="products"
      className="py-24 relative overflow-hidden bg-white dark:bg-[#070a13] transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-orange/10 dark:bg-brand-orange/15 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-blue dark:text-brand-orange uppercase tracking-widest"
          >
            Built by SeVenDor
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy dark:text-white"
          >
            Our <span className="text-gradient-primary">Products</span>
          </motion.h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-4" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 leading-relaxed text-base sm:text-lg mt-6"
          >
            Explore our flagship software platforms — purpose-built to transform how businesses manage their people and finances.
          </motion.p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, i) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative rounded-3xl glass-card border border-light-border dark:border-dark-border p-8 overflow-hidden transition-all duration-500 ${product.borderHover} hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Background glow on hover */}
                <div
                  className={`absolute -top-20 -right-20 w-60 h-60 rounded-full ${product.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />
                {/* Top gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`}
                />

                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} text-white shadow-xl ${product.shadow} ring-1 ring-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <div>
                      <span
                        className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${product.badgeBg} ${product.badgeColor} mb-1.5`}
                      >
                        {product.badge}
                      </span>
                      <h3 className="font-outfit font-extrabold text-2xl text-brand-navy dark:text-white leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-7">
                  {product.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, fi) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <li key={fi} className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.gradient} text-white flex items-center justify-center shrink-0 opacity-80`}
                        >
                          <FeatureIcon className="w-4 h-4" strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 flex-1">
                          <span className="text-sm font-bold text-slate-800 dark:text-slate-200 shrink-0">
                            {feature.label}
                          </span>
                          <span className="text-slate-400 dark:text-slate-500 text-xs hidden sm:inline">—</span>
                          <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-snug">
                            {feature.detail}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`launch-${product.id}`}
                  className={`group/btn inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r ${product.btnGradient} text-white font-bold font-outfit text-sm shadow-lg ${product.btnShadow} hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ring-1 ring-white/10`}
                >
                  Launch {product.title}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            All products are production-ready, cloud-deployed, and actively maintained by the SeVenDor team.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Products;
