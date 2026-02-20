import React, { useState } from 'react';
import {
  imgVector1 as TriangleIcon,
  imgStreamlineMapFold,
  imgCarbonDeliveryTruck as TruckIcon,
  imgVector2 as CheckCircleIcon,
  imgFrame23,
  imgFrame2147226045,
  imgVector as ArrowIcon,
} from "../svg-q11ro";

export default function DeliveryCard() {
  const [selected, setSelected] = useState('free');
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex flex-col gap-[5px] items-start w-[230px]">
      {/* Label */}
      <div className="bg-white flex gap-[5px] items-center p-[7px] rounded-[8px] shadow-card w-full">
        <div className="w-[12px] h-[12px] shrink-0">
          <img src={ArrowIcon} alt="" className="w-full h-full" />
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
            <img src={imgStreamlineMapFold} className="w-[9px]" alt="" />
            <span className="text-[8px] font-inter">Preferred Delivery Date</span>
          </div>
          <img
            src={TriangleIcon}
            className={`w-[7px] transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}
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
                <img src={TruckIcon} className="w-[20px]" alt="" />
              </div>
              <div className="text-left">
                <div className={`text-[6px] font-semibold uppercase transition-colors ${selected === 'free' ? 'text-success' : 'text-gray-400'}`}>
                  Free Delivery
                </div>
                <div className="text-[8px]">Friday, 7 march</div>
              </div>
              <div className="ml-auto">
                {selected === 'free' ? (
                  <img src={CheckCircleIcon} className="w-[13px] animate-check-bounce" alt="" />
                ) : (
                  <div className="w-[13px] h-[13px] rounded-full border-2 border-gray-200" />
                )}
              </div>
            </button>

            {/* Fast Delivery */}
            <button
              onClick={() => setSelected('fast')}
              className={`flex items-center gap-2 w-full p-1 rounded-md transition-all duration-200 ${selected === 'fast' ? 'bg-gray-50' : 'hover:bg-gray-50/50 opacity-60 hover:opacity-80'}`}
            >
              <div className={`w-[25px] h-[25px] rounded flex items-center justify-center border shrink-0 transition-colors ${selected === 'fast' ? 'border-primary bg-primary-lighter' : 'border-gray-200'}`}>
                <img src={imgFrame23} className="w-[10px]" alt="" />
              </div>
              <div className="text-left">
                <div className={`text-[6px] font-semibold uppercase transition-colors ${selected === 'fast' ? 'text-primary' : 'text-gray-500'}`}>
                  Fast delivery (+$5)
                </div>
                <div className="text-[8px]">Friday, 3 march</div>
              </div>
              <div className="ml-auto">
                {selected === 'fast' ? (
                  <img src={CheckCircleIcon} className="w-[13px] animate-check-bounce" alt="" />
                ) : (
                  <div className="w-[13px] h-[13px]">
                    <img src={imgFrame2147226045} className="w-full h-full" alt="" />
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
