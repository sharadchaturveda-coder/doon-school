'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import siteData from '../../../data/site.json';
import Card from '../../../components/ui/card';
import Button from '../../../components/ui/button';

export default function ProspectusPage() {
  return (
    <>
      <Head>
        <title>Download Prospectus | {siteData.siteName}</title>
        <meta name="description" content="Download our comprehensive prospectus to learn about academics, facilities, admissions process, and everything Doon International School offers." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/90 via-blue-600/90 to-indigo-700/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-white leading-tight">
                Our
                <span className="block gradient-text-hero">Prospectus</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Discover everything Doon International School has to offer in our comprehensive prospectus.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Download Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive guides to help you make an informed decision</p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "📚",
                title: "School Prospectus 2025",
                description: "Complete guide covering academics, facilities, faculty, and admission process.",
                size: "5.2 MB",
                format: "PDF",
                gradient: "from-blue-400 to-purple-500"
              },
              {
                icon: "📋",
                title: "Admission Guidelines",
                description: "Step-by-step admission process, requirements, and important dates.",
                size: "2.8 MB",
                format: "PDF",
                gradient: "from-emerald-400 to-blue-500"
              },
              {
                icon: "🏫",
                title: "Campus Tour Guide",
                description: "Virtual tour of our facilities, classrooms, and recreational areas.",
                size: "8.5 MB",
                format: "PDF",
                gradient: "from-orange-400 to-pink-500"
              },
              {
                icon: "📖",
                title: "Academic Curriculum",
                description: "Detailed curriculum overview for all grade levels and subjects.",
                size: "3.9 MB",
                format: "PDF",
                gradient: "from-indigo-400 to-cyan-500"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <Card className={`p-8 h-full bg-gradient-to-br ${resource.gradient} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                      <span className="text-4xl">{resource.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">{resource.title}</h3>
                      <div className="flex items-center gap-4 text-sm opacity-90">
                        <span>{resource.format}</span>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed opacity-90 mb-6">{resource.description}</p>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-gray-800 transition-all duration-300"
                  >
                    🔗 Download Now
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our admissions team is here to help you through the process</p>
          </motion.div>

          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-4 text-gray-800">Contact Admissions</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center justify-center">
                    <span className="mr-3">📧</span>
                    <span>{siteData.contact.email}</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="mr-3">📞</span>
                    <span>{siteData.contact.phone}</span>
                  </li>
                  <li className="flex items-center justify-center text-center">
                    <span className="mr-3">🏢</span>
                    <span>{siteData.contact.address}</span>
                  </li>
                </ul>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                  >
                    📞 Schedule Consultation
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
