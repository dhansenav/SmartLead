import React, { useState, useEffect } from 'react';

const ContactSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ready to get started on your next campaign with us?
          </h2>
          <p className="text-gray-600">Contact us for a quote</p>
        </div>

        {/* CONTAINER: Updated alignItems to 'stretch' to equalize column heights */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: isDesktop ? 'row' : 'column', 
            gap: isDesktop ? '40px' : '24px',
            alignItems: 'stretch' 
          }}
        >
          {/* LEFT SIDE: Form (Now matching height) */}
          <div 
            style={{ width: isDesktop ? '50%' : '100%' }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800">Send us a message</h3>
            <form className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                  <input 
                    type="text" 
                    placeholder="Phone" 
                    className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-[#1F2F4A] text-white px-10 py-3 rounded-md font-bold shadow-md hover:bg-[#2a3f63] transition-colors w-full md:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE: Contact Info + Map */}
          <div 
            style={{ width: isDesktop ? '50%' : '100%' }}
            className="flex flex-col gap-8"
          >
            {/* Contact Info Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">For Business Enquiries, please contact</h3>
              <div className="space-y-3">
                <p className="text-gray-700 font-medium">Mr. Fahim Shaikh,Mr.Sahil khan </p>
                <div className="pt-2">
                  <p className="text-[#1F2F4A] font-bold">Call: +91 9920455923</p>
                  <p className="text-[#1F2F4A] font-bold">Call: +91 98202 14679</p>
                  <p className="text-[#1F2F4A] font-bold">Mail: info.smartleadweb@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Map Box - Height fills the remaining space of the right column */}
            <div className="w-full h-[300px] md:flex-grow rounded-xl overflow-hidden shadow-inner border border-gray-200 min-h-[300px]">
              <iframe 
                title="office-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8038520846545!2d72.8617!3d19.1171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzAxLjYiTiA3MsKwNTEnNDIuMSJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;