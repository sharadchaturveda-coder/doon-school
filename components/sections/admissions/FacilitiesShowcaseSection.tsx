import { motion } from 'framer-motion';
import Card from '../../ui/card';

const facilities = [
  { icon: "🏃", title: "Sports & Athletics", desc: "Extensive sports facilities including modern gymnasium and outdoor courts", image: "/assets/facilities/horses.webp" },
  { icon: "🎨", title: "Arts & Creativity", desc: "Dedicated visual and performing arts studios with professional equipment", image: "/assets/facilities/arts.webp" },
  { icon: "🏠", title: "Infrastructure", desc: "Modern classrooms, science labs, and technology-integrated learning spaces", image: "/assets/facilities/computer-lab.webp" },
  { icon: "🏆", title: "House System", desc: "Engaging house activities that foster teamwork and school spirit", image: "/assets/gallery/gallery1.webp" },
  { icon: "🚐", title: "Transportation", desc: "Safe and efficient bus service covering designated routes", image: "/assets/facilities/transport.webp" },
  { icon: "🌱", title: "Experiential Learning", desc: "Educational excursions and immersion programs for real-world learning", image: "/assets/facilities/robotics.webp" }
];

export default function FacilitiesShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-black mb-4 text-primary">World-Class Facilities</h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">Experience a nurturing environment designed for comprehensive development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -2,
                transition: { duration: 0.15 }
              }}
            >
              <Card className="p-6 h-full text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${facility.image})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <span className="text-3xl">{facility.icon}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-white drop-shadow-lg">{facility.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{facility.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
