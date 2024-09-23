import React from 'react';
import './Projects.css'; // Import the CSS file for styling

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h2>Project 1: Awesome Web App</h2>
          <p>
            An interactive web application built with React and Node.js that allows users to [Brief Description of the Project].
          </p>
          <p><strong>Technologies Used:</strong> React, Node.js, MongoDB, Express</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <a href="https://yourproject1demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h2>Project 2: Data Visualization Dashboard</h2>
          <p>
            A data visualization dashboard that provides insights into [Description of Data or Use Case].
          </p>
          <p><strong>Technologies Used:</strong> D3.js, Chart.js, Python, Flask</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <a href="https://yourproject2demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h2>Project 3: Mobile App</h2>
          <p>
            A cross-platform mobile app that [Brief Description of the Project].
          </p>
          <p><strong>Technologies Used:</strong> React Native, Firebase, RESTful APIs</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <a href="https://yourproject3demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Add more project cards here as needed */}
      </div>
    </div>
  );
}

export default Projects;
