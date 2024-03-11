import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/authActions';

function Register() {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
