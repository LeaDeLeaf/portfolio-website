import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Lea Gabay</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <p className="hero-description">
            I build innovative web applications and love turning complex problems into simple, beautiful solutions.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS, Responsive Design</p>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express, REST APIs, Database Design</p>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Vite, npm</p>
          </div>
          <div className="skill-card">
            <h3>Other</h3>
            <p>Problem Solving, Team Collaboration, Agile</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to work together?</h2>
        <p>Let's create something amazing!</p>
        <Link to="/contact" className="btn btn-primary">Contact Me</Link>
      </section>
    </div>
  )
}

export default Home
