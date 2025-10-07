'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import siteData from '../../data/site.json';
import Button from '../../components/ui/button';

const GalleryLandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Gallery | {siteData.siteName}</title>
        <meta name="description" content={`Explore the photo and video gallery of ${siteData.siteName}.`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-blue via-orange-brand to-blue-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-light-blue/90 via-orange-brand/90 to-blue-primary/90" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 left-20 w-6 h-6 bg-orange-400/40 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 360],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-20 right-16 w-10 h-10 bg-blue-primary/20 rounded-full"
            animate={{
              y: [-15, 15, -15],
              x: [-5, 5, -5],
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
                Our
                <span className="block gradient-text-hero">Gallery</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Step into the vibrant world of Doon International School through our captivating photo and video galleries. Relive memorable moments, celebrate achievements, and get a glimpse of daily life on campus.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-brand/10 via-blue-primary/10 to-light-blue/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-5xl font-heading font-black mb-8 gradient-text">Choose Your Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Explore our memories through stunning photos or relive special moments with our videos.
            </p>

            <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.15 }}
              >
                <Link href="/gallery/photos">
                  <Button size="lg" className="bg-gradient-to-r from-orange-brand to-blue-primary text-white hover:from-orange-brand hover:to-blue-primary px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl border-0">
                    📸 View Photos
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.15 }}
              >
                <Link href="/gallery/videos">
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-md border border-light-blue text-light-blue hover:bg-light-blue hover:text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl"
                  >
                    🎬 Watch Videos
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GalleryLandingPage;
