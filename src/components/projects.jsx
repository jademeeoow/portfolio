import React, { useState, useEffect } from 'react';
import '../assets/styles/projects.css';

import barangayInfo from '../assets/images/bis.png';
import bidwave from '../assets/images/bidwave.png';
import rnr from '../assets/images/rnr.png';
import lineshub from '../assets/images/lineshub.png';
import wikangArabo from '../assets/images/arabo.png';
import meraki from '../assets/images/meraki1.png';

const projects = [
  {
    title: "Barangay Information System",
    image: barangayInfo,
  },
  {
    title: "Bidwave",
    image: bidwave,
  },
  {
    title: "Rnr",
    image: rnr,
  },
  {
    title: "Lineshub",
    image: lineshub,
  },
  {
    title: "Wikang Arabo",
    image: wikangArabo,
  },
  {
    title: "Meraki",
    image: meraki,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card" 
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
