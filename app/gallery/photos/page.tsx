'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import siteData from '../../../data/site.json';
import galleryData from '../../../data/gallery.json';
import GalleryGrid from '../../../components/blocks/gallery-grid';

const PhotoGalleryPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Photo Gallery | {siteData.siteName}</title>
        <meta name="description" content={`Browse photos from events and campus life at ${siteData.siteName}.`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-brand via-blue-primary to-light-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-brand/90 via-blue-primary/90 to-light-blue/90" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 right-20 w-8 h-8 bg-blue-primary/40 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 360],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-32 left-16 w-6 h-6 bg-orange-400/50 rounded-full"
            animate={{
              y: [-15, 15, -15],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-white leading-tight">
                Photo
                <span className="block gradient-text-hero">Gallery</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              A collection of memorable moments, events, and daily life at Doon International School captured through our lenses.
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

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-light-blue/10 via-blue-primary/10 to-orange-brand/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Captured Moments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Browse through our collection of memorable photos that showcase life at Doon International School.</p>
          </motion.div>

          {galleryData.photos.length > 0 ? (
            <GalleryGrid items={galleryData.photos} type="photo" />
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-primary/20 to-orange-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📸</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-gray-800">Coming Soon</h3>
              <p className="text-lg text-gray-600">Photos will be added soon. Stay tuned for memorable moments!</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default PhotoGalleryPage;
