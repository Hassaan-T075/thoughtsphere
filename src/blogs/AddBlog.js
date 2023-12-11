import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {
  const storedData = localStorage.getItem('userdata')

  const userdata = storedData ? JSON.parse(storedData) : {};
  const token = userdata.token
  const email = userdata.email


  // State for title and body
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const newBlog = {
      email: email,
      title: title,
      body: body,
      comments: [],
      likes: []
    };

    try {

     await axios.post(`http://localhost:3000/api/home/new-blog`, newBlog, { headers: {
        'Authorization': `Bearer ${token}`
    }});
  
    setTitle('')
    setBody('')
 
      alert("Blog Added")
    
    } catch (error) {
      alert("Error Adding Blog")
      
    }
   
  };
  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card text-white bg-secondary mb-3" style={{ width: '100vh', height: '100vh' }}>
        <div className="card-body p-4 align-items-center" >
            <br />
            <br />
            <br />

          <h3 className="card-title text-center mb-4"> Add Blog</h3>
          
          
     
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="blogTitle" className="form-label">Blog Title</label>
              <input type="text" className="form-control" id="blogTitle" placeholder="Enter title"  value={title} onChange={handleTitleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="blogBody" className="form-label">Blog Body</label>
              <textarea className="form-control" id="blogBody" rows="6" placeholder="Write your blog here..." value={body} onChange={handleBodyChange}></textarea>
            </div>    
           
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
