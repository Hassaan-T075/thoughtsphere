import React from 'react';
const notificationsData = [
    {
      id: 1,
      title: "New Blog Post",
      message: "Your new blog post has been published successfully.",
      timestamp: "2023-11-14 10:00"
    },
    {
      id: 2,
      title: "Comment Received",
      message: "Your blog post received a new comment.",
      timestamp: "2023-11-14 09:30"
    },
    {
      id: 3,
      title: "Subscription Renewed",
      message: "Your subscription has been renewed for another year.",
      timestamp: "2023-11-13 15:45"
    },
    {
      id: 4,
      title: "Profile Update",
      message: "Your profile was updated successfully.",
      timestamp: "2023-11-13 12:10"
    },
    {
      id: 5,
      title: "New Follower",
      message: "You have a new follower on your blog.",
      timestamp: "2023-11-12 18:30"
    },
    {
      id: 6,
      title: "Blog Anniversary",
      message: "Congratulations! Today is your 2-year blog anniversary.",
      timestamp: "2023-11-12 08:00"
    },
    {
      id: 7,
      title: "Security Alert",
      message: "New sign-in to your account was detected.",
      timestamp: "2023-11-11 22:15"
    },
    {
      id: 8,
      title: "Payment Processed",
      message: "Your recent payment has been processed successfully.",
      timestamp: "2023-11-11 16:40"
    },
    {
      id: 9,
      title: "Feature Request",
      message: "Your feature request has been submitted and is under review.",
      timestamp: "2023-11-10 14:05"
    },
    {
      id: 10,
      title: "Collaboration Offer",
      message: "You've received a collaboration offer from a fellow blogger.",
      timestamp: "2023-11-10 09:20"
    },
    {
      id: 11,
      title: "System Update",
      message: "A new update is available for your blogging platform.",
      timestamp: "2023-11-09 20:00"
    }
  ];
  
const Notifications = ({ notifications = notificationsData }) => {
    return (
        <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center justify-content-center">
          <div className="container bg-secondary text-white p-4">
            <h2 className="text-center mb-4">Notifications</h2>
            {notificationsData.map(notification => (
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
                  <h5 className="card-title">{notification.title}</h5>
                  <p className="card-text">{notification.message}</p>
                  <p className="card-text"><small className="text-muted">{notification.timestamp}</small></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Notifications;
