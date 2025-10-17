'use client';

import Hero from '../components/ui/hero';
import Button from '../components/ui/button';
import Link from 'next/link';
import FeatureStripSection from '../components/blocks/feature-strip-section';
import NewsTickerSection from '../components/blocks/news-ticker-section';
import WelcomeSection from '../components/blocks/WelcomeSection';
import CampusStatsSection from '../components/blocks/campus-stats-section';
import PrincipalVision from '../components/blocks/principal-vision';
import JoinUsToday from '../components/blocks/join-us-today';
import UpdatesEvents from '../components/blocks/updates-events';
import VisualHighlights from '../components/sections/home/VisualHighlights';
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
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold">
            Learn More
          </Button>
        </Link>
        <Link href="/admissions">
          <Button size="lg" className="bg-accent text-primary hover:bg-[#E0A72F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold">
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

      {/* Join Us Today */}
      <JoinUsToday />

      {/* Principal Vision */}
      <PrincipalVision />

      {/* Latest Updates + Upcoming Events */}
      <UpdatesEvents
        latestUpdates={homeData.latestUpdates}
        upcomingEvents={homeData.upcomingEvents}
      />

      {/* Our Visual Highlights */}
      <VisualHighlights />
    </>
  );
}
