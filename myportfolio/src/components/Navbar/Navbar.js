import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'; 
import '../Navbar/Navbar.css'
 
import '../../App.css'
import {  HiMenu } from "react-icons/hi";
import {  AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {

  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <>
      <div className='Navbar_main_section ' >

          <div className='Navbar_under_section  '>
            <div className='logo'>
              <h4>Umid.dev</h4>
            </div>

            <div>
                <ul className='links'>
                   <li><Link to="#home" smooth={true} duration={500}>Home</Link></li>
                  <li><Link to="#aboutme" smooth={true} duration={500}>About me</Link></li>
                  <li><Link to="#portfolio" smooth={true} duration={500}>Projects</Link></li>
                  <li><Link to="#contact" smooth={true} duration={500}>Contact</Link></li> 
                </ul> 


                <button className='icons' onClick={()=> setMenuOpen(!menuOpen)}>
                  {menuOpen ? <AiOutlineClose /> : <HiMenu/>}

                  </button>
            </div>
          </div>

      </div>
          <div className={menuOpen ?'mob_hidden' : 'des_hidden'} onClick={()=>setMenuOpen(false)}>
            <ul >
                  <li><Link to="#home" smooth={true} duration={500}>Home</Link></li>
                  <li><Link to="#aboutme" smooth={true} duration={500}>About me</Link></li>
                  <li><Link to="#portfolio" smooth={true} duration={500}>Projects</Link></li>
                  <li><Link to="#contact" smooth={true} duration={500}>Contact</Link></li> 
            </ul> 
          </div>
      </>
  )
}

export default Navbar;
