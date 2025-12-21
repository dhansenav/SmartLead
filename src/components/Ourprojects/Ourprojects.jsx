import React from 'react';
import './Ourprojects.styles.css';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';

const projects = [
  {
    image: project1,
    title: 'Royal Oasis,',
    location: 'Malad West',
    stats: [
      '90+ Units Sold',
      '1100+ Site Visits',
      '8000+ Leads Generated'
    ]
  },
  {
    image: project2,
    title: 'Vaarivana,',
    location: 'Pune',
    stats: [
      '40% Qualified Leads',
      '3000+ Enquiries Made',
      '350+ Walk-Ins'
    ]
  },
  {
    image: project3,
    title: 'Jaswanti Woods, Mulund',
    location: 'West',
    stats: [
      '25% Increase In Sale',
      '400+ Site Visits',
      '3500+ Enquiries'
    ]
  },
  {
    image: project4,
    title: 'Royal Pristo,',
    location: 'Malad East',
    stats: [
      '7500+ Enquiries Made',
      '800+ Walk-Ins',
      '₹350 Avg. Cost Per Lead Reduction'
    ]
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">
        Real Estate Projects Backed by Data That Matters
      </h2>

      <p className="projects-subtitle">
        Below is a data-driven overview of how our real estate projects performed.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>
                {project.title}
                <span>{project.location}</span>
              </h3>

              <ul>
                {project.stats.map((item, i) => (
                  <li key={i}>► {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
