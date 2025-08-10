import React, { useRef, useState } from 'react'
import  './landing.css'

import Descr from './compo_of_landingpage/Descr'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import TypingEffect from "./compo_of_landingpage/TypingEffect"




const Landing = () => {
    
  const tiltref=useRef(null)
   const [xvalue,setxvalue]=useState(0)
   const [yvalue,setyvalue]=useState(0)


   const mouseMoving=(e)=>{
 
    e.clientX-tiltref.current.getBoundingClientRect().x-tiltref.current.getBoundingClientRect().width/2
       
    setxvalue((e.clientX-tiltref.current.getBoundingClientRect().x-tiltref.current.getBoundingClientRect().width/2)/30)
    setyvalue(-(e.clientY-tiltref.current.getBoundingClientRect().y-tiltref.current.getBoundingClientRect().height/2)/20)
      
      tiltref.current.style.transform=`rotateX(${yvalue}deg) rotateY(${xvalue}deg)`
      
   }


   

   useGSAP(function(){
        gsap.to(tiltref.current,{
           transform:`rotateX(${yvalue}deg) rotateY(${xvalue}deg)`,
           duratino:4,
           ease:'elastic.out(1,0.3)'
        })
   },[xvalue,yvalue])

 
   useGSAP(()=>{
      gsap.from(".page1",{
           y:-1000,
           duration:12,
           delay:1,
           opacity:0,
           scale:0.3,
           ease:"elastic.out(1,0.33)"
      })
   })





 
  return (
    <div  className='h-screen  bg-black p p-4 md:p-6 '>
          <div  onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='page1 p-8 white-box shadow-lg   h-full w-full bg-gradient-to-r from-purple-300 via-purple-200 to-purple-200 rounded-[35px] flex flex-col justify-evenly items-center'>
                 

          <div  ref={tiltref} className='tiltext text-black   font-[f4] mt-32 '>
          <h1 className='text-3xl sm:text-5xl  md:text-6xl flex justify-center'> <h1> Hi,   <span role="img" aria-label="hand" className="hand-emoji "  ></span></h1></h1>
         <h1 className='text-3xl sm:text-5xl  md:text-6xl flex justify-center'> <h1> I AM <span className='font-[f4] text-4xl sm:text-6xl md:text-7xl ' > FARHAN </span></h1></h1>
          <h1  className='text-3xl sm:text-5xl  md:text-6xl flex justify-center'>
           
            
                <TypingEffect 
                texts={["A SOFTWARE TINKERER!", "A FRONT-END DEV!","A MERN DEVELOPER!"]}
                speed={100} 
                pauseDuration={1000} 
              />
         

            </h1>
         </div>



                  <Descr/>
          </div> 
    </div>
  )
}

export default Landing