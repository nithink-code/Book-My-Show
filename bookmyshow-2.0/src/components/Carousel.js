import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomCarousel = () => {
  const navigate = useNavigate();
  
  const featuredItems = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      description: 'The epic conclusion to the Infinity Saga',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      type: 'movie'
    },
    {
      id: 2,
      title: 'Weekend Concert',
      description: 'Experience the magic live',
      image: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
      type: 'event'
    },
  ];

  const handleBookNow = (item) => {
    // Navigate to details page based on type
    navigate(`/${item.type}s/${item.id}`);
  };

  return (
    <div className="mb-5">
      <h2 className="mb-4">Featured Movies & Events</h2>
      <Carousel fade indicators={false}>
        {featuredItems.map((item) => (
          <Carousel.Item key={item.id} interval={3000}>
            <img
              className="d-block w-100 rounded"
              src={item.image}
              alt={item.title}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button 
                className="btn btn-danger"
                onClick={() => handleBookNow(item)}
              >
                Book Now
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;