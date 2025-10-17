"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: "s1", subtitle: "THE INSPIRATION. THE BEGINNING.", title: "Inspired by the words of celebrated J. Krishnamurti (1895–1986)", desc: "Thinker-philosopher-teacher, we set out to create an institution that unfettered young minds." },
  { id: "s2", subtitle: "TOWARDS EXCELLENCE IN EDUCATION", title: "Doon International School is an acknowledged institution of excellence", desc: "A co-educational, day and residential school operating out of three campuses – Dehradun City, Riverside and Mohali." },
  { id: "s3", subtitle: "MISSION STATEMENT", title: "Our educational institution has been conceptualized to educate young minds", desc: "In such a way as to make them stand tall even in the largest of crowds." },
  { id: "s4", subtitle: "IDEAL DIS STUDENT", title: "We want our children to be equipped with...", desc: "Moral values, honesty, linguistic skills, curiosity, and tolerance." },
  { id: "s5", subtitle: "THE SCHOOL PHILOSOPHY", title: "Doon International School Aims", desc: "To inspire curiosity, courage, and compassion through balanced education." },
  { id: "s6", subtitle: "TRULY INTERNATIONAL", title: "At the time of its inception", desc: "The founders felt the need to create an institution truly international in spirit and standards." },
];

export default function TiltedCarousel() {
  const [index, setIndex] = useState(1); // center index
  const containerRef = useRef<HTMLDivElement | null>(null);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => Math.min(slides.length - 1, i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // helper: normalized relative position (-floor(n/2) .. +floor(n/2))
  const normalizedPos = (i: number, current: number) => {
    const raw = i - current;
    const half = Math.floor(slides.length / 2);
    // normalize to range -half..+half
    if (raw > half) return raw - slides.length;
    if (raw < -half) return raw + slides.length;
    return raw;
  };

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative bg-[#102544] py-24 overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Towards Excellence
        <span className="block h-[2px] w-16 bg-[#FFC940] mx-auto mt-2"></span>
      </h2>
      <div className="carousel-perspective max-w-[1400px] mx-auto px-6">
        {/* cards wrapper MUST have the preserve-3d class */}
        <div ref={containerRef} className="carousel-3d relative h-[600px] flex items-center justify-center">
          {slides.map((s, i) => {
            const pos = normalizedPos(i, index); // negative = left, 0 = center, positive = right

            // ---- geometry math ----
            // rotation: each step = 16deg; center 0
            const rotateY = pos * -16; // negative pos -> rotateY positive etc (tweak sign if needed)
            // translateX: spread them horizontally
            const translateX = pos * 380; // adjust spacing
            // translateZ: center pushed forward, neighbors slightly forward/back
            const translateZ = pos === 0 ? 110 : Math.max(-60, 40 - Math.abs(pos) * 40);
            // scale: center slightly larger
            const scale = pos === 0 ? 1.03 : pos === 1 || pos === -1 ? 0.98 : 0.92;
            const opacity = Math.abs(pos) > 3 ? 0 : 1;
            const zIndex = 50 - Math.abs(pos);

            // inline style
            const style = {
              transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
              transition: "transform 520ms cubic-bezier(.22,.9,.31,1), opacity 300ms ease, box-shadow 300ms ease",
              filter: "drop-shadow(0 10px 35px rgba(0,0,0,0.45))",
              zIndex,
              opacity,
            } as React.CSSProperties;

            return (
              <article
                key={s.id}
                className="carousel-card absolute w-[340px] md:w-[420px] h-[520px] md:h-[600px] rounded-sm overflow-hidden shadow-lg cursor-pointer"
                style={style}
                onClick={() => setIndex(i)}
                aria-hidden={Math.abs(pos) > 3}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setIndex(i); }}
              >
                {/* Placeholder image background (replace with real image via style.backgroundImage later) */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#173A66] via-[#1F4F8B] to-[#173A66] bg-cover bg-center"
                  style={{ backgroundColor: "#1C2F4F" }}
                />

                {/* dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* soft top light for cinematic depth */}
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

                {/* content area aligned bottom-left */}
                <div className="relative z-20 p-6 h-full flex flex-col justify-end text-white">
                  <span className="inline-block bg-[#0E1C30]/90 text-[#FFC940] px-2 py-[3px] text-[11px] uppercase tracking-wider rounded-sm shadow-sm">{s.subtitle}</span>
                  <h3 className="mt-4 font-semibold text-lg md:text-2xl leading-snug text-white">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-200/90 mt-3 leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-4">
                    <span className="text-[#F6C75A] uppercase text-xs font-medium tracking-wide hover:underline">Read More →</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* arrows bottom-right */}
        <div className="absolute right-12 bottom-10 flex gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <button
            onClick={prev}
            className="w-9 h-9 border border-white/70 rounded-full flex items-center justify-center hover:bg-white/10 transition"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 border border-white/70 rounded-full flex items-center justify-center hover:bg-white/10 transition"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
