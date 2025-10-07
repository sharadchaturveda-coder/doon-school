'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import siteData from '../../../data/site.json';
import Card from '../../../components/ui/card';
import eventsData from '../../../data/events.json';

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>School Events | {siteData.siteName}</title>
        <meta name="description" content={`Stay updated with upcoming events and activities at ${siteData.siteName}.`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600">
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
                School
                <span className="block gradient-text-hero">Events</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Stay updated with our upcoming events, celebrations, and important school activities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join us for exciting events and celebrations</p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {eventsData.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-gray-800">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <span className="mr-2">📅</span>
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">⏰</span>
                      {event.time}
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">📍</span>
                      {event.location}
                    </p>
                  </div>
                  {event.description && (
                    <p className="mt-4 text-gray-600 leading-relaxed">{event.description}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
