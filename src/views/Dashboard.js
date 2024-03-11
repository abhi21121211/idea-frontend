import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Dashboard() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // Redirect to login if not authenticated
//   if (!isLoggedIn) {
//     return <Redirect to="/login" />;
//   }

  return (
    <div>
      <h1>User Dashboard</h1>
      {/* Add content for user dashboard */}
    </div>
  );
}

export default Dashboard;
