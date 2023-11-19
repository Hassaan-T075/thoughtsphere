
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = ({ avatarUrl = "https://i.pinimg.com/originals/0f/1a/26/0f1a262d2317cece28bd6b0e24ad9fd8.png", username = "Chungus", totalBlogs = "25", onChangePassword }) => {
    return (
        <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
          <div className="card text-white bg-secondary mb-3" style={{ width: '60vh', maxWidth: '1200px', height: '60vh' }}>
            <div className="card-body  text-center p-4">
                <br />
              <img src={avatarUrl} alt="Avatar" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
              <br />
              <h3 className="card-title">{username}</h3>
              <p className="card-text">Total Blogs: {totalBlogs}</p>
              <br />
              <br />
              <br />
              <button className="btn btn-danger" onClick={onChangePassword}>Change Password</button>
            </div>
          </div>
        </div>
      );
};

export default Profile;
