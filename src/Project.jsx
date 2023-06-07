import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div id='pro-back'>
      <h1 id='pro-head'>My Work !</h1>
      <div id='bel-line'></div>
      <h1 id='div2-head'>BroStay</h1>
      <div id='bro-line'></div>
      <div id='divide'>
        <div id='div1'>
          <video controls autoPlay loop src='brostay.mp4' id='bro-vid'></video>
        </div>
        <div id='div2'>
          <div id='div2-inf'>
            <h4 id='word-wrap'>This is MERN application It's a clone of airbnb  Where <br /> host is hosting its place on application and <br /> guest book this places .</h4>
            <a href='https://github.com/Techanmolporwal/brostay.git'> <img src='Github.png' id='git-logo'></img> </a>
            <a href='https://poetic-kheer-5db13b.netlify.app'><img src='broLogo.png' id='bro-logo'></img></a>
          </div>
        </div>
      </div>
      <h1 id='div2-head'>Multiroom</h1>
      <div id='bro-line'></div>
      <div id='divide'>
        <div id='div1'>
          <video controls autoPlay loop src='multiroom.mp4' id='bro-vid'></video>
        </div>
        <div id='div2'>
          <div id='div2-inf'>
            <h4 id='word-wrap'>This is full stack vanilla js application It's <br /> a clone of social media/room chating app  Where <br /> user can scroll upcoming events related to games <br /> and create and join room and chat on it .</h4>
            <a href='https://github.com/Techanmolporwal/multiroom.git'> <img src='Github.png' id='git-logo' alt='github'></img> </a>
            <a href='https://poetic-kheer-5db13b.netlify.app'><img src='whitepng1.png' id='white-logo' alt='app'></img></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project