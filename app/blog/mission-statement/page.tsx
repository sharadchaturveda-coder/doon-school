import React from 'react';
import Hero from '@/components/ui/hero';

const page = () => {
  return (
    <div>
      <Hero
        title="MISSION STATEMENT"
        subtitle="Our educational institution has been conceptualized to educate young minds"
        imageUrl="/assets/main-hall.webp"
        imageAlt="Main hall at Doon International School"
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg leading-relaxed mb-8">
            In such a way as to make them stand tall even in the largest of crowds.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Essence of Our Mission</h2>
            <p className="mb-6">
              Our mission statement encapsulates the core purpose and philosophy that drives every aspect of Doon International School. We believe that true education goes beyond imparting knowledge; it's about cultivating character, confidence, and the ability to make meaningful contributions to society, no matter the circumstances.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Standing Tall in the Largest of Crowds</h3>
            <blockquote className="border-l-4 border-[#FFC940] pl-6 py-4 my-6 bg-gray-50 italic">
              <p className="mb-2">"Stand tall even in the largest of crowds" symbolizes our commitment to developing individuals who possess inner strength, integrity, and the courage to remain authentic in any situation.</p>
            </blockquote>
            <p className="mb-6">
              In our rapidly changing world, where conformity often overshadows individuality, our school strives to nurture leaders, innovators, and compassionate human beings who can navigate complexity with grace and conviction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Approach and Philosophy</h2>
            <p className="mb-6">
              This mission shapes our educational approach, emphasizing self-awareness, emotional intelligence, and ethical decision-making alongside academic excellence.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Educational Principles</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-[#102544] mb-2">Character Development</h4>
                <p className="text-sm">Building moral foundation and ethical values</p>
              </div>
              <div className="text-center border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-[#102544] mb-2">Confidence Building</h4>
                <p className="text-sm">Fostering self-belief and resilience</p>
              </div>
              <div className="text-center border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-[#102544] mb-2">Critical Thinking</h4>
                <p className="text-sm">Developing analytical and reasoning skills</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Curriculum and Experience</h3>
            <p className="mb-6">
              Our curriculum is designed to build resilience, foster empathy, and develop critical thinking skills that enable students to not just succeed, but to inspire others and create positive change. From early childhood through adolescence, we provide experiences that challenge students to discover their unique potential and learn the value of standing firm in their beliefs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Programs and Initiatives</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Leadership Development</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Mentorship programs connecting students with experienced leaders</li>
              <li>Student council and leadership opportunities</li>
              <li>Service-learning initiatives for community impact</li>
              <li>Public speaking and advocacy training</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Growth</h3>
            <p className="mb-6">
              We help students develop the confidence to express their ideas, advocate for justice, and contribute thoughtfully to their communities. Through various programs, students learn to navigate challenges while maintaining their authentic selves.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">A Collective Mission</h2>
            <p className="mb-6">
              Our mission is realized through the collective efforts of our dedicated faculty, supportive parents, and inspiring students. Together, we create an environment where every individual feels empowered to:
            </p>
            <div className="bg-[#102544] text-white p-6 rounded-lg mb-6">
              <ul className="space-y-3">
                <li>• Stand tall and express their true selves</li>
                <li>• Make their voice heard in meaningful ways</li>
                <li>• Lead with purpose and integrity</li>
                <li>• Shape the future rather than just adapt to it</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Future-Ready Graduates</h3>
            <p className="mb-6">
              This holistic approach ensures that our graduates are not just prepared for the future, but actively shaping it – equipped with the inner strength to stand tall even in the largest of crowds, making positive contributions to an ever-changing world.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default page;
