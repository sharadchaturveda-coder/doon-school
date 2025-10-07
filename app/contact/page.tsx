'use client';

import { motion } from 'framer-motion';
import ContactForm from '../../components/blocks/contact-form';
import Card from '../../components/ui/card';
import siteData from '../../data/site.json';

export default function ContactPage() {
  return (
    <>
      {/* Vibrant Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/90 via-fuchsia-600/90 to-violet-700/90" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 left-20 w-8 h-8 bg-yellow-400/40 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1], 
              rotate: [0, 180, 360],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-40 right-16 w-6 h-6 bg-cyan-400/50 rounded-full"
            animate={{ 
              y: [-20, 20, -20], 
              x: [-10, 10, -10],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
          <motion.div className="absolute bottom-32 left-1/3 w-10 h-10 bg-emerald-400/30 rounded-full"
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
                <span className="block gradient-text-hero">Connect</span>
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

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Multiple ways to reach us - we're always here to help!</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                title: "Visit Us",
                content: siteData.contact.address,
                gradient: "from-orange-400 to-pink-500",
                delay: 0
              },
              {
                icon: "📞",
                title: "Call Us",
                content: siteData.contact.phone,
                subtitle: "Mon-Fri: 8:00 AM - 4:00 PM",
                gradient: "from-purple-400 to-indigo-500",
                delay: 0.1
              },
              {
                icon: "✉️",
                title: "Email Us",
                content: siteData.contact.email,
                gradient: "from-cyan-400 to-blue-500",
                delay: 0.2
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: contact.delay, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
              >
                <Card className={`p-8 text-center h-full bg-gradient-to-br ${contact.gradient} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-4xl">{contact.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{contact.title}</h3>
                  <p className="text-lg leading-relaxed opacity-90 mb-2">
                    {contact.content}
                  </p>
                  {contact.subtitle && (
                    <p className="text-sm opacity-80">{contact.subtitle}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-6">Send Us a Message</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about admissions, programs, or want to schedule a campus visit? 
              Fill out the form below and we'll get back to you promptly.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </>
  );
}
