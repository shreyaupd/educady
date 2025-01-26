import React from 'react'
import  './Testimonial.css'
import nexticon from '../../assets/nexticon.png'
import backicon from '../../assets/backicon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {
  return (
    <div className=' Testimonial '>
        <img src={nexticon} alt="" className='nextBtn'/>
        <img src={backicon} alt="" className='backBtn'/>
        <div className='slider'>
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>John Smith</h3>
                                <span>Educady, USA</span>
                            </div> 
                        </div>
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>John Smith</h3>
                                <span>Educady, USA</span>
                            </div> 
                        </div>
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>John Smith</h3>
                                <span>Educady, USA</span>
                            </div> 
                        </div>
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>John Smith</h3>
                                <span>Educady, USA</span>
                            </div> 
                        </div>
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial