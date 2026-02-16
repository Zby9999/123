import React from 'react';
import { imgGroup3 as InstallIcon, imgVector113 } from "../svg-q11ro";

const Logo = "/assets/logo-final.svg";

export default function Header() {
  return (
    <div className="absolute top-[26px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-4">
      <div className="bg-white flex items-center justify-between px-2 py-2 rounded-[18px] shadow-card">
        {/* Logo */}
        <div className="pl-4">
          <div className="h-[28px] w-[56px]">
            <img alt="Logo" className="w-full h-full" src={Logo} />
          </div>
        </div>

        {/* Navigation & CTA */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 bg-white px-4 py-2 rounded-full">
            <a href="#" className="font-geist font-medium text-[14px] text-secondary hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="font-geist font-medium text-[14px] text-secondary hover:text-primary transition-colors">
              How it Works
            </a>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="font-geist font-medium text-[14px] text-secondary group-hover:text-primary transition-colors">
                Resources
              </span>
              <div className="w-[9px] h-[5px]">
                <img alt="" className="w-full h-full" src={imgVector113} />
              </div>
            </div>
          </nav>

          <button className="bg-primary-light hover:bg-primary transition-colors flex items-center gap-2 px-4 py-[10px] rounded-[10px] shadow-button text-white group" aria-label="Install Customizer">
            <div className="w-[16px] h-[18px]">
              <img alt="" className="w-full h-full" src={InstallIcon} aria-hidden="true" />
            </div>
            <span className="font-geist font-medium text-[14px]">Install Customizer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
