import React from 'react';
import {useLocation} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter } from 'react-icons/fa'; // Importing Facebook and WhatsApp icons
import usePost from '../models/usePost';
import axios from 'axios';

const ViewProfile = () => {
  const avatarUrl = "https://i.pinimg.com/originals/0f/1a/26/0f1a262d2317cece28bd6b0e24ad9fd8.png"
  const location = useLocation()
  const email = location.state;
  const blogsUrl = `http://localhost:3000/api/home/profile`;
  const body = {
    "email": email
  }
  const { data: profileData } = usePost(blogsUrl, body);

  console.log(profileData.profile)
  const storedData = localStorage.getItem('userdata')
  const userdata = storedData ? JSON.parse(storedData) : {};
  const token = userdata.token
  const facebook = profileData.profile.social[0].facebook
  const twitter = profileData.profile.social[0].twitter

 
   const handleFacebookClick = () => {
   
    const url = profileData.profile.social[0].facebook
   
    window.location.href = url;
  };


  const handleWhatsAppClick = () => {
  
    const url = profileData.profile.social[0].whatsapp
     window.location.href = url
  };

  const handleFollowOnClick = async () =>
  {
    try {

      const response = await axios.post('http://localhost:3000/api/home/profile/follow',{
  
      "user_follow": profileData.profile.email
  
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

    return (
        <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
          <div className="card text-white bg-secondary mb-3" style={{ width: '60vh', maxWidth: '1200px', height: '60vh' }}>
            <div className="card-body  text-center p-4">
                <br />
              <img src={avatarUrl} alt="Avatar" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
              <br />
              {profileData &&<h3 className="card-title">{profileData.profile.username}</h3>}
              {profileData && <p className="card-text">Number of Followers: {profileData.profile.followers.length}</p>}
             {profileData && <p className="card-text">Number of Followings: {profileData.profile.followings.length}</p>}
              <br />
              <button className="btn btn-danger" onClick={handleFollowOnClick}>Follow User</button>
              <br />
              <br />
              <div className="mb-3">
              <a href={"https://www.facebook.com/" + facebook} target="_blank" rel="noopener noreferrer"><FaFacebook size={30} style={{ marginRight: '10px', cursor: 'pointer' }} /> </a>
            <a href={"https://www.twitter.com/" + twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={30} style={{ cursor: 'pointer' }} /> </a>
          </div>
            
            </div>
          </div>
        </div>
      );
};

export default ViewProfile;
  /* <button className="btn btn-danger" onClick={()=>navigate("/update-profile")}>Update Profile</button> */