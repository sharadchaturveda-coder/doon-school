'use client';

import { motion } from 'framer-motion';
import ContactForm from '../../components/blocks/contact-form';
import Card from '../../components/ui/card';
import siteData from '../../data/site.json';
import contactData from '../../data/doon/contact.json';

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

      {/* Contact Information */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 text-primary">Get In Touch</h2>

            <p className="text-xl text-primary max-w-3xl mx-auto">Multiple ways to reach us - we're always here to help!</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                title: "Visit Us",
                content: siteData.contact.address,
                bgColor: "bg-brand-primary/5",
                delay: 0
              },
              {
                icon: "📞",
                title: "Call Us",
                content: siteData.contact.phone,
                subtitle: "Mon-Fri: 8:00 AM - 4:00 PM",
                bgColor: "bg-brand-primary/10",
                delay: 0.1
              },
              {
                icon: "✉️",
                title: "Email Us",
                content: siteData.contact.email,
                bgColor: "bg-brand-primary/15",
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
                  scale: 1.03,
                  y: -4,
                  transition: { duration: 0.15 }
                }}
              >
                <Card className={`p-8 text-center h-full ${contact.bgColor} text-primary border border-brand-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300`}>
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

      {/* Transport Information */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 text-primary">Transportation</h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">Safe and convenient transport services for our students</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <Card className="p-8 border-0">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🚐</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Bus Transportation Services</h3>
                    <p className="text-primary leading-relaxed mb-4">
                      Our school offers a convenient and efficient bus service, designed to make every student's daily commute safe, comfortable, and stress-free. The transport system reflects our commitment to punctuality, safety, and care. With designated routes and scheduled pick-up and drop-off points, our transport department ensures that students arrive at school and return home comfortably and on time.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-blue-900 mb-2">Service Details:</h4>
                      <ul className="text-blue-800 space-y-1">
                        <li>• Available for students from Kindergarten to P5</li>
                        <li>• Designated routes covering specific areas</li>
                        <li>• Trained staff accompany each bus</li>
                        <li>• Real-time updates for parents</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      For detailed route information, please contact the administrative office. Route lists are available through our parent communication channels.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
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
