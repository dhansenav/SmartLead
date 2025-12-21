import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  // This state stores the index of the question that is currently open
  const [openIndex, setOpenIndex] = useState(0);

 const faqs = [
  {
    question: "What services does Smartlead Web provide?",
    answer: "Smartlead Web specializes in real estate digital solutions including landing page development, project websites, lead system integration, Google Ads–ready pages, and ongoing technical support."
  },
  {
    question: "Do you work only with real estate clients?",
    answer: "Yes. Our services are specifically designed for real estate developers, builders, and marketers, allowing us to deliver industry-focused and result-driven solutions."
  },
  {
    question: "How long does it take to deliver a landing page or website?",
    answer: "Project timelines depend on scope and requirements. Typically, landing pages are delivered faster, while complete project websites may take additional time as per content and approvals."
  },
  {
    question: "Do you provide lead integration and CRM support?",
    answer: "Yes. We integrate lead forms with WhatsApp, call buttons, and CRM systems to ensure smooth lead management."
  },
  {
    question: "Will you also handle hosting and maintenance?",
    answer: "Yes. We provide hosting support, regular maintenance, page updates, and performance monitoring as part of our technical services."
  },
  {
    question: "Can you redesign an existing website or landing page?",
    answer: "Yes. We can revamp or optimize existing real estate websites and landing pages to improve performance and lead conversion."
  },
  {
    question: "Do you run Google Ads for real estate projects?",
    answer: "We create Google Ads–ready landing pages and can guide you with ad structure and integration as required."
  },
  {
    question: "What is your payment structure?",
    answer: "Payment terms are discussed and finalized before project initiation. Advance payment is required to begin work."
  },
  {
    question: "Will my project data be kept confidential?",
    answer: "Absolutely. All client information and project details are handled with strict confidentiality."
  },
  {
    question: "How can we get started with Smartlead Web?",
    answer: "You can contact us through our website enquiry form or directly connect with our team to discuss your project requirements."
  }
];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600">Any questions? We have got you covered!</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className={`w-full flex justify-between items-center p-5 text-left transition-colors ${
                openIndex === index ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <span className="text-gray-800 font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-gray-500" size={20} />
              ) : (
                <ChevronDown className="text-gray-500" size={20} />
              )}
            </button>
            
            {/* Show answer only if this index is open */}
            {openIndex === index && (
              <div className="p-5 text-gray-600 bg-white leading-relaxed text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;