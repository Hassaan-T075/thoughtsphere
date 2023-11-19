import React from 'react';


const BlogEdit = ({props = {
    "id": 11,
    "title": "Living a Sustainable Life",
    "summary": "Tips and tricks for adopting a more sustainable lifestyle in the modern world.",
    "date": "2023-11-12"
}}) => {
 
 
return( <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
<div className="card text-white bg-secondary mb-3" style={{ width: '100vh', height: '90vh' }}>
  <div className="card-body p-4 align-items-center" >
      <br />
      <br />
      <br />

      <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-4">Edit Blog</h3>
            <button type="button" className="btn btn-danger">
              <i className="bi bi-trash"></i>
              
            </button>
          </div>

    <form>
      <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" defaultValue={props.title} />
      </div>

      <div className="mb-3">
      <label htmlFor="body" className="form-label">Body</label>
          <textarea className="form-control" id="body" rows="4" defaultValue={props.summary}></textarea>
      </div>

      <br />
      <br />
      <br />
      
      <div className="text-center">
      <button type="submit" className="btn btn-primary">Save Changes</button>
      </div>
    </form>
  </div>
</div>
</div>);
};

export default BlogEdit;
