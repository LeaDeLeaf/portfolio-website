import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About Me</h1>
        <p className="intro">Get to know more about my journey and what drives me</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>My Story</h2>
          <p>
            I'm a passionate developer who loves creating meaningful digital experiences. 
            My journey in tech started with curiosity and has evolved into a dedicated career 
            focused on building innovative solutions.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating user-friendly applications 
            that solve real-world problems. Every project is an opportunity to learn and grow.
          </p>
        </div>

        <div className="about-card">
          <h2>What I Do</h2>
          <ul className="what-i-do-list">
            <li>
              <strong>Web Development:</strong> Building responsive, modern web applications using React, JavaScript, and modern frameworks
            </li>
            <li>
              <strong>Problem Solving:</strong> Tackling complex challenges with creative and efficient solutions
            </li>
            <li>
              <strong>Continuous Learning:</strong> Always exploring new technologies and best practices
            </li>
            <li>
              <strong>Collaboration:</strong> Working effectively in teams to deliver high-quality products
            </li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Beyond Code</h2>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or sharing knowledge with the developer community. I'm always 
            excited about new challenges and opportunities to grow.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
