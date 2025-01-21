import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle='Our Programs' title='What We Offer'/>
      <Programs/>
      <Title subTitle='About University'/>
      <About/>
    </div>
  )
}
export default App