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
        <div className="absolute inset-0 bg-brand-primary opacity-90">
          <div className="absolute inset-0 bg-brand-secondary opacity-20 animate-pulse" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 right-20 w-6 h-6 bg-white/30 rounded-full"
            animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute bottom-32 left-16 w-8 h-8 bg-brand-primary/20 rounded-full"
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
                <span className="block text-white">Facilities</span>
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
        // Gallery section temporarily removed as data structure lacks 'gallery' property

        if (section.type === 'departments' && section.departments) {
          return (
            <section key={index} className="py-20 bg-muted">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
                    {section.heading}
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.departments.map((dept, deptIndex) => (
                    <motion.div
                      key={deptIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: deptIndex * 0.1 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="relative group"
                    >
                      <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="relative h-48">
                          <picture>
                            <source srcSet={dept.image} type="image/avif" />
                            <Image
                              src={dept.image.replace('.avif', '.webp')}
                              alt={dept.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </picture>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-heading font-bold text-white mb-2">
                              {dept.name}
                            </h3>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-primary text-sm leading-relaxed">
                            {dept.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return (
          <section key={index} className={`py-20 bg-background`}>
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-4xl font-heading font-bold mb-8 text-primary">
                  {section.heading}
                </h2>

                <p className="text-xl text-primary leading-relaxed">
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
