import React, { useState } from 'react';
import {
  imgTriangle,
  imgCalendar,
  imgTruck,
  imgFastDelivery,
  imgRadioCircle,
} from "../svg-q11ro";

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="animate-check-bounce">
    <circle cx="6.5" cy="6.5" r="6" fill="#3cb13e"/>
    <path d="M3.5 6.5L5.5 8.5L9.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function DeliveryCard() {
  const [selected, setSelected] = useState('free');
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex flex-col gap-[5px] items-start w-[230px]">
      {/* Label */}
      <div className="bg-white flex gap-[5px] items-center p-[7px] rounded-[8px] shadow-card w-full">
        <div className="w-[12px] h-[5px] shrink-0 rotate-180">
          <img src={imgTriangle} alt="" className="w-full h-full" />
        </div>
        <span className="text-[11px] font-medium text-secondary font-inter tracking-[-0.34px]">Change Delivery Date</span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-[8px] shadow-card w-full overflow-hidden transition-all duration-300">
        {/* Header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex justify-between items-center w-full px-3 py-[10px] hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <img src={imgCalendar} className="w-[9px]" alt="" />
            <span className="text-[8px] font-inter">Preferred Delivery Date</span>
          </div>
          <img
            src={imgTriangle}
            className={`w-[7px] transition-transform duration-300 ${expanded ? '' : 'rotate-180'}`}
            alt=""
          />
        </button>

        {/* Options */}
        <div className={`transition-all duration-300 overflow-hidden ${expanded ? 'max-h-[200px] pb-3' : 'max-h-0'}`}>
          <div className="px-3 space-y-2">
            {/* Free Delivery */}
            <button
              onClick={() => setSelected('free')}
              className={`flex items-center gap-2 w-full p-1 rounded-md transition-all duration-200 ${selected === 'free' ? 'bg-gray-50' : 'hover:bg-gray-50/50'}`}
            >
              <div className="w-[25px] h-[25px] bg-primary-lighter rounded flex items-center justify-center shrink-0">
                <img src={imgTruck} className="w-[15px]" alt="" />
              </div>
              <div className="text-left">
                <div className={`text-[6px] font-semibold uppercase transition-colors ${selected === 'free' ? 'text-success' : 'text-gray-400'}`}>
                  Free Delivery
                </div>
                <div className="text-[8px]">Friday, 7 march</div>
              </div>
              <div className="ml-auto">
                {selected === 'free' ? (
                  <CheckIcon />
                ) : (
                  <div className="w-[13px] h-[13px]">
                    <img src={imgRadioCircle} className="w-full h-full" alt="" />
                  </div>
                )}
              </div>
            </button>

            {/* Fast Delivery */}
            <button
              onClick={() => setSelected('fast')}
              className={`flex items-center gap-2 w-full p-1 rounded-md transition-all duration-200 ${selected === 'fast' ? 'bg-gray-50' : 'hover:bg-gray-50/50 opacity-60 hover:opacity-80'}`}
            >
              <div className={`w-[25px] h-[25px] rounded flex items-center justify-center shrink-0 overflow-hidden transition-colors ${selected === 'fast' ? 'border border-primary bg-primary-lighter' : 'border border-gray-200'}`}>
                <img src={imgFastDelivery} className="w-full h-full" alt="" />
              </div>
              <div className="text-left">
                <div className={`text-[6px] font-semibold uppercase transition-colors ${selected === 'fast' ? 'text-primary' : 'text-gray-500'}`}>
                  Fast delivery (+$5)
                </div>
                <div className="text-[8px]">Friday, 3 march</div>
              </div>
              <div className="ml-auto">
                {selected === 'fast' ? (
                  <CheckIcon />
                ) : (
                  <div className="w-[13px] h-[13px]">
                    <img src={imgRadioCircle} className="w-full h-full" alt="" />
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
