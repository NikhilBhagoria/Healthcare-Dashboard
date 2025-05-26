import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-text">Health</span>
          <span className="logo-dot">care.</span>
        </div>
      </div>
      
      <div className="header-center">
        <div className="search-container">
          <div className="search-icon">🔍</div>
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <div className="notification-icon">🔔</div>
        <div className="user-profile">
          <img 
            src="https://via.placeholder.com/40x40/00BCD4/FFFFFF?text=U" 
            alt="User Avatar" 
            className="user-avatar"
          />
        </div>
        <button className="add-button">+</button>
      </div>
    </header>
  );
};

export default Header;