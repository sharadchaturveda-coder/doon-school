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

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {facilities.map((facility, index) => {
            const anchorId = slugify(facility.title);
            const navItem = facilityNav.find(item => item.anchor === anchorId);
            const borderColor = navItem?.color || '#60A5FA';

            return (
              <motion.section
                key={index}
                id={anchorId}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
                }}
              >
                <div
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#FAF4E9]'
                  } border-l-4`}
                  style={{ borderLeftColor: borderColor }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-6 md:px-16 py-12">
                    {facility.image && (
                      <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[480px] aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            src={facility.image}
                            alt={facility.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 480px"
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
              </motion.section>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
