import React from 'react';
import Header from './Header';
import OrderCard from './OrderCard';
import { 
  imgVector as BgBlob, 
  imgVector7 as BgShape, 
  imgFrame as TriangleIcon, 
  imgVector1 as TruckIcon, 
  imgVector5 as CheckCircleIcon,
  imgStreamlineMapFold, 
  imgFrame2147226045,
  imgFrame23,
  imgGroup3 as InstallIcon
} from "../svg-q11ro";

const imgImage5 = "/assets/9511e9ed6815e537ccc7b12b529711a4523cad01.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-bg-start to-bg-end overflow-hidden flex flex-col items-center rounded-[36px]">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none z-0">
         <div className="relative w-full max-w-[1242px] mx-auto h-full">
            <img src={BgShape} alt="" aria-hidden="true" className="absolute top-[540px] left-[214px] w-[828px] opacity-100" />
            <img src={BgBlob} alt="" aria-hidden="true" className="absolute top-[365px] -left-[355px] w-[1953px] max-w-none opacity-100" />
         </div>
      </div>

      <Header />

      <div className="relative z-10 w-full max-w-[1242px] mx-auto px-4 lg:px-0 flex flex-col">
        
        {/* Headline Section */}
        <div className="mt-[137px] mx-auto max-w-[620px] flex flex-col items-center gap-6 text-center">
          {/* Badge */}
          <div className="bg-white flex items-center gap-3 pl-1 pr-3 py-1 rounded-lg shadow-sm animate-fade-in-up w-fit">
            <div className="bg-primary-light px-3 py-1 rounded-[10px] shadow-button text-white text-[13px] font-medium font-geist">
              31%
            </div>
            <p className="text-secondary text-[13px] font-medium font-geist tracking-[-0.26px]">
              Increased AOV Value 🎉
            </p>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="font-geist font-semibold text-[40px] md:text-[55px] leading-[1.1] text-secondary tracking-[-2.75px]">
              Cut Support Tickets & Let Customers Edit Orders
            </h1>
            <p className="font-geist font-medium text-[18px] text-secondary-light tracking-[-0.18px] max-w-[540px] mx-auto">
              Let Customers Edit Orders Themselves: Save your customers time and yourself from support email headaches
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-white hover:bg-gray-50 transition-colors text-primary font-medium font-geist text-[16px] px-6 py-3 rounded-[11px] shadow-sm tracking-[-0.32px]" aria-label="Get Demo">
              Get Demo
            </button>
            <button className="bg-primary-light hover:bg-primary transition-colors text-white font-medium font-geist text-[16px] px-6 py-3 rounded-[11px] shadow-button flex items-center gap-2 tracking-[-0.32px] group" aria-label="Install Customizer">
              <div className="w-[16px] h-[18px]">
                <img src={InstallIcon} alt="" className="w-full h-full" aria-hidden="true" />
              </div>
              Install Customizer
            </button>
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-[70px] relative w-full h-[500px] lg:h-auto flex flex-col lg:block items-center">
          
          {/* Main Card (Centered) */}
          <div className="relative z-20 transform transition-transform hover:scale-[1.02] duration-300 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0">
            <OrderCard />
          </div>

          {/* Floating Elements - Satellite Cards */}
          
          {/* Change Quantities Card (Right Bottom) */}
          <div className="lg:absolute lg:left-[870px] lg:top-[167px] z-30 transform rotate-[2.44deg] hover:scale-105 transition-transform cursor-pointer mt-8 lg:mt-0">
            <div className="bg-white p-2 rounded-[8px] shadow-card w-[220px] mb-2 flex items-center gap-2">
                <div className="w-[12px] h-[5px] shrink-0 rotate-180"><img src={TriangleIcon} alt="" className="w-full h-full" /></div>
                <span className="text-[11px] font-medium text-secondary">Change Quantities / Remove Items</span>
            </div>
            <div className="bg-white p-3 rounded-[11px] shadow-card w-[220px]">
                <div className="flex gap-3">
                   <div className="w-[56px] h-[57px] bg-primary-lighter rounded-[6px] relative overflow-hidden shrink-0">
                      <img src={imgImage5} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46px] h-[46px] object-cover" />
                   </div>
                   <div className="flex flex-col justify-center w-full gap-2">
                      <div className="space-y-1 w-full">
                         <div className="h-[6px] w-[80%] bg-gray-200 rounded-full" />
                         <div className="h-[6px] w-full bg-gray-200 rounded-full" />
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="text-[10px] text-gray-500">Quantity:</span>
                         <div className="bg-[#ffe9e6] border border-primary-dark rounded-[7px] px-2 py-1 flex items-center gap-2">
                            <span className="text-primary-dark text-[14px]">2</span>
                            <div className="flex flex-col gap-[2px]">
                                <img src={TriangleIcon} className="w-[7px] rotate-180" alt="" />
                                <img src={TriangleIcon} className="w-[7px]" alt="" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>

          {/* Delivery Date Card (Right Top) */}
          <div className="lg:absolute lg:left-[848px] lg:top-[-32px] z-10 hover:scale-105 transition-transform cursor-pointer hidden lg:block">
             <div className="bg-white p-2 rounded-[8px] shadow-card w-[230px] mb-2 flex items-center gap-2">
                <div className="w-[12px] h-[5px] shrink-0 rotate-180"><img src={TriangleIcon} alt="" className="w-full h-full" /></div>
                <span className="text-[11px] font-medium text-secondary">Change Delivery Date</span>
            </div>
            <div className="bg-white p-3 rounded-[8px] shadow-card w-[230px]">
               <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                     <img src={imgStreamlineMapFold} className="w-[9px]" alt="" />
                     <span className="text-[8px]">Preferred Delivery Date</span>
                  </div>
                  <img src={TriangleIcon} className="w-[7px] rotate-90" alt="" />
               </div>
               <div className="space-y-2">
                  <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-md">
                     <div className="w-[25px] h-[25px] bg-primary-lighter rounded flex items-center justify-center">
                        <img src={TruckIcon} className="w-[20px]" alt="" />
                     </div>
                     <div>
                        <div className="text-[6px] font-semibold text-success uppercase">Free Delivery</div>
                        <div className="text-[8px]">Friday, 7 march</div>
                     </div>
                     <img src={CheckCircleIcon} className="w-[13px] ml-auto" alt="" />
                  </div>
                   <div className="flex items-center gap-2 p-1 rounded-md opacity-50">
                     <div className="w-[25px] h-[25px] rounded flex items-center justify-center border border-gray-200">
                        <img src={imgFrame23} className="w-[10px]" alt="" />
                     </div>
                     <div>
                        <div className="text-[6px] font-semibold uppercase">Fast delivery (+$5)</div>
                        <div className="text-[8px]">Friday, 3 march</div>
                     </div>
                     <div className="w-[13px] h-[13px]">
                        <img src={imgFrame2147226045} className="w-full h-full" alt="" />
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Card (Left) */}
          <div className="lg:absolute lg:left-[162px] lg:top-[-50px] z-30 hover:scale-105 transition-transform cursor-pointer hidden lg:block w-[220px]">
             <div className="bg-white p-2 rounded-[8px] shadow-card w-full mb-2 flex items-center gap-2">
                <div className="w-[12px] h-[5px] shrink-0 rotate-180"><img src={TriangleIcon} alt="" className="w-full h-full" /></div>
                <span className="text-[11px] font-medium text-secondary">Contact Info</span>
            </div>
            <div className="bg-white p-3 rounded-[10px] shadow-card w-full space-y-3">
               <div>
                  <label className="text-[10px] block mb-1">Phone</label>
                  <div className="bg-gray-100 p-2 rounded text-[11px] text-gray-500">+091 12345 67890</div>
               </div>
               <div>
                  <label className="text-[10px] block mb-1">Email</label>
                  <div className="bg-gray-100 border border-primary p-2 rounded text-[11px] flex items-center">
                     email@example.com
                     <span className="w-[1px] h-[15px] bg-black ml-auto animate-pulse"></span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
