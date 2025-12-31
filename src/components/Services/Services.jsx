import React from 'react';
import './Services.styles.css';

const plans = [
  {
    price: "Website",
    title: " & Landing Pages",
    features: [
      "Landing Page:₹4,000 - ₹8,000",
      "Business Website (4-6 pages): ₹10,000-₹25,000",
      "Domain & hosting are charged separately.",
    ],
    highlight: false,
  },
  {
    price: "Standard",
    title: "Digital Marketing ",
    features: [
      "6,000-10,000/Monthly",
      "8-10 posts",
      "2-3 reels",
      "Ads setup + performance report",
    ],
    highlight: false,
  },
  {
    price: "Growth",
    title: "Digital Marketing",
    features: [
      "12,000-25,000/Monthly",
      "12-16 posts",
      "4-6 reels",
      "Ads + WhatsApp campaigns",
    ],
    highlight: false,
  },
  {
    price: "Premium",
    title: "Digital Marketing",
    features: [
      "30,000 - ₹60,000 ",
      "20+ posts",
      "8-10 reels",
      "Funnels + automation",
    ],
    highlight: false,
  },
];

export default function services() {
  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
        >
          <h2 className="price">{plan.price}</h2>
          <span className="plan-title">{plan.title}</span>

          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>

          <button className="btn">Get Started</button>
        </div>
      ))}
    </div>

  );
}
