import React from 'react';
import './Header.css';

const Header = ({ isAuthenticated, handleSignOut }) => {
  const username = localStorage.getItem('username');

  return (
    <header>
      <nav>
        <ul>
          {isAuthenticated && (
            <>
              <li>Welcome, {username}</li>
              <li>
                <button className="sign-out-button" onClick={handleSignOut}>
                  Sign Out
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;