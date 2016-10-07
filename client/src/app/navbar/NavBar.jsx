import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
  return (
    <header>
      <h1>TinyChat</h1>
      <nav>
        <ul>
          <li><Link to="/">Chats</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
          // <li><Link to="/login">Login</Link></li>
          // <li><Link to="/signUp">Sign Up</Link></li>