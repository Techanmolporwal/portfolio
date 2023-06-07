import React from 'react'
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {faNodeJs } from '@fortawesome/free-brands-svg-icons'
import {faHtml5Logo } from '@fortawesome/free-brands-svg-icons'
const Project2 = () => {
    return (
        <div id='pro-back'>
            <h1 id='pro-head'>My Work !</h1>
            <div id='card'>
                <div id='div1'>
                    <video controls autoPlay loop src='brostay.mp4' id='bro-vid'></video>
                    <div id='para-head'>
                        <h2 id='bro-head'>BroStay</h2>
                        <div id='logo-div'>
                        <FontAwesomeIcon id='icon1' icon={faReact} />
                        <FontAwesomeIcon id='icon1' icon={faNodeJs} />
                       <img src='database.png'></img>
                        </div>
                        <div id='line2'></div>
                        <h4 id='bro-para'>" This is MERN application and It's a clone of airbnb  Where user has to register and login then there will be two kind of user first is  host  who host its place on application and second is  guest who  book this places and enjoy the hospitality of host and enjoy services in its stay and in return guest has to pay a particular fixed amout as per days stayed . "</h4>
                    </div>
                    <div id='folow'> 
                    <a href='https://github.com/Techanmolporwal/brostay.git'><button  id='but1' class="custom-btn btn-6"><span>Source</span></button></a>
                    <a href='https://poetic-kheer-5db13b.netlify.app'><button id='but1' class="custom-btn btn-6"><span>Demo</span></button></a>
                    </div>
                </div>
            </div>
            <div id='card'>
                <div id='div1'>
                    <video controls autoPlay loop src='multiroom.mp4' id='bro-vid'></video>
                    <div id='para-head'>
                        <h2 id='bro-head'>Multiroom</h2>
                        <div id='logo-div'>

                        <img src='html.png' id='icon1'></img>
                        <FontAwesomeIcon id='icon1' icon={faNodeJs} />
                       <img src='database.png'></img>
                        </div>
                        <div id='line2'></div>
                        <h4 id='bro-para'> " This is full stack vanilla javascript based application It's a  social media/room chating app  Where user first have to signup and login then  can scroll in  upcoming events related to games and like dislike that event and comment on it   and create a personal room after that send link to your friends and close ones then chat and listen on  it and also join existed room with link  and chat on it  . "</h4>
                    </div>
                    <div id='folow'> 
                    <a href='https://github.com/Techanmolporwal/multiroom.git'> <button  id='but1' class="custom-btn btn-6"><span>Source</span></button></a>
                    <button id='but1' class="custom-btn btn-6"><span>Demo</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project2