import React from 'react';
import logo from './logo.png'; // Import your logo image
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="app-title">My Fitness App</h1>
      <img className="app-logo" src={logo} alt="Fitness App Logo" />
      <p>
        Start your fitness journey with our comprehensive app! Whether you're looking to track your workouts, monitor your calorie intake, or stay organized with notes, our app has you covered. With intuitive tools and a user-friendly interface, achieving your fitness goals has never been easier.
      </p>
    </div>
  );
};

export default HomePage;
