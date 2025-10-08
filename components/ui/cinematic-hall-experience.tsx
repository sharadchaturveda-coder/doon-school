'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface BackgroundLayer {
  src: string;
  depth: number;
  scale?: string;
  opacity?: string;
}

interface TransitionSequence {
  entrance: string;
  hall: string;
  principal: string;
}

interface InteractiveElements {
  lightRays: boolean;
  particleSystem: boolean;
  architecturalReveal: boolean;
}

interface HallExperienceProps {
  backgroundLayers: BackgroundLayer[];
  atmosphericText: string;
  interactiveElements: InteractiveElements;
  transitionSequence: TransitionSequence;
}

interface LivingColumn {
  id: number;
  x: number;
  baseHeight: number;
  growthHeight: number;
  delay: number;
  branches: Array<{angle: number, length: number}>;
  color: string;
  pulsing: boolean;
}

interface Soundwave {
  id: number;
  x: number;
  y: number;
  radius: number;
  intensity: number;
  frequency: number;
  phase: number;
}

interface EmotionalState {
  mood: 'majestic' | 'introspective' | 'triumphant' | 'serene';
  intensity: number;
  colorScheme: {primary: string, secondary: string, accent: string};
}

const CinematicHallExperience: React.FC<HallExperienceProps> = ({
  backgroundLayers,
  atmosphericText,
  interactiveElements,
  transitionSequence,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Enhanced 3D transforms with biological motion
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, -350]);
  const scale1 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [1.1, 1.08, 1.12, 1.15]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1.05]);
  const rotationZ1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, -2]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.8, 0.95, 0.8, 0.6]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.2, 0.6, 0.9, 1]);

  // Biological spring animations
  const springY1 = useSpring(y1, { stiffness: 250, damping: 35, mass: 0.8 });
  const springY2 = useSpring(y2, { stiffness: 350, damping: 40, mass: 0.6 });

  // Living architectural system
  const [livingColumns, setLivingColumns] = useState<LivingColumn[]>([]);
  const [soundwaves, setSoundwaves] = useState<Soundwave[]>([]);
  const [emotionalState, setEmotionalState] = useState<EmotionalState>({
    mood: 'majestic',
    intensity: 0.7,
    colorScheme: {primary: '#fbbf24', secondary: '#60a5fa', accent: '#f59e0b'}
  });

  // Dynamic light ray system with organic behavior
  const [dynamicLightRays] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      angle: (i * 360) / 12 + Math.random() * 30 - 15,
      length: Math.random() * 50 + 50,
      intensity: Math.random(),
      pulsationRate: 2 + Math.random() * 4,
      phase: Math.random() * Math.PI * 2,
      color: i % 4 === 0 ? '#fbbf24' : i % 4 === 1 ? '#60a5fa' : i % 4 === 2 ? '#f59e0b' : '#8b5cf6'
    }))
  );

  // Atmospheric particle field
  const [atmosphericParticles] = useState(
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      velocity: {
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3
      },
      opacity: Math.random() * 0.5 + 0.2,
      type: Math.random() > 0.8 ? 'dust' : Math.random() > 0.6 ? 'light' : 'organic'
    }))
  );

  // Initialize living architecture
  const initializeLivingArchitecture = useCallback(() => {
    const columns: LivingColumn[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 8 + (i * 7.5), // Evenly distribute across screen
      baseHeight: 40 + Math.random() * 30,
      growthHeight: 70 + Math.random() * 40,
      delay: i * 0.4,
      branches: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => ({
        angle: -30 + Math.random() * 60,
        length: 10 + Math.random() * 20
      })),
      color: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#fbbf24' : '#f59e0b',
      pulsing: Math.random() > 0.7
    }));

    setLivingColumns(columns);

    // Initialize soundwaves for spatial audio visualization
    const waves: Soundwave[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 15 + i * 10,
      y: 80,
      radius: 0,
      intensity: Math.random() * 0.8 + 0.2,
      frequency: 1 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2
    }));

    setSoundwaves(waves);
  }, []);

  // Mouse interaction for dynamic atmosphere
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  }, []);

  // Emotional state responding to scroll
  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      let mood: EmotionalState['mood'];
      let intensity: number;
      let colorScheme: EmotionalState['colorScheme'];

      if (progress < 0.3) {
        mood = 'majestic';
        intensity = 0.7;
        colorScheme = {primary: '#fbbf24', secondary: '#60a5fa', accent: '#f59e0b'};
      } else if (progress < 0.6) {
        mood = 'introspective';
        intensity = 0.9;
        colorScheme = {primary: '#8b5cf6', secondary: '#06b6d4', accent: '#ec4899'};
      } else {
        mood = 'triumphant';
        intensity = 0.6;
        colorScheme = {primary: '#f59e0b', secondary: '#ef4444', accent: '#84cc16'};
      }

      setEmotionalState({ mood, intensity, colorScheme });
    });
  }, [scrollYProgress]);

  useEffect(() => {
    initializeLivingArchitecture();
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [initializeLivingArchitecture, handleMouseMove]);

  // Word-by-word animated text reveal
  const textWords = atmosphericText.split(' ');
  const wordProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, textWords.length]);

  // Organic text glow effect
  const textGlowIntensity = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0.3, 0.8, 1, 0.6]);

  // State to track word progress for proper reactivity
  const [currentWordProgress, setCurrentWordProgress] = useState(0);

  // Update current word progress on scroll changes
  useEffect(() => {
    const unsubscribe = wordProgress.onChange((progress) => {
      setCurrentWordProgress(progress);
    });
    return () => unsubscribe();
  }, [wordProgress]);

  return (
    <div ref={containerRef} className="relative h-[280vh] overflow-hidden bg-brand-primary">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Multi-dimensional Background Layers */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            y: springY1,
            scale: scale1,
            rotateZ: rotationZ1,
            opacity: opacity1
          }}
        >
          <picture>
            <source srcSet={backgroundLayers[0]?.src} type="image/avif" />
            <Image
              src={backgroundLayers[0]?.src.replace('.avif', '.webp')}
              alt="Primary hall layer"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full filter contrast-110 brightness-110"
              priority
            />
          </picture>
          {/* Organic overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20" />
        </motion.div>

        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            y: springY2,
            scale: scale2,
            opacity: opacity2
          }}
        >
          <picture>
            <source srcSet={backgroundLayers[1]?.src} type="image/avif" />
            <Image
              src={backgroundLayers[1]?.src.replace('.avif', '.webp')}
              alt="Secondary hall layer"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full filter saturate-120"
            />
          </picture>
          {/* Depth enhancement */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Solid Brand Background Layer */}
        <motion.div
          className="absolute inset-0 bg-brand-primary opacity-20"
        />

        {/* Dynamic Living Light Rays */}
        {interactiveElements.lightRays && (
          <div className="absolute inset-0 overflow-hidden">
            {dynamicLightRays.map((ray) => (
              <motion.div
                key={ray.id}
                className="absolute top-0 origin-top-center"
                style={{
                  left: `${50 + Math.cos((ray.id / 12) * Math.PI * 2) * 30}%`,
                  height: `${ray.length}vh`,
                  width: '2px',
                  transform: `rotate(${ray.angle}deg)`,
                }}
                animate={{
                  opacity: [0, ray.intensity * emotionalState.intensity * 2, 0],
                  scaleX: [0.2, 1.5, 0.2],
                  backgroundColor: [
                    `${ray.color}80`,
                    `${ray.color}ff`,
                    `${ray.color}80`
                  ]
                }}
                transition={{
                  duration: ray.pulsationRate,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: ray.phase / Math.PI
                }}
              />
            ))}
          </div>
        )}

        {/* Enhanced Atmospheric Particle System */}
        {interactiveElements.particleSystem && (
          <div className="absolute inset-0 overflow-hidden">
            {atmosphericParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute rounded-full ${
                  particle.type === 'dust'
                    ? 'bg-white/20'
                    : particle.type === 'light'
                    ? `bg-gradient-to-r from-${emotionalState.colorScheme.primary.replace('#', '')} to-${emotionalState.colorScheme.secondary.replace('#', '')} shadow-lg`
                    : 'bg-gradient-to-r from-green-400/30 to-emerald-500/30'
                }`}
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: particle.size,
                  height: particle.size,
                  boxShadow: particle.type === 'light' ? `0 0 ${particle.size * 3}px currentColor` : 'none'
                }}
                animate={{
                  x: [0, particle.velocity.x * 100, 0, particle.velocity.x * -100],
                  y: [0, particle.velocity.y * 100, 0, particle.velocity.y * -100],
                  opacity: [
                    particle.opacity,
                    particle.opacity * 1.5,
                    particle.opacity * 0.5,
                    particle.opacity
                  ],
                  scale: particle.type === 'organic'
                    ? [1, 1.3, 0.8, 1.2]
                    : [1, 1.1, 0.9, 1.05]
                }}
                transition={{
                  duration: 8 + particle.id * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.id * 0.05
                }}
              />
            ))}
          </div>
        )}

        {/* Living Architectural System */}
        {interactiveElements.architecturalReveal && (
          <div className="absolute inset-0 overflow-hidden">
            {livingColumns.map((column, index) => (
              <motion.div
                key={column.id}
                className="absolute bottom-0 origin-bottom"
                style={{
                  left: `${column.x}%`,
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{
                  duration: 2,
                  delay: column.delay,
                  ease: "easeOut"
                }}
              >
                {/* Main Column */}
                <motion.div
                  className="w-4 rounded-t-lg opacity-80"
                  style={{
                    height: `${column.baseHeight}vh`,
                    background: `linear-gradient(to top, ${column.color}dd, ${column.color}ff)`
                  }}
                  animate={column.pulsing ? {
                    scaleX: [1, 1.2, 1],
                    filter: [
                      `drop-shadow(0 0 5px ${column.color}40)`,
                      `drop-shadow(0 0 15px ${column.color}80)`,
                      `drop-shadow(0 0 5px ${column.color}40)`
                    ]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Growth Animation Extension */}
                <motion.div
                  className="w-4 -mt-0.5"
                  style={{
                    height: `${column.growthHeight - column.baseHeight}vh`,
                    background: `linear-gradient(to top, ${column.color}ff, ${column.color}80)`
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{
                    scaleY: 1,
                    opacity: 1,
                    transition: {
                      delay: column.delay + 1,
                      duration: 2,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true }}
                />

                {/* Organic Branches */}
                {column.branches.map((branch, branchIndex) => (
                  <motion.div
                    key={branchIndex}
                    className="absolute top-0 origin-bottom-left"
                    style={{
                      left: '50%',
                      width: `${branch.length}px`,
                      height: '2px',
                      transform: `rotate(${branch.angle}deg)`,
                      background: `linear-gradient(90deg, ${column.color}ff, transparent)`
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{
                      scaleX: 1,
                      opacity: 1,
                      transition: {
                        delay: column.delay + 1.5 + branchIndex * 0.3,
                        duration: 1,
                        ease: "easeOut"
                      }
                    }}
                    viewport={{ once: true }}
                  />
                ))}
              </motion.div>
            ))}

            {/* Spatial Audio Visualization Waves */}
            {soundwaves.map((wave) => (
              <motion.div
                key={wave.id}
                className="absolute border border-white/20 rounded-full"
                style={{
                  left: `${wave.x}%`,
                  top: `${wave.y}%`,
                  width: `${wave.radius * 2}px`,
                  height: `${wave.radius * 2}px`,
                  opacity: wave.intensity * emotionalState.intensity
                }}
                animate={{
                  scale: [0, 10, 0],
                  opacity: [0, wave.intensity * 0.8, 0]
                }}
                transition={{
                  duration: 8 / wave.frequency,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: wave.phase / (Math.PI * 2) * (8 / wave.frequency)
                }}
              />
            ))}
          </div>
        )}

        {/* Main Content with Enhanced Atmospheric Text */}
        <div className="relative z-20 h-full flex items-center justify-center px-6">
          <div className="max-w-6xl w-full text-center space-y-20">

            {/* Organic Text Animation with Quantum Effects */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* Emotional Decorative Elements */}
              <motion.div
                className="flex justify-center space-x-8 mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {/* Left decorative element */}
                <motion.div
                  className="w-24 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${emotionalState.colorScheme.primary}, ${emotionalState.colorScheme.secondary})`
                  }}
                  animate={{
                    scaleX: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Central decorative sphere */}
                <motion.div
                  className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center"
                  animate={{
                    rotate: 360,
                    borderColor: [
                      'rgba(255,255,255,0.4)',
                      `${emotionalState.colorScheme.accent}80`,
                      'rgba(255,255,255,0.4)'
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: emotionalState.colorScheme.primary }}
                  />
                </motion.div>

                {/* Right decorative element */}
                <motion.div
                  className="w-24 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${emotionalState.colorScheme.secondary}, ${emotionalState.colorScheme.primary}, transparent)`
                  }}
                  animate={{
                    scaleX: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    delay: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Quantum Text Reveal System */}
              <div
                className="text-4xl md:text-6xl lg:text-8xl font-light leading-tight relative"
                style={{
                  textShadow: `
                    0 0 20px ${emotionalState.colorScheme.primary}40,
                    0 0 40px ${emotionalState.colorScheme.secondary}20
                  `,
                  color: 'white'
                }}
              >
                <span className="inline-block text-white/40 italic mr-2">"</span>
                {textWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-3 mb-4 relative"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{
                      opacity: Math.floor(currentWordProgress) > index ? 1 : currentWordProgress > index ? (currentWordProgress - index) * emotionalState.intensity : 0,
                      y: Math.floor(currentWordProgress) > index ? 0 : 30 - ((currentWordProgress - index) * 30 * emotionalState.intensity),
                      scale: Math.floor(currentWordProgress) > index ? 1 : 0.8 + (currentWordProgress - index) * 0.2 * emotionalState.intensity
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{
                      duration: 1.2,
                      delay: currentWordProgress > index ? 0.1 * (currentWordProgress - index) : 0,
                      ease: "easeOut"
                    }}
                  >
                    {/* Quantum particle trail effect */}
                    <motion.div
                      className="absolute inset-0 -z-10"
                      animate={Math.floor(currentWordProgress) > index ? {
                        background: [
                          `radial-gradient(circle, ${emotionalState.colorScheme.accent}40 0%, transparent 70%)`,
                          `radial-gradient(circle, transparent 30%, ${emotionalState.colorScheme.primary}20 100%)`,
                          `radial-gradient(circle, ${emotionalState.colorScheme.accent}40 0%, transparent 70%)`
                        ]
                      } : {}}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    {word}
                  </motion.span>
                ))}
                <span className="inline-block text-white/40 italic">"</span>
              </div>

              {/* Dynamic Transition Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="flex justify-center space-x-12 text-lg text-white/80 uppercase tracking-widest"
              >
                {[transitionSequence.entrance, transitionSequence.hall, transitionSequence.principal].map((text, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 2.2 + index * 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {/* Pulsing indicator */}
                    <motion.div
                      className="relative"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: emotionalState.colorScheme.secondary }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          backgroundColor: emotionalState.colorScheme.primary,
                          opacity: 0.5
                        }}
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                    <span className="font-medium">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Experience Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* Progress Container */}
          <div className="relative bg-black/30 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/10">
            {/* Mood Indicator */}
            <div className="flex items-center justify-center space-x-2 mb-3">
              <motion.div
                className="w-2 h-2 rounded-full"
                animate={{ backgroundColor: [emotionalState.colorScheme.primary, emotionalState.colorScheme.secondary, emotionalState.colorScheme.accent] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="text-white/60 text-sm uppercase tracking-wide">
                {emotionalState.mood} Experience
              </span>
            </div>

            {/* Progress Visualization */}
            <div className="flex items-center space-x-4">
              <div className="text-white/60 text-sm">Journey</div>
              <div className="relative w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    background: `linear-gradient(90deg, ${emotionalState.colorScheme.primary}, ${emotionalState.colorScheme.secondary})`,
                    width: useTransform(wordProgress, [0, textWords.length], ['0%', '100%'])
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Quantum flow effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${emotionalState.colorScheme.accent}80, transparent)`
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Pulsing particles */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 3 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-0 w-1 h-1 bg-white rounded-full"
                        style={{ left: `${33 + i * 33}%` }}
                        animate={{
                          scale: [0, 1.5, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="text-white/40 text-sm">100%</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 16, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer"
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="text-white/50 text-sm font-light tracking-wider">
              Continue Your Journey
            </div>
            <div className="relative w-8 h-12 border-2 border-white/40 rounded-full flex justify-center p-1 hover:border-white/60 transition-colors duration-300">
              <motion.div
                className="w-1.5 h-3 bg-gradient-to-b from-white/60 to-white/40 rounded-full absolute top-2"
                animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />

              {/* Magnetic field effect */}
              <motion.div
                className="absolute inset-0 rounded-full border border-white/20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>

        {/* Holographic Energy Field */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-amber-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-purple-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 8,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CinematicHallExperience;
