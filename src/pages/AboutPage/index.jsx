import React from 'react'

function AboutPage() {
  return (
    <>
      <link rel="stylesheet" href="src\assets\styles\AboutPageStyles.css" />
      {/* <header>
        <div className="top-bar">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="#">ShopNow</a>
          </p>
          <div className="language-select">
            <span>English</span>
            <img src="vector.png" alt="dropdown icon" />
          </div>
        </div>
        <div className="header-content">
          <h1>Exclusive</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </nav>
          <div className="header-icons">
            <div className="search-bar">
              <input type="text" placeholder="What are you looking for?" />
              <img src="search-icon.png" alt="Search" />
            </div>
            <a href="#">
              <img src="heart-icon.png" alt="Wishlist" />
            </a>
            <a href="#">
              <img src="cart-icon.png" alt="Cart" />
            </a>
            <a href="#">
              <img src="user-icon.png" alt="User" />
            </a>
          </div>
        </div>
      </header> */}

      <div className="container">
        <nav className="breadcrumb">
          <a href="#">Home</a> /<span>About</span>
        </nav>
        <section className="our-story">
          <div className="content">
            <h1>Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by wide
              range of tailored marketing, data and service solutions, Exclusive has
              10,500 sallers and 300 brands and serves 3 millioons customers across
              the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very
              fast. Exclusive offers a diverse assotment in categories ranging from
              consumer.
            </p>
          </div>
          <div className="image">
            <img src="src\pages\AboutPage\path-to-image.png" alt="Our Story Image" />
          </div>
        </section>
        <section className="statistics">
          <div className="stat-item">
            <img src="src\pages\AboutPage\10.5k.png" alt="Sellers Image" /> {/* Hình ảnh cho 10.5k */}
          </div>
          <div className="stat-item active">
            <img src="src\pages\AboutPage\33k.png" alt="Monthly Product Sale Image" />
            {/* Hình ảnh cho 33k */}
          </div>
          <div className="stat-item">
            <img src="src\pages\AboutPage\45.5k.png" alt="Customer Image" /> {/* Hình ảnh cho 45.5k */}
          </div>
          <div className="stat-item">
            <img src="src\pages\AboutPage\25k.png" alt="Annual Gross Sale Image" />
            {/* Hình ảnh cho 25k */}
          </div>
        </section>
        <section className="team">
          <div className="team-member">
            <img src="src\pages\AboutPage\path-to-tom.png" alt="Tom Cruise" />
            <h4>Tom Cruise</h4>
            <p>Founder &amp; Chairman</p>
            <div className="social-links">
              <a href="https://x.com/X">
                <img src="src\pages\AboutPage\x-icon.png" alt="Instagram" />
              </a>
              <a href="https://www.instagram.com/">
                <img src="src\pages\AboutPage\insta-icon.png" alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com">
                <img src="src\pages\AboutPage\linkedin-icon.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="src\pages\AboutPage\path-to-emma.png" alt="Emma Watson" />
            <h4>Emma Watson</h4>
            <p>Managing Director</p>
            <div className="social-links">
              <a href="https://x.com/X">
                <img src="src\pages\AboutPage\x-icon.png" alt="X" />
              </a>
              <a href="https://www.instagram.com/">
                <img src="src\pages\AboutPage\insta-icon.png" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com">
                <img src="src\pages\AboutPage\linkedin-icon.png" alt="LinkedIn" />
              </a>
            </div>
            {/* <div className="dots">
              <span className="dot black-dot" /> 
              <span className="dot black-dot" /> 
              <span className="dot red-dot" /> 
              <span className="dot black-dot" /> 
              <span className="dot black-dot" />
            </div> */}
          </div>
          <div className="team-member">
            <img src="src\pages\AboutPage\path-to-will.png" alt="Will Smith" />
            <h4>Will Smith</h4>
            <p>Product Designer</p>
            <div className="social-links">
              <a href="https://x.com/X">
                <img src="src\pages\AboutPage\x-icon.png" alt="X" />
              </a>
              <a href="https://www.instagram.com/">
                <img src="src\pages\AboutPage\insta-icon.png" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com">
                <img src="src\pages\AboutPage\linkedin-icon.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </section>
        <div className="services-container">
          <div className="service">
            <img
              src="src\pages\AboutPage\Free and Fast.png"
              alt="Free and Fast Delivery"
              className="service-icon"
            />
            <h4>Free and Fast Delivery</h4>
            <p>Free delivery for all orders over $150</p>
          </div>
          <div className="service">
            <img
              src="src\pages\AboutPage\247Customer.png"
              alt="24/7 Customer Service"
              className="service-icon"
            />
            <h4>24/7 Customer Service</h4>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="service">
            <img
              src="src\pages\AboutPage\Money Back.png"
              alt="Money Back Guarantee"
              className="service-icon"
            />
            <h4>Money Back Guarantee</h4>
            <p>We return money within 30 days</p>
          </div>
        </div>
        {/* <footer>
          <div className="footer-content">
            <div className="footer-section subscribe">
              <h3>Exclusive</h3>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>
              <div className="email-input-wrapper">
                <input type="email" placeholder="Enter your email" />
                <img
                  src="path-to-arrow-icon.png"
                  alt="Arrow Icon"
                  className="arrow-icon"
                />
              </div>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>Email: exclusive@gmail.com</p>
              <p>Phone: +88015-88888-9999</p>
            </div>
            <div className="footer-section">
              <h3>Account</h3>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Login / Register</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick Link</h3>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Download App</h3>
              <p>Save $3 with App New User Only</p>
              <div className="app-links">
                <img src="path-to-qr-code.png" alt="QR Code" className="qr-code" />
                <a href="#">
                  <img src="path-to-google-play.png" alt="Google Play" />
                </a>
                <a href="#">
                  <img src="path-to-app-store.png" alt="App Store" />
                </a>
              </div>
              <div className="social-icons">
                <a href="#">
                  <img src="path-to-facebook-icon.png" alt="Facebook" />
                </a>
                <a href="#">
                  <img src="path-to-twitter-icon.png" alt="Twitter" />
                </a>
                <a href="#">
                  <img src="path-to-instagram-icon.png" alt="Instagram" />
                </a>
                <a href="#">
                  <img src="path-to-linkedin-icon.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© Copyright Rimel 2022. All rights reserved.</p>
          </div>
        </footer> */}
      </div>
    </>
  )
}

export default AboutPage
