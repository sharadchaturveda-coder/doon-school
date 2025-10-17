'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const updateScrollableState = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollable = documentHeight > windowHeight;
      setIsScrollable(scrollable);
      if (scrollable) {
        setPageHeight(documentHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScrollableState);

    // Initialize
    updateScrollableState();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollableState);
    };
  }, []);

  const midwayPoint = pageHeight / 2;
  const isAboveMidway = scrollPosition < midwayPoint;

  const handleScrollClick = () => {
    if (isAboveMidway) {
      // Scroll to bottom
      window.scrollTo({ top: pageHeight, behavior: 'smooth' });
    } else {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full text-white">
      {/* TOP FOOTER */}
      <div className="bg-[#001F48] py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">

          {/* COLUMN 1 - SCHOOL INFO */}
          <div>
            <h3 className="font-bold text-lg text-white mb-2">
              Doon International<br />School, Jabalpur
            </h3>
            <div className="w-8 h-[2px] bg-[#FFD300] mb-3"></div>
            <p className="text-[#E5E9F1] text-sm leading-relaxed">
              Doon International School, affiliated with CBSE, provides quality
              education, modern facilities, and holistic development, nurturing
              students for academic excellence and future success.
            </p>
          </div>

          {/* COLUMN 2 - QUICK LINKS */}
          <div>
            <h4 className="font-bold text-lg text-white mb-2">Quick Links</h4>
            <div className="w-8 h-[2px] bg-[#FFD300] mb-3"></div>
            <ul className="space-y-2 text-sm text-[#E5E9F1]">
              <li><Link href="/" className="hover:text-[#FFD300] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FFD300] transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-[#FFD300] transition-colors">Admission Procedure</Link></li>
              <li><Link href="#" className="hover:text-[#FFD300] transition-colors">Latest Updates</Link></li>
              <li><Link href="#" className="hover:text-[#FFD300] transition-colors">Video Gallery</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 - IMPORTANT LINKS */}
          <div>
            <h4 className="font-bold text-lg text-white mb-2">Important Links</h4>
            <div className="w-8 h-[2px] bg-[#FFD300] mb-3"></div>
            <ul className="space-y-2 text-sm text-[#E5E9F1]">
              <li><Link href="#" className="hover:text-[#FFD300] transition-colors">Mandatory Disclosure</Link></li>
              <li><Link href="#" className="hover:text-[#FFD300] transition-colors">Historical Legacy</Link></li>
              <li><Link href="#" className="hover:text-[#FFD300] transition-colors">News Gallery</Link></li>
              <li><Link href="#" className="hover:text-[#FFD300] transition-colors">Latest Updates</Link></li>
              <li><Link href="#" className="hover:text-[#FFD300] transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 - CONTACT INFO */}
          <div>
            <h4 className="font-bold text-lg text-white mb-2">Quick Contacts</h4>
            <div className="w-8 h-[2px] bg-[#FFD300] mb-3"></div>
            <ul className="text-sm text-[#E5E9F1] space-y-2">
              <li>
                <span className="font-semibold text-white">Location:</span><br />
                Suman Devi Shikshan Sansthan (De ward) B-B, 324 Anand enclaves,
                Dayanand Saraswati Ward, Jabalpur, Madhya Pradesh, Code: 23
              </li>
              <li>
                <span className="font-semibold text-white">Call Us:</span><br />
                +91 9662503482
              </li>
              <li>
                <span className="font-semibold text-white">Mail Us:</span><br />
                info@dooninternationaljabalpur.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER STRIP */}
      <div className="bg-[#072C5C] py-4 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">

          {/* Left - Logo + School Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.webp"
              alt="Doon International Logo"
              width={40}
              height={40}
              className="object-contain scale-[2.25]"
            />
            <h5 className="text-white font-semibold text-sm md:text-base leading-tight">
              DOON INTERNATIONAL<br />
              <span className="text-[#B8C4D8]">SCHOOL, JABALPUR</span>
            </h5>
          </div>

          {/* Right - Copyright + Company Logo */}
          <div className="text-[#B8C4D8] text-sm flex flex-col md:flex-row md:justify-end md:items-center relative overflow-visible">
            <span className="text-center md:text-left z-10">
              © Copyright 2025, All rights reserved. Developed by
            </span>

            <div
              className="relative ml-3 flex items-center justify-center cursor-pointer"
              onClick={() => window.location.href = '#'}
            >
              <Image
                src="/images/company_logo.png"
                alt="Edgenix Tech Logo"
                width={100}
                height={80}
                className="object-contain scale-[2.75] md:scale-[2.0] origin-center hover:opacity-80 transition-transform duration-300"
                style={{ transformOrigin: 'center center' }}
              />
            </div>
          </div>
        </div>

        {/* Floating Scroll Button */}
        {isScrollable && (
          <button
            className="fixed bottom-6 right-6 bg-[#FFD300] text-[#001F48] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-[#FFC600] transition-colors"
            onClick={handleScrollClick}
          >
            <i className={`fas fa-arrow-${isAboveMidway ? 'down' : 'up'}`}></i>
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
