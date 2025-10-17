'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
import { ChevronDown, Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Hero is full screen
      setIsScrolled(window.scrollY > heroHeight * 0.8); // When scrolled past 80% of hero
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialIconMap: { [key: string]: any } = {
    Facebook,
    Twitter,
    Instagram,
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <header className={`${pathname === '/' ? 'fixed' : 'sticky'} top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `shadow-lg border-b bg-black/80 backdrop-blur-md border-white/30`
          : pathname === '/'
          ? 'bg-transparent border-transparent'
          : 'shadow-lg border-b bg-black/80 backdrop-blur-md border-white/30'
      }`}>
        <div className="container mx-auto px-4 pt-0 pb-0 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-20 h-[9rem] flex-shrink-0">
              <Image
                src="/assets/logo.webp"
                alt="Doon International School Logo"
                fill
                className="object-contain scale-[1.800]"
                sizes="1000px"
              />
            </div>
            <span className="text-white font-heading font-bold text-lg leading-tight">
              {siteData.siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {siteData.navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-white hover:text-[#FFD700] transition-colors font-medium flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-black/70 backdrop-blur-md border border-white/30 py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                    {item.dropdown.map((submenu, index) => (
                      <div key={submenu.name}>
                        <Link
                          href={submenu.href}
                          className="block px-4 py-2 text-white hover:bg-white/20 hover:text-[#FFD700] transition-colors text-15px"
                        >
                          {submenu.name}
                        </Link>
                        {index < item.dropdown.length - 1 && <div className="border-b border-white/30 mx-2"></div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enquiry Button */}
          <div className="hidden lg:block">
            <button className="bg-[#F2B33D] text-[#002B6B] px-6 py-2 rounded-full font-medium hover:bg-[#F2B33D]/90 transition-colors">
              Enquiry
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
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
        </div>
      </header>


    </>
  );
};

export default Header;
