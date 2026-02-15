import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Home.css'

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern portfolio with dark mode and responsive design.',
      technologies: ['React', 'Vite', 'CSS'],
      github: 'https://github.com/LeaDeLeaf/portfolio-website',
      demo: 'https://yourportfolio.com'
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'Full-stack web app solving real problems.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/LeaDeLeaf/project2',
      demo: 'https://project2demo.com'
    },
    {
      id: 3,
      title: 'Project Name 3',
      description: 'Clean JavaScript project with key features.',

      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/LeaDeLeaf/project3',
      demo: 'https://project3demo.com'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.')
      setLoading(false)
      return
    }

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Lea Gabay',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Lea Gabay</span>
            </h1>
            <p className="hero-subtitle">
              <i className="fas fa-code"></i> Full Stack Developer | 
              <i className="fas fa-lightbulb"></i> Problem Solver | 
              <i className="fas fa-laptop-code"></i> Tech Enthusiast
            </p>
            <p className="hero-description">
              I build innovative web applications and love turning complex problems into simple, beautiful solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary view-work-btn">
                <i className="fas fa-briefcase"></i> View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-envelope"></i> Get in Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-photo">
              <img src="/src/assets/profile.jpg" alt="Professional photo of Lea Gabay" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">
          <i className="fas fa-user"></i> About Me
        </h2>
        <p className="section-subtitle">Get to know more about my journey and what drives me</p>
        
        <div className="about-content">
          <div className="about-main">
            <p>
              I'm a <strong>passionate developer</strong> who loves creating <strong>meaningful digital experiences</strong>. 
              My focus is on building <strong>innovative solutions</strong> with modern technologies while 
              maintaining <strong>clean, maintainable code</strong> that scales.
            </p>
            <p>
              From frontend to backend, I enjoy the entire development process — <strong>solving complex problems</strong>, 
              optimizing performance, and delivering <strong>user-friendly applications</strong> that make a real impact.
            </p>
            <p>
              When I'm not coding, I'm <strong>exploring new technologies</strong>, contributing to <strong>open-source projects</strong>, 
              and sharing knowledge with the <strong>developer community</strong>.
            </p>
          </div>

          <div className="about-skills-overview">
            <h3>Core Strengths</h3>
            <div className="strengths-grid">
              <div className="strength-badge">
                <i className="fas fa-code"></i>
                <span>Web Development</span>
              </div>
              <div className="strength-badge">
                <i className="fas fa-puzzle-piece"></i>
                <span>Problem Solving</span>
              </div>
              <div className="strength-badge">
                <i className="fas fa-graduation-cap"></i>
                <span>Continuous Learning</span>
              </div>
              <div className="strength-badge">
                <i className="fas fa-users"></i>
                <span>Team Collaboration</span>
              </div>
              <div className="strength-badge">
                <i className="fas fa-rocket"></i>
                <span>Fast Execution</span>
              </div>
              <div className="strength-badge">
                <i className="fas fa-lightbulb"></i>
                <span>Creative Thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">
          <i className="fas fa-cogs"></i> Skills & Technologies
        </h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-laptop-code"></i></div>
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS, Responsive Design</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-server"></i></div>
            <h3>Backend</h3>
            <p>Node.js, Express, REST APIs, Database Design</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-tools"></i></div>
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Vite, npm</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-star"></i></div>
            <h3>Other</h3>
            <p>Problem Solving, Team Collaboration, Agile</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">
          <i className="fas fa-folder-open"></i> My Projects
        </h2>
        <p className="section-subtitle">Here are some of my recent works and personal projects</p>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">
                    <i className="fas fa-tag"></i> {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more? Check out my GitHub profile for all my repositories!</p>
          <a 
            href="https://github.com/LeaDeLeaf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <i className="fab fa-github"></i> Visit GitHub
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">
          <i className="fas fa-paper-plane"></i> Get In Touch
        </h2>
        <p className="section-subtitle">Have a question or want to work together? I'd love to hear from you!</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3><i className="fas fa-info-circle"></i> Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>lea101004@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Singapore</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-share-alt"></i>
              <div>
                <h4>Social</h4>
                <div className="social">
                  <a href="https://github.com/LeaDeLeaf" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://linkedin.com/in/lea-gabay" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"><i className="fas fa-user"></i> Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message"><i className="fas fa-comment-dots"></i> Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
            </button>
            
            {status === 'success' && (
              <p className="form-status success">
                <i className="fas fa-check-circle"></i> Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status error">
                <i className="fas fa-times-circle"></i> Oops! Something went wrong. Please try again or email me directly.
              </p>
            )}
            {status && status !== 'success' && status !== 'error' && (
              <p className="form-status">{status}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
