import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteData from '../../data/site.json';
import Button from '../../components/ui/button';

const GalleryLandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Gallery | {siteData.siteName}</title>
        <meta name="description" content={`Explore the photo and video gallery of ${siteData.siteName}.`} />
      </Head>
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Our Gallery</h1>
        <p className="text-lg font-body text-text-DEFAULT max-w-3xl mx-auto mb-12">
          Step into the vibrant world of Doon International School through our captivating photo and video galleries. Relive memorable moments, celebrate achievements, and get a glimpse of daily life on campus.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/gallery/photos" passHref>
            <Button variant="primary" size="lg">View Photos</Button>
          </Link>
          <Link href="/gallery/videos" passHref>
            <Button variant="outline" size="lg">Watch Videos</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default GalleryLandingPage;