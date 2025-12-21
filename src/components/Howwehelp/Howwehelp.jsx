import React from 'react';
import './HowWeHelp.styles.css';
import { ShieldCheck, Target, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={32}  />, // Added   
    title: 'Brand Presence',
    colorClass: 'blue-grad',
    text: 'Build a strong brand presence, enhance your online image, and reach potential customers.'
  },
  {
    icon: <Target size={32}    />, 
    title: 'Lead Generation',
    colorClass: 'orange-grad',
    text: 'Maximize lead generation with our tailored CRM strategies that deliver high-quality prospects.'
  },
  {
    icon: <BarChart3 size={32}    />,
    title: 'Data Insights',
    colorClass: 'green-grad',
    text: 'Use data-driven insights and analytics to optimize campaigns and improve ROI.'
  },
  {
    icon: <Users size={32}    />,
    title: 'Customer Engagement',
    colorClass: 'purple-grad',
    text: 'Engage customers effectively across digital channels to convert interest into sales.'
  }
];

const HowWeHelp = () => {
  return (
    <section className="help-section">
      <div className="help-header">
        <span className="sub-heading">ABOUT US</span>
        <h2>How SmartLead Web Can Help as Your Real Estate Digital Marketing Agency?</h2>
        <p>
          We use insights from real estate trends and audience behavior to help brands 
          attract interested buyers and convert them effectively through specialized 
          digital strategies.
        </p>
      </div>

      <div className="help-cards">
        {features.map((item, index) => (
          <div className="help-card" key={index}>
            <div className={`icon-wrapper ${item.colorClass}`}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeHelp;