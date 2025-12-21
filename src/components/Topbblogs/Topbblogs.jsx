import React from 'react';
import './Topbblogs.styles.css';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png'; 
  
const blogs = [
  {
    image: blog1,
    title: 'Real Estate Trends in India 2025–26: What the Data Really Says'
  },
  {
    image: blog2,
    title:
      'The Role of AI in Digital Marketing for Real Estate: What You Need to Know'
  },
  {
    image: blog3,
    title:
      'How to Generate Real Estate Leads Through Performance Marketing in 2025'
  },
  {
    image: blog4,
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

