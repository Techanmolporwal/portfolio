import React from 'react'
import './Who.css'
const Who = () => {
  return (
    <div className='who-back'>
      <div className='text-div' >
        <img className='selfImg' src='sideImg1.jpg' alt='imgself'></img>
        <div class="container">
          <h2 class="title">
            <span class="title-word title-word-1">Hi! </span>
            <span class="title-word title-word-2">I </span>
            <span class="title-word title-word-3">am </span>
            <span class="title-word title-word-4">Anmol Porwal</span>
          </h2>
        </div>
        <div className='title-bel'>Programer  &  Developer</div>
      </div>
      <div className='img-div'>
        <img className='img1' src='sideImg6.png' alt='img1'></img>
      </div>
    </div>
  )
}

export default Who