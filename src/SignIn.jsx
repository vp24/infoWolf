// SignIn.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css';

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending login request with:', { username, password });
      const response = await axios.post('https://mktapi.onrender.com/login', { username, password });
      console.log('Login response:', response.data);
      const { token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      onSignIn();
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        console.log('Error response data:', error.response.data);
        setError(error.response.data.error || 'Invalid username or password. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };


  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default SignIn;