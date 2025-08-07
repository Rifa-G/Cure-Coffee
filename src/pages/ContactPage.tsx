import { useForm, ValidationError } from '@formspree/react'
import './ContactPage.css'

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xjkopvor")

  if (state.succeeded) {
    return (
      <div className="contact-page">
        <div className="contact-content">
          <div className="contact-container">
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you as soon as possible</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-container">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
                placeholder="Enter your email"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                required
                placeholder="Enter subject"
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Please describe your query
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                required
                placeholder="Description"
                rows={6}
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="error-message"
              />
            </div>

            <button type="submit" className="submit-button" disabled={state.submitting}>
              {state.submitting ? 'SENDING...' : 'SUBMIT'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 