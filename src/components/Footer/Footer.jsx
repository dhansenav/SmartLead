import React from "react";
import "./Footer.styles.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP FOOTER */}
      <div className="footer-container">

        <div className="footer-column">
          <h3>Office Address</h3>
          <p>
            Karanjade panvel navi Mumbai 410206
          </p>
        </div>

        <div className="footer-column">
          <h3>Business Enquiries</h3>
          <p>
            Mr. Fahim Shaikh,Mr.Sahil khan <br />
            +91 99204 55923 /
            +91 98202 14679 <br />
            Email: info.smartleadweb@gmail.com
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Portfolio</li>
            <li>Why SmartLeadWeb</li>
            <li>Expertise</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <h2>SmartLeadWeb</h2>

        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

        <p>
          Copyright © 2025 by SmartLeadWeb ·{" "}
          <span className="privacy">Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
