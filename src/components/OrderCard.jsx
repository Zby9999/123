import React from 'react';

const imgImage5 = "/assets/9511e9ed6815e537ccc7b12b529711a4523cad01.png";

export default function OrderCard() {
  return (
    <div className="bg-white p-3 rounded-[28px] shadow-card w-full max-w-[345px] relative">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="pt-2 px-3 pb-1">
          <h3 className="font-geist font-semibold text-[19px] text-black tracking-[-0.57px]">
            🎉 Your Order is Completed!
          </h3>
        </div>

        {/* Order Details */}
        <div className="border border-black/10 rounded-[25px] p-[10px] flex gap-[18px]">
          {/* Product Image */}
          <div className="w-[105px] h-[108px] bg-primary-lighter rounded-[12px] relative overflow-hidden shrink-0">
             <img src={imgImage5} alt="Product" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[87px] h-[87px] object-cover" />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between py-1 w-full">
            <div className="space-y-2">
              <div className="h-[14px] w-[154px] bg-gray-200/50 rounded-full" />
              <div className="h-[14px] w-[83px] bg-gray-200/50 rounded-full" />
            </div>
            
            <div className="space-y-1">
              <p className="font-geist font-semibold text-[20px] text-success tracking-[-0.6px]">
                $15
              </p>
              <div className="flex items-center gap-1">
                <span className="font-geist text-[12px] text-gray-400 tracking-[-0.12px]">Quantity:</span>
                <span className="font-geist font-semibold text-[14px] text-black tracking-[-0.42px]">1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="space-y-2">
          <button className="w-full py-3 rounded-[19px] flex items-center justify-center relative overflow-hidden group transition-all hover:opacity-90"
            style={{
              backgroundImage: "linear-gradient(90deg, rgba(255, 94, 73, 0.17) 0%, rgba(255, 198, 136, 0.17) 100%), linear-gradient(90deg, rgb(255, 247, 246) 0%, rgb(255, 247, 246) 100%)"
            }}
          >
             <span className="font-geist font-medium text-[10px] text-primary tracking-[-0.1px] relative z-10">
               Edit Your Order
             </span>
          </button>
          
          <p className="text-center text-[11px] font-geist font-medium tracking-[-0.33px]">
            You have <span className="text-primary">29 mins</span> to edit
          </p>
        </div>
      </div>
    </div>
  );
}
