import React from 'react';
import {useNavigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const Profile = ({ avatarUrl = "https://i.pinimg.com/originals/0f/1a/26/0f1a262d2317cece28bd6b0e24ad9fd8.png", onChangePassword }) => {
  const navigate = useNavigate(); 
  
  const storedData = localStorage.getItem('userdata')
  const userdata = storedData ? JSON.parse(storedData) : {};
  console.log(userdata)

  localStorage.setItem('token', userdata.token);

    return (
        <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
          <div className="card text-white bg-secondary mb-3" style={{ width: '60vh', maxWidth: '1200px', height: '60vh' }}>
            <div className="card-body  text-center p-4">
                <br />
              <img src={avatarUrl} alt="Avatar" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
              <br />
              <h3 className="card-title">{userdata.username}</h3>
              <p className="card-text">Number of Followers: {userdata.followers}</p>
              <p className="card-text">Number of Followings: {userdata.followings}</p>
              <br />
              <br />
              <br />
              <button className="btn btn-danger" onClick={()=>navigate("/update-profile")}>Update Profile</button>
            </div>
          </div>
        </div>
      );
};

export default Profile;
