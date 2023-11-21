import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const RecentBlogs = () => {
  
    const blogsData = [
        {
            "id": 12,
            "title": "Mastering Meditation",
            "summary": "Guidance on deepening your meditation practice for inner peace and clarity.",
            "date": "2023-12-01"
        },
        {
            "id": 13,
            "title": "The Science of Sleep",
            "summary": "Exploring the latest research on sleep patterns and how they affect health.",
            "date": "2024-01-10"
        },
        {
            "id": 14,
            "title": "Urban Gardening Essentials",
            "summary": "Innovative ways to grow plants and vegetables in small urban spaces.",
            "date": "2024-02-20"
        },
        {
            "id": 15,
            "title": "Healthy Eating on a Budget",
            "summary": "Practical tips for maintaining a nutritious diet without breaking the bank.",
            "date": "2024-03-15"
        },
        {
            "id": 16,
            "title": "Adventures in South America",
            "summary": "A travel diary detailing a journey across various South American countries.",
            "date": "2024-04-05"
        },
        {
            "id": 17,
            "title": "Yoga for Beginners",
            "summary": "An introduction to the basics of yoga and its benefits for physical and mental health.",
            "date": "2024-05-21"
        },
        {
            "id": 18,
            "title": "Creative Writing Tips",
            "summary": "Strategies and exercises to enhance your creative writing skills.",
            "date": "2024-06-30"
        },
        {
            "id": 19,
            "title": "Exploring World Cuisines",
            "summary": "A culinary journey through different cultures and their unique flavors.",
            "date": "2024-07-18"
        },
        {
            "id": 20,
            "title": "Fitness Fundamentals",
            "summary": "Core concepts and routines to kickstart a consistent fitness regimen.",
            "date": "2024-08-25"
        },
        {
            "id": 21,
            "title": "Renewable Energy Today",
            "summary": "An overview of current renewable energy sources and their impact on the environment.",
            "date": "2024-09-12"
        }
    ]
    

      const blogsCard = ( blog ) => {
        return (
            <div className="card bg-light text-dark m-3" style={{ width: '18rem', cursor: 'pointer', transition: 'transform .3s, box-shadow .3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.summary}</p>
                <p className="card-text"><small className="text-muted">Posted on: {blog.date}</small></p>
              </div>
            </div>
          );
      };


  return (
    <div className="container-fluid bg-dark min-vh-100">
      <div className="d-flex flex-wrap justify-content-center align-items-start pt-5">
        {blogsData.map(blog => blogsCard(blog))}
      </div>
    </div>
  );
};

export default RecentBlogs;
