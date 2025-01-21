import React from 'react'
import './About.css'
import grad from "../../assets/grad.jpg"
import play from "../../assets/play-icon.png"
const About = () => {
    return (
        <div className='about container'>
            <div className='aboutLeft'>
                <img src={grad} alt=""  className='aboutImg'/>
                <img src={play} alt=""  className='playBtn'/>
            </div>
            <div className='aboutRight'>
    <h2>“Education is one thing no one can take away from you.” —Elin Nordegren</h2>
    <p>
        Elin Nordegren's quote, "Education is one thing no one can take away from you," reflects the essential service we provide as educators.
        <br /><br />
        We empower students with knowledge and skills that foster personal growth and resilience, equipping them to navigate life's challenges.
        <br /><br />
        Our role is to inspire a love for learning and critical thinking, ensuring that the education we offer becomes a lifelong asset that enriches their lives and communities.
    </p>
</div>

        </div>
    )
}
export default About