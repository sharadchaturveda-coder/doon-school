'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import siteData from '../../../data/site.json';
import Card from '../../../components/ui/card';
import aboutData from '../../../data/doon/about.json';

export default function PrincipalMessagePage() {
  const principalMessage = aboutData.sections.find(s => s.heading === "Message from the Headmistress");

  return (
    <>
      <Head>
        <title>Principal's Message | {siteData.siteName}</title>
        <meta name="description" content="Read inspiring message from our Principal about education, values, and the vision for Doon International School." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/90 via-green-600/90 to-emerald-700/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-white leading-tight">
                Principal's
                <span className="block gradient-text-hero">Message</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Inspiring words from our leadership about guiding your child's educational journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Principal Message Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Leadership Message</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Guiding our school with vision and dedication</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 bg-gradient-to-br from-green-400 via-lime-500 to-emerald-600 text-white border-0 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <span className="text-5xl">👩‍🏫</span>
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-2">Headmistress</h3>
                  <p className="text-green-100">Doon International School</p>
                </div>

                <div className="text-lg leading-relaxed opacity-95">
                  {principalMessage?.content || "Message content not found"}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-green-100">
                    <strong>— Headmistress, Raghubir Singh Junior Modern School</strong>
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Framework */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Building an environment where every child can thrive</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Academic Excellence",
                desc: "Commitment to fostering intellectual growth through innovative teaching methods."
              },
              {
                icon: "💝",
                title: "Holistic Development",
                desc: "Nurturing not just minds but hearts, bodies, and souls for complete development."
              },
              {
                icon: "🌍",
                title: "Global Citizens",
                desc: "Preparing students to be compassionate, responsible, and globally conscious citizens."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Card className="p-6 text-center h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4 text-white">
            Join Our Community
          </h3>
          <p className="text-lg mb-8 opacity-90 text-white max-w-2xl mx-auto">
            Experience our commitment to excellence firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <motion.button
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg px-6 py-3 text-lg font-semibold rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Admissions Process
              </motion.button>
            </Link>
            <Link href="/campus-life">
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg px-6 py-3 text-lg font-semibold border-0 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Campus Life
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
