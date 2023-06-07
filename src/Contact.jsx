import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <div id='con-back'>
            <div id='map-con'>
                <div id='map'>
                    <div>
                        <iframe width="500" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=28.646889877415838~77.09306001663208&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
                        </iframe>
                    </div>
                </div>
                <div id='buy-me'>
                    <img id='coffee' src='coffee2.png'></img>
                    <button style={{marginTop:"13%"}} class="custom-btn btn-6"><span>Buy Me Coffee<svg id='sv' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-2 h-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</span></button>
                </div>
                <div id='con'>
                    <h1 id='tou'>Get In Touch</h1>
                    <form>
                        <div class="group">
                            <input type="text" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Enter Full Name</label>
                        </div>

                        <div class="group">
                            <input type="text" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Enter Email xyz@gmail.com</label>
                        </div>

                        <div class="group">
                            <input type="text" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Enter Messege</label>
                        </div>
                        <button  class="custom-btn btn-6"><span>SUBMIT</span></button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact