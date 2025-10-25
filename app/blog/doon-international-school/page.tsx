import React from 'react';
import Hero from '@/components/ui/hero';

const page = () => {
  return (
    <div>
      <Hero
        title="Towards Excellence in Education"
        subtitle="Doon International School is an acknowledged institution of excellence"
        imageUrl="/assets/main-entrance.webp"
        imageAlt="Main entrance at Doon International School"
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg leading-relaxed mb-8">
            A co-educational, day and residential school in Jabalpur, providing quality education with modern facilities and holistic development.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Institution of Excellence</h2>
            <p className="mb-6">
              Doon International School Jabalpur's reputation as an institution of excellence stems from our unwavering commitment to academic rigor, holistic development, and innovative pedagogical approaches. Located in the vibrant city of Jabalpur, our school provides world-class education that prepares students for global success while honoring local traditions and values.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Jabalpur Location</h2>
            <p className="mb-4">
              Situated in Jabalpur, Madhya Pradesh, our school benefits from the city's rich cultural heritage, industrial growth, and educational significance. This prime location offers:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Cultural Advantage</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Proximity to ancient temples and monuments</li>
                  <li>• Rich historical significance</li>
                  <li>• Strong community connections</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Educational Hub</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Access to prestigious universities</li>
                  <li>• Research institutions nearby</li>
                  <li>• Qualified pool of educators</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Modern Campus Facilities</h3>
            <p className="mb-6">
              Our Jabalpur campus features state-of-the-art facilities designed to enhance learning and development. From technologically equipped classrooms to expansive sports fields, we provide an environment that inspires innovation and supports the holistic growth of every student.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Holistic Educational Approach</h2>
            <p className="mb-6">
              Excellence at Doon International School goes beyond academic performance. We nurture well-rounded individuals who excel in multiple domains through a balanced approach.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Curriculum Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Core Skills</h4>
                <ul className="text-sm space-y-1">
                  <li>• Critical thinking</li>
                  <li>• Problem-solving</li>
                  <li>• Creativity</li>
                  <li>• Character development</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Global Perspective</h4>
                <ul className="text-sm space-y-1">
                  <li>• International outlook</li>
                  <li>• Local relevance</li>
                  <li>• Cultural understanding</li>
                  <li>• Ethical leadership</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Faculty Excellence</h3>
            <p className="mb-6">
              Our faculty comprises highly qualified educators committed to continuous professional development and innovative teaching methods. Through ongoing training and research, they remain at the forefront of educational best practices, ensuring students receive education that prepares them for tomorrow's challenges.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements and Recognition</h2>
            <p className="mb-4">
              Our track record speaks to the effectiveness of our approach:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li><strong>Academic Excellence:</strong> Consistently high board exam results</li>
                <li><strong>University Placements:</strong> Students accepted at prestigious global institutions</li>
                <li><strong>Alumni Success:</strong> Graduates making significant contributions worldwide</li>
                <li><strong>Competitive Victories:</strong> Regular winners in national and international competitions</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Co-Curricular Excellence</h3>
            <p className="mb-6">
              Beyond academics, we have a vibrant co-curricular program encompassing arts, sports, community service, and leadership development. These activities foster well-rounded growth and prepare students to excel in all aspects of life.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default page;
