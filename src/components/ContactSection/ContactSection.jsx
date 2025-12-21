import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started on your next campaign with us?
          </h2>
          <p className="text-gray-600">Contact us for a quote</p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: The White Form Card */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                <input 
                  type="text" 
                  placeholder="Phone" 
                  className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
              <button className="bg-[#1F2F4A] text-white px-10 py-3 rounded-md font-bold shadow-md hover:opacity-90 transition-opacity w-full md:w-auto">
                Send
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Business Enquiries & Map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">For Business Enquiries, please contact</h3>
              <p className="text-gray-700 font-medium">Mr.Fahim Shaikh, Business Development</p>
              <p className="text-[#1F2F4A] font-bold mt-2">Call: +91 9920455923</p>
              <p className="text-[#1F2F4A] font-bold">Mail: info.smartleadweb@gmail.com</p>
            </div>
            
            {/* Map Box */}
            <div className="w-full h-[266px] rounded-xl overflow-hidden shadow-inner border border-gray-200">
               <iframe 
                  title="office-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1873739726884!2d72.8541253!3d19.1103982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c830f3055555%3A0x6b4b4b4b4b4b4b4b!2sAltois!5e0!3m2!1sen!2sin!4v1620000000000" 
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
