import React from 'react';
import Carousel from './Carousel';

const Home = () => {
  return (
    <div className="home-container">
      <Carousel />
      <div className="container mt-5">
        <h2>Now Showing</h2>
        {/* Add featured content here */}
      </div>
    </div>
  );
};

export default Home;