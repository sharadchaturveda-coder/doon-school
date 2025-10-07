'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import siteData from '../../../data/site.json';
import Card from '../../../components/ui/card';
import galleryData from '../../../data/gallery.json';

export default function CampusGalleryPage() {
  return (
    <>
      <Head>
        <title>Campus Gallery | {siteData.siteName}</title>
        <meta name="description" content={`Explore our beautiful campus through photos and videos at ${siteData.siteName}.`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-500/90 via-green-600/90 to-emerald-700/90" />
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
                <span className="block gradient-text-hero">Gallery</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Explore our beautiful campus through photos and videos that capture the essence of school life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Photo Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Capturing memories and moments from our vibrant campus life</p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {galleryData.photos?.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">📷</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-gray-800">School Photo {photo.id}</h3>
                  <p className="text-gray-600 leading-relaxed">{photo.alt}</p>
                </Card>
              </motion.div>
            )) || (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">Gallery photos will be available soon...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      {galleryData.videos && galleryData.videos.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Video Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Watch highlights from school events and activities</p>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {galleryData.videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">🎥</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2 text-gray-800">School Video {video.id}</h3>
                    <p className="text-gray-600 leading-relaxed">{video.alt}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
