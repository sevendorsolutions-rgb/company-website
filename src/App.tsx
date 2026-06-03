//import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppToggle } from './components/WhatsAppToggle';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { WhyUs } from './sections/WhyUs';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
//import { motion, AnimatePresence } from 'framer-motion';
//import { Cpu } from 'lucide-react';
function LandingPageContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
      <WhatsAppToggle />
    </div>
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
