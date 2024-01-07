import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f8f8',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#333',
    borderBottom: '2px solid #333',
    paddingBottom: '10px',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '15px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>

      <p style={paragraphStyle}>
        Welcome to ThoughtSphere! We are passionate about your interests and committed to providing a platform where
        users can share, discover, explore content related to their interests.
      </p>

      <h2 style={headingStyle}>Our Mission</h2>

      <p style={paragraphStyle}>
        At ThoughtSphere, our mission is to let intrusive thoughts win. We strive to create a community where people
        can engage in whatever the fuck they want in a positive and meaningful way.
      </p>

      <h2 style={headingStyle}>Our Team</h2>

      <p style={paragraphStyle}>
        Meet the dedicated individuals behind ThoughtSphere. Our team is composed of hard ass Viltrumites,
        each bringing unique skills and expertise to ensure the success of our platform.
      </p>

      <h2 style={headingStyle}>Contact Us</h2>

      <p style={paragraphStyle}>
        We value your feedback and suggestions. If you have any questions or would like to get in touch with us, please reach out
        at <strong><a href="mailto:thoughtsphere@gmail.com">thoughtsphere@gmail.com</a></strong>
      </p>

      <p style={paragraphStyle}>
        Thank you for being a part of the ThoughtSphere community!
      </p>
    </div>
  );
};

export default About;
