import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

/*function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
      </ul>
    </nav>
  );
}
*/


function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">Logo</Link>
      <div className="nav__menu">
        <Link to="/" className="nav__link">Home</Link>
        <Link to="/about" className="nav__link">About</Link>
        <Link to="/characters" className="nav__link">Characters</Link>
      </div>
    </nav>
  );
}


export default Navigation;
