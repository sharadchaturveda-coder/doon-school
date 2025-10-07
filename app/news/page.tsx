'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Card from '../../components/ui/card';
import newsData from '../../data/news.json';

export default function NewsPage() {
  const gradients = [
    "from-pink-400 to-rose-500",
    "from-purple-400 to-indigo-500",
    "from-blue-400 to-cyan-500",
    "from-emerald-400 to-teal-500",
    "from-orange-400 to-red-500",
    "from-violet-400 to-purple-500"
  ];

  return (
    <>
      {/* Vibrant Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/90 via-blue-600/90 to-indigo-700/90" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-16 right-20 w-6 h-6 bg-yellow-400/50 rounded-full"
            animate={{ scale: [1, 1.5, 1], rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute bottom-20 left-16 w-8 h-8 bg-pink-400/40 rounded-full"
            animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
          <motion.div className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-400/60 rounded-full"
            animate={{ rotate: [0, -180, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-white leading-tight">
                Latest
                <span className="block gradient-text-hero">News</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Stay updated with the latest happenings, achievements, and exciting developments 
              at Doon International School.
            </motion.p>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-heading font-black mb-4 gradient-text">Stories & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover what's happening in our vibrant school community</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
              >
                <Link href={`/news/${news.slug || news.id}`}>
                  <Card className={`p-8 h-full bg-gradient-to-br ${gradients[index % gradients.length]} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer`}>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                          {news.category}
                        </span>
                        {news.featured && (
                          <span className="text-xl">⭐</span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4 leading-tight">{news.title}</h3>
                    <p className="leading-relaxed opacity-90 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm opacity-80">
                        <span>{news.author}</span>
                        <span>{new Date(news.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-4xl font-heading font-bold mb-6 text-white">
              Stay Connected
            </h3>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Don't miss out on important updates and exciting news from our school community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button 
                  className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg"
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98 }}
                >
                  Subscribe to Updates
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
