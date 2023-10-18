import React, { useEffect } from 'react'
 import './Contact.css'
import '../../App.css'
import {  TbMap2 } from "react-icons/tb";
import {  FiMail } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
  return (
    <>

    <div className='Conta_main' data-aos="fade-up" id='contact'>
        <div className='Contact_main section-margin'>
            <h5>CONTACT</h5>
            <h3>Don't be shy! Hit me up! 👇</h3>

            <div className='Contact_logo'>
                <div className='Contact_logo_item'>
                    <div className='Logo'><TbMap2 /></div>
                    <div className='Text'>
                        <h2>Location</h2>
                        <p>Azerbaijan, Baku</p>
                        
                        </div>
                </div>

                <div className='Contact_logo_item'>
                    <div className='Logo'><FiMail /></div>
                    <div className='Text'>
                        <h2>Mail</h2>
                        <p>rzayevumud80@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>

    </div>

    </>
  )
}

export default Contact