import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

 const ChangePassword = () => {
  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card text-white bg-secondary mb-3" style={{ width: 'auto', maxWidth: '400px' }}>
        <div className="card-body p-4">
          <h3 className="card-title text-center mb-4">Change Password</h3>

          <form>
            <div className="mb-3">
              <label htmlFor="oldPassword" className="form-label">Old Password</label>
              <input type="password" className="form-control" id="oldPassword" />
            </div>

            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input type="password" className="form-control" id="newPassword" />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-danger">Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;