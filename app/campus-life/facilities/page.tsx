'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import siteData from '../../../data/site.json';
import Card from '../../../components/ui/card';
import campusLifeData from '../../../data/doon/campus-life.json';

export default function FacilitiesPage() {
  const facilitiesSections = campusLifeData.sections.filter(s =>
    ['Infrastructure and Facilities', 'Sports & Physical Education', 'Visual & Performing Arts'].includes(s.heading)
  );

  return (
    <>
      <Head>
        <title>Facilities | {siteData.siteName}</title>
        <meta name="description" content={`Explore our state-of-the-art facilities at ${siteData.siteName}.`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/90 via-blue-600/90 to-indigo-700/90" />
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
                <span className="block gradient-text-hero">Facilities</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              State-of-the-art infrastructure designed to foster creativity, learning, and holistic development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Facilities Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          {facilitiesSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                <h2 className="text-3xl font-heading font-bold mb-6 text-gray-800">{section.heading}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{section.content}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
