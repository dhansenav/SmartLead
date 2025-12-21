import React from 'react';
import './Offerings.styles.css';
import digitalimg from '../../assets/digitalimg.png';


const offerings = [
  {
    title: 'Performance Marketing',
    points: 'Google Ads | Meta Ads | LinkedIn Ads | WhatsApp Ads'
  },
  {
    title: 'Creative and Design',
    points: 'Landing Pages | Web Design | Campaign Creatives'
  },
  {
    title: 'CRM and Technology',
    points:
      'CRM Implementation | Sales and Marketing Automation | Business Workflow Automation'
  },
  {
    title: 'Intelligence and Analytics',
    points:
      'Campaign Analytics | Conversion Tracking | Performance Optimization'
  }
];

const Offerings = () => {
  return (
    <section className="offerings-section">
      {/* Header */}
      <div className="offerings-header">
        <h2>Real Estate Digital Marketing Offerings</h2>
        <p>
          As a real estate digital marketing agency, we help property brands
          strengthen their online presence and reach the right audience. Our
          focus is on improving visibility across Google and social media,
          generating high-quality leads, and guiding potential buyers through a
          clear conversion journey.
        </p>
      </div>

      {/* Content */}
      <div className="offerings-content">
        {/* Timeline */}
        <div className="timeline">
          {offerings.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.points}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="offerings-image">
          <img src={digitalimg} alt="Digital Marketing" />
        </div>
      </div>
    </section>
  );
};

export default Offerings;

