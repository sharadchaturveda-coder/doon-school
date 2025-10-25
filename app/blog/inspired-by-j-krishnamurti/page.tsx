import React from 'react';
import Hero from '@/components/ui/hero';

const page = () => {
  return (
    <div>
      <Hero
        title="Inspired by the words of celebrated J. Krishnamurti (1895–1986)"
        subtitle="Thinker-philosopher-teacher, we set out to create an institution that unfettered young minds."
        imageUrl="/assets/facilities/classroom.webp"
        imageAlt="Classroom at Doon International School"
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg leading-relaxed mb-8">
            Thinker-philosopher-teacher, we set out to create an institution that unfettered young minds.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Legacy of J. Krishnamurti</h2>
            <p className="mb-6">
              J. Krishnamurti was a profound influence on modern education and philosophy. Born in 1895 in Madanapalle, India, Krishnamurti grew up to become one of the most insightful thinkers of the 20th century. His teachings emphasized the importance of freedom from conditioning, self-knowledge, and the awakening of intelligence in education.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Krishnamurti's Educational Philosophy</h3>
            <p className="mb-6">
              Krishnamurti believed that true education goes beyond mere knowledge acquisition. Instead, it involves:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>The cultivation of wisdom and inner peace</li>
              <li>Freedom from psychological conditioning</li>
              <li>The development of holistic intelligence</li>
              <li>Understanding the interconnectedness of all things</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Doon International School's Approach</h2>
            <p className="mb-6">
              At Doon International School, we draw inspiration from Krishnamurti's philosophy. Our educational approach encourages students to question, explore, and discover their own truths, rather than following prescribed paths.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Curriculum Integration</h3>
            <p className="mb-6">
              This philosophy shapes our curriculum, which integrates traditional academics with experiential learning, mindfulness practices, and opportunities for self-reflection. We believe that by fostering an environment where young minds can unfetter themselves from societal expectations and conditioning, we prepare them for the complexities of the modern world.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Learning Environment</h3>
            <p className="mb-6">
              Our classrooms are designed to stimulate curiosity and critical thinking. Teachers serve as facilitators, guiding students toward independent learning and personal growth. Through this Krishnamurti-inspired approach, we aim to develop not just scholars, but well-rounded individuals capable of contributing meaningfully to society.
            </p>

            <blockquote className="border-l-4 border-[#FFC940] pl-4 py-2 my-6 italic">
              "Education is not just about conformity, but about the flowering of intelligence."
              <cite className="block mt-2 text-sm">— J. Krishnamurti</cite>
            </blockquote>
          </article>
        </div>
      </section>
    </div>
  );
};

export default page;
