'use client';

import { motion } from 'framer-motion';
import Button from '../../components/ui/button';
import Card from '../../components/ui/card';
import Link from 'next/link';

export default function AdmissionsPage() {
  const steps = [
    {
      step: "01",
      title: "Inquiry",
      desc: "Submit an online inquiry form or contact our admissions office",
      gradient: "from-blue-primary to-light-blue",
      icon: "📇"
    },
    {
      step: "02",
      title: "Campus Visit",
      desc: "Schedule a visit to experience our facilities and meet our staff",
      gradient: "from-orange-brand to-blue-primary",
      icon: "🏠"
    },
    {
      step: "03",
      title: "Application",
      desc: "Complete and submit the application form with required documents",
      gradient: "from-light-blue to-orange-brand",
      icon: "📝"
    },
    {
      step: "04",
      title: "Assessment",
      desc: "Students undergo assessment or interview based on grade level",
      gradient: "from-blue-primary to-orange-brand",
      icon: "🎤"
    },
    {
      step: "05",
      title: "Admission Offer",
      desc: "Successful applicants receive an admission offer",
      gradient: "from-orange-brand to-light-blue",
      icon: "🎉"
    },
    {
      step: "06",
      title: "Enrollment",
      desc: "Complete enrollment formalities and secure your child's place",
      gradient: "from-light-blue to-blue-primary",
      icon: "🎓"
    }
  ];

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
                Join Our
                <span className="block gradient-text-hero">Community</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Begin an extraordinary educational journey at Doon International School. 
              We're excited to welcome new students and families to our vibrant community.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-10 py-4 text-xl font-semibold mr-4">
                  Start Application
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-brand to-blue-primary text-white hover:from-orange to-blue-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-10 py-4 text-xl font-semibold border-0">
                  Schedule Visit
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your journey to excellence in 6 simple steps</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
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
                <Card className={`p-8 h-full bg-gradient-to-br ${step.gradient} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="text-3xl font-heading font-black opacity-60">{step.step}</div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
                  <p className="leading-relaxed opacity-90">{step.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Required Documents</h2>
              <p className="text-xl text-gray-600">Please prepare these documents for your application</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "📄", title: "Birth Certificate", gradient: "from-blue-primary to-light-blue" },
                { icon: "📊", title: "Academic Records", gradient: "from-orange-brand to-blue-primary" },
                { icon: "📜", title: "Transfer Certificate", gradient: "from-light-blue to-orange-brand" },
                { icon: "🖼️", title: "Photographs", gradient: "from-blue-primary to-orange-brand" },
                { icon: "🎫", title: "Identity Documents", gradient: "from-orange-brand to-light-blue" },
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  transition: { duration: 0.15 }
                }}
                >
                  <Card className={`p-6 bg-gradient-to-r ${doc.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                        <span className="text-2xl">{doc.icon}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold">{doc.title}</h3>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
      </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience a nurturing environment designed for comprehensive development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏃", title: "Sports & Athletics", desc: "Extensive sports facilities including modern gymnasium and outdoor courts", gradient: "from-green-500 to-blue-500" },
              { icon: "🎨", title: "Arts & Creativity", desc: "Dedicated visual and performing arts studios with professional equipment", gradient: "from-purple-500 to-pink-500" },
              { icon: "🏠", title: "Infrastructure", desc: "Modern classrooms, science labs, and technology-integrated learning spaces", gradient: "from-blue-500 to-indigo-500" },
              { icon: "🏆", title: "House System", desc: "Engaging house activities that foster teamwork and school spirit", gradient: "from-orange-500 to-red-500" },
              { icon: "🚐", title: "Transportation", desc: "Safe and efficient bus service covering designated routes", gradient: "from-teal-500 to-cyan-500" },
              { icon: "🌱", title: "Experiential Learning", desc: "Educational excursions and immersion programs for real-world learning", gradient: "from-lime-500 to-green-500" }
            ].map((facility, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-primary via-light-blue to-orange-brand">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-4xl font-heading font-bold mb-6 text-white">
              Ready to Begin?
            </h3>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Take the first step towards an exceptional education. Our admissions team is here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-blue-primary transition-all duration-300 transform hover:scale-105 shadow-lg px-8 py-4 text-lg font-semibold">
                  Contact Admissions
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-brand to-blue-primary text-white hover:from-orange-brand hover:to-blue-primary transition-all duration-300 transform hover:scale-105 shadow-lg px-8 py-4 text-lg font-semibold border-0">
                  Request Information
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
