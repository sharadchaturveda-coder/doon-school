'use client';

import Hero from '../components/ui/hero';
import Button from '../components/ui/button';
import Link from 'next/link';
import FeatureStripSection from '../components/blocks/feature-strip-section';
import NewsTickerSection from '../components/blocks/news-ticker-section';
import WelcomeSection from '../components/blocks/WelcomeSection';
import CampusStatsSection from '../components/blocks/campus-stats-section';

import CampusExperienceSection from '../components/sections/home/CampusExperienceSection';
import AcademicsSection from '../components/sections/home/AcademicsSection';
import UpdatesEvents from '../components/blocks/updates-events';
import TiltedCarousel from '../components/blocks/TiltedCarousel';
import siteData from '../data/site.json';
import homeData from '../data/doon/home.json';

export default function Home() {
  return (
    <>

      {/* Hero Section - Keep unchanged */}
      <Hero
        title="Doon International School"
        subtitle={siteData.tagline}
        videoSrc="/assets/hero-bg.webm"
        videoPoster="/assets/hero-fallback.avif"
      >
        <Link href="/about">
          <Button size="lg" className="btn-mobile bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Learn More
          </Button>
        </Link>
        <Link href="/admissions">
          <Button size="lg" className="btn-mobile bg-accent text-primary hover:bg-[#E0A72F] shadow-lg hover:shadow-xl w-full sm:w-auto">
            Enroll Now
          </Button>
        </Link>
      </Hero>

      {/* Feature Strip */}
      <FeatureStripSection />

      {/* Latest News Ticker */}
      <NewsTickerSection />

      <WelcomeSection />

      <CampusStatsSection />

      {/* Campus Experience */}
      <CampusExperienceSection campusExperience={homeData.campusExperience} />

      {/* Academic Life at Doon */}
      <AcademicsSection academics={homeData.academics} />

      <TiltedCarousel />
    </>
  );
}
