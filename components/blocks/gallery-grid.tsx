import React from 'react';
import Image from 'next/image';
import Card from '../ui/card';
import Grid from '../ui/grid';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  type: 'photo' | 'video';
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, type }) => {
  return (
    <Grid smCols={1} mdCols={2} lgCols={3} gap="gap-6">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          {type === 'photo' ? (
            <div className="relative w-full h-48">
              <picture>
                <source srcSet={item.src} type="image/avif" />
                <Image
                  src={item.src.replace('.avif', '.webp')}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </picture>
            </div>
          ) : (
            <div className="relative w-full h-48">
              <iframe
                src={item.src}
                title={item.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          )}
        </Card>
      ))}
    </Grid>
  );
};

export default GalleryGrid;
