'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ModernHamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const ModernHamburgerButton: React.FC<ModernHamburgerButtonProps> = ({
  isOpen,
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-primary/30 rounded-full blur-md scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hamburger lines */}
      <div className="relative w-5 h-4 flex flex-col justify-center items-center">
        <motion.span
          className="absolute h-0.5 bg-white rounded-full"
          style={{ width: isOpen ? '16px' : '20px' }}
          animate={{
            top: isOpen ? '50%' : '25%',
            rotate: isOpen ? 45 : 0,
            transform: isOpen ? 'translateY(-50%)' : 'translateY(-50%)'
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute h-0.5 bg-white rounded-full"
          style={{ width: '20px' }}
          animate={{
            top: '50%',
            opacity: isOpen ? 0 : 1,
            transform: 'translateY(-50%)'
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute h-0.5 bg-white rounded-full"
          style={{ width: isOpen ? '16px' : '20px' }}
          animate={{
            top: isOpen ? '50%' : '75%',
            rotate: isOpen ? -45 : 0,
            transform: isOpen ? 'translateY(-50%)' : 'translateY(-50%)'
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>

      <span className="sr-only">Toggle mobile menu</span>
    </motion.button>
  );
};

export default ModernHamburgerButton;
