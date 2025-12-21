import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. Add Autoplay to your imports
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    text: "Altois has helped us build a result-oriented marketing strategy and increased our site visits and walk-ins...",
    name: "Mr. Rashmin Rughani",
    role: "Director, Ashray Group"
  },
  {
    text: "The Altois team is agile and effective, delivering valuable insights and swiftly implementing our campaign needs.",
    name: "Mr. Ashwini Kumar",
    role: "Chief Officer - People Culture & Marketing, TRU Realty Pvt Ltd"
  },
  {
    text: "The Altois team has generated quality leads for our project with accurate audience segmentation...",
    name: "Mr. Gaurav Gavali",
    role: "Digital Marketing Head, Pharande Spaces"
  },
 ,
  {
    text: "The Altois team is agile and effective, delivering valuable insights and swiftly implementing our campaign needs.",
    name: "Mr. Ashwini Kumar",
    role: "Chief Officer - People Culture & Marketing, TRU Realty Pvt Ltd"
  },
  {
    text: "The Altois team has generated quality leads for our project with accurate audience segmentation...",
    name: "Mr. Gaurav Gavali",
    role: "Digital Marketing Head, Pharande Spaces"
  },,
  {
    text: "The Altois team is agile and effective, delivering valuable insights and swiftly implementing our campaign needs.",
    name: "Mr. Ashwini Kumar",
    role: "Chief Officer - People Culture & Marketing, TRU Realty Pvt Ltd"
  },
  {
    text: "The Altois team has generated quality leads for our project with accurate audience segmentation...",
    name: "Mr. Gaurav Gavali",
    role: "Digital Marketing Head, Pharande Spaces"
  }
];

const TestimonialSlider = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Meet Our Happy Clients</h2>
          <p className="text-gray-600">Don't take it from us, let our clients do the talking!</p>
        </div>

        <div className="relative">
          <Swiper
            // 2. Add Autoplay to the modules array
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // 3. Configure Autoplay settings
            autoplay={{
              delay: 3000, // Slides every 3 seconds
              disableOnInteraction: false, // Keeps autoplay running even after manual clicks
            }}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            breakpoints={{
              1024: { slidesPerView: 3 }
            }}
            className="pb-10"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm h-full flex flex-col justify-between min-h-[320px]">
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "{item.text}"
                  </p>
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Manual Swipe Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button className="prev-btn p-2 rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100 transition-all cursor-pointer">
              <ChevronLeft size={24} />
            </button>
            <button className="next-btn p-2 rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100 transition-all cursor-pointer">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;