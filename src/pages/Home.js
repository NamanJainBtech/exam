// pages/Home.js
import React from 'react';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is a protected page accessible after login.</p>
      <h3>Cards</h3>
      <div className="carousel">
        <img src="image1.jpg" alt="Card 1" />
        <img src="image2.jpg" alt="Card 2" />
        <img src="image3.jpg" alt="Card 3" />
        <img src="image4.jpg" alt="Card 4" />
      </div>
    </div>
  );
}

export default Home;