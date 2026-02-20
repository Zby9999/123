import React, { useState } from 'react';
import { useCountdown } from '../hooks/useScrollAnimation';

const imgImage5 = `${import.meta.env.BASE_URL}assets/9511e9ed6815e537ccc7b12b529711a4523cad01.png`;

export default function OrderCard() {
  const { minutes, seconds } = useCountdown(29);
  const [editing, setEditing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1500);
  };

  return (
    <div className="bg-white p-3 rounded-[28px] shadow-card w-full max-w-[345px] relative transition-all duration-500 hover:shadow-lg">
      {/* Confetti burst */}
      {showConfetti && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none z-50">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: ['#ff5e49', '#ff7a68', '#3cb13e', '#ffc888', '#402926'][i % 5],
                animation: `confetti-${i % 4} 0.8s ease-out forwards`,
                left: `${(i - 4) * 12}px`,
              }}
            />
          ))}
          <style>{`
            @keyframes confetti-0 { to { transform: translate(-20px, -40px) rotate(180deg); opacity: 0; } }
            @keyframes confetti-1 { to { transform: translate(10px, -50px) rotate(270deg); opacity: 0; } }
            @keyframes confetti-2 { to { transform: translate(-10px, -35px) rotate(360deg); opacity: 0; } }
            @keyframes confetti-3 { to { transform: translate(20px, -45px) rotate(180deg); opacity: 0; } }
          `}</style>
        </div>
      )}

      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="pt-2 px-3 pb-1">
          <h3 className="font-geist font-semibold text-[19px] text-black tracking-[-0.57px]">
            {editing ? '✏️ Editing Your Order' : '🎉 Your Order is Completed!'}
          </h3>
        </div>

        {/* Order Details */}
        <div className={`border rounded-[25px] p-[10px] flex gap-[18px] transition-colors duration-300 ${editing ? 'border-primary/30 bg-primary-lighter/20' : 'border-black/10'}`}>
          {/* Product Image */}
          <div className="w-[105px] h-[108px] bg-primary-lighter rounded-[12px] relative overflow-hidden shrink-0 group">
            <img
              src={imgImage5}
              alt="Product"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[87px] h-[87px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between py-1 w-full">
            <div className="space-y-2">
              <div className="h-[14px] w-[154px] bg-gray-200/50 rounded-full overflow-hidden">
                <div className="h-full w-full animate-shimmer" />
              </div>
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
          <button
            onClick={handleEditClick}
            className="w-full py-3 rounded-[19px] flex items-center justify-center relative overflow-hidden group transition-all hover:opacity-90 active:scale-[0.98]"
            style={{
              backgroundImage: editing
                ? "linear-gradient(90deg, rgba(60, 177, 62, 0.17) 0%, rgba(60, 177, 62, 0.08) 100%), linear-gradient(90deg, rgb(246, 255, 246) 0%, rgb(246, 255, 246) 100%)"
                : "linear-gradient(90deg, rgba(255, 94, 73, 0.17) 0%, rgba(255, 198, 136, 0.17) 100%), linear-gradient(90deg, rgb(255, 247, 246) 0%, rgb(255, 247, 246) 100%)"
            }}
          >
            <span className={`font-geist font-medium text-[10px] tracking-[-0.1px] relative z-10 transition-colors ${editing ? 'text-success' : 'text-primary'}`}>
              {editing ? 'Save Changes' : 'Edit Your Order'}
            </span>
          </button>

          <p className="text-center text-[11px] font-geist font-medium tracking-[-0.33px]">
            You have{' '}
            <span className="text-primary font-semibold tabular-nums">
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>{' '}
            to edit
          </p>
        </div>
      </div>
    </div>
  );
}
