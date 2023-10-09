import React, { useEffect } from 'react'
import './Portfolio.css'
import '../../App.css'
import photo1 from '../../Photo/portfolio1.webp'
import photo2 from '../../Photo/Portfolio2.webp'

import {  FiGithub } from "react-icons/fi";
import {  BsBoxArrowUpRight } from "react-icons/bs";

import Aos from 'aos';
import 'aos/dist/aos.css'


function Portfolio() {

    useEffect(()=>{
        Aos.init( {duration: 2000});
    }, []
    )
  return (
    <>
    <div className='Portfo_main'>
        <div className='Portfolio_main section-margin '>
            <h5>PORTFOLIO</h5>
            <h3>Each project is a unique piece of development 🧩 </h3>

            <div className='Portfolio_case_right' data-aos="fade-right">
                <div className='Photo'><img src={photo1} /></div>
                <div className='Text_right'>
                    <div className='Head'><h2>CAR RENTAL 🚗</h2></div>
                    <div className='Text'><p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p></div>
                    <div className='Box'>
                        <div className='box_item'>React</div>
                        <div className='box_item'>SCSS</div>

                    </div>
                    <div className='Link'>
                        <a> Code  <span><FiGithub /></span></a>
                        <a href=' '> Live Demo  <span><BsBoxArrowUpRight /></span></a>


                    </div>
                </div>
            </div>



            <div className='Portfolio_case_right' data-aos="fade-left">
              
                <div className='Text_right'>
                    <div className='Head'><h2>GYMATE 🏋️ </h2></div>
                    <div className='Text'><p>A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.</p></div>
                    <div className='Box'>
                        <div className='box_item'>React</div>
                        <div className='box_item'>Css</div>

                    </div>
                    <div className='Link'>
                        <a> Code  <span><FiGithub /></span></a>
                        <a> Live Demo  <span><BsBoxArrowUpRight /></span></a>


                    </div>
                </div>
                <div className='Photo'><img src={photo2} /></div>
            </div>

        </div>
    </div>

    </>
  )
}

export default Portfolio;