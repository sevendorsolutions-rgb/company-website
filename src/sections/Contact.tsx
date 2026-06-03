import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'sevendorsolutions@gmail.com',
      link: 'mailto:sevendorsolutions@gmail.com',
      gradient: 'from-violet-500 to-fuchsia-500',
      shadow: 'shadow-violet-500/40',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 7995888660',
      link: 'tel:+917995888660',
      gradient: 'from-cyan-400 to-blue-500',
      shadow: 'shadow-cyan-500/40',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 7995888660',
      link: 'https://wa.me/917995888660',
      gradient: 'from-green-400 to-emerald-600',
      shadow: 'shadow-green-500/40',
    },
    {
      icon: MapPin,
      label: 'Places',
      value: 'Kakinada, Hyderabad, Vijayawada, Vishakapatnam',
      link: 'https://maps.google.com',
      gradient: 'from-emerald-400 to-teal-500',
      shadow: 'shadow-emerald-500/40',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Every day: 9:00 AM - 6:00 PM',
      link: null,
      gradient: 'from-amber-400 to-orange-500',
      shadow: 'shadow-amber-500/40',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@sevendorsolutions',
      link: 'https://instagram.com',
      gradient: 'from-pink-500 via-rose-500 to-orange-400',
      shadow: 'shadow-pink-500/40',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Synapse Digital',
      link: 'https://facebook.com',
      gradient: 'from-blue-500 to-indigo-600',
      shadow: 'shadow-blue-500/40',
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Mesh elements */}
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Contact Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Get In Touch With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-sm sm:text-base px-2"
          >
            Have an idea or project in mind? Reach out to our team via any platform below and let's discuss how we can bring your vision to life.
          </motion.p>
        </div>

        {/* Contact Cards Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-16">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group relative p-5 sm:p-6 rounded-2xl glass-card glass-card-hover border border-slate-200/50 dark:border-white/5 text-center overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-500/0 group-hover:from-violet-500/[0.03] group-hover:to-cyan-500/[0.03] transition-all duration-500" />

              <div className="relative z-10">
                <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-4 sm:mb-5 shadow-lg ${item.shadow} ring-1 ring-white/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
                </div>
                <span className="block text-[10px] sm:text-[11px] uppercase font-bold text-slate-400 dark:text-zinc-500 tracking-wider mb-1.5 sm:mb-2">
                  {item.label}
                </span>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('mailto:') ? undefined : (item.link.startsWith('http') ? '_blank' : '_self')}
                    rel="noreferrer"
                    className="text-slate-800 dark:text-white font-medium text-xs sm:text-sm hover:text-violet-600 dark:hover:text-cyan-400 transition-colors break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-800 dark:text-white font-medium text-xs sm:text-sm break-words">
                    {item.value}
                  </p>
                )}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Contact;
