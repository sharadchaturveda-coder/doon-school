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
      <div className="hidden md:block bg-[#001F48] py-0 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-0 px-1">

          {/* Section 1 - Copyright */}
          <div className="flex-shrink-0">
            <span className="text-[#B8C4D8] text-xs leading-none text-center">
              © Copyright 2025, All rights reserved
            </span>
          </div>

          {/* Section 2 - Developed by + Company Logo */}
          <div className="hidden md:flex items-center gap-0 flex-shrink-0">
            <span className="text-[#B8C4D8] text-xs leading-none">
              Developed by
            </span>

            <Image
              src="/images/company_logo.png"
              alt="Edgenix Tech Logo"
              width={120}
              height={96}
              className="object-contain flex-shrink-0"
            />
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
