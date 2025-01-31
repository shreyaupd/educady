import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
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
      <Title subTitle="Contact Us" title="Get in Touch"/>
      <div className="container">
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}
export default App