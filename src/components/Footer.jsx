import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://github.com/LeaDeLeaf" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/lea-gabay" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="quick-links">
              <a href="#top">Back to Top</a>
              <a href="/contact">Get in Touch</a>
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
