'use client';

import PrincipalVision from '../../components/blocks/principal-vision';

export default function PrincipalVisionPage() {
  return (
    <div className="mt-24">
      <PrincipalVision />

      {/* Principal's Educational Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Educational Philosophy
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Guiding principles that shape our approach to holistic education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Vision for Tomorrow</h3>
              <p className="text-gray-700 font-body leading-relaxed">
                Our commitment extends beyond academic excellence. We foster critical thinking, ethical decision-making,
                and a deep appreciation for cultural diversity. Students develop the confidence to navigate an
                interconnected world with compassion and purpose.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Leadership Through Example</h3>
              <p className="text-gray-700 font-body leading-relaxed">
                As educational leaders, we demonstrate the values we teach. Integrity, dedication, and innovation
                guide our daily commitment to nurturing young minds. Our leadership creates an environment where
                potential is recognized and excellence is celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Background & Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Leadership Journey
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed max-w-3xl mx-auto">
              A dedicated career in education, committed to excellence since 1985
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Doctorate in Education and extensive research in child development psychology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Global Perspective</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                International educational collaborations and exposure to diverse teaching methodologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pioneering modern educational approaches while honoring traditional values
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Commitments */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Commitments to Our Community
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Guiding principles that define our promise to parents and students
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: "🤝",
                title: "Transparency & Communication",
                description: "Open dialogue with parents and the community, regular progress updates, and transparent decision-making processes."
              },
              {
                icon: "🚀",
                title: "Continuous Improvement",
                description: "Regular evaluation and enhancement of teaching methodologies, facilities, and student support systems."
              },
              {
                icon: "💎",
                title: "Value-Based Education",
                description: "Instilling moral values, ethical principles, and social responsibility alongside academic excellence."
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Partnership",
                description: "Working collaboratively with parents as equal partners in the educational journey of every child."
              }
            ].map((commitment, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{commitment.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{commitment.title}</h3>
                  <p className="text-gray-700 font-body leading-relaxed">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message & Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            A Message from Our Principal
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            "Education is not merely about preparing students for examinations, but for life itself.
            Our goal is to create compassionate, capable, and confident global citizens who will
            contribute positively to society and adapt to an ever-changing world."
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <p className="text-lg italic text-white/80">
              — Dr. Rajiv Kumar Singh, Principal
            </p>
            <p className="text-sm text-white/60 mt-2">
              Ed.D. in Educational Leadership, 25+ years of educational excellence
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Connect with Us
            </a>
            <a
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Our Educational Approach
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
