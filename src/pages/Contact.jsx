import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

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

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.')
      setLoading(false)
      return
    }

    // Debug: Check if env variables are loaded
    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
    console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

    try {
      // Send email to yourself (notification)
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Lea Gabay', // Replace with your name
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // If main email sent successfully, show success
      if (result.text === 'OK') {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })

        // Try to send auto-reply (don't fail if this doesn't work)
        try {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
            {
              to_name: formData.name,
              to_email: formData.email,
              from_name: 'Lea Gabay', // Replace with your name
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
        } catch (autoReplyError) {
          // Auto-reply failed but main email worked, so still show success
          console.log('Auto-reply failed, but main email sent:', autoReplyError)
        }
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? I'd love to hear from you!</p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <h3>Email</h3>
            <p>your.email@example.com</p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>Your City, Country</p>
          </div>
          <div className="info-item">
            <h3>Social</h3>
            <div className="social">
              <a href="https://github.com/LeaDeLeaf" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/lea-gabay" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="message">Message</label>
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
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className="form-status success">
              ✓ Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status error">
              ✗ Oops! Something went wrong. Please try again or email me directly.
            </p>
          )}
          {status && status !== 'success' && status !== 'error' && (
            <p className="form-status">{status}</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
