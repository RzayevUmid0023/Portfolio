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
                <p>As a skilled Front-End Developer in Azerbaijan, I'm Umid Rzayev. With a strong freelance and teamwork background, I've honed my expertise in HTML, CSS, JavaScript, React, and more. Specializing in dynamic, responsive website design, I take pride in creating engaging interfaces with clean, optimized code. I stay updated on the latest development tools and techniques to ensure top-notch results.</p>
            </div>
        </div> 

    </div> 



    </>
    )
}

export default Aboutme; 