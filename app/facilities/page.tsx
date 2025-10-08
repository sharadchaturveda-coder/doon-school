'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../components/ui/button';
import Card from '../../components/ui/card';
import Link from 'next/link';
import GalleryGrid from '../../components/blocks/gallery-grid';
import facilitiesData from '../../data/doon/facilities.json';

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-primary via-orange-brand to-light-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/90 via-orange-brand/90 to-light-blue/90" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 right-20 w-6 h-6 bg-white/30 rounded-full"
            animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute bottom-32 left-16 w-8 h-8 bg-yellow-400/30 rounded-full"
            animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
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
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Discover exceptional learning environments designed to foster academic excellence and holistic development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Dynamic Sections from JSON */}
      {facilitiesData.sections.map((section, index) => {
        if (section.heading === "Sports & Co-Curricular Spaces" && section.gallery) {
          const galleryItems = section.gallery.map((src, i) => ({
            id: i.toString(),
            src: src,
            alt: `Facility image ${i + 1}`
          }));

          return (
            <section key={index} className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl font-heading font-bold mb-6 text-foreground">
                    {section.heading}
                  </h2>
                </motion.div>
                <GalleryGrid items={galleryItems} type="photo" />
              </div>
            </section>
          );
        }

        return (
          <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-gradient-to-br from-indigo-50 to-pink-50' : 'bg-gradient-to-br from-green-50 to-blue-50'}`}>
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-4xl font-heading font-bold mb-8 text-foreground">
                  {section.heading}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            </div>
          </section>
        );
      })}
    </>
  );
}
