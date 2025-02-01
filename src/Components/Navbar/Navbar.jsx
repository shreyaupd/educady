import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Button from '../Button/Button';
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
           <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
           <li><Link to='program' smooth={true} offset={-185} duration={500}>Program</Link></li>
           <li><Link to='about' smooth={true} offset={-185} duration={500}>About us</Link></li>
           <li><Link to='campus' smooth={true} offset={-210} duration={500}>Campus</Link></li>
           <li><Link to='Testimonial' smooth={true} offset={-220} duration={500}>Testimonial</Link></li>
           <li><Link className='buttons' to='Contact' smooth={true} offset={-190} duration={500}>Our Contacts</Link></li>
         </ul>
       </nav>
     );
};

export default Navbar;