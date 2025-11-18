'use client';

import { motion } from 'framer-motion';
import EnquiryForm from '../../components/blocks/enquiry-form';

export default function EnquiryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-brand-primary opacity-5">
          <div className="absolute inset-0 bg-brand-secondary opacity-5 animate-pulse" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 left-20 w-8 h-8 bg-blue-200/40 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-40 right-16 w-6 h-6 bg-indigo-200/50 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
          <motion.div className="absolute bottom-32 left-1/3 w-10 h-10 bg-purple-200/30 rounded-full"
            animate={{
              rotate: [0, -180, 0],
              scale: [1, 0.8, 1.2, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-8 text-gray-800 leading-tight">
                Start Your
                <span className="block text-[#002B6B]">Journey With Us</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Have questions about admissions, curriculum, or facilities?
              Fill out our enquiry form and our team will get back to you promptly.
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

      {/* Enquiry Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
                Enquiry Form
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Please fill out the form below with your details and we'll connect with you soon.
                All fields marked with * are required.
              </p>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-8">
              Prefer to Contact Us Directly?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">📞</div>
                <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                <p className="text-gray-600">+91 9201591900</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">✉️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                <p className="text-gray-600">info@dooninternationaljabalpur.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">📍</div>
                <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                <p className="text-gray-600">Doon International School, Jabalpur, Madhya Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
