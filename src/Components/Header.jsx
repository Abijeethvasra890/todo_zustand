import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <h1>To do List</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All Tasks</Link>
          </li>
          <li>
            <Link to="/completed">Completed Tasks</Link>
          </li>
          <li>
            <Link to="/pending">Pending Tasks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
