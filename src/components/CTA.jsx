import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { imgGroup3 as InstallIcon } from "../svg-q11ro";

export default function CTA() {
  const [ref, isVisible] = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div
        ref={ref}
        className={`max-w-[700px] mx-auto ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      >
        <div className="bg-gradient-to-br from-bg-start to-bg-end rounded-[32px] p-8 md:p-14 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/5 rounded-full" />

          <div className="relative z-10">
            <h2 className="font-geist font-semibold text-[32px] md:text-[40px] text-secondary tracking-[-2px] leading-[1.1] mb-4">
              Ready to Reduce Your<br />Support Tickets?
            </h2>
            <p className="font-geist font-medium text-[16px] text-secondary-light tracking-[-0.16px] mb-8 max-w-[440px] mx-auto">
              Join 10,000+ merchants who are saving time and increasing revenue with order editing
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-[11px] bg-white border border-transparent focus:border-primary outline-none font-geist text-[14px] text-secondary shadow-sm transition-all focus:shadow-card"
                required
              />
              <button
                type="submit"
                className={`px-6 py-3 rounded-[11px] font-geist font-medium text-[15px] flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 relative overflow-hidden btn-inner-shadow ${
                  submitted
                    ? 'bg-success text-white shadow-[0px_7.137px_17.843px_0px_rgba(60,177,62,0.45)]'
                    : 'bg-primary-light hover:bg-primary text-white shadow-button'
                }`}
              >
                {submitted ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.5 12L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sent!
                  </>
                ) : (
                  <>
                    <div className="w-[14px] h-[16px]">
                      <img src={InstallIcon} alt="" className="w-full h-full" aria-hidden="true" />
                    </div>
                    Get Started
                  </>
                )}
              </button>
            </form>

            <p className="font-geist text-[12px] text-secondary-light/70 tracking-[-0.12px]">
              Free 14-day trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
