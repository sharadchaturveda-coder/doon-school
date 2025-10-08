'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  videoSrc?: string;
  videoPoster?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, videoSrc, videoPoster, children }) => {
  const floatingElements = [
    { id: 1, size: 'w-4 h-4', delay: 0, duration: 3, top: '10%', left: '10%' },
    { id: 2, size: 'w-6 h-6', delay: 1, duration: 4, top: '20%', right: '15%' },
    { id: 3, size: 'w-3 h-3', delay: 2, duration: 5, bottom: '30%', left: '20%' },
    { id: 4, size: 'w-5 h-5', delay: 1.5, duration: 3.5, top: '60%', right: '25%' },
    { id: 5, size: 'w-4 h-4', delay: 0.5, duration: 4.5, bottom: '20%', right: '10%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: Video or Fallback */}
      {videoSrc ? (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
          >
            <source src={videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Semi-transparent overlay for text contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </>
      ) : (
        /* Default Animated Background */
        <div className="absolute inset-0 bg-gradient-to-br from-blue-primary via-light-blue to-orange-brand">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/80 via-light-blue/80 to-orange-brand/80 animate-pulse" />
        </div>
      )}

      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} bg-white/10 rounded-full backdrop-blur-sm`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-brand/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-light-blue/10 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            <span className="block">{title.split(' ').slice(0, 2).join(' ')}</span>
            <span className="block gradient-text-hero text-6xl md:text-8xl lg:text-9xl">
              {title.split(' ').slice(2).join(' ')}
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {children && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            {children}
          </motion.div>
        )}
      </div>


    </section>
  );
};

export default Hero;
