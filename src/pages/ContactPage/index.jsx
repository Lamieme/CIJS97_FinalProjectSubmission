import React, { useState } from 'react'
import emailjs from 'emailjs-com' // Make sure you have this package installed

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const validateForm = () => {
    let valid = true
    const newErrors = {}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[0-9]{10}$/

    if (!formValues.name.trim()) {
      newErrors.name = 'Please enter your name.'
      valid = false
    }
    if (!emailRegex.test(formValues.email) || !formValues.email.endsWith('@gmail.com')) {
      newErrors.email = 'Please enter a valid Gmail address.'
      valid = false
    }
    if (!phoneRegex.test(formValues.phone)) {
      newErrors.phone = 'Please enter a valid phone number with exactly 10 digits.'
      valid = false
    }
    if (formValues.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    emailjs.sendForm('service_tuantruong', 'template_tuantruong', e.target, 'Caejj16d4y9rU4Hv9')
      .then((response) => {
        alert('Message sent successfully!')
        setFormValues({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        setErrors({})
      }, (error) => {
        alert('Failed to send message, please try again.')
      })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Your Name *"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Your Email *"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="text"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          placeholder="Your Phone *"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <textarea
        name="message"
        value={formValues.message}
        onChange={handleChange}
        placeholder="Your Message"
      />
      {errors.message && <p className="error">{errors.message}</p>}
      <button type="submit">Send Message</button>
    </form>
  )
}

function Index() {
  return (
    <>
      <link rel="stylesheet" href="src/assets/styles/ContactPageStyles.css" />
      <main>
        <section className="contact-section">
          <div className="breadcrumb">
            <a href="#">Home</a> / <span>Contact</span>
          </div>
          <div className="contact-container">
            <div className="contact-left">
              <div className="contact-box">
                <img src="src/pages/ContactPage/call-icon.png" alt="Call Icon" className="icon" />
                <div className="contact-box-content">
                  <h3>Call To Us</h3>
                  <p>We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801683723272</p>
                </div>
              </div>
              <div className="contact-box">
                <img src="src/pages/ContactPage/email-icon.png" alt="Email Icon" className="icon" />
                <div className="contact-box-content">
                  <h3>Write To Us</h3>
                  <p>Fill out our form and we will contact you within 24 hours.</p>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default Index
