import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <Logo />
        </div>
        <p>Expert in Web Application & Software Development</p>
      </div>
    </header>
  );
};

export default Header;
