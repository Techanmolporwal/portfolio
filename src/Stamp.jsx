import React from 'react'
import './stamp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faPaperplane } from '@fortawesome/free-brands-svg-icons'
const Stamp = () => {
  return (
    <div id='stamp-back'>
        <div id='stamp-icon'>
        <a href='https://www.linkedin.com/in/anmol-porwal-2354841b3'><FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ color: "white", }} /></a>
        <div id='lin'></div>
        <a href='https://codepen.io/anmolporwal'><FontAwesomeIcon icon={faCodepen} size='2x' style={{ color: "white", }}/></a>
        <div id='lin'></div>
        <a href='https://github.com/Techanmolporwal'><FontAwesomeIcon icon={faGithub} size='2x' style={{ color: "#f0f2f4", }} /></a>
        <div id='lin'></div>
        <a href='https://instagram.com/anmol__100?igshid=MzNlNGNkZWQ4Mg=='><FontAwesomeIcon icon={faInstagram} size='2x' style={{ color: "white", }} /></a>
        <div id='lin'></div>
       <a href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=anmolg99118685@gmail.com&tf=1'> <div id='gmail'>M</div></a>
        </div>
    </div>
  )
}

export default Stamp