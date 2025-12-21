import React from "react";
import "./Whychooseus.styles.css";

const WhyChooseus = () => {
  return (
    <section className="why-choose-section">
      <div className="why-overlay">
        <h2>
          Why Choose Us as Your Real Estate Digital Marketing Agency ?
        </h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>7+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <p>Brands Empowered</p>
          </div>

          <div className="stat-card">
            <h3>30+</h3>
            <p>Team Members</p>
          </div>

          <div className="stat-card">
            <h3>85%+</h3>
            <p>Client Retention Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseus;
