import React from "react";
import "./ImportantMetrics.styles.css";
import {
  FaUsers,
  FaCheckCircle,
  FaEye,
  FaMoneyBillWave
} from "react-icons/fa";

const metrics = [
  {
    icon: <FaUsers />,
    title: "Leads by Source",
    desc: "Review the leads by source to improve targeting and reach."
  },
  {
    icon: <FaCheckCircle />,
    title: "Qualified Leads",
    desc: "Focus on the qualified leads to enhance sales efficiency."
  },
  {
    icon: <FaEye />,
    title: "Cost per Site Visit",
    desc: "Track the cost per site visit to measure campaign efficiency."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Cost per Booking",
    desc: "Monitor the cost per booking to optimize your marketing ROI."
  }
];

const ImportantMetrics = () => {
  return (
    <section className="metrics-section">
      <div className="metrics-header">
        <h2>Important Metrics for Real Estate Sales & Marketing</h2>
        <p>
          Refine your campaigns for greater efficiency and higher ROI
        </p>
      </div>

      <div className="metrics-grid">
        {metrics.map((item, index) => (
          <div className="metric-card" key={index}>
            <div className="metric-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantMetrics;

