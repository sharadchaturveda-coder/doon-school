import React from 'react';
import Head from 'next/head';
import siteData from '../../../data/site.json';
import galleryData from '../../../data/gallery.json';
import GalleryGrid from '../../../components/blocks/gallery-grid';

const VideoGalleryPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Video Gallery | {siteData.siteName}</title>
        <meta name="description" content={`Watch videos showcasing events and campus life at ${siteData.siteName}.`} />
      </Head>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Video Gallery</h1>
        <p className="text-lg font-body text-text-DEFAULT max-w-3xl mx-auto mb-12 text-center">
          Watch our school events, student performances, and campus tours.
        </p>
        {galleryData.videos.length > 0 ? (
          <GalleryGrid items={galleryData.videos} type="video" />
        ) : (
          <p className="text-center text-lg text-text-light">No videos available at this time.</p>
        )}
      </section>
    </>
  );
};

export default VideoGalleryPage;