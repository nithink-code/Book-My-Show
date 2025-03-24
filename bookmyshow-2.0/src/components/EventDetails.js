import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const EventDetails = () => {
  const { id } = useParams();
  
  // Sample data - in a real app, fetch from API
  const event = {
    1: {
      title: 'Weekend Concert',
      description: 'Experience the magic live',
      image: 'https://via.placeholder.com/800x400?text=Weekend+Concert',
      venue: 'City Arena',
      date: '2023-12-25',
      price: 1500
    }
  }[id];

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mt-4">
      <Card>
        <Card.Img variant="top" src={event.image} />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <p><strong>Venue:</strong> {event.venue}</p>
          <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p><strong>Price:</strong> ₹{event.price}</p>
          <Button variant="danger">Book Tickets</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventDetails;