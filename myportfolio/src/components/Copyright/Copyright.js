import React from 'react'
import './Copyright.css'
import '../../App.css'
import {  LuLinkedin } from "react-icons/lu";
 import {  FiGithub } from "react-icons/fi";

function Copyright() {
  return (
    <div className='Copy_main'>
            <div className='Copyright_main section-margin'>
                <div className='Text'>
                    Copyright © 2023. All rights are reserved
                    </div>
                <div className='Link'>
                    <a><LuLinkedin /></a>
                    <a><FiGithub /></a>
                </div>

        </div>
    </div>
  )
}

export default Copyright