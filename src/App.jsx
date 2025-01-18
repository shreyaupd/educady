import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle='Our Programs' title='What We Offer'/>
      <Programs/>
    </div>
  )
}
export default App