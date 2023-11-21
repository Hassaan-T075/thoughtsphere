import React, { useState } from 'react';
import '../App.css'
import { Navbar, Nav, Container, Row, Col, Sidebar, Footer } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faRedditAlien, faInstagram } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <Container className="p-0 m-0">
      <Row>
        {/* Sidebar */}
        <Col xs={12} md={3} lg={2} className="sidebar bg-danger">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Col>

        {/* Page Content */}
        <Col xs={12} md={9} lg={10} className="p-0 m-0">
          <div>
            {/* Navbar at the top */}
            <Navbar bg="primary" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Thoughtsphere</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/thoughts">Thoughts</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* Main content area */}
            <Container fluid className="mb-4">
              <div style={{ minHeight: '70vh' }}> {/* This div should be as tall as the content requires */}
                {/* Dummy content */}
                <h1>Welcome to Our Website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
                {/* Repeat the dummy text or add other content as needed to fill the page */}
              </div>
            </Container>

            {/* Footer at the bottom */}
            <footer className="footer py-3 bg-primary text-white">
              <Container className="d-flex justify-content-between">
                <span>© 2023 thoughtsphere</span>
                <div>
                  {/* Social media icons with additional margin */}
                  <a href="https://discord.com" className="text-white me-4" aria-label="Discord">
                    <FontAwesomeIcon icon={faDiscord} size="lg" />
                  </a>
                  <a href="https://reddit.com" className="text-white me-4" aria-label="Reddit">
                    <FontAwesomeIcon icon={faRedditAlien} size="lg" />
                  </a>
                  <a href="https://instagram.com" className="text-white me-3" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </Container>
            </footer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
