import React from 'react';
import './Platforms.styles.css';

const platforms = [
  {
    title: 'Google Ads',
    description:
      'Ads that appear at the top of Google search results, targeting specific keywords users search for.',
    icon: '🅖' // placeholder, can replace with SVG
  },
  {
    title: 'Native Ads',
    description:
      'Seamless ads that blend into a website or app’s design, making them look natural and engaging.',
    icon: '📰'
  },
  {
    title: 'Meta Ads',
    description:
      'Ads that run on Facebook, Instagram, and Meta’s partner platforms to reach a wider audience.',
    icon: 'ⓕ'
  },
  {
    title: 'Email & SMS Marketing',
    description:
      'Direct, personalized communication via email and SMS to connect with your audience effectively.',
    icon: '✉'
  }
];

const Platforms = () => {
  return (
    <section className="platforms-section">
      {/* Header */}
      <div className="platforms-header">
        <h2>Real Estate Digital Marketing Platforms</h2>
        <p>
          Drive Results with Smart Campaigns on the Perfect Platforms
        </p>
      </div>

      {/* Cards */}
      <div className="platforms-grid">
        {platforms.map((item, index) => (
          <div className="platform-card" key={index}>
            <div className="platform-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Platforms;

