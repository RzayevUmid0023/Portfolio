import React, { useEffect } from 'react'
import './Aboutme.css'
import '../../App.css'
import image1 from '../../Photo/Aboutme1.webp'
import image2 from '../../Photo/Aboutme2.png'
import Aboutsvg from '../../Photo/Aboutme.svg'

import Aos from 'aos'
import 'aos/dist/aos.css'
function Aboutme() {

    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
  return (
    <>

    <div className='About_main ' data-aos="fade-up" id='aboutme'>
        <div className='Aboutme_main section-margin' >

            <div className='About_me_picture'>
                <div className='first_picture'>
                    <img src={image1} className='comp'/>

                    <div className='secon_picture'>
                        <img src={Aboutsvg} className='About_svg'/>
                        <img src={image2} className='About_png'/>

                    </div>
                </div>
                

            </div>
            <div className='About_me_text'>
                <h5>About me</h5>
                <h4>A dedicated Front-end Developer based in Azerbaijan 📍</h4>
                <p>As an adept Front-End Developer based in Azerbaijan, I'm Umid Rzayev. With a robust history in freelancing and collaborative teamwork, I've refined my skills in HTML, CSS, JavaScript, React, and more. Specializing in crafting dynamic, responsive websites for a seamless user experience, I take pride in designing engaging interfaces. My approach involves using clean, optimized code while staying updated on the latest development tools and techniques.</p>
            </div>
        </div> 

    </div> 



    </>
    )
}

export default Aboutme; 