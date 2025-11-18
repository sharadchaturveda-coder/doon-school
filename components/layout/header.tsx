/**
 * @fileoverview Main navigation header component for Doon International School
 * @description Responsive navigation header with dynamic styling, mobile menu, and scroll effects
 * @author Doon International School Development Team
 */

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

/**
 * Main Header Component
 *
 * Features:
 * - Dynamic styling based on scroll position and current page
 * - Responsive design with mobile-first approach
 * - Dropdown navigation menus for complex sections
 * - Mobile hamburger menu with slide-out navigation
 * - Logo and school name display
 * - Enquiry button with distinct styling
 * - Smooth transitions and hover effects
 *
 * Scroll Behavior:
 * - Transparent on homepage hero section
 * - Solid background after scrolling past hero (desktop)
 * - Immediate solid background on mobile
 * - Backdrop blur effect on larger screens
 *
 * @returns {JSX.Element} The responsive navigation header
 */
const Header: React.FC = (): JSX.Element => {
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
            ? `bg-transparent shadow-none`
            : `shadow-lg border-b bg-white border-gray-300`
      }`}>
        <div className="container px-0.5 pr-2 py-2 md:px-4 md:py-3 lg:py-3 min-h-[5rem] md:min-h-[5rem] lg:min-h-[3rem] grid grid-cols-[auto_1fr_auto] items-center relative gap-4 lg:gap-8">
          {/* LEFT SIDE: LOGO */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/assets/logo.webp"
              alt="Doon International School Logo"
              className="w-24 h-24 md:w-16 md:h-16 lg:w-36 lg:h-36 object-contain"
            />
          </div>

          {/* CENTER: SCHOOL NAME - On mobile in smaller font */}
          <div className="flex justify-center items-center col-start-2">
            <Link
              href="/"
              className={`block md:hidden xl:block ${(pathname === '/' && !isScrolled) || isMobileMenuOpen ? 'text-white' : 'text-black'} font-heading font-bold text-xs sm:text-sm xl:text-base hover:text-[#FFD700] transition-colors`}
            >
              DOON INTERNATIONAL SCHOOL, JABALPUR
            </Link>
          </div>

          {/* RIGHT SIDE: NAV - Hidden on mobile, tablet optimized */}
          <div className="hidden md:flex items-center justify-end gap-2 md:gap-2 lg:gap-4 col-start-3">
            {siteData.navigation.map((item) => (
              <div key={item.name} className="relative group flex items-center flex-shrink-0">
              {item.name === "ENQUIRY" ? (
                <Link href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="bg-[#F2B33D] text-[#002B6B] px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2 rounded-full font-medium hover:bg-[#F2B33D]/90 transition-colors flex-shrink-0 whitespace-nowrap text-sm lg:text-base">
                  Enquiry
                </Link>
              ) : (
                  <>
                    <Link
                      href={item.href}
                      className={`${pathname === '/' && !isScrolled ? 'text-white' : 'text-black'} hover:text-[#FFD700] transition-colors font-medium flex items-center space-x-1 leading-tight text-sm lg:text-base`}
                    >
                      <span className="whitespace-nowrap">{item.shortName || item.name}</span>
                      {item.dropdown && <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0 mt-0.5" />}
                    </Link>
                    {item.dropdown && (
                      <div className="absolute top-full left-0 mt-1 bg-white/70 backdrop-blur-md border border-gray-300 py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px] lg:min-w-[200px] z-50">
                        {item.dropdown.map((submenu, index) => (
                          <div key={submenu.name}>
                            <Link
                              href={submenu.href}
                              className="block px-3 lg:px-4 py-2 text-black hover:bg-gray-100 hover:text-[#FFD700] transition-colors text-sm lg:text-base"
                            >
                              {submenu.name}
                            </Link>
                            {index < item.dropdown.length - 1 && <div className="border-b border-gray-300 mx-2"></div>}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0 ml-auto">
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
