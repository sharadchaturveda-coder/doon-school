import { motion } from 'framer-motion';
import Card from '../../ui/card';

export default function MissionVisionSection() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-2xl font-black mb-4 text-primary">Our Foundation</h2>
          <p className="font-body text-[15px] text-primary max-w-3xl mx-auto">The pillars that guide our educational excellence</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              y: -2,
              transition: { duration: 0.15 }
            }}
          >
            <Card className="p-10 h-full bg-brand-primary/5 text-primary border border-brand-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center">
                  <span className="text-3xl text-white">🎯</span>
                </div>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-primary">
                To provide a nurturing environment that fosters holistic development,
                empowering students to become confident, responsible global citizens
                through innovative learning experiences and values-driven education.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <Card className="p-10 h-full bg-brand-primary/10 text-primary border border-brand-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center">
                  <span className="text-3xl text-white">🔮</span>
                </div>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed text-primary">
                To be a leading educational institution that inspires excellence,
                cultivates creativity, and prepares students to thrive in an ever-changing world,
                building a foundation for lifelong learning and leadership.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
