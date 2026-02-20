import React from 'react';
import Header from './Header';
import OrderCard from './OrderCard';
import DeliveryCard from './DeliveryCard';
import QuantityCard from './QuantityCard';
import ContactCard from './ContactCard';
import AddressCard from './AddressCard';
import {
  imgBgCircles as BgBlob,
  imgBgGlow as BgShape,
  imgInstallIcon as InstallIcon,
  imgConnectorRight,
  imgConnectorLeft,
} from "../svg-q11ro";

export default function Hero() {
  return (
    <>
      {/* Header rendered outside the section so overflow-x-clip doesn't affect fixed positioning */}
      <Header />

      <section id="hero" className="relative w-full min-h-screen bg-gradient-to-b from-bg-start to-bg-end flex flex-col items-center rounded-[36px] overflow-x-clip">

        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none z-0">
          <div className="relative w-full max-w-[1242px] mx-auto h-full">
            <img src={BgShape} alt="" aria-hidden="true" className="absolute top-[540px] left-[214px] w-[828px] opacity-100" />
            <img src={BgBlob} alt="" aria-hidden="true" className="absolute top-[365px] -left-[355px] w-[1953px] max-w-none opacity-100" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1242px] mx-auto px-4 lg:px-0 flex flex-col overflow-visible">

          {/* Headline Section */}
          <div className="mt-[137px] mx-auto max-w-[620px] flex flex-col items-center gap-6 text-center">
            {/* Badge */}
            <div className="opacity-0 animate-fade-in-down delay-200 bg-white flex items-center gap-3 pl-1 pr-3 py-1 rounded-lg shadow-sm w-fit">
              <div className="bg-primary-light px-3 py-1 rounded-[10px] shadow-button btn-inner-shadow text-white text-[13px] font-medium font-geist">
                31%
              </div>
              <p className="text-secondary text-[13px] font-medium font-geist tracking-[-0.26px]">
                Increased AOV Value 🎉
              </p>
            </div>

            {/* Title */}
            <div className="space-y-4 opacity-0 animate-fade-in-up delay-300">
              <h1 className="font-geist font-semibold text-[40px] md:text-[55px] leading-[1.1] text-secondary tracking-[-2.75px]">
                Cut Support Tickets & Let Customers Edit Orders
              </h1>
              <p className="font-geist font-medium text-[18px] text-secondary-light tracking-[-0.18px] max-w-[540px] mx-auto">
                Let Customers Edit Orders Themselves: Save your customers time and yourself from support email headaches
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-500">
              <button className="bg-white hover:bg-gray-50 transition-all duration-200 text-primary font-medium font-geist text-[16px] px-6 py-3 rounded-[11px] shadow-sm tracking-[-0.32px] active:scale-95 btn-white-inner-shadow relative overflow-hidden" aria-label="Get Demo">
                Get Demo
              </button>
              <button className="bg-primary-light hover:bg-primary transition-all duration-200 text-white font-medium font-geist text-[16px] px-6 py-3 rounded-[11px] shadow-button animate-pulse-glow flex items-center gap-2 tracking-[-0.32px] active:scale-95 btn-inner-shadow relative overflow-hidden group" aria-label="Install Customizer">
                <div className="w-[16px] h-[18px]">
                  <img src={InstallIcon} alt="" className="w-full h-full" aria-hidden="true" />
                </div>
                Install Customizer
              </button>
            </div>
          </div>

          {/* Demo Section - uses center-relative positioning for cards */}
          <div className="mt-[70px] relative w-full h-[500px] lg:h-[420px] flex flex-col lg:block items-center pb-16">

            {/* Main Card (Centered) */}
            <div className="relative z-20 opacity-0 animate-scale-in delay-600 transform transition-transform hover:scale-[1.02] duration-300 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0">
              <OrderCard />
            </div>

            {/* Connector arrows - center relative */}
            <div className="hidden lg:block absolute left-[calc(50%+171px)] top-[30px] z-10 opacity-0 animate-fade-in delay-1000">
              <img src={imgConnectorRight} alt="" className="w-[111px] h-[196px]" />
            </div>
            <div className="hidden lg:block absolute left-[calc(50%-285px)] top-[65px] z-10 opacity-0 animate-fade-in delay-1000">
              <div className="-scale-y-100 rotate-180">
                <img src={imgConnectorLeft} alt="" className="w-[111px] h-[196px]" />
              </div>
            </div>

            {/* Delivery Date Card (Right Top) - 848-621=227px right of center */}
            <div className="lg:absolute lg:left-[calc(50%+227px)] lg:top-[-32px] z-10 opacity-0 animate-fade-in-right delay-800 hidden lg:block">
              <div className="animate-float">
                <DeliveryCard />
              </div>
            </div>

            {/* Change Quantities Card (Right Bottom) - 870-621=249px right of center */}
            <div className="lg:absolute lg:left-[calc(50%+249px)] lg:top-[167px] z-30 opacity-0 animate-fade-in-right delay-1000 hidden lg:block">
              <div className="animate-float-delayed" style={{ transform: 'rotate(2.44deg)' }}>
                <QuantityCard />
              </div>
            </div>

            {/* Contact Card (Left Top) - 162-621=-459px left of center */}
            <div className="lg:absolute lg:left-[calc(50%-459px)] lg:top-[-50px] z-30 opacity-0 animate-fade-in-left delay-800 hidden lg:block">
              <div className="animate-float-left">
                <ContactCard />
              </div>
            </div>

            {/* Address Card (Left Bottom) - 140-621=-481px left of center */}
            <div className="lg:absolute lg:left-[calc(50%-481px)] lg:top-[170px] z-30 opacity-0 animate-fade-in-left delay-1000 hidden lg:block">
              <div className="animate-float-delayed" style={{ transform: 'rotate(-2deg)' }}>
                <AddressCard />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in delay-1200">
          <div className="animate-scroll-indicator flex flex-col items-center gap-1">
            <span className="text-[11px] font-geist text-secondary/50 tracking-wider uppercase">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-secondary/40">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-scroll-indicator"/>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
