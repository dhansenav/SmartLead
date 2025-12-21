import React, { useState } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react'; // Added Chevron for better UI

const Navbar = ({ onEnquireClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="./smartlogo.png" alt="smartleadweb Logo" className="h-10 w-auto scale-150" />
          </div>

        {/* Desktop & Action Items */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-[#1F2F4A] font-semibold">
            <Phone size={18} className="text-blue-600" />
            <span>+91-8448448718</span>
          </div>

          <button onClick={onEnquireClick} className="bg-[#1F2F4A] hover:bg-blue-700 transition-colors text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm">
            Enquire Now
          </button>

          {/* Hamburger Toggle - Hidden on desktop via md:hidden */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="p-1 text-[#1F2F4A] hover:bg-gray-100 rounded-md transition-colors"
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR DRAWER */}
      {/* Dark Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header inside Drawer */}
        <div className="flex items-center justify-between p-6 border-b border-gray-50 bg-gray-50/50">
          <span className="font-bold text-[#1F2F4A]">Menu</span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col py-4">
          {['Home', 'Services', 'Portfolio', 'Contact Us'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="flex items-center justify-between px-8 py-4 text-lg font-semibold text-[#1F2F4A] hover:bg-blue-50 hover:text-blue-700 transition-all border-b border-gray-50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item}
              <ChevronRight size={18} className="text-gray-300" />
            </a>
          ))}

          {/* Bottom Info Section */}
          <div className="mt-8 px-8 flex flex-col gap-4">
             <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Contact Support</p>
             <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl text-blue-800 font-bold">
                <Phone size={20} />
                <span>+91-8448448718</span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;