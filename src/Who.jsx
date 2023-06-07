import React from 'react'
import './Who.css'
const Who = () => {
  return (
    <div className='who-back'>
      <div className='text-div' >
        <img className='selfImg' src='withoutback.png' alt='imgself'></img>
        <div class="container">
          <h2 class="title">
            <span class="title-word title-word-1">Hi! </span>
            <span class="title-word title-word-2">I </span>
            <span class="title-word title-word-3">am </span>
            <span class="title-word title-word-4">Anmol Porwal</span>
          </h2>
        </div>
        <div className='title-bel'>
          Programer  &  Developer
        </div>
        <a  href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=anmolg99118685@gmail.com&tf=1'><div id='email'>click to mail me</div></a>
      </div>
      <div className='img-div'>
        <img className='img1' src='sideImg6.png' alt='img1'></img>
        <div id='scroll-div'>
          <div id='scroll'> Scroll down</div>
          <a href="#">
            <div id="mouse-scroll">
              <div class="mouse">
                <div class="mouse-in"></div>
              </div>
              <div>
                <span class="down-arrow-1"></span>
                <span class="down-arrow-2"></span>
                <span class="down-arrow-3"></span>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Who