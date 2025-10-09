'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Hero from '../components/ui/hero';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import Link from 'next/link';
import GalleryGrid from '../components/blocks/gallery-grid';
import { GraduationCap, User, Star, Building, Users, Grid } from 'lucide-react';
import siteData from '../data/site.json';
import homeData from '../data/doon/home.json';

export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Doon International School"
        subtitle={siteData.tagline}
        videoSrc={homeData.heroSection.media.src}
        videoPoster={homeData.heroSection.media.poster}
      >
          <Link href="/about">
            <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold">
              Learn More
            </Button>
          </Link>
              <Link href="/admissions">
                <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold border-0">
                  Start Admissions
        </Button>
              </Link>
      </Hero>

      {/* Key Highlights */}
      <section className="hidden md:flex relative py-12 bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url(/assets/main-entrance.avif)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 divide-x divide-white/30">
            <div className="text-center px-4">
              <GraduationCap className="w-10 h-10 mx-auto mb-4 text-[#f2b33d]" />
              <h3 className="text-lg font-bold text-white mb-2">World-Class Infrastructure</h3>
              <p className="text-base text-gray-200">Modern classrooms, advanced labs, rich library, and smart learning tools.</p>
            </div>
            <div className="text-center px-4">
              <User className="w-10 h-10 mx-auto mb-4 text-[#f2b33d]" />
              <h3 className="text-lg font-bold text-white mb-2">Residential & Day Boarding Facilities</h3>
              <p className="text-base text-gray-200">Safe hostels, nutritious meals, comfortable stay, and secure environment.</p>
            </div>
            <div className="text-center px-4">
              <Star className="w-10 h-10 mx-auto mb-4 text-[#f2b33d]" />
              <h3 className="text-lg font-bold text-white mb-2">Sports & Extracurricular Activities</h3>
              <p className="text-base text-gray-200">Excellent sports, music, arts, drama, and holistic student development programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome to Doon International School */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-left">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1f4f8b] mb-4">Welcome to Doon International School, Jabalpur</h2>
          <div className="w-16 h-1 bg-[#f2b33d] mb-6"></div>
          <h3 className="text-xl font-bold text-[#1f4f8b] mb-4">Under the Aegis of Doon International School, Dehradun</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">Doon International School, Jabalpur is under the aegis of Doon International School, established in 1993, a leading day and residential, senior secondary school located in the Doon Valley catering to the needs of students from all parts of the world.</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">The curriculum for the school students is based on syllabi laid down by the reputed Central Board of Secondary Education, New Delhi, commonly known as the C.B.S.E.</p>
          <p className="text-lg text-muted-foreground leading-relaxed">The school aims at equipping the students with integrity, courage and compassion to face the challenges of the modern world.</p>
        </div>
      </section>

      {/* Campus Statistics */}
      <section className="py-16 bg-muted hidden md:block">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-gray-300">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <Building className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">15 Acres</h3>
                <p className="text-sm text-muted-foreground">Green Campus</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <Users className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">3,000+</h3>
                <p className="text-sm text-muted-foreground">No. of Students</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <GraduationCap className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">80+</h3>
                <p className="text-sm text-muted-foreground">Classrooms</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <Grid className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">20+</h3>
                <p className="text-sm text-muted-foreground">Labs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
  <section className="py-16 bg-[#f6f7fb]">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 min-h-[500px]">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1f4f8b] mb-4">Principal's Message</h2>
          <h3 className="text-lg font-semibold text-[#1f4f8b] mb-4">Dr. Rajiv Kumar Singh, PhD(Maths), MSc, BEd, MDP(IIM), HGSE, Principal, Doon International School.</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">At Doon International School, Jabalpur, we believe that true education goes beyond academics—it is the cultivation of values, discipline, and purpose. Guided by timeless Indian wisdom and global perspectives, our vision is to nurture resilient, ethically grounded individuals who lead with integrity and contribute meaningfully to society. We instil core values such as honesty, empathy, and self-discipline, inspired by teachings from the Bhagavad Gita and the Ramayana, ensuring that every learner is elevated through character and conscience.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Our mission is to foster holistic development through rigorous academics, experiential learning, and cultural rootedness. We empower students to think critically, act responsibly, and embrace lifelong learning. With strong partnerships between educators and families, we shape Generation Z into visionary leaders—anchored in tradition, prepared for the future, and committed to building a just and progressive nation.</p>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/2">
          <picture className="w-full h-full flex items-center justify-center">
            <source srcSet="/assets/principal.avif" type="image/avif" />
            <Image
              src="/assets/principal.webp"
              alt="Principal"
              width={300}
              height={300}
              className="object-contain rounded-lg shadow-lg"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>

      {/* Latest Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-[#1f4f8b] mb-8 text-center">Latest Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full">
                  <Image src="/images/update1.avif" alt="Admission" width={200} height={150} className="w-full h-48 object-contain bg-gray-50" />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <div className="bg-[#f2b33d] text-[#1f4f8b] inline-block px-2 py-1 text-sm rounded mb-2 font-semibold">April 4, 2025</div>
                  <h3 className="font-bold text-[#1f4f8b] mb-2">Admission Open 2025–26</h3>
                  <p className="text-muted-foreground text-sm">Doon International School offers quality education, expert faculty, modern infrastructure, and holistic development.</p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full">
                  <Image src="/images/update2.avif" alt="Facility" width={200} height={150} className="w-full h-48 object-contain bg-gray-50" />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <div className="bg-[#f2b33d] text-[#1f4f8b] inline-block px-2 py-1 text-sm rounded mb-2 font-semibold">April 4, 2025</div>
                  <h3 className="font-bold text-[#1f4f8b] mb-2">World Class Facility</h3>
                  <p className="text-muted-foreground text-sm">Secure environment ensuring safety with 24/7 security, CCTV, and strict protocols.</p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full">
                  <Image src="/images/update3.avif" alt="Campus" width={200} height={150} className="w-full h-48 object-contain bg-gray-50" />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <div className="bg-[#f2b33d] text-[#1f4f8b] inline-block px-2 py-1 text-sm rounded mb-2 font-semibold">April 4, 2025</div>
                  <h3 className="font-bold text-[#1f4f8b] mb-2">Welcome to Doon International School</h3>
                  <p className="text-muted-foreground text-sm">Doon International School, Jabalpur is under the aegis of Doon International School, established in 1993.</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#1f4f8b] text-white hover:bg-[#1f4f8b]/90 px-6 py-2">View All</Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-[#1f4f8b] mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg p-4">
              <div className="mb-4">
                <span className="bg-[#f2b33d] text-white px-3 py-1 rounded text-sm mb-2 inline-block">January 6, 2025</span>
              </div>
              <h3 className="text-lg font-bold text-[#1f4f8b] mb-2">TED Talks at UCF College</h3>
              <p className="text-muted-foreground mb-2">Bimply dummy text of the printing and typesetting industry…</p>
              <p className="text-sm text-[#f2b33d]">08:00 – 11:00 (January 20, 2027)</p>
            </Card>
            <Card className="shadow-lg p-4">
              <div className="mb-4">
                <span className="bg-[#f2b33d] text-white px-3 py-1 rounded text-sm mb-2 inline-block">October 21, 2026</span>
              </div>
              <h3 className="text-lg font-bold text-[#1f4f8b] mb-2">National Capital Leadership 2026</h3>
              <p className="text-muted-foreground mb-2">Bimply dummy text of the printing and typesetting industry…</p>
              <p className="text-sm text-[#f2b33d]">15:30 – 20:30</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#1f4f8b] text-white hover:bg-[#1f4f8b]/90 px-6 py-2">All Events</Button>
          </div>
        </div>
      </section>

      {/* Dynamic Home Sections from JSON */}
      {homeData.sections.map((section, index) => {
        if (section.type === 'image-text') {
          return (
            <section key={index} className="py-16 bg-brand-primary">
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
                          className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white italic leading-tight"
                        >
                          {section.heading}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                          className="text-xl md:text-2xl text-white/90 leading-relaxed font-thin italic"
                        >
                          {section.text}
                        </motion.p>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.9 }}
                          className="w-16 h-px bg-gradient-to-r from-transparent via-orange-brand to-transparent mt-6 ml-auto"
                        ></motion.div>
                      </motion.div>
                    ) : (
                      <>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">{section.heading}</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{section.text}</p>
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
                    <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90">View More</Button>
                  </Link>
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* Welcome Section */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-6 text-white">
              Welcome to Excellence in Education
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
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
                    <span className="text-3xl">🏢</span>
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



      {/* CTA Section */}
      <section className="py-20 bg-brand-primary -mt-10 relative z-10 rounded-t-3xl shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4 text-white">
            Ready to Join Our Community?
          </h3>
          <p className="text-lg mb-8 text-white max-w-2xl mx-auto">
            Discover how Doon International School can help your child reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-white/90 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-white/90 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
