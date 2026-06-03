import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { WhyUs } from './sections/WhyUs';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';

function LandingPageContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-[#030014] flex flex-col items-center justify-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/25 border border-white/10">
              <Cpu className="w-8 h-8 animate-pulse text-white" />
              <div className="absolute inset-0 rounded-2xl border border-cyan-400 animate-ping opacity-25" />
            </div>
            <span className="font-outfit font-extrabold text-2xl tracking-wider uppercase bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Synapse Digital
            </span>
            <div className="flex gap-1.5 mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-bounce" />
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex flex-col"
        >
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <Services />
            <WhyUs />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LandingPageContent />
    </ThemeProvider>
  );
}

export default App;
