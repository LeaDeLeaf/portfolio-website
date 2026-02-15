import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3><i className="fas fa-link"></i> Connect</h3>
            <div className="social-links">
              <a href="https://github.com/LeaDeLeaf" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://linkedin.com/in/lea-gabay" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3><i className="fas fa-bars"></i> Quick Links</h3>
            <div className="quick-links">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                <i className="fas fa-arrow-up"></i> Back to Top
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                <i className="fas fa-envelope"></i> Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lea Gabay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
