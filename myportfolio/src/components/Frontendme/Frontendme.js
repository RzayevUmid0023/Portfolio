import React from 'react'
import '../Frontendme/Frontendme.css'
import '../../App.css'
import photo from '../../Photo/zyro-image.png'
import photo1 from '../../Photo/icons.svg'
import photo2 from '../../Photo/icons2.svg'
 


 import {  LuLinkedin } from "react-icons/lu";
 import {  FiGithub } from "react-icons/fi";



function Frontendme() {
  return (
    <>  
    <div className='main' id='home'>
        <div className='Frontendme_main section-margin'>
            <div className='First_section'>
                <div className='First_section_text'>
                    <h4>Front-End React Developer<span></span></h4>
                    <p>Hi, I'm Stefan Topalovic. A passionate Front-end React Developer based in Belgrade, Serbia. </p>
                    <ul>
                        <li><a><LuLinkedin /></a></li>
                        <li><a><FiGithub /></a></li>

                    </ul>
                </div>
                <div className='First_section_photo '>
                        <img src={photo} />
                </div>

            </div>
            <div className='Second_section'>
                <div className='Second_section_under' >
                    <pre>Tech Stack | </pre>
                    <div className='Second_section_images'>
                        <img src={photo1} />
                        <img src={photo2} />
                        

                    </div>
                </div>
            </div>

 
        </div>
    </div>
    
    </>
  )
}

export default Frontendme