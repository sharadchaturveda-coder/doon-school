'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import siteData from '../../data/site.json';
import Card from '../../components/ui/card';
import Grid from '../../components/ui/grid';
import campusLifeData from '../../data/doon/campus-life.json';

const CampusLifePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Campus Life | {siteData.siteName}</title>
        <meta name="description" content={`Explore campus life and co-curricular activities at ${siteData.siteName}.`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-primary via-light-blue to-orange-brand">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/90 via-light-blue/90 to-orange-brand/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-white leading-tight">
                Campus
                <span className="block gradient-text-hero">Life</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Life at Doon International School extends far beyond the classroom. We believe in fostering a vibrant and engaging campus environment where students can explore their interests, develop new skills, and build lasting friendships.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Facilities Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">State-of-the-art infrastructure supporting holistic development</p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {campusLifeData.sections.filter(s => ['Infrastructure and Facilities', 'Sports & Physical Education', 'Visual & Performing Arts'].includes(s.heading)).map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.15 } }}
              >
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-gray-800">{section.heading}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-20 bg-gradient-to-br from-orange-brand/10 via-light-blue/10 to-blue-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Student Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Building character, leadership, and lifelong memories</p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {campusLifeData.sections.filter(s => ['House System', 'Beyond the Classroom: Trips and Immersion'].includes(s.heading)).map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.15 } }}
              >
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-gray-800">{section.heading}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-20 bg-gradient-to-br from-blue-primary/10 via-orange-brand/10 to-light-blue/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Community Engagement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Building stronger communities through collaboration and service</p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {campusLifeData.sections.filter(s => ['Parent Collaboration', 'Community Services'].includes(s.heading)).map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.15 } }}
              >
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-gray-800">{section.heading}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CampusLifePage;
