"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useSpring, useTransform } from "framer-motion";

const slides = [
  {
    id: "s1",
    subtitle: "THE INSPIRATION. THE BEGINNING.",
    title: "Inspired by the words of celebrated J. Krishnamurti (1895–1986)",
    desc: "Thinker-philosopher-teacher, we set out to create an institution that unfettered young minds.",
    image: "/assets/facilities/classroom.webp",
  },
  {
    id: "s2",
    subtitle: "TOWARDS EXCELLENCE IN EDUCATION",
    title: "Doon International School is an acknowledged institution of excellence",
    desc: "A co-educational, day and residential school operating out of three campuses – Dehradun City, Riverside and Mohali.",
    image: "/assets/main-entrance.webp",
  },
  {
    id: "s3",
    subtitle: "MISSION STATEMENT",
    title: "Our educational institution has been conceptualized to educate young minds",
    desc: "In such a way as to make them stand tall even in the largest of crowds.",
    image: "/assets/main-hall.webp",
  },
  {
    id: "s4",
    subtitle: "IDEAL DIS STUDENT",
    title: "We want our children to be equipped with...",
    desc: "Moral values, honesty, linguistic skills, curiosity, and tolerance.",
    image: "/assets/facilities/computer-lab.webp",
  },
  {
    id: "s5",
    subtitle: "THE SCHOOL PHILOSOPHY",
    title: "Doon International School Aims",
    desc: "To inspire curiosity, courage, and compassion through balanced education.",
    image: "/assets/facilities/robotics.webp",
  },
  {
    id: "s6",
    subtitle: "TRULY INTERNATIONAL",
    title: "At the time of its inception",
    desc: "The founders felt the need to create an institution truly international in spirit and standards.",
    image: "/assets/facilities/horses.webp",
  },
];

const CARDS_AROUND_CENTER = 8;
const VIRTUAL_CARDS = CARDS_AROUND_CENTER * 2 + 1;

export default function TiltedCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const springCenterIndex = useSpring(centerIndex, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });

  const next = useCallback(() => setCenterIndex((i) => i + 1), []);
  const prev = useCallback(() => setCenterIndex((i) => i - 1), []);

  const translateX = useTransform(
    springCenterIndex,
    (v) => -v * (isMobile ? 220 : 380)
  );

  const getVirtualCardAtPosition = useCallback(
    (positionOffset: number) => {
      const slideIndex =
        ((centerIndex + positionOffset) % slides.length + slides.length) % slides.length;
      return {
        ...slides[slideIndex],
        key: `card-${centerIndex + positionOffset}`,
        positionOffset,
      };
    },
    [centerIndex]
  );

  const actualIndex =
    ((centerIndex % slides.length) + slides.length) % slides.length;

  // Mobile version
  if (isMobile) {
    return (
      <section className="relative bg-[#102544] py-16 overflow-hidden">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Towards Excellence
          <span className="block h-[2px] w-12 bg-[#FFC940] mx-auto mt-2"></span>
        </h2>

        <div className="max-w-full mx-auto px-4">
          <motion.div
            className="carousel-perspective-mobile relative h-[460px] overflow-hidden"
            style={{ perspective: "800px", x: translateX }}
          >
            <div
              ref={containerRef}
              className="carousel-3d-mobile relative h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {Array.from({ length: VIRTUAL_CARDS }, (_, i) => {
                const positionOffset = i - Math.floor(VIRTUAL_CARDS / 2);
                const data = getVirtualCardAtPosition(positionOffset);
                const pos = data.positionOffset;

                const rotateY = pos * -12;
                const translateX = pos * 220;
                const translateZ =
                  pos === 0 ? 80 : Math.max(-40, 40 - Math.abs(pos) * 40);
                const scale =
                  pos === 0 ? 1.02 : pos === 1 || pos === -1 ? 0.95 : 0.88;
                const opacity = Math.abs(pos) > 4 ? 0 : 1;
                const zIndex = 50 - Math.abs(pos);

                return (
                  <motion.article
                    key={data.key}
                    className="carousel-card-mobile absolute w-80 h-96 rounded-sm overflow-hidden shadow-lg cursor-pointer"
                    style={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      filter: "drop-shadow(0 8px 25px rgba(0,0,0,0.25))",
                      zIndex,
                      opacity,
                      transition:
                        "transform 450ms cubic-bezier(.25,.46,.45,.94), opacity 300ms ease",
                    }}
                    onClick={() => setCenterIndex(centerIndex + positionOffset)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${data.image})` }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                    <div className="relative z-20 h-full flex flex-col justify-end text-white">
                      <div className="p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                        <span className="inline-block bg-[#0E1C30]/80 text-[#FFC940] px-2 py-[1px] text-[9px] uppercase tracking-wider rounded-sm shadow-sm mb-2 block">
                          {data.subtitle}
                        </span>
                        <h3 className="font-semibold text-base leading-tight text-white mb-2">
                          {data.title}
                        </h3>
                        <p className="text-xs text-gray-200/90 leading-snug line-clamp-2">
                          {data.desc}
                        </p>
                        <div className="mt-2">
                          <span className="text-[#F6C75A] uppercase text-[10px] font-medium tracking-wide hover:underline">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

          {/* Mobile indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCenterIndex(slides.length + i - Math.floor(slides.length / 2))}
                className="carousel-indicator touch-target rounded-full border-0 ring-0 outline-none cursor-pointer focus:outline-none focus:ring-0 active:scale-95"
                style={{
                  width: i === actualIndex ? "10px" : "6px",
                  height: i === actualIndex ? "10px" : "6px",
                  backgroundColor: i === actualIndex ? "#FFC940" : "#ffffff55",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop version
  return (
    <section className="relative bg-[#102544] py-24 overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Towards Excellence
        <span className="block h-[2px] w-16 bg-[#FFC940] mx-auto mt-2"></span>
      </h2>

      <div className="carousel-perspective max-w-[1400px] mx-auto px-6 mt-24">
        <motion.div
          ref={containerRef}
          className="carousel-3d relative h-[600px] flex items-center justify-center"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            x: translateX,
          }}
        >
          {Array.from({ length: VIRTUAL_CARDS }, (_, i) => {
            const positionOffset = i - Math.floor(VIRTUAL_CARDS / 2);
            const data = getVirtualCardAtPosition(positionOffset);
            const pos = data.positionOffset;

            const rotateY = pos * -16;
            const translateX = pos * 380;
            const translateZ =
              pos === 0 ? 110 : Math.max(-60, 40 - Math.abs(pos) * 40);
            const scale =
              pos === 0 ? 1.03 : pos === 1 || pos === -1 ? 0.98 : 0.92;
            const opacity = Math.abs(pos) > 3 ? 0 : 1;
            const zIndex = 50 - Math.abs(pos);

            return (
              <motion.article
                key={data.key}
                className="carousel-card absolute w-[340px] md:w-[420px] h-[520px] md:h-[600px] rounded-sm overflow-hidden shadow-lg cursor-pointer"
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  filter: "drop-shadow(0 10px 35px rgba(0,0,0,0.45))",
                  transition:
                    "transform 450ms cubic-bezier(0.25,0.46,0.45,0.94), opacity 200ms ease",
                  opacity,
                  zIndex,
                }}
                onClick={() => setCenterIndex(centerIndex + positionOffset)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${data.image})` }}
                />

                <div className="relative z-20 p-6 h-full flex flex-col justify-end text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <span className="inline-block bg-[#0E1C30]/90 text-[#FFC940] px-2 py-[3px] text-[11px] uppercase tracking-wider rounded-sm shadow-sm">
                    {data.subtitle}
                  </span>
                  <h3 className="mt-4 font-semibold text-lg md:text-2xl leading-snug text-white">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-200/90 mt-3 leading-relaxed">
                    {data.desc}
                  </p>
                  <div className="mt-4">
                    <span className="text-[#F6C75A] uppercase text-xs font-medium tracking-wide hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Navigation Arrows */}
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
