import React, { useState, useEffect } from 'react';

const ContactSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  // 1. State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. WhatsApp Redirect Logic
  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    
    const { name, email, phone } = formData;
    const adminPhone = "9920455923"; // Your WhatsApp number with country code
    
    // Create the formatted message
    const message = `*New Inquiry*%0A` + 
                    `*Name:* ${name}%0A` + 
                    `*Email:* ${email}%0A` + 
                    `*Phone:* ${phone}`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/${adminPhone}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ready to get started on your next campaign with us?
          </h2>
          <p className="text-gray-600">Contact us for a quote</p>
        </div>

        <div 
          style={{ 
            display: 'flex', 
            flexDirection: isDesktop ? 'row' : 'column', 
            gap: isDesktop ? '40px' : '24px',
            alignItems: 'stretch' 
          }}
        >
          {/* LEFT SIDE: Form */}
          <div 
            style={{ width: isDesktop ? '50%' : '100%' }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800">Send us a message</h3>
            
            {/* Form Action Hooked to WhatsApp */}
            <form onSubmit={handleWhatsAppSend} className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number" 
                    className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  type="submit"
                  className="bg-[#25D366] text-white px-10 py-3 rounded-md font-bold shadow-md hover:bg-[#128C7E] transition-colors w-full md:w-auto"
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE: Contact Info + Map */}
          <div 
            style={{ width: isDesktop ? '50%' : '100%' }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">For Business Enquiries</h3>
              <div className="space-y-3">
                <p className="text-gray-700 font-medium">Mr. Fahim Shaikh, Mr. Sahil Khan</p>
                <div className="pt-2">
                  <p className="text-[#1F2F4A] font-bold">Call: +91 9920455923</p>
                  <p className="text-[#1F2F4A] font-bold">Call: +91 98202 14679</p>
                  <p className="text-[#1F2F4A] font-bold">Mail: info.smartleadweb@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="w-full h-[300px] md:flex-grow rounded-xl overflow-hidden shadow-inner border border-gray-200 min-h-[300px]">
              <iframe 
                title="office-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.000000000000!2d72.8!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
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