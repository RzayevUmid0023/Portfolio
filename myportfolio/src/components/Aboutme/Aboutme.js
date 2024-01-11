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
                <p>As an experienced Front-End Developer, I am Umid Rzayev, residing in Azerbaijan. With a strong background in freelance projects and collaborative teamwork, I have honed my skills in HTML, CSS, JavaScript, React, and more. My expertise extends to crafting dynamic and responsive websites, ensuring a seamless user experience. I take pride in my ability to design and maintain interfaces that engage users, utilizing clean and optimized code, along with staying abreast of the latest development tools and techniques.</p>
            </div>
        </div> 

    </div> 



    </>
    )
}

export default Aboutme; 