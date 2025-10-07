import React from 'react';
import Head from 'next/head';
import siteData from '../../../data/site.json';
import galleryData from '../../../data/gallery.json';
import GalleryGrid from '../../../components/blocks/gallery-grid';

const PhotoGalleryPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Photo Gallery | {siteData.siteName}</title>
        <meta name="description" content={`Browse photos from events and campus life at ${siteData.siteName}.`} />
      </Head>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Photo Gallery</h1>
        <p className="text-lg font-body text-text-DEFAULT max-w-3xl mx-auto mb-12 text-center">
          A collection of memorable moments, events, and daily life at Doon International School.
        </p>
        {galleryData.photos.length > 0 ? (
          <GalleryGrid items={galleryData.photos} type="photo" />
        ) : (
          <p className="text-center text-lg text-text-light">No photos available at this time.</p>
        )}
      </section>
    </>
  );
};

export default PhotoGalleryPage;