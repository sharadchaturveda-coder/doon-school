'use client';

import { motion } from 'framer-motion';
import Hero from '../components/ui/hero';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import Link from 'next/link';
import siteData from '../data/site.json';
import eventsData from '../data/events.json';
import newsData from '../data/news.json';

export default function Home() {
  const featuredEvents = eventsData.filter(event => event.featured).slice(0, 3);
  const featuredNews = newsData.filter(news => news.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={siteData.siteName}
        subtitle={siteData.tagline}
        imageUrl="/images/hero-home.svg"
        imageAlt="Doon International School building"
      >
          <Link href="/about">
            <Button size="lg" className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-blue-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold">
              Learn More
            </Button>
          </Link>
              <Link href="/admissions">
                <Button size="lg" className="bg-gradient-to-r from-orange-brand to-blue-primary text-white hover:from-orange-brand hover:to-blue-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold border-0">
                  Start Admissions
                </Button>
              </Link>
      </Hero>

      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-6 text-foreground">
              Welcome to Excellence in Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Doon International School is committed to providing a holistic education that fosters 
              academic excellence, personal growth, and social responsibility. We believe in nurturing 
              young minds to become confident, creative, and compassionate global citizens.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
            >
              <Card className="p-8 text-center h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-primary to-orange-brand rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-3xl">🎓</span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-gray-800">Academic Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  CBSE curriculum with innovative teaching methods and personalized attention for every student.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
            >
              <Card className="p-8 text-center h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange to-blue-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-3xl">🌟</span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-gray-800">Holistic Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sports, arts, music, and extracurricular activities that nurture creativity and leadership.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
            >
              <Card className="p-8 text-center h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-primary to-orange rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-3xl">🏫</span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-gray-800">Modern Facilities</h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art laboratories, library, sports complex, and technology-enabled classrooms.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Latest News */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Latest News</h3>
              <div className="space-y-4">
                {featuredNews.map((news) => (
                  <Card key={news.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 line-clamp-2">{news.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{news.excerpt}</p>
                        <p className="text-xs text-muted-foreground">{news.date}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/news">
                  <Button variant="outline">View All News</Button>
                </Link>
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {featuredEvents.map((event) => (
                  <Card key={event.id} className="p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold mb-2">{event.title}</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>📅 {event.date}</p>
                      <p>⏰ {event.time}</p>
                      <p>📍 {event.location}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/campus-life/events">
                  <Button variant="outline">View All Events</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Discover how Doon International School can help your child reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button variant="secondary" size="lg">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
