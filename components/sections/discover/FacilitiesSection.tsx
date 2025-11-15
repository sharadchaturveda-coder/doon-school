'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface FacilityItem {
  title: string;
  description: string;
  image?: string;
}

interface FacilityNavItem {
  anchor: string;
  color: string;
  label: string;
  icon: string;
}

interface InfrastructureFacilitiesSectionProps {
  facilities: FacilityItem[];
  facilityNav: FacilityNavItem[];
}

export default function InfrastructureFacilitiesSection({ facilities, facilityNav }: InfrastructureFacilitiesSectionProps) {
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();

  return (
    <section className="text-black">
      <div className="py-24 px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Infrastructure Facilities</h2>

        <div className="space-y-4">
          {facilities.map((facility, index) => {
            const anchorId = slugify(facility.title);
            const navItem = facilityNav.find(item => item.anchor === anchorId);
            const borderColor = navItem?.color || '#60A5FA';

            return (
              <motion.div
                key={index}
                id={anchorId}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-250px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.23, 1, 0.32, 1]
                }}
                style={{ opacity: 1, transform: 'translateY(0px)' }}
              >
                <div
                  className="bg-[#FAF4E9] border-l-4"
                  style={{ borderLeftColor: borderColor }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-6 md:px-16 py-12">
                    {facility.image && (
                      <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[640px] aspect-[16/10] overflow-hidden rounded-lg">
                          <Image
                            src={facility.image}
                            alt={facility.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 640px"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex-1 max-w-prose">
                      <h3 className="text-2xl font-semibold mb-3">{facility.title}</h3>
                      <p className="text-base opacity-80 leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
