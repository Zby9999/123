import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Operations Lead, Bloom & Co',
    text: 'Our support tickets dropped by 38% in the first month. Customers love being able to edit their own orders instantly.',
    avatar: 'SC',
    rating: 5,
  },
  {
    name: 'Marcus Webb',
    role: 'Founder, Urban Essentials',
    text: "The AOV increase was immediate. Customers add items when they go back to edit, and the time-limited window creates urgency.",
    avatar: 'MW',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'CX Manager, FreshBox',
    text: 'Setup was incredibly easy. We had it running in under 5 minutes and it matched our brand perfectly out of the box.',
    avatar: 'ER',
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < rating ? '#ff5e49' : '#e5e5e5'}>
          <path d="M7 0.5L8.76 5.12H13.64L9.69 8.08L11.18 12.82L7 9.95L2.82 12.82L4.31 8.08L0.36 5.12H5.24L7 0.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-bg-start to-bg-end overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="text-[13px] font-geist font-medium text-secondary tracking-[-0.26px]">Trusted by 10,000+ Merchants</span>
          </div>
          <h2 className="font-geist font-semibold text-[36px] md:text-[44px] text-secondary tracking-[-2.2px] leading-[1.1] mb-4">
            Loved by Merchants<br />Around the World
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const [ref, isVisible] = useScrollAnimation(0.1);
            return (
              <div
                key={testimonial.name}
                ref={ref}
                className={`bg-white rounded-[20px] p-6 shadow-card transition-all duration-500 cursor-pointer group
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                  ${activeIndex === index ? 'ring-2 ring-primary/20 scale-[1.02]' : 'hover:scale-[1.01]'}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setActiveIndex(index)}
              >
                <StarRating rating={testimonial.rating} />
                <p className="font-geist text-[14px] text-secondary-light leading-[1.7] tracking-[-0.14px] mt-4 mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-white font-geist font-semibold text-[12px] group-hover:shadow-button transition-shadow">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-geist font-semibold text-[13px] text-secondary tracking-[-0.26px]">
                      {testimonial.name}
                    </p>
                    <p className="font-geist text-[11px] text-secondary-light tracking-[-0.11px]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary w-6' : 'bg-primary/30'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
