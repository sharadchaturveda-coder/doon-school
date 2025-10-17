import { motion } from 'framer-motion';
import Card from '../../ui/card';

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 text-primary">Our Core Values</h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">The fundamental principles that shape our educational philosophy</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🎯",
              title: "Excellence",
              desc: "Striving for the highest standards in academics, character, and service.",
              gradient: "from-red-400 to-pink-500",
              delay: 0
            },
            {
              icon: "🤝",
              title: "Integrity",
              desc: "Upholding honesty, transparency, and ethical behavior in all our actions.",
              gradient: "from-blue-400 to-indigo-500",
              delay: 0.1
            },
            {
              icon: "❤️",
              title: "Compassion",
              desc: "Fostering empathy, kindness, and respect for all members of our community.",
              gradient: "from-green-400 to-emerald-500",
              delay: 0.2
            },
            {
              icon: "🚀",
              title: "Innovation",
              desc: "Embracing creativity, critical thinking, and adaptive learning approaches.",
              gradient: "from-blue-400 to-purple-500",
              delay: 0.3
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: value.delay,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <Card className={`p-8 text-center h-full bg-gradient-to-br ${value.gradient} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm">
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{value.title}</h3>
                <p className="leading-relaxed opacity-90">
                  {value.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
