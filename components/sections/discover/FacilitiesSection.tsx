'use client';

import { motion } from 'framer-motion';

interface Facility {
  title: string;
  description: string;
  image: string;
}

interface FacilitiesSectionProps {
  facilities: Facility[];
}

export default function FacilitiesSection({ facilities }: FacilitiesSectionProps) {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-primary">
            Our World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exceptional infrastructure designed to nurture excellence in education and holistic development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
