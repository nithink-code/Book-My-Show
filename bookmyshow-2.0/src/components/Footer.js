import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>BookMyShow 2.0</h5>
            <p>Your one-stop entertainment destination</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/movies" className="text-white">Movies</a></li>
              <li><a href="/events" className="text-white">Events</a></li>
              <li><a href="/sports" className="text-white">Sports</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} BookMyShow 2.0</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;