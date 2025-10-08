'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Connection {
  entity: string;
  connections: number;
}

interface SphereData {
  content: string;
  multiLanguage: string[];
  citation: string;
}

interface SphereProps {
  sphere: SphereData;
  interconnections: Connection[];
  image: { src: string; presentation: string };
  audio: { welcome: boolean; backgroundAmbience: boolean };
}

interface NeuralNode {
  id: string;
  x: number;
  y: number;
  z: number;
  type: 'input' | 'hidden' | 'output';
  activation: number;
  connections: Array<{to: string, strength: number}>;
  pulse: boolean;
}

interface CrystalFacet {
  id: number;
  x: number;
  y: number;
  z: number;
  rotation: {x: number, y: number, z: number};
  size: number;
  color: string;
  opacity: number;
}

interface QuantumState {
  coherence: number;
  entanglement: number;
  superposition: number;
  collapse: boolean;
}

const PrincipalVisionSphere: React.FC<SphereProps> = ({
  sphere,
  interconnections,
  image,
  audio,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Enhanced 3D transforms with quantum mechanics
  const sphereScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1.4, 1.2, 0.95]);
  const sphereRotateX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 60, 120, 160, 180]);
  const sphereRotateY = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const sphereTranslateZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Quantum spring animations
  const springScale = useSpring(sphereScale, { stiffness: 400, damping: 30, mass: 0.8 });
  const springRotateX = useSpring(sphereRotateX, { stiffness: 300, damping: 25 });
  const springRotateY = useSpring(sphereRotateY, { stiffness: 200, damping: 20 });
  const springTranslateZ = useSpring(sphereTranslateZ, { stiffness: 350, damping: 35 });

  // Advanced neural network state
  const [neuralNodes, setNeuralNodes] = useState<NeuralNode[]>([]);
  const [neuralConnections, setNeuralConnections] = useState<Array<{
    from: NeuralNode,
    to: NeuralNode,
    strength: number,
    active: boolean
  }>>([]);

  // Crystal lattice system
  const [crystalFacets, setCrystalFacets] = useState<CrystalFacet[]>([]);
  const [quantumState, setQuantumState] = useState<QuantumState>({
    coherence: 0.8,
    entanglement: 0.6,
    superposition: 0.7,
    collapse: false
  });

  // Dynamic holographic presence
  const [holographicPresence, setHolographicPresence] = useState({
    avatarOpacity: 0.8,
    energyLevel: 0.9,
    distortionField: 0.2,
    quantumNoise: 0.1
  });

  // Enhanced text animation
  const textWords = sphere.content.split(' ');
  const [visibleWords, setVisibleWords] = useState(0);
  const [currentWordProgress, setCurrentWordProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const progress = Math.max(0, Math.min(1, (value - 0.2) / 0.7));
      setCurrentWordProgress(progress * textWords.length);
    });
    return () => unsubscribe();
  }, [textWords.length]);

  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      const visible = Math.floor(progress * textWords.length);
      setVisibleWords(Math.min(visible, textWords.length));
    });
  }, [scrollYProgress, textWords.length]);

  // Initialize neural network
  const initializeNeuralNetwork = useCallback(() => {
    const nodes: NeuralNode[] = [];

    // Input layer - student connections
    interconnections.forEach((conn, index) => {
      nodes.push({
        id: `${conn.entity}-input`,
        x: 15 + (index * 7),
        y: 70,
        z: 0,
        type: 'input' as const,
        activation: conn.connections / 5000, // Normalize
        connections: [],
        pulse: Math.random() > 0.8
      });
    });

    // Hidden layer - neural processing
    for (let i = 0; i < 8; i++) {
      nodes.push({
        id: `hidden-${i}`,
        x: 30 + (i * 10),
        y: 45,
        z: 20 + Math.random() * 20,
        type: 'hidden' as const,
        activation: 0.5 + Math.random() * 0.5,
        connections: [],
        pulse: Math.random() > 0.6
      });
    }

    // Output layer - vision manifestation
    nodes.push({
      id: 'vision-output',
      x: 50,
      y: 20,
      z: 40,
      type: 'output' as const,
      activation: 0.9,
      connections: [],
      pulse: true
    });

    setNeuralNodes(nodes);

    // Create neural connections
    const connections = [];
    nodes.forEach((fromNode, fromIndex) => {
      if (fromNode.type === 'input') {
        // Connect input to hidden
        const hiddenNodes = nodes.filter(n => n.type === 'hidden');
        const randomIndices = hiddenNodes.map((_, i) => i).sort(() => Math.random() - 0.5).slice(0, 3);

        randomIndices.forEach(hiddenIndex => {
          connections.push({
            from: fromNode,
            to: hiddenNodes[hiddenIndex],
            strength: 0.3 + Math.random() * 0.7,
            active: false
          });
        });
      } else if (fromNode.type === 'hidden') {
        // Connect hidden to output
        const outputNode = nodes.find(n => n.type === 'output')!;
        connections.push({
          from: fromNode,
          to: outputNode,
          strength: 0.4 + Math.random() * 0.6,
          active: false
        });
      }
    });

    setNeuralConnections(connections);
  }, [interconnections]);

  // Initialize crystal lattice
  const initializeCrystalLattice = useCallback(() => {
    const facets: CrystalFacet[] = [];

    // Geometric crystal formation
    for (let layer = 0; layer < 8; layer++) {
      const layerRadius = 20 + layer * 15;
      const numFacets = 6 + layer * 2; // More facets in outer layers

      for (let facet = 0; facet < numFacets; facet++) {
        const angle = (facet / numFacets) * Math.PI * 2;
        const x = 50 + Math.cos(angle) * layerRadius;
        const y = 50 + Math.sin(angle) * layerRadius;
        const z = layer * 10;

        facets.push({
          id: layer * 100 + facet,
          x,
          y,
          z,
          rotation: {
            x: Math.random() * 90 - 45,
            y: Math.random() * 90 - 45,
            z: Math.random() * 360
          },
          size: 3 + layer * 2,
          color: layer % 4 === 0 ? '#60a5fa' : layer % 4 === 1 ? '#f59e0b' : layer % 4 === 2 ? '#ec4899' : '#8b5cf6',
          opacity: 0.7 - layer * 0.08
        });
      }
    }

    setCrystalFacets(facets);
  }, []);

  // Mouse interaction for enhanced holographic presence
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (sphereRef.current) {
      const rect = sphereRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePosition({ x, y });

      // Update holographic presence based on mouse
      setHolographicPresence(prev => ({
        ...prev,
        distortionField: Math.abs(x) + Math.abs(y),
        quantumNoise: (Math.abs(x) + Math.abs(y)) * 0.3
      }));
    }
  }, []);

  // Multilanguage text cycling with enhanced transitions
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [langTransition, setLangTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLangTransition(true);
      setTimeout(() => {
        setCurrentLangIndex((prev) => (prev + 1) % sphere.multiLanguage.length);
        setLangTransition(false);
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, [sphere.multiLanguage.length]);

  // Neural network activity simulation
  useEffect(() => {
    if (neuralNodes.length === 0) return;

    const interval = setInterval(() => {
      setNeuralNodes(prevNodes =>
        prevNodes.map(node => ({
          ...node,
          activation: node.activation + (Math.random() - 0.5) * 0.1,
          pulse: Math.random() > 0.9
        }))
      );

      setNeuralConnections(prevConnections =>
        prevConnections.map(conn => ({
          ...conn,
          active: Math.random() > 0.8,
          strength: conn.strength + (Math.random() - 0.5) * 0.02
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [neuralNodes.length]);

  // Quantum state evolution
  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      setQuantumState({
        coherence: 0.5 + progress * 0.5,
        entanglement: 0.3 + progress * 0.7,
        superposition: progress > 0.5 ? 1 - (progress - 0.5) * 2 : progress * 2,
        collapse: progress > 0.7
      });
    });
  }, [scrollYProgress]);

  useEffect(() => {
    initializeNeuralNetwork();
    initializeCrystalLattice();
    window.addEventListener('mousemove', (e) => {
      setMousePosition({ x: (e.clientX / window.innerWidth) * 2 - 1, y: (e.clientY / window.innerHeight) * 2 - 1 });
    });

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, [initializeNeuralNetwork, initializeCrystalLattice]);

  return (
    <div ref={containerRef} className="relative h-[350vh] overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-950 to-black">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Quantum Neural Field Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 opacity-90">
          <div
            className="w-full h-full opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 50}%, rgba(139, 92, 246, 0.4) 0%, transparent 40%),
                radial-gradient(circle at ${mousePosition.x * -30 + 50}% ${mousePosition.y * -30 + 50}%, rgba(245, 158, 11, 0.3) 0%, transparent 50%),
                linear-gradient(45deg, rgba(16, 185, 129, 0.2) 0%, transparent 50%, rgba(236, 72, 153, 0.2) 100%)
              `,
            }}
          />
        </div>

        {/* Advanced Neural Network Visualization */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))' }}>
            <defs>
              <radialGradient id="neural-node-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: 'rgba(59, 130, 246, 0.9)' }} />
                <stop offset="50%" style={{ stopColor: 'rgba(245, 158, 11, 0.7)' }} />
                <stop offset="100%" style={{ stopColor: 'rgba(139, 92, 246, 0.3)' }} />
              </radialGradient>

              <linearGradient id="neural-connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgba(16, 185, 129, 0.8)' }} />
                <stop offset="50%" style={{ stopColor: 'rgba(139, 92, 246, 0.6)' }} />
                <stop offset="100%" style={{ stopColor: 'rgba(236, 72, 153, 0.8)' }} />
              </linearGradient>
            </defs>

            {/* Neural Connections */}
            {neuralConnections.map((connection, index) => (
              <motion.line
                key={`connection-${index}`}
                x1={`${connection.from.x}%`}
                y1={`${connection.from.y}%`}
                x2={`${connection.to.x}%`}
                y2={`${connection.to.y}%`}
                stroke="url(#neural-connection-gradient)"
                strokeWidth={connection.strength * 3}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: connection.active ? 1 : 0.3,
                  opacity: connection.active ? 0.8 : 0.2
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Neural Nodes */}
            {neuralNodes.map((node) => (
              <g key={node.id}>
                {/* Node core */}
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={8 + node.activation * 12}
                  fill="url(#neural-node-gradient)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: node.pulse ? 1.5 : 1,
                    opacity: node.activation
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: node.pulse ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />

                {/* Activation ring */}
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={15 + node.activation * 15}
                  fill="none"
                  stroke={node.type === 'input' ? '#60a5fa' : node.type === 'hidden' ? '#f59e0b' : '#ec4899'}
                  strokeWidth="1"
                  opacity="0.5"
                  animate={{
                    r: [15 + node.activation * 15, 20 + node.activation * 15, 15 + node.activation * 15],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Crystal Lattice Sphere Framework */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-96 h-96">
            {crystalFacets.map((facet) => (
              <motion.div
                key={facet.id}
                className="absolute origin-center bg-white/10 backdrop-blur-sm"
                style={{
                  left: `${facet.x}%`,
                  top: `${facet.y}%`,
                  width: `${facet.size}px`,
                  height: `${facet.size}px`,
                  background: `linear-gradient(135deg, ${facet.color}40, ${facet.color}20)`,
                  border: `1px solid ${facet.color}30`,
                  transform: `translateX(-50%) translateY(-50%) rotateX(${facet.rotation.x}deg) rotateY(${facet.rotation.y}deg) rotateZ(${facet.rotation.z}deg)`,
                }}
                animate={{
                  opacity: quantumState.collapse ? 0.9 : facet.opacity,
                  scale: quantumState.superposition ? 1.1 : 1,
                  rotateZ: facet.rotation.z + quantumState.coherence * 180
                }}
                transition={{
                  duration: 4 + facet.id * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-7xl w-full text-center space-y-16">

            {/* Enhanced Holographic Sphere */}
            <motion.div
              ref={sphereRef}
              className="relative flex justify-center items-center mb-20"
              style={{
                scale: springScale,
                rotateX: isHovering ? mousePosition.y * 30 : springRotateX,
                rotateY: isHovering ? mousePosition.x * 30 : springRotateY,
                translateZ: springTranslateZ,
                opacity
              }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, type: "spring" }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">

                {/* Quantum Outer Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400/40 to-purple-400/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  style={{ border: `2px solid ${quantumState.coherence > 0.7 ? '#60a5fa80' : '#f59e0b60'}` }}
                />

                <motion.div
                  className="absolute inset-4 rounded-full border border-cyan-400/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-8 rounded-full border border-emerald-400/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Quantum Energy Field */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 50}%, rgba(139, 92, 246, 0.3), rgba(245, 158, 11, 0.2), transparent 80%)`,
                    filter: `blur(${holographicPresence.distortionField * 10}px) contrast(1.2)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 0.6, 0.8]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Crystal Lattice Core */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-slate-900/40 backdrop-blur-lg border border-white/20 overflow-hidden">
                  <motion.div
                    className="w-full h-full relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: holographicPresence.avatarOpacity }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{
                      filter: `blur(${holographicPresence.quantumNoise * 5}px)`,
                      transform: `scale(${1 + holographicPresence.distortionField * 0.1})`
                    }}
                  >
                    <Image
                      src={image.src}
                      alt="Principal quantum holographic manifestation"
                      fill
                      className="object-cover"
                      style={{
                        transform: `scale(${0.9 + quantumState.coherence * 0.1})`,
                      }}
                    />

                    {/* Holographic overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-purple-900/40" />
                    <div className="absolute inset-0" style={{
                      background: `radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.3), transparent 50%)`
                    }} />
                  </motion.div>
                </div>

                {/* Quantum Resonance Particles */}
                {Array.from({ length: 16 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: i % 4 === 0 ? '#60a5fa' : i % 4 === 1 ? '#f59e0b' : i % 4 === 2 ? '#ec4899' : '#8b5cf6',
                      top: `${30 + Math.sin((i / 16) * Math.PI * 2) * 35}%`,
                      left: `${30 + Math.cos((i / 16) * Math.PI * 2) * 35}%`,
                    }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.4, 1, 0.4],
                      x: [0, Math.cos((i / 16) * Math.PI * 2) * 10, 0],
                      y: [0, Math.sin((i / 16) * Math.PI * 2) * 10, 0]
                    }}
                    transition={{
                      duration: 3 + i * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Quantum Text Manifestation */}
            <motion.div
              className="text-center space-y-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >

              {/* Multi-dimensional Language Display */}
              <motion.div
                className="text-purple-400/90 text-2xl uppercase tracking-widest font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentLangIndex}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{
                      opacity: langTransition ? 0 : 1,
                      scale: langTransition ? 0.8 : 1,
                      y: langTransition ? -10 : 0
                    }}
                    exit={{ opacity: 0, scale: 1.2, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                      textShadow: `0 0 10px ${sphere.multiLanguage[currentLangIndex] === 'English' ? '#60a5fa' : '#f59e0b'}`
                    }}
                  >
                    {sphere.multiLanguage[currentLangIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>

              {/* Quantum Quote Weave */}
              <div
                className="text-3xl md:text-5xl lg:text-6xl font-light leading-relaxed max-w-5xl mx-auto relative"
                style={{
                  textShadow: `
                    0 0 15px rgba(139, 92, 246, 0.3),
                    0 0 30px rgba(245, 158, 11, 0.2)
                  `,
                  color: 'white',
                  filter: `blur(${holographicPresence.quantumNoise}px)`
                }}
              >
                <span className="inline-block text-white/30 italic mr-3 text-5xl">"</span>

                {textWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-4 mb-3 relative italic"
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    whileInView={{
                      opacity: index < Math.floor(currentWordProgress) ? 1 : index < currentWordProgress ? (currentWordProgress - index) * quantumState.coherence : 0.1,
                      y: index < Math.floor(currentWordProgress) ? 0 : 20 - ((currentWordProgress - index) * 20 * quantumState.coherence),
                      scale: index < Math.floor(currentWordProgress) ? 1 : 0.9 + (currentWordProgress - index) * 0.1 * quantumState.coherence
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{
                      duration: 0.8,
                      delay: 2 + index * 0.08,
                      ease: "easeOut"
                    }}
                  >
                    {/* Quantum particle trail */}
                    <motion.div
                      className="absolute inset-0 -z-10 rounded"
                      animate={index < Math.floor(currentWordProgress) ? {
                        background: [
                          `radial-gradient(circle, ${quantumState.coherence > 0.6 ? '#60a5fa40' : '#f59e0b40'} 0%, transparent 80%)`,
                          `radial-gradient(circle, transparent 20%, ${quantumState.entanglement > 0.5 ? '#ec489940' : '#8b5cf640'} 100%)`
                        ],
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.3, 0.6, 0.3]
                      } : {}}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Word highlighting based on activation */}
                    <span style={{
                      color: neuralNodes.find(n => n.type === 'output')?.activation > 0.7 ? '#f59e0b' : '#60a5fa'
                    }}>
                      {word}
                    </span>
                  </motion.span>
                ))}

                <span className="inline-block text-white/30 italic text-5xl">"</span>
              </div>

              {/* Quantum Signature */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 5, duration: 1.5, type: "spring" }}
                className="text-2xl text-cyan-400/90 font-light tracking-wide"
                style={{
                  textShadow: `0 0 10px cyan, 0 0 20px cyan`
                }}
              >
                — {sphere.citation}

                {/* Quantum signature effect */}
                <motion.div
                  className="w-full h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0 rounded-full mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 5.5, duration: 1, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Neural Network Connection Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 1 }}
                className="flex flex-wrap justify-center gap-8 text-center"
              >
                {interconnections.map((conn, index) => (
                  <motion.div
                    key={conn.entity}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 4.5 + index * 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    {/* Neural network stat card */}
                    <div className="bg-gradient-to-br from-indigo-500/20 via-purple-500/30 to-pink-500/20
                                  backdrop-blur-md border border-white/10 rounded-2xl p-6 min-w-[140px]
                                  shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
                      {/* Active neural pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{
                          boxShadow: [
                            '0 0 0 0 rgba(139, 92, 246, 0)',
                            '0 0 0 4px rgba(139, 92, 246, 0.3)',
                            '0 0 0 0 rgba(139, 92, 246, 0)'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      />

                      <div className="text-4xl font-bold text-cyan-400 mb-2 relative">
                        {conn.connections.toLocaleString()}

                        {/* Neural activation indicator */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                        />
                      </div>

                      <div className="text-sm text-purple-300/80 uppercase tracking-wide font-medium">
                        {conn.entity}
                      </div>

                      {/* Connection strength bar */}
                      <div className="mt-3 w-full bg-white/10 rounded-full h-1 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, (conn.connections / 5000) * 100)}%` }}
                          transition={{
                            delay: 5 + index * 0.1,
                            duration: 1.5,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Quantum Field Energy Emanations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -15, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 6,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-emerald-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0.2, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
              delay: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Scroll Progress and Quantum State Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="relative bg-black/40 backdrop-blur-md rounded-3xl px-8 py-4 border border-white/10">
            {/* Quantum Coherence Indicator */}
            <div className="flex items-center justify-center space-x-3 mb-3">
              <motion.div
                className="w-3 h-3 rounded-full"
                animate={{
                  backgroundColor: [
                    '#60a5fa',
                    '#f59e0b',
                    '#ec4899',
                    '#8b5cf6',
                    '#60a5fa'
                  ],
                  boxShadow: [
                    '0 0 10px #60a5fa',
                    '0 0 10px #f59e0b',
                    '0 0 10px #ec4899',
                    '0 0 10px #8b5cf6',
                    '0 0 10px #60a5fa'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              <span className="text-white/80 text-sm uppercase tracking-wide font-light">
                Quantum Nexus Active
              </span>

              <motion.div
                className="w-3 h-3 rounded-full bg-cyan-400"
                animate={quantumState.collapse ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
                transition={{ duration: 0.5, repeat: quantumState.collapse ? Infinity : 0 }}
              />
            </div>

            {/* Coherence Meters */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Coherence', value: quantumState.coherence, color: '#60a5fa' },
                { label: 'Entanglement', value: quantumState.entanglement, color: '#f59e0b' },
                { label: 'Superposition', value: quantumState.superposition, color: '#ec4899' }
              ].map((metric, index) => (
                <div key={metric.label} className="space-y-2">
                  <div className="text-xs text-white/60 uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: metric.color }}
                      animate={{ width: `${metric.value * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrincipalVisionSphere;
