import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const MyBlogs = () => {
    const blogsData = [
        {
          "id": 1,
          "title": "First Blog Post",
          "summary": "This is a summary of the first blog post.",
          "date": "2023-01-01"
        },
        {
          "id": 2,
          "title": "Second Blog Post",
          "summary": "This is a summary of the second blog post.",
          "date": "2023-02-15"
        },
        {
            "id": 2,
            "title": "Exploring the Outdoors",
            "summary": "A detailed account of a recent hiking adventure in the Rocky Mountains.",
            "date": "2023-02-15"
        }
        ,{
            "id": 3,
            "title": "The Future of Technology",
            "summary": "Insights into upcoming technological innovations and their potential impact on society.",
            "date": "2023-03-03"
        },
        {
            "id": 4,
            "title": "Homemade Recipes: Healthy Edition",
            "summary": "A collection of easy-to-make, nutritious recipes for busy weekdays.",
            "date": "2023-04-10"
        },
        {
            "id": 5,
            "title": "The Art of Mindfulness",
            "summary": "Exploring various mindfulness techniques and their benefits for mental health.",
            "date": "2023-05-21"
        },
        {
            "id": 6,
            "title": "Traveling Through Europe",
            "summary": "Personal experiences and tips for traveling through different European countries.",
            "date": "2023-06-08"
        },
        {
            "id": 7,
            "title": "Photography Basics",
            "summary": "A beginner's guide to understanding the fundamentals of photography.",
            "date": "2023-07-14"
        },
        {
            "id": 8,
            "title": "Gardening Tips for Beginners",
            "summary": "Practical advice for starting and maintaining a flourishing home garden.",
            "date": "2023-08-19"
        },
        {
            "id": 9,
            "title": "The Joys of Baking",
            "summary": "Discovering the therapeutic effects of baking and sharing some favorite recipes.",
            "date": "2023-09-22"
        },
        {
            "id": 10,
            "title": "Understanding Blockchain",
            "summary": "A simple and clear explanation of blockchain technology and its applications.",
            "date": "2023-10-30"
        }
        
        ,{
            "id": 11,
            "title": "Living a Sustainable Life",
            "summary": "Tips and tricks for adopting a more sustainable lifestyle in the modern world.",
            "date": "2023-11-12"
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

export default MyBlogs;
