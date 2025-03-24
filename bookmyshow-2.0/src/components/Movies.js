import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const Movies = () => {
  const movies = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      genre: 'Action/Sci-Fi',
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      description: 'The epic conclusion to the Infinity Saga'
    },
    {
      id: 2,
      title: 'Dune',
      genre: 'Sci-Fi/Adventure',
      rating: 4.5,
      image: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      description: 'A mythic hero\'s journey'
    },
    {
      id: 3,
      title: 'The Batman',
      genre: 'Action/Crime',
      rating: 4.3,
      image: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
      description: 'The Dark Knight of Gotham City'
    }
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Now Showing</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={movie.image} style={{ height: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-primary">{movie.genre}</span>
                  <span>
                    {movie.rating} <i className="fas fa-star text-warning"></i>
                  </span>
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

export default Movies;