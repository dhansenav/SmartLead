import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner.jsx';
import Clients from './components/Clients/Clients.jsx';
import Projects from './components/Ourprojects/Ourprojects.jsx';
import WhyChooseUs from './components/Whychooseus/Whychooseus.jsx';
import HowWeHelp from './components/Howwehelp/Howwehelp.jsx';
import Offerings from './components/Offerings/Offerings.jsx';
import Services from './components/Services/Services.jsx'; 
import Platforms from './components/Platforms/Platforms.jsx';
import ImportantMetrics from './components/ImportantMetrics/ImportantMetrics.jsx';
import LifeAtSmartLeadWeb from './components/LifeAtSmartLeadWeb/LifeAtSmartLeadWeb.jsx';
import TopBlogs from './components/Topbblogs/Topbblogs.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import ContactSection from './components/ContactSection/ContactSection.jsx';
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider.jsx';
import EnquiryModal from './components/EnquiryModal/EnquiryModal.jsx';

function App() {
  // FIX: Define the state variables
  const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
    console.log("App Loaded - Timer Started");
    const timer = setTimeout(() => {
      setIsModalOpen(true);
      console.log("Modal should be open now");
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col m-0 p-0">
      <Navbar onEnquireClick={() => setIsModalOpen(true)} />
      
      <main className="flex-grow w-full">
        <Banner />
        <Clients />
        <Projects />
        <WhyChooseUs />
        <HowWeHelp />
        <Offerings />
        <Services />
        <Platforms />
        <ImportantMetrics />
        <TestimonialSlider/>
        <LifeAtSmartLeadWeb />
        <TopBlogs />
        <ContactSection />
        <FAQ />
      </main>

      <Footer />

      {/* Keep the modal at the very end */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;