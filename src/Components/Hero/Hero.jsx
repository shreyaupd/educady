import React from 'react'
import Button from '../Button/Button'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>Unlock Potential</h1>
        <p>The wise, hopeful and respectful cultivation of learning and change
           undertaken in the belief that we all should have the chance to share in life.</p>
           <Button className='btns' buttons='Explore More'/>

      </div>
    </div>
  )
}

export default Hero