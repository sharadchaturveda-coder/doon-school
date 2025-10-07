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
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="relative w-full h-48">
              <iframe
                src={item.src}
                title={item.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-t-lg"
              ></iframe>
            </div>
          )}
          <div className="p-4">
            <p className="font-body text-text-DEFAULT text-sm">{item.alt}</p>
          </div>
        </Card>
      ))}
    </Grid>
  );
};

export default GalleryGrid;