import { motion } from 'framer-motion';
import Card from '../../ui/card';

const facilities = [
  { icon: "🏃", title: "Sports & Athletics", desc: "Extensive sports facilities including modern gymnasium and outdoor courts", gradient: "from-green-500 to-blue-500" },
  { icon: "🎨", title: "Arts & Creativity", desc: "Dedicated visual and performing arts studios with professional equipment", gradient: "from-purple-500 to-pink-500" },
  { icon: "🏠", title: "Infrastructure", desc: "Modern classrooms, science labs, and technology-integrated learning spaces", gradient: "from-blue-500 to-indigo-500" },
  { icon: "🏆", title: "House System", desc: "Engaging house activities that foster teamwork and school spirit", gradient: "from-orange-500 to-red-500" },
  { icon: "🚐", title: "Transportation", desc: "Safe and efficient bus service covering designated routes", gradient: "from-teal-500 to-cyan-500" },
  { icon: "🌱", title: "Experiential Learning", desc: "Educational excursions and immersion programs for real-world learning", gradient: "from-lime-500 to-green-500" }
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
              <Card className={`p-6 h-full bg-gradient-to-br ${facility.gradient} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <span className="text-3xl">{facility.icon}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{facility.title}</h3>
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
