import { useState } from 'react'
import './ContactPage.css'

const ContactPage = () => {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto URL with subject and body
    const mailtoUrl = `mailto:Jameswoodmanv@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    
    // Open email client
    window.open(mailtoUrl, '_blank')
    
    // Show success message
    setIsSubmitted(true)
    setSubject('')
    setMessage('')
    setIsSubmitting(false)
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-container">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you</p>
          
          {isSubmitted ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>Your email client should have opened with the message</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-input"
                  required
                  placeholder="Enter subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Please describe your query
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-textarea"
                  required
                  placeholder="Description"
                  rows={6}
                />
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'OPENING EMAIL...' : 'SUBMIT'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactPage 