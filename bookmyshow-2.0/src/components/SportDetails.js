import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const SportDetails = () => {
  const { id } = useParams();
  
  // Sample data - in a real app, fetch from API
  const sport = {
    1: {
      title: 'IPL Cricket Match',
      description: 'Live cricket action',
      image: 'https://via.placeholder.com/800x400?text=IPL+Cricket',
      teams: 'Mumbai Indians vs Chennai Super Kings',
      date: '2023-05-15',
      venue: 'Wankhede Stadium'
    }
  }[id];

  if (!sport) {
    return <div>Sport event not found</div>;
  }

  return (
    <div className="container mt-4">
      <Card>
        <Card.Img variant="top" src={sport.image} />
        <Card.Body>
          <Card.Title>{sport.title}</Card.Title>
          <Card.Text>{sport.description}</Card.Text>
          <p><strong>Teams:</strong> {sport.teams}</p>
          <p><strong>Date:</strong> {new Date(sport.date).toLocaleDateString()}</p>
          <p><strong>Venue:</strong> {sport.venue}</p>
          <Button variant="danger">Book Tickets</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SportDetails;