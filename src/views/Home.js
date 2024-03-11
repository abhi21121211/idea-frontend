import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to EduHub</h1>
      <p>Explore our courses and start learning today!</p>
      <Link to="/courses">View Courses</Link>
    </div>
  );
}

export default Home;
