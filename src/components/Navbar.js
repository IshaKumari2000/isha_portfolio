import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px', 
      backgroundColor: '#333', 
      color: '#fff' 
    }}>
      <div style={{ fontStyle: 'italic', fontSize: '24px', fontWeight: 'bold', color: '#f0db4f' }}>
        Isha Kumari
      </div>
      <div>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">my skills</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
