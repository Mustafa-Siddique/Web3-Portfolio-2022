import React from 'react'
import logo from '../images/logo.png'
import {FaLinkedin, FaTwitter, FaTelegramPlane, FaGithub, FaStackOverflow} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='container-fluid footer-main'>
        <img src={logo} alt="" id='fLogo'/>
        <ul className="footer-social">
            <li><a href="#" target="_blank"><FaLinkedin size={22}/> LINKEDIN</a></li>
            <li><a href="#" target="_blank"><FaTwitter size={22}/> TWITTER</a></li>
            <li><a href="#" target="_blank"><FaTelegramPlane size={22}/> TELEGRAM</a></li>
            <li><a href="#" target="_blank"><FaGithub size={22}/> GITHUB</a></li>
            <li id='lastSocial'><a href="#" target="_blank"><FaStackOverflow size={22}/> STACKOVERFLOW</a></li>
        </ul>
        <div className="copyright">
        <p>&copy; Copyright 2021 Mustafa Siddique</p>
        </div>
    </div>
  )
}
