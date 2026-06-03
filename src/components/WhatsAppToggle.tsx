import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare } from 'lucide-react';

export const WhatsAppToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = '917995888660';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi SeVenDor Solutions, I would like to inquire about your services.")}`;

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, x: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, x: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-[320px] sm:w-[360px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 backdrop-blur-md"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-emerald-500 to-green-600 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-emerald-500 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-base leading-tight">SeVenDor Solutions</h4>
                  <p className="text-xs text-emerald-100 font-medium mt-0.5">Online • Replies in minutes</p>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-5 bg-slate-50 dark:bg-zinc-950/40 min-h-[120px] flex flex-col justify-end">
              <div className="bg-white dark:bg-zinc-850 p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-slate-100 dark:border-zinc-800">
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Support Team</p>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Hi there! 👋 Welcome to SeVenDor Solutions. How can we help you grow your business today?
                </p>
                <span className="block text-[9px] text-slate-400 dark:text-zinc-500 text-right mt-1.5">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-900">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer text-sm"
              >
                <Send className="w-4 h-4" />
                Start Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Bubble */}
      <motion.button
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleWidget}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:from-emerald-600 hover:to-green-600 transition-all duration-300 focus:outline-none flex items-center justify-center relative cursor-pointer group"
        aria-label="Toggle WhatsApp chat widget"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full border-2 border-green-400 animate-ping opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Unread dot */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center" />

        {/* WhatsApp Icon SVG */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.017 14.07 1.001 11.516 1c-5.433 0-9.857 4.37-9.86 9.8.001 1.808.5 3.568 1.456 5.129L2.122 21.8l6.009-1.564zM16.92 14.97c-.29-.145-1.711-.845-1.978-.942-.266-.097-.461-.145-.655.146-.194.29-.752.942-.921 1.135-.17.194-.339.219-.63.073-.29-.145-1.223-.45-2.33-1.439-.861-.767-1.443-1.716-1.612-2.007-.17-.29-.018-.447.127-.592.13-.13.29-.34.436-.509.145-.17.194-.291.291-.485.097-.194.049-.364-.025-.509-.073-.146-.655-1.579-.897-2.16-.236-.57-.474-.492-.655-.501-.17-.008-.364-.01-.559-.01s-.509.073-.776.364c-.266.29-1.02 1.02-1.02 2.484s1.069 2.882 1.214 3.076c.145.194 2.102 3.21 5.094 4.5c.712.308 1.268.491 1.701.629.714.227 1.365.195 1.88.118.574-.085 1.711-.699 1.953-1.374.242-.676.242-1.258.17-1.375-.073-.117-.266-.19-.556-.335z" />
        </svg>
      </motion.button>
    </div>
  );
};
export default WhatsAppToggle;
