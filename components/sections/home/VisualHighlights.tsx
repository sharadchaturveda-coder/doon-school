import Image from 'next/image';

export default function VisualHighlights() {
  return (
    <section className="relative w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and subtext */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary">
            Our Visual Highlights
          </h2>
          <p className="font-body text-gray-700 text-[15px] mt-2 max-w-3xl mx-auto leading-relaxed">
            Our Visual Highlights showcase unforgettable moments, achievements, and
            daily life at our school. Explore vibrant snapshots of academics, sports,
            events, and extracurricular activities that reflect our dynamic learning
            environment.
          </p>
        </div>

        {/* Collage layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6px]">
          {/* COLUMN 1 — slightly larger images */}
          <div className="flex flex-col gap-[6px]">
            <img src="/assets/home_visual_highlights/visual-highlight-1.jpg" alt="" className="w-full h-[280px] object-cover rounded-sm" />
            <img src="/assets/home_visual_highlights/visual-highlight-2.jpg" alt="" className="w-full h-[260px] object-cover rounded-sm" />
            <img src="/assets/home_visual_highlights/visual-highlight-3.jpg" alt="" className="w-full h-[290px] object-cover rounded-sm" />
            <img src="/assets/home_visual_highlights/visual-highlight-4.jpg" alt="" className="w-full h-[270px] object-cover rounded-sm" />
          </div>

          {/* COLUMN 2 — slightly smaller than column 1 */}
          <div className="flex flex-col gap-[6px]">
            <img src="/assets/home_visual_highlights/visual-highlight-5.jpeg" alt="" className="w-full h-[230px] object-cover rounded-sm" />
            <img src="/assets/home_visual_highlights/visual-highlight-6.jpeg" alt="" className="w-full h-[240px] object-cover rounded-sm" />
            <img src="/assets/home_visual_highlights/visual-highlight-7.jpeg" alt="" className="w-full h-[220px] object-cover rounded-sm" />
            <img src="/assets/home_visual_highlights/visual-highlight-8.jpeg" alt="" className="w-full h-[250px] object-cover rounded-sm" />
          </div>

          {/* COLUMN 3 — alternating smaller and regular sizes */}
          <div className="flex flex-col gap-[6px]">
            <img src="/assets/home_visual_highlights/visual-highlight-9.jpeg" alt="" className="w-full h-[230px] object-cover rounded-sm" />
            <img src="/assets/home_visual_highlights/visual-highlight-10.jpeg" alt="" className="w-full h-[240px] object-cover rounded-sm" />
            <img src="/assets/home_visual_highlights/visual-highlight-11.jpeg" alt="" className="w-full h-[200px] object-cover rounded-sm" />
            <img src="/assets/home_visual_highlights/visual-highlight-12.jpeg" alt="" className="w-full h-[240px] object-cover rounded-sm" />
          </div>
        </div>

        {/* Description paragraph below collage */}
        <div className="max-w-4xl mx-auto mt-10">
          <p className="font-body text-gray-600 text-[15px] leading-relaxed text-center md:text-left">
            The school campus offers a learner-friendly environment with a fine blend of
            functionality and aesthetics. From its firm foundation, the school building
            soars to an eight-storeyed vertical structure, symbolising an educational
            setting that enables students to rise to greater heights. CCTV surveillance
            system, wide corridors and staircases, fire prevention system, and deployment
            of security personnel are among the several safety and security measures taken
            by the School to ensure a safe campus environment. All facilities in the
            school are IT-enabled, with a provision for broadband connectivity and
            conducting virtual/hybrid classes.
          </p>
        </div>
      </div>
    </section>
  );
}
