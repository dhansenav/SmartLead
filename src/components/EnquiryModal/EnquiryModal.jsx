import React from 'react';
import { X } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-[#1F2F4A] text-center mb-8">
            Get In Touch With Us
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
              <input type="text" placeholder="Name" className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
              <input type="text" placeholder="Phone" className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>

            <button className="w-full bg-[#1F2F4A] text-white py-3 rounded-md font-bold text-lg shadow-lg hover:opacity-90 transition-opacity mt-4">
              Submit
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#1F2F4A] font-semibold">Call: +91-8448448718</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;