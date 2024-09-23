import React, { useState } from 'react';
import './About.css'; // Import the CSS file for styling
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

function About() {
  // State to track the clicked cards
  const [clickedCards, setClickedCards] = useState([false, false, false, false, false]);

  // Toggle card color when clicked
  const handleCardClick = (index) => {
    const updatedClickedCards = [...clickedCards];
    updatedClickedCards[index] = !updatedClickedCards[index];
    setClickedCards(updatedClickedCards);
  };

  return (
    <div className="about-container">
      <div className="skills-section">
        <h3 className="skills-title">My Skills</h3>
        <div className="skills-card-container">
          <div 
            className={`skill-card ${clickedCards[0] ? 'clicked' : ''}`}
            onClick={() => handleCardClick(0)}
          >
            <FaHtml5 className="skill-icon" />
            <h4>HTML5</h4>
            <p>Mastery in semantic HTML and accessibility standards.</p>
          </div>
          <div 
            className={`skill-card ${clickedCards[1] ? 'clicked' : ''}`}
            onClick={() => handleCardClick(1)}
          >
            <FaCss3Alt className="skill-icon" />
            <h4>CSS3</h4>
            <p>Proficient in Flexbox, Grid, and responsive design.</p>
          </div>
          <div 
            className={`skill-card ${clickedCards[2] ? 'clicked' : ''}`}
            onClick={() => handleCardClick(2)}
          >
            <FaJs className="skill-icon" />
            <h4>JavaScript</h4>
            <p>Strong in ES6+ syntax, DOM manipulation, and event handling.</p>
          </div>
          <div 
            className={`skill-card ${clickedCards[3] ? 'clicked' : ''}`}
            onClick={() => handleCardClick(3)}
          >
            <FaReact className="skill-icon" />
            <h4>React</h4>
            <p>Experienced in building dynamic, single-page applications.</p>
          </div>
          <div 
            className={`skill-card ${clickedCards[4] ? 'clicked' : ''}`}
            onClick={() => handleCardClick(4)}
          >
            <FaNodeJs className="skill-icon" />
            <h4>Node.js</h4>
            <p>Comfortable with backend development using Node.js and Express.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
