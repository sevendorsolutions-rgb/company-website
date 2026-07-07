import { motion, type Variants } from 'framer-motion';
import { 
  Users, 
  Building2, 
  Shield, 
  CreditCard, 
  BarChart3, 
  Clock, 
  Lock, 
  Layers, 
  CheckCircle,
  GraduationCap,
  BookOpen,
  Briefcase,
  ShoppingBag,
  Cloud,
  MessageSquare,
  ClipboardList
} from 'lucide-react';

const products = [
  {
    id: 'hrms',
    badge: 'Human Resources',
    title: 'HRMS',
    subtitle: 'HR Management System',
    description:
      'A cloud-based HR platform built to streamline workforce management — from onboarding to payroll and analytics.',
    icon: Users,
    gradient: 'from-blue-600 to-indigo-600',
    shadow: 'shadow-blue-600/20',
    glow: 'bg-blue-600/5',
    borderHover: 'hover:border-blue-600/30',
    badgeColor: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-600/5 border border-blue-600/10 dark:border-blue-600/20',
    features: [
      { icon: Users, label: 'Employee Profiles', detail: 'Centralized staff directory' },
      { icon: Clock, label: 'Attendance', detail: 'Real-time clock-in tracking' },
      { icon: BarChart3, label: 'Payroll System', detail: 'Automated salary calculations' },
    ],
  },
  {
    id: 'netbanking',
    badge: 'Financial Tech',
    title: 'Net Banking',
    subtitle: 'Core Banking System',
    description:
      'A secure, feature-rich banking platform engineered for modern financial institutions to scale digital banking.',
    icon: Building2,
    gradient: 'from-amber-600 to-orange-600',
    shadow: 'shadow-orange-600/20',
    glow: 'bg-orange-600/5',
    borderHover: 'hover:border-orange-600/30',
    badgeColor: 'text-orange-600 dark:text-orange-400',
    badgeBg: 'bg-orange-600/5 border border-orange-600/10 dark:border-orange-600/20',
    features: [
      { icon: Shield, label: 'Secure Portal', detail: 'Encrypted role-based dashboard' },
      { icon: CreditCard, label: 'Transfers', detail: 'Real-time domestic & international' },
      { icon: Lock, label: 'Auth Guard', detail: 'Multi-factor & biometric security' },
    ],
  },
  {
    id: 'lms',
    badge: 'EdTech & Training',
    title: 'LMS',
    subtitle: 'Learning Management System',
    description:
      'A digital learning platform for enterprises and academic institutions, empowering automated training workflows.',
    icon: GraduationCap,
    gradient: 'from-violet-600 to-fuchsia-600',
    shadow: 'shadow-violet-600/20',
    glow: 'bg-violet-600/5',
    borderHover: 'hover:border-violet-600/30',
    badgeColor: 'text-violet-600 dark:text-violet-400',
    badgeBg: 'bg-violet-600/5 border border-violet-600/10 dark:border-violet-600/20',
    features: [
      { icon: BookOpen, label: 'Course Builder', detail: 'Interactive module editor' },
      { icon: Clock, label: 'Progress Tracker', detail: 'Real-time course monitoring' },
      { icon: Layers, label: 'Assessments', detail: 'Automated grading & certs' },
    ],
  },
  {
    id: 'crm',
    badge: 'Customer Relations',
    title: 'CRM',
    subtitle: 'Client Relationship Manager',
    description:
      'An intuitive sales database and marketing automation center designed to build relationships and accelerate pipeline growth.',
    icon: Briefcase,
    gradient: 'from-emerald-600 to-teal-600',
    shadow: 'shadow-emerald-600/20',
    glow: 'bg-emerald-600/5',
    borderHover: 'hover:border-emerald-600/30',
    badgeColor: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-600/5 border border-emerald-600/10 dark:border-emerald-600/20',
    features: [
      { icon: Users, label: 'Contact Pipeline', detail: 'Unified cards & history timeline' },
      { icon: BarChart3, label: 'Lead Scoring', detail: 'AI-driven prioritization' },
      { icon: Shield, label: 'Secure Portal', detail: 'Client file sharing & chat' },
    ],
  },
  {
    id: 'eshop',
    badge: 'Retail & Commerce',
    title: 'E-Shop',
    subtitle: 'Digital Commerce Platform',
    description:
      'An omni-channel e-commerce engine designed to optimize customer checkout, order fulfillment, and inventory sync.',
    icon: ShoppingBag,
    gradient: 'from-pink-600 to-rose-600',
    shadow: 'shadow-pink-600/20',
    glow: 'bg-pink-600/5',
    borderHover: 'hover:border-pink-600/30',
    badgeColor: 'text-pink-600 dark:text-pink-400',
    badgeBg: 'bg-pink-600/5 border border-pink-600/10 dark:border-pink-600/20',
    features: [
      { icon: CreditCard, label: 'Gateways', detail: 'Stripe, PayPal & Apple Pay native' },
      { icon: Layers, label: 'Inventory Sync', detail: 'Live stock tracking across sites' },
      { icon: Shield, label: 'Fraud Shield', detail: 'Real-time payment verification' },
    ],
  },
  {
    id: 'intellect',
    badge: 'Data Intelligence',
    title: 'Intellect',
    subtitle: 'BI & Analytics Dashboard',
    description:
      'A real-time data orchestration dashboard that unifies metrics across systems, offering deep analytics and predictions.',
    icon: BarChart3,
    gradient: 'from-cyan-600 to-blue-600',
    shadow: 'shadow-cyan-600/20',
    glow: 'bg-cyan-600/5',
    borderHover: 'hover:border-cyan-600/30',
    badgeColor: 'text-cyan-600 dark:text-cyan-400',
    badgeBg: 'bg-cyan-600/5 border border-cyan-600/10 dark:border-cyan-600/20',
    features: [
      { icon: BarChart3, label: 'Live Telemetry', detail: 'Custom charts & dashboards' },
      { icon: Lock, label: 'Data Security', detail: 'Column-level permissions' },
      { icon: Layers, label: 'Multi-Source', detail: 'Direct integrations with SQL & APIs' },
    ],
  },
  {
    id: 'cloudops',
    badge: 'Cloud & DevOps',
    title: 'CloudOps',
    subtitle: 'DevOps & Orchestration',
    description:
      'An automated multi-cloud provisioning platform and Kubernetes cluster orchestrator for serverless deployments.',
    icon: Cloud,
    gradient: 'from-purple-600 to-indigo-600',
    shadow: 'shadow-purple-600/20',
    glow: 'bg-purple-600/5',
    borderHover: 'hover:border-purple-600/30',
    badgeColor: 'text-purple-600 dark:text-purple-400',
    badgeBg: 'bg-purple-600/5 border border-purple-600/10 dark:border-purple-600/20',
    features: [
      { icon: Cloud, label: 'Multi-Cloud', detail: 'Provisioning across AWS, GCP & Azure' },
      { icon: Clock, label: 'Auto-Scaling', detail: 'Dynamic resource adjustments' },
      { icon: Shield, label: 'Secured Keys', detail: 'Zero-trust secret management' },
    ],
  },
  {
    id: 'support',
    badge: 'Customer Support',
    title: 'Support',
    subtitle: 'Ticketing & Chat Portal',
    description:
      'A collaborative helpdesk and AI-driven ticketing solution designed to streamline customer support and resolve cases.',
    icon: MessageSquare,
    gradient: 'from-rose-500 to-orange-500',
    shadow: 'shadow-rose-500/20',
    glow: 'bg-rose-500/5',
    borderHover: 'hover:border-rose-500/30',
    badgeColor: 'text-rose-600 dark:text-rose-400',
    badgeBg: 'bg-rose-500/5 border border-rose-500/10 dark:border-rose-500/20',
    features: [
      { icon: MessageSquare, label: 'AI Auto-Reply', detail: 'Generative smart draft support' },
      { icon: Clock, label: 'SLA Analytics', detail: 'Turnaround speed metrics tracking' },
      { icon: Users, label: 'Ticket Routing', detail: 'Automatic assignment to agent pools' },
    ],
  },
  {
    id: 'assetflow',
    badge: 'Logistics',
    title: 'AssetFlow',
    subtitle: 'Asset Tracking System',
    description:
      'An enterprise RFID-ready asset tracking database designed to optimize inventory workflows and logistics pipelines.',
    icon: ClipboardList,
    gradient: 'from-teal-500 to-green-600',
    shadow: 'shadow-teal-500/20',
    glow: 'bg-teal-500/5',
    borderHover: 'hover:border-teal-500/30',
    badgeColor: 'text-teal-600 dark:text-teal-400',
    badgeBg: 'bg-teal-500/5 border border-teal-500/10 dark:border-teal-500/20',
    features: [
      { icon: ClipboardList, label: 'RFID Sync', detail: 'Real-time tag verification' },
      { icon: Layers, label: 'Warehouse Map', detail: 'Visual inventory placement layout' },
      { icon: CheckCircle, label: 'Audit Log', detail: 'Immutably tracked lifecycle flow' },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
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
            Explore our flagship software platforms — purpose-built to transform how businesses manage their operations, people, and finances.
          </motion.p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className={`group relative rounded-xl glass-card border border-light-border dark:border-dark-border p-5 overflow-hidden transition-all duration-500 ${product.borderHover} hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Background glow on hover */}
                <div
                  className={`absolute -top-20 -right-20 w-36 h-36 rounded-full ${product.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />
                {/* Top gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl`}
                />

                {/* Card Header */}
                <div className="flex items-start justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.gradient} text-white shadow-md ${product.shadow} ring-1 ring-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                    >
                      <IconComponent className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <span
                        className={`inline-block text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${product.badgeBg} ${product.badgeColor} mb-0.5`}
                      >
                        {product.badge}
                      </span>
                      <h3 className="font-outfit font-extrabold text-base text-brand-navy dark:text-white leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4 min-h-[48px]">
                  {product.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-2 mt-3 border-t border-slate-100 dark:border-slate-800/60 pt-3">
                  {product.features.map((feature, fi) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <li key={fi} className="flex items-start gap-2">
                        <FeatureIcon className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-snug">
                          <strong className="font-semibold text-slate-800 dark:text-slate-200">{feature.label}</strong> — {feature.detail}
                        </span>
                      </li>
                    );
                  })}
                </ul>
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
