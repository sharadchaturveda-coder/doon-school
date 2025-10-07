'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import siteData from '../../../data/site.json';
import Card from '../../../components/ui/card';
import aboutData from '../../../data/doon/about.json';

export default function HistoricalLegacyPage() {
  return (
    <>
      <Head>
        <title>Historical Legacy | {siteData.siteName}</title>
        <meta name="description" content="Explore the rich history and legacy of Doon International School founded by visionary educator Lala Raghubir Singh." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 via-orange-600/90 to-red-700/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-white leading-tight">
                Historical
                <span className="block gradient-text-hero">Legacy</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Founded with a vision of excellence in education and a commitment to holistic development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Legacy Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Building excellence since 1985 with visionary leadership</p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Founder's Vision",
                content: "Our school was founded with the vision of providing world-class education that balances academic excellence with character development, cultural values, and global citizenship.",
                gradient: "from-orange-400 to-red-500",
                icon: "🎯"
              },
              {
                title: "Educational Philosophy",
                content: "We believe in nurturing young minds through innovative teaching methods, personalized attention, and a comprehensive curriculum that prepares students for the challenges of tomorrow.",
                gradient: "from-amber-400 to-orange-500",
                icon: "📚"
              },
              {
                title: "Legacy of Excellence",
                content: "Over the years, our institution has become synonymous with quality education, producing leaders who make a positive impact in various fields across the globe.",
                gradient: "from-red-400 to-pink-500",
                icon: "🌟"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Card className={`p-8 bg-gradient-to-br ${item.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                      <span className="text-4xl">{item.icon}</span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold">{item.title}</h3>
                  </div>
                  <p className="text-lg leading-relaxed opacity-90">{item.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4 text-white">
            Discover More About Our School
          </h3>
          <p className="text-lg mb-8 opacity-90 text-white max-w-2xl mx-auto">
            Explore our campus, meet our leadership, and understand our values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/principal-message">
              <motion.button
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg px-6 py-3 text-lg font-semibold rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Principal's Message
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg px-6 py-3 text-lg font-semibold border-0 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Mission & Vision
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
