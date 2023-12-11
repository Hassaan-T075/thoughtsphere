import React, { useState } from 'react';
import '../App.css'
import { Navbar, Nav, Container, Row, Col, Footer } from 'react-bootstrap';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faRedditAlien, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Sidebar from './Sidebar'
import store from '../store';

const HomePage = () => {
  return (
    
    <div style={{
      padding: '0px 0px 0px 370px',
    }}>
      <Sidebar />
    
      {/* Outlet container with limited space */}
      <div style={{
    height: '87vh', // Set the height to be 100% of the viewport height
    overflowY: 'auto', // Adds a scrollbar if content exceeds the height
    overflowX: 'hidden', // Prevents horizontal scrolling
  }}>
        <Outlet />
      </div>
    
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <span className="text-white">© 2023 Thoughtsphere</span>
          <Nav className="justify-content-end">
            <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
            <Nav.Link href="/terms">Terms of Use</Nav.Link>
            {/* Social Media Icons */}
            <Nav.Link href="https://facebook.com"><i className="bx bxl-facebook"></i></Nav.Link>
            <Nav.Link href="https://twitter.com"><i className="bx bxl-twitter"></i></Nav.Link>
            <Nav.Link href="https://instagram.com"><i className="bx bxl-instagram"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
    
  );
};

export default HomePage;
