import React from 'react';
import './Clients.styles.css';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';

const clients = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5
];

const Clients = () => {
  return (
    <section className="clients-section">
      <h2 className="clients-title">Our Real Estate Clients</h2>

      <div className="clients-grid">
        {clients.map((logo, index) => (
          <div className="client-logo" key={index}>
            <img src={logo} alt="Client Logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
