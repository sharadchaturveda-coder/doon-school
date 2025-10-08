'use client';

import React from 'react';

interface JourneyPoint {
  title: string;
  description: string;
  progress: number;
}

interface Metric {
  number: string;
  label: string;
}

interface Layer {
  type: string;
  src: string;
}

interface HeroSequence {
  layers: Layer[];
  mainHeading: string;
  subHeading: string;
  metrics: Metric[];
}

interface EntrancePortalProps {
  heroSequence: HeroSequence;
  journeyPoints: JourneyPoint[];
}

const ImmersiveEntrancePortal: React.FC<EntrancePortalProps> = ({
  heroSequence,
  journeyPoints
}) => {
  return (
    <div className="relative h-[450vh] overflow-hidden">
      <div className="sticky top-0 h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">{heroSequence.mainHeading}</h1>
          <p className="text-xl">{heroSequence.subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveEntrancePortal;
