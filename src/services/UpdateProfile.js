import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

  const [newuser, setNewuser] = useState("")
  const navigate = useNavigate();

  const storedData = localStorage.getItem('userdata')
  const userdata = storedData ? JSON.parse(storedData) : {};
  const token = userdata.token

  const sendupdate = async (event) => {
    event.preventDefault()
    const profileUrl = 'http://localhost:3000/api/home/update-profile';
    const body = {
      username: newuser
    }
    try {
      const response = await fetch(profileUrl, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      } else {
        userdata.username = newuser;
        navigate('/auth/login');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card text-white bg-secondary mb-3" style={{ width: 'auto', maxWidth: '400px' }}>
        <div className="card-body p-4">
          <h3 className="card-title text-center mb-4">Update Profile</h3>

          <form>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Username</label>
              <input type="text" className="form-control" id="newPassword" onChange={(event) => setNewuser(event.target.value)} />
            </div>

            {/* <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Username</label>
              <input type="password" className="form-control" id="confirmPassword" onChange={(event)=>setNewuser(event.target.value)}/>
            </div> */}
             
            <div className="text-center">
              <button type="submit" className="btn btn-danger" onClick={sendupdate}>Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateProfile;