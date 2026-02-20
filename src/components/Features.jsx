import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: '📦',
    title: 'Edit Orders Easily',
    description: 'Customers can change quantities, swap products, and update delivery details without contacting support.',
  },
  {
    icon: '⏱️',
    title: 'Time-Limited Edits',
    description: 'Set a custom time window for edits. Once expired, orders lock automatically to keep fulfillment on track.',
  },
  {
    icon: '📧',
    title: 'Reduce Support Tickets',
    description: 'Cut your support volume by up to 40%. No more back-and-forth emails for simple order changes.',
  },
  {
    icon: '📈',
    title: 'Boost AOV by 31%',
    description: 'When customers can edit, they add more. Average order value increases as customers upgrade their orders.',
  },
  {
    icon: '🎨',
    title: 'Fully Customizable',
    description: 'Match your brand perfectly. Customize colors, fonts, and layout to create a seamless experience.',
  },
  {
    icon: '🔌',
    title: 'One-Click Install',
    description: 'Works with Shopify, WooCommerce, and more. Install in minutes, no developer needed.',
  },
];

function FeatureCard({ icon, title, description, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-[20px] p-6 shadow-card hover:shadow-lg transition-all duration-500 cursor-default ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl mb-4 group-hover:animate-wiggle">{icon}</div>
      <h3 className="font-geist font-semibold text-[18px] text-secondary tracking-[-0.36px] mb-2">
        {title}
      </h3>
      <p className="font-geist font-normal text-[14px] text-secondary-light leading-[1.6] tracking-[-0.14px]">
        {description}
      </p>
    </div>
  );
}

export default function Features() {
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary-lighter px-4 py-1.5 rounded-full mb-6">
            <span className="text-[13px] font-geist font-medium text-primary tracking-[-0.26px]">How it Works</span>
          </div>
          <h2 className="font-geist font-semibold text-[36px] md:text-[44px] text-secondary tracking-[-2.2px] leading-[1.1] mb-4">
            Everything You Need to<br />Empower Your Customers
          </h2>
          <p className="font-geist font-medium text-[16px] text-secondary-light tracking-[-0.16px] max-w-[500px] mx-auto">
            A complete toolkit that transforms post-purchase support into a self-service experience
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
