import React from 'react';
import Hero from '@/components/ui/hero';

const page = () => {
  return (
    <div>
      <Hero
        title="THE SCHOOL PHILOSOPHY"
        subtitle="Doon International School Aims"
        imageUrl="/assets/facilities/robotics.webp"
        imageAlt="Robotics lab at Doon International School"
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg leading-relaxed mb-8">
            To inspire curiosity, courage, and compassion through balanced education.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophical Foundation</h2>
            <p className="mb-6">
              The philosophy of Doon International School revolves around three core pillars: curiosity, courage, and compassion. These guiding principles inform every aspect of our educational approach, shaping a comprehensive program that nurtures the mind, spirit, and character of our students.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Curiosity</h3>
                <p className="text-sm text-blue-700">The heart of learning and innovation</p>
              </div>
              <div className="text-center bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🦁</span>
                </div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Courage</h3>
                <p className="text-sm text-red-700">Bridge between knowledge and action</p>
              </div>
              <div className="text-center bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">💝</span>
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Compassion</h3>
                <p className="text-sm text-green-700">Harmony of head and heart</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Curiosity: The Heart of Learning</h2>
            <p className="mb-6">
              Curiosity lies at the heart of learning. We believe that an inquisitive mind is the foundation of all discovery and innovation. Our philosophy emphasizes creating environments where questions are encouraged, exploration is valued, and wonder is cultivated.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cultivating Curious Minds</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Project-Based Learning:</strong> Hands-on experiences that inspire inquiry</li>
              <li><strong>Open-Ended Inquiries:</strong> Questions that lead to deeper understanding</li>
              <li><strong>Laboratory Exploration:</strong> Scientific experimentation and discovery</li>
              <li><strong>Creative Expression:</strong> Arts and innovation spaces for curiosity</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Courage: From Knowledge to Action</h2>
            <p className="mb-6">
              Courage is the bridge between knowledge and action. In our interconnected world, we prepare students not just to understand change, but to lead it. Our educational philosophy instills the confidence to voice opinions, take calculated risks, and stand up for what is right.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Building Moral Courage</h3>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-red-800 mb-3">Leadership Development Programs</h4>
              <ul className="text-red-700 space-y-1">
                <li>• Student leadership council and representation</li>
                <li>• Debate and public speaking clubs</li>
                <li>• Entrepreneurship initiatives and innovation challenges</li>
                <li>• Community advocacy and social justice projects</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compassion: Head and Heart in Harmony</h2>
            <p className="mb-6">
              Compassion completes the triad, ensuring that head and heart work in harmony. We teach empathy, understanding, and service to others as essential components of personal and professional success. Our students engage in community service, cultural exchange programs, and collaborative projects that broaden their perspectives.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Developing Empathetic Leaders</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Service Learning:</strong> Meaningful community service integrated with academic curriculum</li>
              <li><strong>Cultural Exchange:</strong> Programs that build understanding across cultures</li>
              <li><strong>Collaborative Projects:</strong> Team-based initiatives fostering cooperation</li>
              <li><strong>Social Responsibility:</strong> Education on global and local citizenship</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Balanced Education Framework</h2>
            <p className="mb-6">
              These three elements – curiosity, courage, and compassion – are woven into a balanced educational framework that integrates academic excellence with emotional intelligence, physical development with spiritual growth, and individual achievement with collective well-being.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">The Balance We Seek</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-green-800">What We Foster</h4>
                <ul className="text-sm space-y-1">
                  <li>• Self-awareness and emotional intelligence</li>
                  <li>• Physical and spiritual development</li>
                  <li>• Collective well-being and community</li>
                  <li>• Sustainability and environmental stewardship</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-blue-800">Our Educational Balance</h4>
                <ul className="text-sm space-y-1">
                  <li>• Tradition with innovation</li>
                  <li>• Discipline with creativity</li>
                  <li>• Academic rigor with joy of learning</li>
                  <li>• Individual growth with social responsibility</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Result: Thoughtful Global Citizens</h2>
            <p className="mb-6">
              By embodying this philosophy, Doon International School graduates emerge as thoughtful leaders, innovative problem-solvers, and compassionate global citizens who approach life's challenges with wisdom, resilience, and kindness.
            </p>

            <blockquote className="border-l-4 border-[#FFC940] pl-6 py-4 my-6 bg-yellow-50 italic">
              <p className="font-medium text-gray-900">
                "True education is not the filling of a pail, but the lighting of a fire."
              </p>
              <cite className="block mt-2 text-sm font-normal">— W.B. Yeats</cite>
            </blockquote>

            <div className="bg-[#102544] text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Our Promise to Students</h3>
              <p className="mb-4">
                At Doon International School, we promise to nurture your curiosity, build your courage, and develop your compassion. Through balanced education, you will emerge ready to lead, innovate, and serve in an ever-changing world.
              </p>
              <p className="text-[#FFC940] font-medium">Welcome to Doon International School – where education lights the fire within.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default page;
