import Button from '../../ui/button';
import Link from 'next/link';

interface CampusExperienceData {
  backgroundImage: string;
  heading: string;
  subheading: string;
  cta: {
    text: string;
    href: string;
  };
}

interface CampusExperienceSectionProps {
  campusExperience: CampusExperienceData;
}

export default function CampusExperienceSection({ campusExperience }: CampusExperienceSectionProps) {
  return (
    <section className="relative w-full bg-cover bg-center py-24 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${campusExperience.backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {campusExperience.heading}
        </h2>
        <p className="text-lg md:text-xl font-medium text-white mb-8 max-w-4xl mx-auto leading-relaxed">
          {campusExperience.subheading}
        </p>
        <Link href={campusExperience.cta.href}>
          <Button variant="primary" size="lg" className="text-white">
            {campusExperience.cta.text}
          </Button>
        </Link>
      </div>
    </section>
  );
}
