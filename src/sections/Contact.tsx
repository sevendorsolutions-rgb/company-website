import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactDetails = [
    {
      icon: MessageCircle,
      label: 'Chat on WhatsApp',
      value: '+91 7995888660',
      link: 'https://wa.me/917995888660',
      gradient: 'from-green-400 to-emerald-500',
      shadow: 'shadow-green-500/20',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 7995888660',
      link: 'tel:+917995888660',
      gradient: 'from-brand-blue to-blue-500',
      shadow: 'shadow-brand-blue/20',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'sevendorsolutions@gmail.com',
      link: 'mailto:sevendorsolutions@gmail.com',
      gradient: 'from-brand-orange to-amber-500',
      shadow: 'shadow-brand-orange/20',
    },
    {
      icon: MapPin,
      label: 'Our Locations',
      value: 'Hyderabad, Kakinada, Rajahmundry, Vijayawada, Vizag',
      link: 'https://maps.google.com/?q=Hyderabad,Kakinada,Rajahmundry,Vijayawada,Vishakapatnam',
      gradient: 'from-indigo-500 to-purple-500',
      shadow: 'shadow-indigo-500/20',
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message text
    const whatsappNumber = '917995888660';
    const messageText = `Hello SevenDor Solutions team,

I would like to make an inquiry. Here are my details:

• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#070a13] transition-colors duration-300"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-orange/10 dark:bg-brand-orange/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-blue dark:text-brand-orange uppercase tracking-widest"
          >
            Contact Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy dark:text-white"
          >
            We're Here to Help
          </motion.h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-4" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 leading-relaxed text-base sm:text-lg mt-6"
          >
            Have a project in mind or need assistance? Reach out to us through your preferred method below, or submit an inquiry form.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Details Grid */}
          <div className="lg:col-span-5 space-y-6">
            {contactDetails.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                className="group relative p-6 rounded-3xl glass-card border border-light-border dark:border-dark-border flex items-center gap-6 overflow-hidden hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 cursor-pointer"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/[0.01] to-brand-orange/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className={`relative z-10 flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg ${item.shadow} ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                
                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="font-outfit font-bold text-lg text-brand-navy dark:text-white mb-1 group-hover:text-brand-blue transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium break-words leading-relaxed">
                    {item.value}
                  </p>
                </div>

                {/* Right border slide-in accent */}
                <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-blue to-brand-orange transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              </motion.a>
            ))}
          </div>

          {/* Right Column: Inquiry Form (Inspired by dizisolutions.in layout) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl glass-card border border-light-border dark:border-dark-border shadow-xl">
              <h3 className="font-outfit font-extrabold text-2xl text-brand-navy dark:text-white mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-slate-50/50 dark:bg-[#131924]/50 focus:border-brand-blue focus:bg-white dark:focus:bg-[#131924] focus:ring-1 focus:ring-brand-blue outline-none text-slate-800 dark:text-slate-100 text-sm transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-slate-50/50 dark:bg-[#131924]/50 focus:border-brand-blue focus:bg-white dark:focus:bg-[#131924] focus:ring-1 focus:ring-brand-blue outline-none text-slate-800 dark:text-slate-100 text-sm transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-slate-50/50 dark:bg-[#131924]/50 focus:border-brand-blue focus:bg-white dark:focus:bg-[#131924] focus:ring-1 focus:ring-brand-blue outline-none text-slate-800 dark:text-slate-100 text-sm transition-all duration-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-slate-50/50 dark:bg-[#131924]/50 focus:border-brand-blue focus:bg-white dark:focus:bg-[#131924] focus:ring-1 focus:ring-brand-blue outline-none text-slate-800 dark:text-slate-100 text-sm transition-all duration-300 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-center text-sm font-semibold mt-4"
                  >
                    Thank you! Your message has been sent successfully. We will get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
