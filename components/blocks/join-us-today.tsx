export default function JoinUsToday() {
  return (
    <section className="relative w-full bg-cover bg-center text-center text-white py-32" style={{ backgroundImage: "url('/assets/main-entrance.avif')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center gap-6">
        <h2 className="font-heading text-xl md:text-2xl font-bold max-w-3xl leading-snug text-white">
          Join Us Today! Secure your child's future with world-class education.
        </h2>
        <p className="font-body max-w-4xl text-[15px] leading-relaxed text-white/90">
          Doon International School offers quality education, expert faculty, modern
          infrastructure, and holistic development. With top-tier sports, advanced
          learning tools, and enriching extracurricular activities, it prepares
          students for global success.
        </p>
        <button className="bg-[#007bff] hover:bg-[#0062d1] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200">
          Enroll today!
        </button>
      </div>
    </section>
  );
}
