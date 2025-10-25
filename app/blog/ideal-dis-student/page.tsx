import React from 'react';
import Hero from '@/components/ui/hero';

const page = () => {
  return (
    <div>
      <Hero
        title="IDEAL DIS STUDENT"
        subtitle="We want our children to be equipped with..."
        imageUrl="/assets/facilities/computer-lab.webp"
        imageAlt="Computer lab at Doon International School"
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg leading-relaxed mb-8">
            Moral values, honesty, linguistic skills, curiosity, and tolerance.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Vision of Excellence</h2>
            <p className="mb-6">
              At Doon International School, our vision of the ideal student goes beyond academic achievement. We strive to develop well-rounded individuals who embody moral integrity, intellectual curiosity, and social responsibility. The ideal DIS student represents the perfect balance of character, competence, and compassion that prepares them for leadership in an interconnected world.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Attributes</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Moral Foundation</h3>
            <p className="mb-4">
              Moral values form the foundation of our students' development. We teach ethical decision-making, responsibility, and respect for others, ensuring that our graduates lead lives of purpose and integrity.
            </p>
            <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">Key Moral Principles</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Ethical decision-making</li>
                <li>• Personal responsibility</li>
                <li>• Respect for all individuals</li>
                <li>• Integrity in actions and words</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Honesty as Cornerstone</h3>
            <p className="mb-6">
              Honesty is paramount – we create an environment where truthfulness is valued and modeled by both faculty and students. Our honor code and community standards reinforce that honesty builds trust and strengthens character.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Communication Skills</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Multilingual Proficiency</h3>
            <p className="mb-4">
              Linguistic skills are crucial in our global society. Our students become proficient in multiple languages, mastering communication not just as a practical skill, but as a bridge to understanding diverse cultures.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Language Programs</h4>
                <ul className="text-sm space-y-1">
                  <li>• English language immersion</li>
                  <li>• Hindi language and literature</li>
                  <li>• French and Mandarin options</li>
                  <li>• Cultural context studies</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Communication Skills</h4>
                <ul className="text-sm space-y-1">
                  <li>• Public speaking training</li>
                  <li>• Cultural exchange programs</li>
                  <li>• Cross-cultural dialogue practice</li>
                  <li>• Digital communication tools</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Curiosity</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifelong Learning Mindset</h3>
            <p className="mb-4">
              Curiosity drives lifelong learning. We nurture inquisitive minds through inquiry-based learning, project work, and opportunities for exploration.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Inquiry-Based Learning:</strong> Students ask questions and seek answers through research</li>
              <li><strong>Project-Based Activities:</strong> Hands-on projects that encourage creative problem-solving</li>
              <li><strong>Exploration Programs:</strong> Field trips, guest speakers, and experiential learning opportunities</li>
              <li><strong>Innovation Labs:</strong> Spaces where students can experiment and create</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Social Harmony and Tolerance</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Building Inclusive Communities</h3>
            <p className="mb-4">
              Tolerance and empathy round out our vision. In an increasingly diverse society, we prepare students to embrace differences, understand multiple perspectives, and build inclusive communities.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">Diversity and Inclusion Initiatives</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Intercultural exchange programs</li>
                <li>• Community service projects</li>
                <li>• Collaborative learning experiences</li>
                <li>• Anti-bullying and respect education</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Complete Package</h2>
            <p className="mb-6">
              The ideal DIS student emerges as a confident, compassionate leader who uses their moral compass to guide decisions, their linguistic abilities to communicate effectively, their curiosity to innovate, and their tolerance to build bridges.
            </p>

            <div className="bg-[#FFC940] text-[#102544] p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">Ready for Global Challenges</h3>
              <p className="font-medium">
                Equipped with these qualities, our students are ready to face global challenges and contribute positively to society. They don't just adapt to change – they drive it, creating a more just, peaceful, and sustainable world.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Commitment</h3>
            <p className="mb-6">
              At Doon International School, we are committed to nurturing these qualities in every student, recognizing that true education develops the whole person – intellectually, emotionally, socially, and spiritually.
            </p>

            <blockquote className="border-l-4 border-[#102544] pl-6 py-4 my-6 italic">
              "The ideal student is not a vessel to be filled, but a flame to be lit."
              <cite className="block mt-2 text-sm">— Doon International School Philosophy</cite>
            </blockquote>
          </article>
        </div>
      </section>
    </div>
  );
};

export default page;
