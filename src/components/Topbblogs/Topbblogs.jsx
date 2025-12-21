import React from 'react';
import './Topbblogs.styles.css';

const blogs = [
  {
    image: '/blog1.png',
    title: 'Real Estate Trends in India 2025–26: What the Data Really Says'
  },
  {
    image: '/blog2.png',
    title:
      'The Role of AI in Digital Marketing for Real Estate: What You Need to Know'
  },
  {
    image: '/blog3.png',
    title:
      'How to Generate Real Estate Leads Through Performance Marketing in 2025'
  },
  {
    image: '/blog4.png',
    title:
      'Top 10 Real Estate Marketing Strategies to Boost Your Sales in 2025'
  }
];

const TopBlogs = () => {
  return (
    <section className="blogs-section">
      <h2 className="blogs-title">Top Blogs</h2>

      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <p>{blog.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBlogs;

