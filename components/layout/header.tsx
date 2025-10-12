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
import { ChevronDown, Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const socialIconMap: { [key: string]: any } = {
    Facebook,
    Twitter,
    Instagram,
  };

  return (
    <>
      {/* Header Bar (Contact Strip) */}
      <div className="bg-white text-[#002B6B] text-sm py-2 border-b border-gray-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>{siteData.contact?.phone}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>{siteData.contact?.email}</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {siteData.socialMedia?.map((social) => {
              const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#002B6B] to-[#083B8C] border-2 border-gray-300 flex items-center justify-center hover:border-[#F2B33D] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#F2B33D] hover:to-[#FFC600] transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-[#002B6B] transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="bg-white sticky top-0 z-40 shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-1 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/assets/logo.webp"
                alt="Doon International School Logo"
                fill
                className="object-contain scale-[1.800]"
                sizes="1000px"
              />
            </div>
            <span className="text-[#002B6B] font-heading font-bold text-lg leading-tight">
              {siteData.siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {siteData.navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-[#002B6B] hover:text-[#F2B33D] transition-colors font-medium flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                    {item.dropdown.map((submenu, index) => (
                      <div key={submenu.name}>
                        <Link
                          href={submenu.href}
                          className="block px-4 py-2 text-[#002B6B] hover:bg-gray-100 hover:text-[#F2B33D] transition-colors text-15px"
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
