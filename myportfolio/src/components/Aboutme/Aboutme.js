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
                <h4>A dedicated Front-end Developer
                    based in Belgrade, Serbia 📍</h4>
                <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. 

</p>
            </div>
        </div> 

    </div> 



    </>
    )
}

export default Aboutme; 