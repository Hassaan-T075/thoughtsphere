import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ViewBlog = () => {
  const location = useLocation();
  const blog = location.state;

 
   return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card text-white bg-secondary mb-3" style={{ width: '100vh', height: '100vh' }}>
        <div className="card-body p-4 align-items-center" >
            <br />
            <br />
            <br />

          <h3 className="card-title text-center mb-4">Blog</h3>
          {blog && (
            <div className="text-white mb-3">
              <strong>Written by:</strong> {blog.email}
            </div>
          )}
          {blog && (
            <div className="text-white mb-3">
              <strong>Posted on:</strong> {new Date(blog.createdAt).toLocaleDateString()}
            </div>
          )}
         <div className="text-center">
        <button className="btn btn-link text-decoration-none">
          <FontAwesomeIcon icon={faHeart} className="text-danger" />
        </button>
        <p>{blog.likes.length} Likes</p>
      </div>
          <form>
            <div className="mb-3">
              <label htmlFor="blogTitle" className="form-label">Blog Title</label>
              <input type="text" className="form-control" id="blogTitle" placeholder="Enter title"  value={blog ? blog.title : ''}  />
            </div>

            <div className="mb-3">
              <label htmlFor="blogBody" className="form-label">Blog Body</label>
              <textarea className="form-control" id="blogBody" rows="6" placeholder="Write your blog here..." value={blog ? blog.body : ''}></textarea>
            </div>
            
            
            <h5 className="mb-0">Comments</h5> {/* mb-0 removes any default bottom margin from the heading */}
            <div className="mt-4" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            
            {blog.comments.map((comment, index) => (
              <div key={index} className="card bg-light mb-2">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">{comment.email}</h6>
                  <p className="card-text">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
         
           
            <br />
            <br />
            
            {/* <div className="text-center">
              <button type="submit" className="btn btn-primary" style ={{ width: '40%'}}>Add Blog</button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
