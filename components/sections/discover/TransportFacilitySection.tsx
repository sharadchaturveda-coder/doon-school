import Image from 'next/image';

interface TransportInfo {
  title: string;
  description: string;
  image?: string;
}

interface TransportFacilitySectionProps {
  transport: TransportInfo;
}

export default function TransportFacilitySection({ transport }: TransportFacilitySectionProps) {
  return (
    <section className="py-24 px-4 bg-white text-black">
      <h2 className="text-3xl font-bold mb-16">{transport.title}</h2>

      <div className="flex flex-col md:flex-row gap-12 items-start min-h-[400px]">
        {transport.image && (
          <div className="w-full md:w-auto flex-shrink-0">
            <Image
              src={transport.image}
              alt={transport.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <p className="text-lg leading-relaxed opacity-80">{transport.description}</p>
        </div>
      </div>
    </section>
  );
}
