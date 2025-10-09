'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import ModernMobileMenu from '../ui/modern-mobile-menu';
import ModernHamburgerButton from '../ui/modern-hamburger-button';
import siteData from '../../data/site.json';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const headerBackgroundOpacity = useTransform(scrollY, [0, 100], [1, 0.85]);
  const headerBlur = useTransform(scrollY, [0, 200], [0, 2]);
  const headerShadow = useTransform(scrollY, [0, 100], ['0 2px 4px 0 rgba(0,0,0,0.05)', '0 4px 12px 0 rgba(0,0,0,0.12)']);

  return (
    <motion.header
      className="backdrop-blur-md sticky top-0 z-40 border-b border-white/20"
      style={{
        backgroundColor: useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.8)']),
        boxShadow: headerShadow,
        backdropFilter: useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(8px)'])
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="font-heading text-lg md:text-2xl font-bold text-primary flex items-center space-x-2 md:space-x-4">
          <div className="relative w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
            <picture>
              <source srcSet="/assets/logo.avif" type="image/avif" />
              <Image
                src="/assets/logo.webp"
                alt="Doon International School Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 64px, 96px"
              />
            </picture>
          </div>
          <span>{siteData.siteName}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {siteData.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <ModernHamburgerButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* Modern Mobile Menu */}
        <ModernMobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </nav>
    </motion.header>
  );
};

export default Header;
