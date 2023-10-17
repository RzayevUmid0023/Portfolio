import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import Aboutme from '../Aboutme/Aboutme'

import '../../App.css'
import {  HiMenu } from "react-icons/hi";
import {  AiOutlineClose } from "react-icons/ai";



function Navbar() {

  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <>
      <div className='Navbar_main_section'>

          <div className='Navbar_under_section  '>
            <div className='logo'>
              <h4>Umid.dev</h4>
            </div>

            <div>
                <ul className='links'>

                  <li><a >Home</a></li>
                  <li><a >About</a></li>
                  <li><a>Projects</a></li>
                  <li><a>Contact</a></li>
                </ul> 


                <button className='icons' onClick={()=> setMenuOpen(!menuOpen)}>
                  {menuOpen ? <AiOutlineClose /> : <HiMenu/>}

                  </button>
            </div>
          </div>

      </div>
          <div className={menuOpen ?'mob_hidden' : 'des_hidden'} onClick={()=>setMenuOpen(false)}>
            <ul >
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul> 
          </div>
      </>
  )
}

export default Navbar;