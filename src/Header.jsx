import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, handleSignOut }) => {
  const token = localStorage.getItem('token');

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated && (
            <>
              <li>Welcome, {token ? 'User' : 'Guest'}</li>
              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;