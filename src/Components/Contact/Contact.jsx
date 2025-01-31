import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhoneVolume,faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='Contact'>
        <div className="text-part">
            <h1>Send us a message <FontAwesomeIcon  icon={faEnvelope} size="l" style={{color: "#6292f4"}} />            </h1>

            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope} size='xl' style={{color: "#0a5085",}} /> Contact@GreatStack.dev</li>
                    <li><FontAwesomeIcon icon={faPhoneVolume} size='xl' style={{color: "#0a5085",}} />+1 123-456-7890</li>
                    <li><FontAwesomeIcon icon={faLocationDot} size='xl' style={{color: "#0a5085",}} />77 Massachusetts Ave, Cambridge
                    MA 02139, United States</li>
                </ul>
        </div>
        <form>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          required 
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required 
        />
      </div>
      
      <div>
        <label>Message:</label>
        <textarea 
          id="message" 
          name="message"
          required 
        />
      </div>
       <button type="submit">Send</button>
     </form>
     </div>

  )
}
export default Contact