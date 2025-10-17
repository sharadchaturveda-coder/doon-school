'use client';

import { motion } from 'framer-motion';
import ContactInfoCards from '../../components/sections/contact/ContactInfoCards';
import TransportationInfo from '../../components/sections/contact/TransportationInfo';
import ContactFormSection from '../../components/sections/contact/ContactFormSection';

export default function ContactPage() {
  return (
    <>
      {/* Vibrant Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-90">
          <div className="absolute inset-0 bg-brand-secondary opacity-20 animate-pulse" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 left-20 w-8 h-8 bg-secondary/40 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-40 right-16 w-6 h-6 bg-primary/50 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
          <motion.div className="absolute bottom-32 left-1/3 w-10 h-10 bg-secondary/30 rounded-full"
            animate={{
              rotate: [0, -180, 0],
              scale: [1, 0.8, 1.2, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-white leading-tight">
                Let's
                <span className="block text-white">Connect</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              We're here to help! Get in touch with us for admissions, inquiries,
              or any questions about our programs and facilities.
            </motion.p>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      <ContactInfoCards />

      <TransportationInfo />

      <ContactFormSection />
    </>
  );
}
