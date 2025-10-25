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
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      const scrollThreshold = isMobile ? 0 : heroHeight * 0.8; // Immediate on mobile, 80% on desktop
      setIsScrolled(window.scrollY > scrollThreshold);
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
          ? `shadow-lg border-b bg-white border-gray-300 lg:bg-white/90 lg:backdrop-blur-md`
          : pathname === '/'
          ? 'bg-transparent border-transparent'
          : 'shadow-lg border-b bg-white border-gray-300'
      }`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between min-h-[3rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-14 h-16 md:w-16 md:h-20 flex-shrink-0">
            <Image
              src="/assets/logo.webp"
              alt="Doon International School Logo"
              fill
              className="object-contain scale-[2.0] md:scale-[1.8]"
              sizes="1000px"
            />
          </div>
            <span className={`${pathname === '/' && !isScrolled ? 'text-white' : 'text-black'} font-heading font-bold text-lg leading-tight`}>
              {siteData.siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {siteData.navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`${pathname === '/' && !isScrolled ? 'text-white' : 'text-black'} hover:text-[#FFD700] transition-colors font-medium flex items-center space-x-1`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white/70 backdrop-blur-md border border-gray-300 py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                    {item.dropdown.map((submenu, index) => (
                      <div key={submenu.name}>
                        <Link
                          href={submenu.href}
                          className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#FFD700] transition-colors text-15px"
                        >
                          {submenu.name}
                        </Link>
                        {index < item.dropdown.length - 1 && <div className="border-b border-gray-300 mx-2"></div>}
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
