import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const Sports = () => {
  const sports = [
    {
      id: 1,
      title: 'IPL Cricket Match',
      teams: 'Mumbai Indians vs Chennai Super Kings',
      date: '2023-12-20',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
      description: 'High-voltage cricket action'
    },
    {
      id: 2,
      title: 'Football League',
      teams: 'Local Derby Match',
      date: '2023-12-18',
      image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
      description: 'Exciting local derby match'
    }
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Sports Events</h2>
      <Row xs={1} md={2} className="g-4">
        {sports.map((sport) => (
          <Col key={sport.id}>
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src={sport.image} 
                style={{ 
                  height: '300px', 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }} 
              />
              <Card.Body>
                <Card.Title>{sport.title}</Card.Title>
                <Card.Text>{sport.description}</Card.Text>
                <div>
                  <p className="mb-1"><strong>Teams:</strong> {sport.teams}</p>
                  <p><strong>Date:</strong> {new Date(sport.date).toLocaleDateString()}</p>
                </div>
              </Card.Body>
              <Card.Footer>
                <Button variant="danger" className="w-100">Book Tickets</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sports;