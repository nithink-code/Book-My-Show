import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would call your authentication API here
      // const response = await authApi.login(email, password);
      
      // For demo purposes, we'll just create a mock user
      login({ 
        email,
        name: email.split('@')[0], // Use the part before @ as username
        token: 'mock-token-123' 
      });
      
      handleClose();
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setEmail('demo@bookmyshow.com');
    setPassword('demo123');
    // No need to call handleSubmit as we're setting state and letting the form handle it
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="w-100 text-center">
          <h4 className="fw-bold">Welcome Back!</h4>
          <p className="text-muted small">Sign in to continue</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger" className="py-2">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex align-items-center">
              <i className="fas fa-envelope me-2"></i>
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2"
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="d-flex align-items-center">
              <i className="fas fa-lock me-2"></i>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2"
              disabled={loading}
            />
            <div className="text-end mt-2">
              <a href="/forgot-password" className="small text-muted">
                Forgot password?
              </a>
            </div>
          </Form.Group>

          <Button
            variant="danger"
            type="submit"
            className="w-100 py-2 fw-bold"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </Button>

          <div className="text-center mt-3">
            <Button
              variant="outline-secondary"
              className="w-100"
              onClick={handleDemoLogin}
              disabled={loading}
            >
              Use Demo Account
            </Button>
          </div>
        </Form>

        <div className="text-center mt-4">
          <p className="text-muted mb-0">
            Don't have an account?{' '}
            <a href="/register" className="text-danger fw-bold">
              Sign up
            </a>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center">
        <small className="text-muted">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </small>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;