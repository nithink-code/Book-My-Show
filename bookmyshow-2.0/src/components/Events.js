import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Weekend Music Festival',
      type: 'Concert',
      date: '2023-12-15',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
      description: 'Three days of non-stop music with top artists'
    },
    {
      id: 2,
      title: 'Stand-up Comedy Night',
      type: 'Comedy',
      date: '2023-12-10',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
      description: 'Laugh your heart out with top comedians'
    }
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Upcoming Events</h2>
      <Row xs={1} md={2} className="g-4">
        {events.map((event) => (
          <Col key={event.id}>
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src={event.image} 
                style={{ 
                  height: '300px', 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }} 
              />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <span className="badge bg-info">{event.type}</span>
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
              </Card.Body>
              <Card.Footer>
                <Button variant="danger" className="w-100">Book Now</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;