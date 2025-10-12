'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export function GlobalDownloadTab() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (!isHomePage) return null;

  return (
    <a
      href="#"
      className="fixed left-3 top-1/2 -translate-y-1/3 bg-primary text-white text-base font-medium pl-2.5 pt-2 pb-1 pr-2.5 rounded-r-md rotate-[-90deg] origin-left z-20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
      aria-label="Download Prospectus"
    >
      📚 Download&nbsp;Prospectus
    </a>
  );
}
