"use client";
import React from "react";

const BottomSignature: React.FC = () => {
  return (
    <div className="w-full bg-[#061B36] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 h-[60px]">
        <p className="text-center md:text-left text-white/90 text-sm font-light leading-none">
          © {new Date().getFullYear()} Doon International School, Jabalpur. All rights reserved.
        </p>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-white/80 font-light leading-none">Developed by</span>
          <img
            src="/images/company_logo.png"
            alt="Edgeniox"
            className="h-[60px] w-auto object-contain scale-[1.8] md:scale-[2.2] -translate-y-[6px] select-none pointer-events-none"
            style={{
              transformOrigin: 'left center',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSignature;
