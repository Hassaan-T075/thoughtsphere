import React from 'react';
import usePost from '../models/usePost';

  
const Notifications = () => {
  const blogsUrl = 'http://localhost:3000/api/home/blogs/notifications';
  const { data: notifications, isPending, error } = usePost(blogsUrl);
  console.log(notifications);
 
    return (
        <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
          <div className="container bg-secondary text-white p-4">
            <h2 className="text-center mb-4">Notifications</h2>
            {isPending && <p>Loading blogs...</p>}
        {error && <p>Error fetching blogs: {error}</p>}
            {notifications  &&notifications.notifications.map(notification => (
             <div 
             key={notification.id} 
             className="card mb-3" 
             style={{ 
               transition: 'transform .3s, box-shadow .3s, background-color .3s', 
               backgroundColor: '#ffffff' 
             }} 
             onMouseOver={e => {
               e.currentTarget.style.transform = 'scale(1.05)';
               e.currentTarget.style.backgroundColor = '#5a6268';
             }} 
             onMouseOut={e => {
               e.currentTarget.style.transform = 'scale(1)';
               e.currentTarget.style.backgroundColor = '#ffffff';
             }}
           >
                <div className="card-body">
                  {/* <h5 className="card-title">{notification.email}</h5> */}
                  <p className="card-text">{notification.body}</p>
                  {/* <p className="card-text"><small className="text-muted">{new Date(notification.createdAt).toLocaleDateString()}</small></p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Notifications;
