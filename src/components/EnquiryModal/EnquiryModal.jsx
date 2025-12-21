import React,{useEffect} from 'react';
import { X } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose }) => {

  // Disable scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

   if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md will-change-transform px-4">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-[500px] md:max-w-[600px] md:max-h-[560px] relative overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2F4A] text-center mb-6 md:mb-8">
            Get In Touch With Us
          </h2>

          <form className="space-y-4 md:space-y-5">
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-700 mb-1">Name *</label>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 md:p-3.5 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-700 mb-1">Phone *</label>
              <input 
                type="text" 
                placeholder="Phone" 
                className="w-full p-3 md:p-3.5 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-700 mb-1">Email *</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 md:p-3.5 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
                required 
              />
            </div>

            <button className="w-full bg-[#1F2F4A] text-white py-3 md:py-3.5 rounded-md font-bold text-lg md:text-xl shadow-lg hover:opacity-90 transition-opacity mt-4">
              Submit
            </button>
          </form>

          <div className="mt-6 md:mt-8 text-center text-sm md:text-base">
            <p className="text-[#1F2F4A] font-semibold">Call: +91-9920455923</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
