import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Button, Modal, Form, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const CustomNavbar = () => {
  const { user, login, logout } = useContext(AuthContext); // Added login here
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Authentication logic
    console.log('Login attempted with:', email, password);
    login({ email, name: email.split('@')[0] }); // Now using the properly imported login
    setShowLogin(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <i className="fas fa-ticket-alt me-2"></i>
            BookMyShow 2.0
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbar-collapse" />
          
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
              <Nav.Link as={NavLink} to="/events">Events</Nav.Link>
              <Nav.Link as={NavLink} to="/sports">Sports</Nav.Link>
            </Nav>
            
            <Nav className="ms-auto">
              {user ? (
                <NavDropdown
                  title={
                    <>
                      <FaUser className="me-1" />
                      {user.name}
                    </>
                  }
                  align="end"
                >
                  <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button 
                  variant="danger" 
                  onClick={() => setShowLogin(true)}
                  className="signin-btn"
                >
                  <FaSignInAlt className="me-1" />
                  Sign In
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login to BookMyShow</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100 mb-3">
              Sign In
            </Button>

            <div className="text-center">
              <p className="text-muted mb-0">New user? <Link to="/register">Create account</Link></p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;