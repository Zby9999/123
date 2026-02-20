import React from 'react';

const Logo = `${import.meta.env.BASE_URL}assets/logo-final.svg`;

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Integrations'],
  Resources: ['Documentation', 'Blog', 'Support', 'Status'],
  Company: ['About', 'Careers', 'Contact', 'Partners'],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16 px-4 rounded-t-[32px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="h-[28px] w-[56px] mb-4 brightness-0 invert">
              <img alt="Logo" className="w-full h-full" src={Logo} />
            </div>
            <p className="font-geist text-[13px] text-white/60 leading-[1.6] tracking-[-0.13px] max-w-[200px]">
              Empowering merchants with self-service order editing since 2023.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-geist font-semibold text-[13px] text-white/40 uppercase tracking-[0.5px] mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-geist text-[14px] text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-geist text-[12px] text-white/40 tracking-[-0.12px]">
            &copy; {new Date().getFullYear()} Order Customizer. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-geist text-[12px] text-white/40 hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="font-geist text-[12px] text-white/40 hover:text-white/70 transition-colors">Terms</a>
            <a href="#" className="font-geist text-[12px] text-white/40 hover:text-white/70 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
