import React, { useState, useEffect } from 'react';
import { imgInstallIcon as InstallIcon, imgChevronDown } from "../svg-q11ro";

const Logo = `${import.meta.env.BASE_URL}assets/logo-final.svg`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-[27px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1242px] animate-slide-in-header transition-all duration-300 ${scrolled ? 'top-[12px]' : ''}`}>
      <div className={`flex items-center justify-between px-[7px] py-[9px] rounded-[18px] transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-white shadow-card'}`}>
        {/* Logo */}
        <div className="pl-4">
          <a href="#" className="block h-[28px] w-[56px] hover:opacity-80 transition-opacity">
            <img alt="Logo" className="w-full h-full" src={Logo} />
          </a>
        </div>

        {/* Desktop Navigation & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 bg-white/50 px-4 py-2 rounded-full">
            <a href="#hero" className="font-geist font-medium text-[14px] text-secondary hover:text-primary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a href="#features" className="font-geist font-medium text-[14px] text-secondary hover:text-primary transition-colors relative group">
              How it Works
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <div className="flex items-center gap-1 cursor-pointer group relative">
              <span className="font-geist font-medium text-[14px] text-secondary group-hover:text-primary transition-colors">
                Resources
              </span>
              <div className="w-[9px] h-[5px] transition-transform group-hover:rotate-180 duration-300">
                <img alt="" className="w-full h-full" src={imgChevronDown} />
              </div>
              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-card p-3 min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <a href="#" className="block px-3 py-2 text-[13px] font-geist text-secondary hover:text-primary hover:bg-primary-lighter rounded-lg transition-colors">Documentation</a>
                <a href="#" className="block px-3 py-2 text-[13px] font-geist text-secondary hover:text-primary hover:bg-primary-lighter rounded-lg transition-colors">Blog</a>
                <a href="#" className="block px-3 py-2 text-[13px] font-geist text-secondary hover:text-primary hover:bg-primary-lighter rounded-lg transition-colors">Support</a>
              </div>
            </div>
          </nav>

          <button className="bg-primary-light hover:bg-primary transition-all duration-200 flex items-center gap-2 px-4 py-[10px] rounded-[10px] shadow-button text-white group active:scale-95 btn-inner-shadow relative overflow-hidden" aria-label="Install Customizer">
            <div className="w-[16px] h-[18px]">
              <img alt="" className="w-full h-full" src={InstallIcon} aria-hidden="true" />
            </div>
            <span className="font-geist font-medium text-[14px]">Install Customizer</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-[2px] bg-secondary rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[2px] bg-secondary rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] bg-secondary rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[300px] mt-2' : 'max-h-0'}`}>
        <div className="bg-white rounded-[18px] shadow-card p-4 space-y-3">
          <a href="#hero" onClick={() => setMobileOpen(false)} className="block font-geist font-medium text-[15px] text-secondary hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary-lighter">
            Home
          </a>
          <a href="#features" onClick={() => setMobileOpen(false)} className="block font-geist font-medium text-[15px] text-secondary hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary-lighter">
            How it Works
          </a>
          <a href="#testimonials" onClick={() => setMobileOpen(false)} className="block font-geist font-medium text-[15px] text-secondary hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary-lighter">
            Resources
          </a>
          <button className="w-full bg-primary-light hover:bg-primary transition-colors flex items-center justify-center gap-2 px-4 py-[10px] rounded-[10px] shadow-button text-white btn-inner-shadow" aria-label="Install Customizer">
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
