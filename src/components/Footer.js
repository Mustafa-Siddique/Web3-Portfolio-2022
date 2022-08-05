import React from 'react'
import logo from '../images/logo.png'
import {FaLinkedin, FaTwitter, FaTelegramPlane, FaGithub, FaStackOverflow} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='container-fluid footer-main'>
        <img src={logo} alt="" id='fLogo'/>
        <ul className="footer-social">
            <li><a href="#" target="_blank"><FaLinkedin size={22}/> <span className='d-none d-lg-inline'>LINKEDIN</span></a></li>
            <li><a href="#" target="_blank"><FaTwitter size={22}/> <span className='d-none d-lg-inline'>TWITTER</span></a></li>
            <li><a href="#" target="_blank"><FaTelegramPlane size={22}/> <span className='d-none d-lg-inline'>TELEGRAM</span></a></li>
            <li><a href="#" target="_blank"><FaGithub size={22}/> <span className='d-none d-lg-inline'>GITHUB</span></a></li>
            <li id='lastSocial'><a href="#" target="_blank"><FaStackOverflow size={22}/> <span className='d-none d-lg-inline'>STACKOVERFLOW</span></a></li>
        </ul>
        <div className="copyright">
        <p>&copy; Copyright 2021 Mustafa Siddique</p>
        </div>
    </div>
  )
}
