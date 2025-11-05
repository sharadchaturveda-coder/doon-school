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
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Hero is full screen
      const mobile = window.innerWidth < 1024; // lg breakpoint
      const scrollThreshold = mobile ? 0 : heroHeight * 0.8; // Immediate on mobile, 80% on desktop
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
        <div className="container mx-auto px-4 py-0 md:py-3 flex items-center min-h-[3rem]">
          {/* LEFT SIDE: LOGO + NAME */}
          <div className="flex flex-col md:flex-row items-center md:items-center flex-shrink-0 space-y-0 space-x-0 md:space-x-3 md:space-y-0 min-w-0">
            <div className="flex-shrink-0">
              <img
                src="/assets/logo.webp"
                alt="Doon International School Logo"
                className="w-48 h-48 md:w-36 md:h-36 object-contain md:scale-[120%]"
              />
            </div>
            <Link
              href="/"
              className={`${pathname === '/' && !isScrolled ? 'text-white' : 'text-black'} whitespace-nowrap font-heading font-bold text-xs md:text-lg leading-tight truncate min-w-0 hover:text-[#FFD700] transition-colors`}
            >
              {siteData.siteName}
            </Link>
          </div>

          {/* RIGHT SIDE: NAV - Hidden on smaller screens */}
          <div className="hidden md:flex items-center justify-end flex-1 ml-8 gap-4">
            {siteData.navigation.map((item) => (
              <div key={item.name} className="relative group flex items-center flex-shrink-0">
                <Link
                  href={item.href}
                  className={`${pathname === '/' && !isScrolled ? 'text-white' : 'text-black'} hover:text-[#FFD700] transition-colors font-medium flex items-center space-x-1 leading-tight`}
                >
                  <span className="whitespace-nowrap">{item.shortName || item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white/70 backdrop-blur-md border border-gray-300 py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50">
                    {item.dropdown.map((submenu, index) => (
                      <div key={submenu.name}>
                        <Link
                          href={submenu.href}
                          className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#FFD700] transition-colors"
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

            {/* Enquiry Button */}
            <button className="bg-[#F2B33D] text-[#002B6B] px-6 py-2 rounded-full font-medium hover:bg-[#F2B33D]/90 transition-colors flex-shrink-0 whitespace-nowrap">
              Enquiry
            </button>
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
        </div>
      </header>


    </>
  );
};

export default Header;
