import React from 'react';
import { useNavigate } from "react-router-dom"
// import { useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import useGet from '../models/useGet';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Importing Facebook and WhatsApp icons

const Profile = ({ avatarUrl = "https://i.pinimg.com/originals/0f/1a/26/0f1a262d2317cece28bd6b0e24ad9fd8.png", onChangePassword }) => {
  const navigate = useNavigate();
  // const location = useLocation()
  const storedData = localStorage.getItem('userdata')
  // const blog = location.state;
  const blogsUrl = `http://localhost:3000/api/home/profile`;
  const { data: profileData } = useGet(blogsUrl);
  const userdata = storedData ? JSON.parse(storedData) : {};
  console.log(userdata)
  const facebook = userdata.social[0].facebook
  const twitter = userdata.social[0].twitter


  const handleFacebookClick = () => {

    const url = profileData.profile.social[0].facebook

    window.location.href = url;
  };


  const handleWhatsAppClick = () => {

    const url = profileData.profile.social[0].whatsapp
    window.location.href = url
  };


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
          <div className="mb-3">
            <a href={"https://www.facebook.com/" + facebook} target="_blank" rel="noopener noreferrer"><FaFacebook size={30} style={{ marginRight: '10px', cursor: 'pointer' }} /> </a>
            <a href={"https://www.twitter.com/" + twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={30} style={{ cursor: 'pointer' }} /> </a>
          </div>
          <button className="btn btn-danger" onClick={() => navigate("/update-profile")}>Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
