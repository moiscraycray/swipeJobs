import React from 'react';
import './Header.scss';

const Header = ({ user, strings }) => {
  return (
    <header>
      <div className="container header-container">
        <h1>{strings.swipejobs}</h1>
        <p>{user.firstName} {user.lastName}</p>
      </div>
    </header>
  )
}

export default Header;
