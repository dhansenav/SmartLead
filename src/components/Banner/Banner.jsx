import React from 'react';
import './Banner.styles.css';
import bannerImg from '../../assets/bannersmart.png';

const Banner = () => {
  return (
    <section className="banner">
      {/* Left Section */}
      <div className="banner-left">
        <div className="overlay">
          <h1>
            Trusted Real Estate Digital <br />
            Marketing Agency for Growth
          </h1>
          <button className="cta-btn">Book a Free Consultation</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="banner-right">
        <h2>Get in Touch with Us</h2>

        <form className="contact-form">
          <label>Name*</label>
          <input type="text" placeholder="Name*" />

          <label>Phone*</label>
          <input type="text" placeholder="Mobile Number*" />

          <label>Email*</label>
          <input type="email" placeholder="Email Id*" />

          <label>Role*</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="role" /> Channel Partner
            </label>
            <label>
              <input type="radio" name="role" /> Developer
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Banner;
