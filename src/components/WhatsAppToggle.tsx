import React, { useEffect, useState } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppToggle: React.FC = () => {
  const whatsappNumber = '917995888660';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi SeVenDor Solutions, I would like to inquire about your services."
  )}`;
  const callNumber = 'tel:+917995888660';

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Sticky WhatsApp & Call Panel (Center-Right) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 items-end">
        {/* Sticky WhatsApp Side Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-11 sm:h-11 bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-all duration-300 hover:pr-1.5 rounded-l-xl shadow-lg hover:-translate-x-1 cursor-pointer group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5.5 h-5.5 sm:w-6 sm:h-6 fill-current transition-transform duration-300 group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.017 14.07 1.001 11.516 1c-5.433 0-9.857 4.37-9.86 9.8.001 1.808.5 3.568 1.456 5.129L2.122 21.8l6.009-1.564zM16.92 14.97c-.29-.145-1.711-.845-1.978-.942-.266-.097-.461-.145-.655.146-.194.29-.752.942-.921 1.135-.17.194-.339.219-.63.073-.29-.145-1.223-.45-2.33-1.439-.861-.767-1.443-1.716-1.612-2.007-.17-.29-.018-.447.127-.592.13-.13.29-.34.436-.509.145-.17.194-.291.291-.485.097-.194.049-.364-.025-.509-.073-.146-.655-1.579-.897-2.16-.236-.57-.474-.492-.655-.501-.17-.008-.364-.01-.559-.01s-.509.073-.776.364c-.266.29-1.02 1.02-1.02 2.484s1.069 2.882 1.214 3.076c.145.194 2.102 3.21 5.094 4.5c.712.308 1.268.491 1.701.629.714.227 1.365.195 1.88.118.574-.085 1.711-.699 1.953-1.374.242-.676.242-1.258.17-1.375-.073-.117-.266-.19-.556-.335z" />
          </svg>
        </a>

        {/* Sticky Call Side Button */}
        <a
          href={callNumber}
          className="w-10 h-10 sm:w-11 sm:h-11 bg-[#3b82f6] hover:bg-[#2563eb] text-white flex items-center justify-center transition-all duration-300 hover:pr-1.5 rounded-l-xl shadow-lg hover:-translate-x-1 cursor-pointer group"
          aria-label="Call Us"
        >
          <Phone className="w-5.5 h-5.5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
        </a>
      </div>

      {/* Sticky Scroll to Top Button (Bottom-Right, aligned with side buttons) */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed right-0 bottom-8 z-50 w-10 h-10 sm:w-11 sm:h-11 bg-[#7c3aed] hover:bg-[#6d28d9] text-white flex items-center justify-center transition-all duration-300 hover:pr-1.5 rounded-l-xl shadow-lg hover:-translate-x-1 cursor-pointer group focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5.5 h-5.5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppToggle;
