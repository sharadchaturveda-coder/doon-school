import React from 'react';
import Hero from '@/components/ui/hero';

const page = () => {
  return (
    <div>
      <Hero
        title="TRULY INTERNATIONAL"
        subtitle="At the time of its inception"
        imageUrl="/assets/facilities/horses.webp"
        imageAlt="Horse riding facilities at Doon International School"
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg leading-relaxed mb-8">
            The founders felt the need to create an institution truly international in spirit and standards.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A Vision Beyond Borders</h2>
            <p className="mb-6">
              From its inception, Doon International School was envisioned as more than just a local educational institution. The founders recognized that in an increasingly globalized world, educational experiences must transcend geographical boundaries, cultural limitations, and nationalistic perspectives. Their vision was to create a school that embodies international standards while nurturing global citizenship and cross-cultural understanding.
            </p>

            <blockquote className="border-l-4 border-[#FFC940] pl-6 py-4 my-6 bg-yellow-50 italic">
              <p className="font-medium text-gray-900">
                "The founders felt the need to create an institution truly international in spirit and standards."
              </p>
              <cite className="block mt-2 text-sm font-normal">— Doon International School Founding Vision</cite>
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Multicultural Community</h2>
            <p className="mb-6">
              A truly international school requires more than an international curriculum or faculty diversity – it demands a fundamental commitment to global perspectives in all aspects of education. At DIS, this international spirit manifests in our multicultural community, where students and teachers from diverse backgrounds come together to learn, grow, and collaborate.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Perspectives in Education</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Cultural Diversity</h4>
                <ul className="text-sm space-y-1">
                  <li>• Students from multiple nationalities</li>
                  <li>• International faculty with global experience</li>
                  <li>• Cross-cultural mentorship programs</li>
                  <li>• Multilingual learning environments</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Collaborative Learning</h4>
                <ul className="text-sm space-y-1">
                  <li>• Global project collaborations</li>
                  <li>• International exchange programs</li>
                  <li>• Virtual learning partnerships</li>
                  <li>• International competitions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Curriculum Excellence</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">International Frameworks</h3>
            <p className="mb-4">
              Our curriculum incorporates international frameworks like the International Baccalaureate alongside traditional Indian education systems, ensuring that students receive education that is both globally relevant and locally meaningful.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>IB Curriculum:</strong> International Baccalaureate programs for global mobility</li>
              <li><strong>CBSE Alignment:</strong> Indian curriculum with international standards</li>
              <li><strong>Dual Certification:</strong> Preparation for both Indian and international universities</li>
              <li><strong>Cultural Integration:</strong> Blending local traditions with global perspectives</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">University Preparation</h3>
            <p className="mb-6">
              This blend prepares students to excel in international universities while maintaining a deep appreciation for their cultural roots. Our graduates gain admission to top universities worldwide, including Oxbridge, Ivy League, and leading Asian institutions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Awareness Programs</h2>
            <p className="mb-6">
              We foster global awareness through exchange programs, international partnerships, and virtual collaborations with schools worldwide. Students participate in Model United Nations conferences, international competitions, and cultural immersion programs that broaden their perspectives and develop cross-cultural communication skills.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">International Experiences</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-blue-800 mb-3">Global Learning Initiatives</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Model United Nations (MUN) conferences</li>
                <li>• International student exchange programs</li>
                <li>• Virtual collaboration with global schools</li>
                <li>• International competitions and contests</li>
                <li>• Cultural immersion experiences</li>
                <li>• Languages and cultural studies programs</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Beyond Academics: Global Citizenship</h2>
            <p className="mb-6">
              Truly international standards extend beyond academics to encompass environmental stewardship, ethical leadership, and service to humanity. Our students learn to address global challenges like climate change, poverty, and social injustice, understanding that solutions require international cooperation and understanding.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Responsibility Framework</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 border-2 border-green-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-2xl">🌱</span>
                </div>
                <h5 className="font-semibold text-green-800">Environmental Stewardship</h5>
                <p className="text-xs text-green-600 mt-1">Climate action and sustainability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-2xl">⚖️</span>
                </div>
                <h5 className="font-semibold text-blue-800">Ethical Leadership</h5>
                <p className="text-xs text-blue-600 mt-1">Moral decision-making globally</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 border-2 border-purple-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 text-2xl">🤝</span>
                </div>
                <h5 className="font-semibold text-purple-800">Service to Humanity</h5>
                <p className="text-xs text-purple-600 mt-1">Global community service</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shaping Global Citizens</h2>
            <p className="mb-6">
              The international spirit at Doon International School creates leaders who think globally but act locally, individuals who respect diversity while celebrating unity, and citizens of the world who are prepared to contribute meaningfully to an interconnected future.
            </p>

            <div className="bg-[#102544] text-white p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3 text-white">The Global Citizen Profile</h3>
              <p className="mb-4">
                Our graduates emerge as:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Global Thinkers:</strong> Understanding complex international issues</li>
                <li>• <strong>Local Actors:</strong> Making positive contributions in their communities</li>
                <li>• <strong>Cultural Bridges:</strong> Facilitating understanding across cultures</li>
                <li>• <strong>Innovative Leaders:</strong> Solving global challenges creatively</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">A Lasting Vision</h3>
            <p className="mb-6">
              This vision, established at our inception, continues to guide our journey as we shape the next generation of global citizens. In an increasingly interconnected world, Doon International School remains committed to preparing students for leadership on the global stage.
            </p>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-center text-[#102544] font-semibold">
                🌍 Doon International School: Creating Tomorrow's Global Leaders Today 🌎
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default page;
