import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle='Our Programs' title='What We Offer'/>
      <Programs/>
      <Title subTitle='About University'/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testomonials' title='What Students Say'/>
      <div className="container">
           <Testimonial/>
      </div>
    </div>
  )
}
export default App