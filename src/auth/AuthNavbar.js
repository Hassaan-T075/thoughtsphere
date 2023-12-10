import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Authnavbar = () => {
    return (
        <Navbar data-bs-theme="dark" expand="lg" bg="primary">
            <Container>
                <Navbar.Brand href="#home">ThoughtSphere</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/auth/login">Login</Nav.Link>
                        <Nav.Link href="/auth/signup">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Authnavbar;