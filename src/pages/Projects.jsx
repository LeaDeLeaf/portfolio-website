import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite, showcasing my projects and skills.',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
      github: 'https://github.com/LeaDeLeaf/portfolio-website',
      demo: 'https://yourportfolio.com'
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'Brief description of your second project. Explain what problem it solves and what makes it unique.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/LeaDeLeaf/project2',
      demo: 'https://project2demo.com'
    },
    {
      id: 3,
      title: 'Project Name 3',
      description: 'Description of another project. Highlight the key features and technologies used.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/LeaDeLeaf/project3',
      demo: 'https://project3demo.com'
    }
  ]

  return (
    <div className="projects">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of my recent works and personal projects</p>
      </section>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Code
              </a>
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link demo"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      <section className="projects-cta">
        <p>Want to see more? Check out my GitHub profile for all my repositories!</p>
        <a 
          href="https://github.com/LeaDeLeaf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Visit GitHub
        </a>
      </section>
    </div>
  )
}

export default Projects
