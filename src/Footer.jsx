import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faSpaceawesome} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <div id='foot-back'>
      <div id='all-icons'>
        <div id='circle'> <a href='https://instagram.com/anmol__100?igshid=MzNlNGNkZWQ4Mg=='><FontAwesomeIcon icon={faInstagram} size='2x' style={{ color: "#77C3EC", }} /></a></div>
        <a href='https://github.com/Techanmolporwal'><FontAwesomeIcon   icon={faGithub} size='3x' style={{ color: "#f0f2f4", }} /></a>
        <a href='https://instagram.com/anmol__100?igshid=MzNlNGNkZWQ4Mg=='> <FontAwesomeIcon icon={faFacebook} size='3x' style={{ color: "#f0f2f4", }} /></a>
        <div id='circle'><a href='https://www.linkedin.com/in/anmol-porwal-2354841b3'><FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ color: "#77C3EC", }} /></a></div>

      </div>
      <div id='line-one'>
        <div id='line-left'></div>
        <div id='cr-text'>Created with <svg id='heart' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
  By Anmol Porwal</div>
        <div id='line-right'></div>
      <Link to='who-back'> <img  id='rocket' src='rocket.png'></img></Link>
      </div>
      <p id='scroll-up'>Scroll Up</p>
    </div>
  )
}

export default Footer