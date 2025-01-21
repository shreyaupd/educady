import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.png';

const Navbar = () => {

   const [sticky,setSticky]=React.useState(false);
   React.useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50? setSticky(true):setSticky(false)
    },[])
   })

  return (
    <nav className={`container ${sticky?'darkNav':''}`}>
      <img src={logo} alt="Logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li><button className="btn">Contact Us</button></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
