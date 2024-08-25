import React from 'react'

function index() {
  return (
    <>
      <link rel="stylesheet" href="src\assets\styles\ContactPageStyles.css" />
      <main>
        <section className="contact-section">
          <div className="breadcrumb">
            <a href="#">Home</a> / <span>Contact</span>
          </div>
          <div className="contact-container">
            {/* Phần bên trái */}
            <div className="contact-left">
              <div className="contact-box">
                <img src="src\pages\ContactPage\call-icon.png" alt="Call Icon" className="icon" />
                <div className="contact-box-content">
                  <h3>Call To Us</h3>
                  <p>We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801683723272</p>
                </div>
              </div>
              <div className="contact-box">
                <img src="src\pages\ContactPage\email-icon.png" alt="Email Icon" className="icon" />
                <div className="contact-box-content">
                  <h3>Write To Us</h3>
                  <p>Fill out our form and we will contact you within 24 hours.</p>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
            {/* Phần bên phải */}
            <div className="contact-right">
              <form className="contact-form">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required=""
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required=""
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone *"
                    required=""
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required=""
                  defaultValue={""}
                />
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}

export default index
