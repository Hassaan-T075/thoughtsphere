import '../App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'
import 'boxicons/css/boxicons.min.css';

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
            <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook bx-tada-hover"></i></Nav.Link>
            <Nav.Link href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-whatsapp bx-tada-hover"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
    
  );
};

export default HomePage;
