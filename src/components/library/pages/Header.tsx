import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src='src/assets/logo.png' alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/characters">Characters</a>
          </li>
          <li className="nav-item">
            <a href="/locations">Locations</a>
          </li>
          <li className="nav-item">
            <a href="/episodes">Episodes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;