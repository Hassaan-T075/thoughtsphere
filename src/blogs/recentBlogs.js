import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../models/useFetch';
import { useSelector } from 'react-redux';



const RecentBlogs = () => {

  const blogsData = [
    {
      "id": 12,
      "title": "Mastering Meditation",
      "body": "Guidance on deepening your meditation practice for inner peace and clarity.",
      "createdAt": "2023-12-01"
    }]

  const data= useFetch('http://localhost:3000/api/home/my-blogs')
  console.log(data)
  const blogsCard = (blog) => {
    return (
      <div className="card bg-light text-dark m-3" style={{ width: '18rem', cursor: 'pointer', transition: 'transform .3s, box-shadow .3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.body}</p>
          <p className="card-text"><small className="text-muted">Posted on: {blog.createdAt}</small></p>
        </div>
      </div>
    );
  };


  return (
    <div className="container-fluid bg-dark min-vh-100">
      <div className="d-flex flex-wrap justify-content-center align-items-start pt-5">
        {(blogsData.length > 0) && blogsData.map(blog => blogsCard(blog))}
      </div>
    </div>
  );
};

export default RecentBlogs;
