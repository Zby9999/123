import React, { useState } from 'react';
import { imgTriangle } from "../svg-q11ro";

export default function AddressCard() {
  const [editing, setEditing] = useState(false);
  const [address, setAddress] = useState('123 Main Street, Apt 4B');

  return (
    <div className="flex flex-col gap-[5px] items-start w-[210px]">
      {/* Label */}
      <div className="bg-white flex gap-[5px] items-center p-[7px] rounded-[8px] shadow-card w-full">
        <div className="w-[12px] h-[5px] shrink-0 rotate-180">
          <img src={imgTriangle} alt="" className="w-full h-full" />
        </div>
        <span className="text-[11px] font-medium text-secondary font-inter tracking-[-0.34px]">Change Address</span>
      </div>

      {/* Card */}
      <div className="bg-white p-3 rounded-[10px] shadow-card w-full space-y-2">
        <div>
          <label className="text-[10px] block mb-1 font-inter">Shipping Address</label>
          {editing ? (
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={() => setEditing(false)}
              autoFocus
              className="w-full bg-gray-100 border border-primary p-2 rounded-[7px] text-[11px] font-geist tracking-[-0.32px] outline-none"
            />
          ) : (
            <div
              onClick={() => setEditing(true)}
              className="bg-gray-100 p-2 rounded-[7px] text-[11px] text-gray-500 font-geist tracking-[-0.32px] cursor-text hover:bg-gray-200/70 transition-colors"
            >
              {address}
            </div>
          )}
        </div>
        <div>
          <label className="text-[10px] block mb-1 font-inter">City</label>
          <div className="bg-gray-100 p-2 rounded-[7px] text-[11px] text-gray-500 font-geist tracking-[-0.32px]">
            New York, NY 10001
          </div>
        </div>
      </div>
    </div>
  );
}
