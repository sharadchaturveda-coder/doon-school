'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Hero from '../components/ui/hero';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import Link from 'next/link';
import GalleryGrid from '../components/blocks/gallery-grid';
import siteData from '../data/site.json';
import homeData from '../data/doon/home.json';
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
        videoSrc={homeData.heroSection.media.src}
        videoPoster={homeData.heroSection.media.poster}
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

      {/* Dynamic Home Sections from JSON */}
      {homeData.sections.map((section, index) => {
        if (section.type === 'image-text') {
          return (
            <section key={index} className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <picture>
                      <source srcSet={section.image} type="image/avif" />
                      <Image
                        src={section.image.replace('.avif', '.webp')}
                        alt={section.heading}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </picture>
                  </div>

                  <div className={`text-center md:text-left ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    {index <= 2 ? (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                          opacity: { duration: 0.8 },
                        }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 30px 60px -15px rgba(141, 50, 28, 0.4), 0 0 40px rgba(9, 94, 197, 0.3)",
                          transition: { duration: 0.3 }
                        }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8 shadow-2xl shadow-orange-brand/30 hover:shadow-orange-brand/50"
                      >
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="w-16 h-px bg-gradient-to-r from-transparent via-orange-brand to-transparent mb-6"
                        ></motion.div>
                        <motion.h2
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground italic leading-tight"
                        >
                          {section.heading}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                          className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-thin italic"
                        >
                          {section.text}
                        </motion.p>
                        {section.citation && (
                          <motion.cite
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="block text-base text-muted-foreground italic mt-4"
                          >
                            - {section.citation}
                          </motion.cite>
                        )}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 1.1 }}
                          className="w-16 h-px bg-gradient-to-r from-transparent via-orange-brand to-transparent mt-6 ml-auto"
                        ></motion.div>
                      </motion.div>
                    ) : (
                      <>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">{section.heading}</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{section.text}</p>
                        {section.citation && <cite className="block text-base text-muted-foreground italic">- {section.citation}</cite>}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (section.type === 'gallery') {
          const galleryItems = section.gallery.map((src, i) => ({
            id: i.toString(),
            src: src,
            alt: `Gallery image ${i + 1}`
          }));

          return (
            <section key={index} className="py-16 bg-muted">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
                    {section.heading}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {section.content}
                  </p>
                </div>
                <GalleryGrid items={galleryItems} type="photo" />
                <div className="text-center mt-8">
                  <Link href="/facilities">
                    <Button size="lg">View More</Button>
                  </Link>
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

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
                    <span className="text-3xl"></span>
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
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
