import React, { useState } from 'react'
import './Education.css'
import { Link } from 'react-scroll'
const Education = () => {
  const[card,setCard]=useState(false)
  const[heading,setHeading]=useState("")
  const[board,setBoard]=useState("");
  const[loc,setLoc]=useState("")
  const[boinf,setBoinf]=useState("");
  const[inst,setInst]=useState("")
  const[col,setCol]=useState("")
  const[year,setYear]=useState("")
  const[logo,setLogo]=useState("")
  const[lin,setLin]=useState("")
  return (
    <div id='edu-back' className={col} >
      <h1 id='qual-head'>Qualification</h1>
      <div id='bel-line'></div>
      <div className='box'>
        <div id='fir-drop' style={{ marginTop: "5%" }} onClick={() => {
         setCard(!card)
         setHeading("HIGH SCHOOL")
         setInst("Ramakrishna Senior Secondary School")
         setCol("color-back")
         setLoc("New Delhi")
         setLogo("rkslogo.gif")
         setBoard("Board :")
         setBoinf("Central Board Of Secondary Education")
         setYear("2018 - 2019")
         setLin('https://www.rks.net.in/')
        }}>
          HIGH SCHOOL
        </div>
        {/* {vis1 && <div id='drop-down' > hii</div>} */}
        <div id='fir-drop' onClick={() => {
          setCard(!card)
          setLogo("SGTBIMIT2.png")
          setHeading("GRADUATION")
          setCol("color-back")
          setInst("Sri Guru Tegh Bahadur Institute Of Management and Information Technology")
          setBoard("University :")
          setLoc("New Delhi")
          setBoinf("Guru Gobind Singh Indraprastha University")
          setYear("2019 - 2022")
          setLin('https://www.sgtbimit.com/')
        }}>
          GRADUATION
        </div>
      
        <div id='fir-drop' onClick={() => {
          setLogo("allsoft2.png")
           setCard(!card)
           setHeading("SUMMER INTERNSHIP")
           setCol("color-back")
           setInst("All Soft Solutions")
           setBoard("")
           setLoc("Remote")
           setBoinf("")
           setYear("June 2021 - July 2021")
           setLin('https://www.allsoftsolutions.in/IBM/Main')
        }}>
          SUMMER INTERNSHIP
        </div>
      
        <div id='fir-drop' onClick={() => {
          setLogo("vit.png")
          setCard(!card)
          setHeading("POST GRADUATION")
          setCol("color-back")
          setInst("VIT-Bhopal")
          setBoard("University :")
          setLoc("Bhopal")
          setBoinf("Vellore Institute of Technology")
          setYear("2022 - 2024")
          setLin('https://vitbhopal.ac.in/')
        }}>
          POST GRADUATION
        </div>
       
        {/* <div id='drop-down' > hii</div> */}
      </div>
     {card && <div className='overlay' onClick={()=>{
      setCard(!card) ;setCol("")
       }}>
      <h1 id='blr-card-head'>{heading}</h1>
      <div id='bel-line2'></div>
      <img src={logo} id='logo-card'></img>
      <div id='info'>
      <div id='ins-div'><h4 id='ins-name'>Institute Name : </h4><h4 id='ins-dis'> {inst}</h4></div>
      <div id='ins-div'><h4 id='ins-name'>Location :</h4><h4 id='ins-dis'>{loc}</h4></div>
      <div id='ins-div'><h4 id='ins-name'>{board} </h4><h4 id='ins-dis'>{boinf}</h4></div>
      <div id='ins-div'><h4 id='ins-name'>Batch :</h4><h4 id='ins-dis'>{year}</h4></div>
      <div id='ins-div'><a id='know-more' href={lin}>Know more..</a></div>
      </div>
      </div>}
    </div>
  )
}

export default Education