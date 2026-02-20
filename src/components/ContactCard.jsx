import React, { useState } from 'react';
import { imgTriangle } from "../svg-q11ro";

export default function ContactCard() {
  const [phone, setPhone] = useState('+091 12345 67890');
  const [email, setEmail] = useState('email@example.com');
  const [editingField, setEditingField] = useState(null);

  return (
    <div className="flex flex-col gap-[5px] items-start w-[220px]">
      {/* Label */}
      <div className="bg-white flex gap-[5px] items-center p-[7px] rounded-[8px] shadow-card w-full">
        <div className="w-[12px] h-[5px] shrink-0 rotate-180">
          <img src={imgTriangle} alt="" className="w-full h-full" />
        </div>
        <span className="text-[11px] font-medium text-secondary font-inter tracking-[-0.34px]">Contact Info</span>
      </div>

      {/* Card */}
      <div className="bg-white p-3 rounded-[10px] shadow-card w-full space-y-3">
        {/* Phone */}
        <div>
          <label className="text-[10px] block mb-1 font-inter">Phone</label>
          {editingField === 'phone' ? (
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setEditingField(null)}
              autoFocus
              className="w-full bg-gray-100 border border-primary p-2 rounded-[7px] text-[11px] font-geist tracking-[-0.32px] outline-none"
            />
          ) : (
            <div
              onClick={() => setEditingField('phone')}
              className="bg-gray-100 p-2 rounded-[7px] text-[11px] text-gray-500 font-geist tracking-[-0.32px] cursor-text hover:bg-gray-200/70 transition-colors"
            >
              {phone}
            </div>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-[10px] block mb-1 font-inter">Email</label>
          {editingField === 'email' ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEditingField(null)}
              autoFocus
              className="w-full bg-gray-100 border border-primary p-2 rounded-[7px] text-[11px] font-geist tracking-[-0.32px] outline-none"
            />
          ) : (
            <div
              onClick={() => setEditingField('email')}
              className="bg-gray-100 border border-primary p-2 rounded-[7px] text-[11px] flex items-center cursor-text hover:bg-gray-200/50 transition-colors"
            >
              <span className="font-geist tracking-[-0.32px]">{email}</span>
              <span className="w-[1px] h-[15px] bg-black ml-auto animate-cursor-blink" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
