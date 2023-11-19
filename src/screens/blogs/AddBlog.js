import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddBlog = () => {
   return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card text-white bg-secondary mb-3" style={{ width: '100vh', height: '90vh' }}>
        <div className="card-body p-4 align-items-center" >
            <br />
            <br />
            <br />

          <h3 className="card-title text-center mb-4">Add Blog</h3>

          <form>
            <div className="mb-3">
              <label htmlFor="blogTitle" className="form-label">Blog Title</label>
              <input type="text" className="form-control" id="blogTitle" placeholder="Enter title" />
            </div>

            <div className="mb-3">
              <label htmlFor="blogBody" className="form-label">Blog Body</label>
              <textarea className="form-control" id="blogBody" rows="6" placeholder="Write your blog here..."></textarea>
            </div>

            <br />
            <br />
            <br />
            
            <div className="text-center">
              <button type="submit" className="btn btn-primary" style ={{ width: '40%'}}>Add Blog</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
