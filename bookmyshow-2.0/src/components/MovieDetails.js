import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const MovieDetails = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch this data from an API
  const movie = {
    1: {
      title: 'Avengers: Endgame',
      description: 'The epic conclusion to the Infinity Saga',
      image: 'https://via.placeholder.com/800x400?text=Avengers+Endgame',
      genre: 'Action/Sci-Fi',
      duration: '3h 1m',
      rating: 4.8,
      cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo']
    },
    2: {
      title: 'The Batman',
      description: 'The Dark Knight of Gotham City',
      image: 'https://via.placeholder.com/800x400?text=The+Batman',
      genre: 'Action/Crime',
      duration: '2h 56m',
      rating: 4.5,
      cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano']
    }
  }[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container mt-4">
      <Card>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Rating:</strong> {movie.rating}/5</p>
          <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
          <Button variant="danger">Book Tickets</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDetails;