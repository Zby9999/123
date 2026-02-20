import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedNumber({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollAnimation(0.3);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 1500;
      const steps = 40;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 31, suffix: '%', label: 'Increased AOV', color: 'text-primary' },
  { value: 40, suffix: '%', label: 'Fewer Support Tickets', color: 'text-success' },
  { value: 5, suffix: 'min', label: 'Setup Time', color: 'text-primary' },
  { value: 10, suffix: 'k+', label: 'Happy Merchants', color: 'text-success' },
];

export default function Stats() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-bg-start">
      <div
        ref={ref}
        className={`max-w-[1000px] mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="bg-white rounded-[28px] shadow-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group cursor-default">
                <div className={`font-geist font-semibold text-[36px] md:text-[44px] tracking-[-2px] ${stat.color} transition-transform group-hover:scale-110 duration-300`}>
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-geist font-medium text-[14px] text-secondary-light tracking-[-0.14px] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
