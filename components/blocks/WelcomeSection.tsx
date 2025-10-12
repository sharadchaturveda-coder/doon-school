import React from "react";

export default function WelcomeSection() {
  return (
    <>
      <section
        id="welcome"
        className="relative z-[3] w-full bg-white pb-0 mb-12 pt-16 md:pt-20"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#001F48] text-center mb-4 relative inline-block">
            Welcome to Doon International School, Jabalpur
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></span>
          </h2>
          <p className="italic text-[#001F48] text-center font-bold mb-8">
            "Under the Aegis of Doon International School, Dehradun"
          </p>
          <div className="text-gray-700 font-body leading-relaxed text-[15px] space-y-5">
            <p>
              Doon International School, Jabalpur is under the aegis of Doon International School,
              established in the year 1993, is a leading day and residential, senior secondary school,
              located in the Doon Valley catering to the needs of students from all parts of the world.
              It prepares students according to the standards prevailing in various countries, including India.
            </p>
            <p>
              The courses of study as well as norms of achievement in every field are aimed at preparing
              them for educational qualifications acceptable throughout the world. The curriculum for the
              school students is based on syllabi laid down by the reputed Central Board of Secondary Education,
              New Delhi, commonly known as the C.B.S.E.
            </p>
            <p>
              Doon International School, Jabalpur follows the same curriculum and aims at equipping the
              students with integrity, courage and compassion to face the challenges of the modern world.
            </p>
          </div>
      </div>
    </section>
    </>
  );
}
