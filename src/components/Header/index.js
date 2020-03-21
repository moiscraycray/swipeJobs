import React from 'react';
import './Header.scss';

const Header = ({ user }) => {
  return (
    <header>
      <div className="container header-container">
        <h1>swipejobs</h1>
        <p>{user.firstName} {user.lastName}</p>
      </div>
    </header>
  )
}

export default Header;
