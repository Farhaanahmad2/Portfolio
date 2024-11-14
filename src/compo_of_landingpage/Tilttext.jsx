import React from 'react'

import "./TypingEffect.css"
import TypingEffect from "./TypingEffect"

const Tilttext = () => {
  return (
    <div className='text-white   font-[f4] mt-32  bg-pink-800'>

     

     <h1 className='text-3xl sm:text-5xl  md:text-6xl flex justify-center '>
       <h1> I AM <span className='font-[f4] text-4xl sm:text-6xl md:text-7xl ' > FARHAN </span></h1>
       </h1>


     {/* <h1  className='text-3xl sm:text-5xl  md:text-6xl'>A SOFTWARE TINKERER </h1> */}
     <div className="flex flex-row justify-center text-center m-2" >
                <TypingEffect  className="font-bold"
                 texts={["Welcome to SenseAI!", "What can I help with?"]}
                 speed={100} 
                 pauseDuration={1000} 
               />
               </div>
    </div>
  )
}

export default Tilttext