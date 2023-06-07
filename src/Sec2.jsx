import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-scroll'
import './Sec.css'

const Sec2 = () => {
  function education() {
    console.log("hello")
    
  }
 
  return (
    <div id='backgro'>
      <div id="carouselExampleControlsNoTouching" class="carousel slide tran-card" data-bs-touch="false">
      <div >
        <div class="carousel-inner" >
          <div class="carousel-item active">
            {/* <img src="..." class="d-block w-100" alt="..." /> */}
            <div id='tran-card'>
                  <div id='card-head'>QUALIFICATION</div>
                  <div id='cap'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h2 id='edu-text'>Currently pursuing Master of computer applications from <br></br> VIT-bhopal </h2>
                  <Link to='edu-back'><button  style={{marginTop:"2%"}} onMouseDown={education} class="custom-btn btn-6"><span>Know More...</span></button></Link>
                </div>
          </div>
          <div class="carousel-item">
            {/* <img src="..." class="d-block w-100" alt="..." /> */}
            <div id='tran-card'>
                  <div id='card-head'>PROJECT</div>
                  <div id='cap'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                <Link to='pro-back'><button style={{marginTop:"14%",width:"400px"}} onMouseDown={education} class="custom-btn btn-6"><span>Know More...</span></button></Link>  
                </div>
          </div>
          <div class="carousel-item">
            {/* <img src="..." class="d-block w-100" alt="..." /> */}
            <div id='tran-card'>
                  <div id='card-head'>SKILLS</div>
                  <div id='cap'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div> 
                  <div id='font-ico'>          
                  <FontAwesomeIcon icon={faJava}  size='5x' style={{color: "#f0f2f4",}}  />
                  <FontAwesomeIcon icon={faReact}  size='5x' style={{color: "#f0f2f4",}} />
                  <FontAwesomeIcon icon={faPhp} size='5x' style={{color: "#f0f2f4",}} />
                  <FontAwesomeIcon icon={faPython}  size='5x' style={{color: "#f0f2f4",}}/>
               
                  </div>  
                  <button style={{marginTop:"6%"}} onMouseDown={education} class="custom-btn btn-6"><span>Know More...</span></button>  
                </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    </div>
  )
}



export default Sec2

