import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import useGet from '../models/useGet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ViewBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const blog = location.state;
  const blogsUrl = `http://localhost:3000/api/home/blogs/${blog._id}`;
  const { data: blogsData, isPending, error } = useGet(blogsUrl);
  const storedData = localStorage.getItem('userdata')

  const userdata = storedData ? JSON.parse(storedData) : {};
  const token = userdata.token

  const [showDialog, setShowDialog] = useState(false);

  const [comment, setComment] = useState('');

  const handleCloseDialog = () => setShowDialog(false);
  const handleOpenDialog = () => setShowDialog(true);




  const handleLikeOnClick = async () =>
  {
    try {

      const response = await axios.post('http://localhost:3000/api/home/blogs/like',{
  
      "user_like": blogsData.blog.email,
      "id": blogsData.blog._id
  
  },
   {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      alert(response.data.msg)
      window.location.reload();
     

    } catch (error) {
    
      alert("Error adding added")

    }

  }

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };


  const handleSubmitComment = async (event) => {
    event.preventDefault();
    const newComment = {
      id: blog._id,
      email: userdata.email,
      comment: comment
    }

    try {

      const response = await axios.post('http://localhost:3000/api/home/blogs/add-comment', newComment, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      alert("comment added")
      window.location.reload();

    } catch (error) {
   
      alert("Error adding added")

    }

    handleCloseDialog();
  };

  const handleBookmark = async (event) => {
    event.preventDefault();

    const storedData = localStorage.getItem('userdata')
    const userdata = storedData ? JSON.parse(storedData) : {};
    const email = userdata.email

    const body = {
      bookmark: blog._id,
      email: email
    }

    try {

      const response = await axios.post('http://localhost:3000/api/home/blogs/add-bookmark', body, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
     
      alert(response.data.msg)
    } catch (error) {
      
      console.error('Error adding bookmark:', error);

    }
  }



  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">

      <div className="card text-white bg-secondary mb-3" style={{ width: '100vh', height: '120vh' }}>
        <div className="card-body p-4 align-items-center" >
          <br />
         
          

          <h3 className="card-title text-center mb-4">Blog</h3>
          {blogsData && (
  <div className="d-flex justify-content-center align-items-center text-white mb-3" onClick={()=>navigate("/view-profile", {state: blogsData.blog.email})} >
    <strong>Written by:  </strong> { blogsData.blog.email}
  
  </div>
)}

          {blogsData && (
            <div className="text-white mb-3">
              <strong>Posted on:</strong> {new Date(blogsData.blog.createdAt).toLocaleDateString()}
            </div>
          )}
         {blogsData && (
  <div className="text-center">
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn btn-link text-decoration-none" onClick={handleLikeOnClick}>
        <FontAwesomeIcon icon={faHeart} className="text-danger" />
      </button>
      <p className="mx-2 my-0 d-flex align-items-center">{blogsData.blog.likes.length} Likes</p>
      <button className="btn btn-link text-decoration-none" onClick={handleBookmark}>
        <FontAwesomeIcon icon={faBookmark} className="text-blue" />
      </button>
      <button className="btn btn-primary ms-2" onClick={handleOpenDialog}>
        <FontAwesomeIcon icon={faComment} />
      </button>
    </div>
  </div>
)}

         
           
          <form>
            <div className="mb-3">
              <label htmlFor="blogTitle" className="form-label">Blog Title</label>
              <input type="text" className="form-control" id="blogTitle" placeholder="Enter title" value={blogsData ? blogsData.blog.title : ''} />
            </div>

            <div className="mb-3">
              <label htmlFor="blogBody" className="form-label">Blog Body</label>
              <textarea className="form-control" id="blogBody" rows="6" placeholder="Write your blog here..." value={blogsData ? blogsData.blog.body : ''}></textarea>
            </div>

          
      <br />
      <br />
            <h5 className="mb-0">Comments</h5> {/* mb-0 removes any default bottom margin from the heading */}
            <div className="mt-4" style={{ maxHeight: '200px', overflowY: 'auto' }}>

              {blogsData && blogsData.blog.comments.map((comment, index) => (
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

           
          </form>
        </div>
      </div>
    
      {showDialog && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Comment</h5>

              </div>
              <div className="modal-body">
                <textarea className="form-control" placeholder="Your comment" value={comment} onChange={handleCommentChange}></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseDialog}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmitComment}>
                  Submit Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBlog;
