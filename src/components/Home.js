import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import './Home.css'; // Import the CSS file for styling
import profilePhoto from '../assets/profile.jpg'; // Profile photo
import resume from '../assets/resume.pdf'; // Import the resume file

function Home() {
  return (
    <div className="home-container">
      <div className="hero-content">
        <div className='image'>
          <img
            src={profilePhoto}
            alt="Profile"
            className="profile-photo"
          />
        </div>
        <div>
          <h1 className="hero-title">Hello, I'm Isha Kumari</h1>
          <p className="hero-subtitle">A Passionate WEB DEVELOPER</p>

          {/* Buttons Container */}
          <div className="cta-buttons">
            {/* Link to Projects */}
            <Link to="/projects" className="cta-button">View My Projects</Link>

            {/* Link to Resume */}
            <a
              href={resume}
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
