import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from "gsap"
import {ScrollTrigger} from 'gsap/all'

import PentagonBorderReveal from './Reactpentagon'

const Quote1 = () => {
gsap.registerPlugin(ScrollTrigger)


     useGSAP(()=>{
            
     

        //  gsap.to(".b1",{
        //     scale:0,
        //     delay:0,
        //     duration:4,
        //     x:-250,
        //     y:205,
        //     ease:'slow(0.7,0.7,true)',
        //     scrollTrigger:{
        //       trigger:".b1",
        //       scroller:"body",
        //       // markers:true,
        //       start:"top 35%",
        //       end:"top 0%",
        //       scrub:true

        //     }
        //  })

      //    gsap.to(".b2",{
      //     scale:0,
      //     delay:0,
      //     duration:3,
      //     x:245,
      //     y:190,
      //     ease:'slow(0.7,0.7,true)',
      //     scrollTrigger:{
      //       trigger:".b2",
      //       scroller:"body",
      //       // markers:true,
      //       start:"top 35%",
      //       end:"top 0%",
      //       scrub:true

      //     }
      //  })

    
       gsap.from(".b3",{
        scale:0,
        delay:1,
        duration:4,
        // opacity:0,
        ease:'slow(0.7,0.7,true)',
        scrollTrigger:{
          trigger:".b3",
          scroller:"body",
          // markers:true,
          start:"top 90%",
          end:"top 40%",
          scrub:true

        }
     })
       
     
     gsap.to(".t11",{
      delay:1,
      duration:6,
      x:20,
      ease:'slow(0.7,0.7,true)',
      scrollTrigger:{
        trigger:".t11",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true

      }
   })


   gsap.to(".t22",{
    delay:1,
    duration:6,
    x:-20,
    ease:'slow(0.7,0.7,true)',
    scrollTrigger:{
      trigger:".t22",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 30%",
      scrub:true

    }
 })
     

      

    


     })


  return ( 
    <div className="h-screen  bg-black flex flex-row justify-center items-center  p-4 sm:p-28 md:p-32 lg:p-36 xl:p-44">
          
            <div className=' w-full h-full flex  flex-col justify-center items-center' >

             
             
              <PentagonBorderReveal/>
               
               

               <div className="absolute b3 text-white ml-2 w-[300px] leading-snug sm:w-[365px] md:w-[400px] lg:w-[500px]  font-[f2] text-[20px] sm:text-[28px] md:text-[30px] lg:text-[36px]   flex flex-col "> 
               <div class="flex justify-start t11 " >  <h1 className='bg-black w-fit ' >"DO WHAT YOU LOVE</h1> </div>
                <div class="flex justify-end t22 " ><h1 className='bg-black w-fit '> LOVE WHAT YOU DO"</h1></div>
               </div>
               

            </div>

    </div>
  )
}

export default Quote1

