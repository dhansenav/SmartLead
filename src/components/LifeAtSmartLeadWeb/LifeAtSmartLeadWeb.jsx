import React from 'react';
import './LifeAtSmartLeadWeb.styles.css';

const images = [
  '/meeting1.png',
  '/meeting2.png',
  '/meeting3.png'
];

const LifeAtSmartLeadWeb = () => {
  return (
    <section className="life-section">
      <h2 className="life-title">Life at SmartLeadWeb</h2>
      <p className="life-subtitle">
        At SmartLeadWeb, we grow together through training and celebrate with fun moments.
      </p>

      <div className="life-gallery">
        {images.map((img, index) => (
          <div className="life-image" key={index}>
            <img src={img} alt={`Life at SmartLeadWeb ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeAtSmartLeadWeb;
