import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from "gsap"
import {ScrollTrigger} from 'gsap/all'
import "./quote2.css"
import PentagonBorderReveal from './Reactpentagon'
import DoubleSidedTriangle from './Doublesidedtri'

const Quote2 = () => {
gsap.registerPlugin(ScrollTrigger)


useGSAP(()=>{
            
     

        


   
      gsap.from(".bb3",{
       scale:0,
       delay:1,
       duration:4,
       // opacity:0,
       ease:'slow(0.7,0.7,true)',
       scrollTrigger:{
         trigger:".bb3",
         scroller:"body",
         // markers:true,
         start:"top 90%",
         end:"top 40%",
         scrub:true

       }
    })
      
    
    gsap.to(".tt1",{
     delay:1,
     duration:6,
     x:20,
     ease:'slow(0.7,0.7,true)',
     scrollTrigger:{
       trigger:".tt1",
       scroller:"body",
       // markers:true,
       start:"top 60%",
       end:"top 30%",
       scrub:true

     }
  })


  gsap.to(".tt2",{
   delay:1,
   duration:6,
   x:-20,
   ease:'slow(0.7,0.7,true)',
   scrollTrigger:{
     trigger:".tt2",
     scroller:"body",
     // markers:true,
     start:"top 60%",
     end:"top 30%",
     scrub:true

   }
})
    

     

   


})



  return ( 
    <div className="h-screen  bg-black flex flex-row justify-center items-center p-4 sm:p-28 md:p-32 lg:p-36 xl:p-44 ">
          
            <div className=' w-full h-full flex  flex-col justify-center items-center' >

           

                    
                    <DoubleSidedTriangle/>
                

                    <div className="absolute bb3 text-white mt-1 sm:mt-2 md:mt-4  mr-4 sm:mr-3 md:mr-2 lg:mr-0 w-[300px] sm:w-[365px] md:w-[400px] lg:w-[500px]  font-[f2] text-[20px] sm:text-[28px] md:text-[30px] lg:text-[36px]   flex flex-col "> 
               <div class="flex justify-center tt1 mt-4 " >  <h1 className='bg-black w-fit mt-3 rounded-xl' >`CODE IS POETRY`</h1> </div>
            
               </div>
               

            </div>

    </div>
  )
}

export default Quote2

