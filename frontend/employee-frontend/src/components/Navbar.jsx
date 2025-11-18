import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <h1 className="brand">Employee Manager</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Employees</Link>
          <Link to="/add" className="nav-link">Add</Link>
        </nav>
      </div>
    </header>
  );
}
