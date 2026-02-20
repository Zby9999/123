import React, { useState } from 'react';
import {
  imgVector1 as TriangleIcon,
  imgVector as ArrowIcon,
} from "../svg-q11ro";

const imgImage5 = `${import.meta.env.BASE_URL}assets/9511e9ed6815e537ccc7b12b529711a4523cad01.png`;

export default function QuantityCard() {
  const [quantity, setQuantity] = useState(2);
  const [animating, setAnimating] = useState(false);

  const handleQuantityChange = (delta) => {
    const newQty = Math.max(1, Math.min(99, quantity + delta));
    if (newQty !== quantity) {
      setAnimating(true);
      setQuantity(newQty);
      setTimeout(() => setAnimating(false), 300);
    }
  };

  return (
    <div className="flex flex-col gap-[5px] items-start w-[220px]">
      {/* Label */}
      <div className="bg-white flex gap-[5px] items-center p-[7px] rounded-[8px] shadow-card w-full">
        <div className="w-[12px] h-[12px] shrink-0">
          <img src={ArrowIcon} alt="" className="w-full h-full" />
        </div>
        <span className="text-[11px] font-medium text-secondary font-inter tracking-[-0.34px]">Change Quantities / Remove Items</span>
      </div>

      {/* Card */}
      <div className="bg-white p-3 rounded-[11px] shadow-card w-full">
        <div className="flex gap-3">
          <div className="w-[56px] h-[57px] bg-primary-lighter rounded-[6px] relative overflow-hidden shrink-0 group cursor-pointer">
            <img
              src={imgImage5}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46px] h-[46px] object-cover transition-transform duration-200 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-center w-full gap-2">
            <div className="space-y-1 w-full">
              <div className="h-[6px] w-[80%] bg-gray-200 rounded-full" />
              <div className="h-[6px] w-full bg-gray-200 rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500">Quantity:</span>
              <div className="bg-[#ffe9e6] border border-primary-dark rounded-[7px] px-2 py-1 flex items-center gap-2 select-none">
                <span className={`text-primary-dark text-[14px] font-geist tabular-nums transition-all duration-200 ${animating ? 'animate-count-pulse' : ''}`}>
                  {quantity}
                </span>
                <div className="flex flex-col gap-[2px]">
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="hover:opacity-70 active:scale-90 transition-all"
                    aria-label="Increase quantity"
                  >
                    <img src={TriangleIcon} className="w-[7px]" alt="Increase" />
                  </button>
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="hover:opacity-70 active:scale-90 transition-all rotate-180"
                    aria-label="Decrease quantity"
                  >
                    <img src={TriangleIcon} className="w-[7px]" alt="Decrease" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
