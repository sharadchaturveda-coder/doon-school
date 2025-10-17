"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    image: "/images/inspiration-1.jpg",
    subtitle: "The Inspiration. The Beginning.",
    title: "Inspired by the words of celebrated J. Krishnamurti (1895–1986)",
    desc: "Thinker, philosopher, teacher — we set out to create an institution that unfettered young minds.",
  },
  {
    id: 2,
    image: "/images/inspiration-2.jpg",
    subtitle: "Towards Excellence in Education",
    title: "Doon International School is an acknowledged institution of excellence",
    desc: "A co-educational, day and residential school operating out of three campuses – Dehradun City, Riverside and Mohali.",
  },
  {
    id: 3,
    image: "/images/inspiration-3.jpg",
    subtitle: "Mission Statement",
    title: "Our educational institution has been conceptualized to educate young minds",
    desc: "In such a way as to make them stand tall even in the largest of crowds.",
  },
  {
    id: 4,
    image: "/images/inspiration-4.jpg",
    subtitle: "Ideal DIS Student",
    title: "We want our children to be equipped with…",
    desc: "A set of moral values, honesty, integrity, linguistic and scientific skills, and respect for others.",
  },
  {
    id: 5,
    image: "/images/inspiration-5.jpg",
    subtitle: "School Philosophy",
    title: "Doon International School Aims",
    desc: "To inspire curiosity, courage, and compassion through a balanced education system.",
  },
  {
    id: 6,
    image: "/images/inspiration-6.jpg",
    subtitle: "Truly International",
    title: "At the time of its inception",
    desc: "The founders felt the need to create an educational institution that is truly international in spirit and standards.",
  },
];

export default function InspirationGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0A0E1A] py-16">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* scrollable cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-6 snap-x snap-mandatory scroll-smooth px-10"
        >
          {cards.map((c) => (
            <div
              key={c.id}
              className="relative flex-shrink-0 w-[320px] md:w-[400px] h-[500px] md:h-[550px] rounded-sm overflow-hidden snap-start transform hover:scale-[1.03] transition-transform duration-300 ease-out group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{ backgroundImage: `url(${c.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <p className="text-[11px] uppercase tracking-wider font-semibold bg-black/70 inline-block px-2 py-[2px] rounded-sm mb-2">
                  {c.subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-bold leading-snug">{c.title}</h3>
                <p className="text-gray-200 text-sm mt-2">{c.desc}</p>
                <p className="text-accent text-xs font-semibold uppercase mt-3 tracking-wide">
                  Read More →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
