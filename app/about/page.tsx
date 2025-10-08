'use client';

import { motion } from 'framer-motion';
import Card from '../../components/ui/card';
import Button from '../../components/ui/button';
import Link from 'next/link';
import aboutData from '../../data/doon/about.json';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-primary via-light-blue to-orange-brand">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/90 via-light-blue/90 to-orange-brand/90" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-6 h-6 bg-white/20 rounded-full"
            animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-32 right-20 w-4 h-4 bg-yellow-400/30 rounded-full"
            animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/4 w-8 h-8 bg-cyan-400/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black mb-8 text-white leading-tight">
                <span className="block gradient-text-hero">Excellence</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Nurturing minds, building futures since 1985. We are committed to providing 
              world-class education that prepares students for global success.
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 gradient-text">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The pillars that guide our educational excellence</p>
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
              <Card className="p-10 h-full bg-gradient-to-br from-orange-brand to-blue-primary text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl">🎯</span>
                  </div>
                </div>
                <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed opacity-90">
                  {aboutData.sections.find(s => s.heading === "Our Mission")?.content || "Content not found"}
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
              <Card className="p-10 h-full bg-gradient-to-br from-blue-primary to-light-blue text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl">🔮</span>
                  </div>
                </div>
                <h2 className="text-4xl font-heading font-bold mb-6">Our Vision</h2>
                <p className="text-lg leading-relaxed opacity-90">
                  {aboutData.sections.find(s => s.heading === "Our Vision")?.content || "Content not found"}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 gradient-text">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The fundamental principles that shape our educational philosophy</p>
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
                gradient: "from-yellow-400 to-orange-500",
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



      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Learn More About Our Community
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Discover what makes Doon International School special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button variant="secondary" size="lg">
                Admissions
              </Button>
            </Link>
            <Link href="/facilities">
              <Button variant="secondary" size="lg">
                Our Facilities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
