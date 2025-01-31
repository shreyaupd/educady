import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Empowering education through innovation and commitment to excellence.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Admissions</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: contact@university.edu</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 77 Massachusetts Ave, Cambridge, MA</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Educady. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer