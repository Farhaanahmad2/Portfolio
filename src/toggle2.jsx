import React, { useRef, useState } from 'react'
import "./toggle2.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const Toggle2 = ({inside,tiltdiv,overlay,cursor,color,projectimg,para,title,git,link}) => {
 
    const [xval,setxval]=useState(null);
    const [yval,setyval]=useState(null)
    const tiltref =useRef(null)

  



  
        
        const hexToRgba = (hex, alpha = 0.2) => {
          hex = hex.replace("#", "");
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };
      
        const shadowColor = hexToRgba(color, 0.3);
        


        
     
    
    

   
    const mouseMoving=(e)=>{
        //   console.log(tiltref.current.getBoundingClientRect().x)
             
       setxval((e.clientX-tiltref.current.getBoundingClientRect().x-tiltref.current.getBoundingClientRect().width/2)/30)
       setyval(-(e.clientY-tiltref.current.getBoundingClientRect().y-tiltref.current.getBoundingClientRect().height/2)/10)
        //   setxval(e.clientX/100)
        //   setyval(e.clientY/100)
          tiltref.current.style.transform=`rotateX(${yval}deg)  rotateY(${xval}deg)`
          

    }



    useGSAP(()=>{
     
        var main=document.querySelector("main")
        var cursorr=document.querySelector(`.${cursor}`)
        var overlayy=document.querySelector(`.${overlay}`)
        var image=document.querySelector(`.${inside}`)
        var img=document.querySelector(`.${tiltdiv}`)
       
    
      
    
        main.addEventListener("mousemove",(val)=>{
           gsap.to(cursorr,{
            x:val.x-tiltref.current.getBoundingClientRect().x,
            y:val.y-tiltref.current.getBoundingClientRect().y,
            duration:0.1
            
           })
        })
           




    
        image.addEventListener("mouseenter",()=>{
          // cursor.innerHTML="view more"
          gsap.to(img,{
            borderColor:color,
            duration:3
        
        })
       })
    
    
    
       overlayy.addEventListener("mouseenter",()=>{
        // cursor.innerHTML="view more"
             
        gsap.to(cursorr,{
          scale:4,
          backgroundColor:color,
        //   boxShadow: " 0 0 30px 15px rgba(255, 0, 170, 0.6), 0 0 60px 30px rgba(255, 0, 179, 0.349), 0 0 100px 50px rgba(255, 0, 149, 0.2)",
        boxShadow: `
        0px 0px  60px 28px ${shadowColor},
        0px 0px 60px 28px ${shadowColor},
        0px 0px 60px 28px ${shadowColor},
        0px 0px 60px 28px ${shadowColor},
        0px 0px 60px 28px ${shadowColor}
      `,

           zIndex:90,
          duration:0.2


      })

       })



       overlayy.addEventListener("mouseleave",()=>{
        gsap.to(cursorr,{
          scale:0,
          backgroundColor:"black",
          boxShadow:0,
           zIndex:70,
          duration:0.2
     })
       })



       image.addEventListener("mouseleave",()=>{
           
     
        //  tiltref.current.style.transform=`rotateX(${0}deg)  rotateY(${0}deg)`
       
         
 
        


        const timeline = gsap.timeline({overwrite:true});

        timeline.fromTo(
            img,
            {  borderColor:color,
                transform: `rotateX(${tiltref.current.getBoundingClientRect().x / 80}deg) rotateY(${tiltref.current.getBoundingClientRect().y / 80}deg)`,
            },
            {   
                transform: "rotateX(0deg) rotateY(0deg)",
                duration: 1, 
            }
        );
    
 
        timeline.to(
            img,
            {
                borderColor: "black",
                delay: 1,
                duration:1
            },
        
        );




     }
    )
    
    
    
    
    
      })
      





    


  return (
 <>
        <div className={inside}  onMouseMove={(e)=> mouseMoving(e)}>
          
        
        
         <div className={tiltdiv} ref={tiltref} >
            <div className={cursor}></div>

         <div className={overlay}>

     
             

             <div className="data-cont">


             <div className='dataimage' >
                <img src={projectimg} alt="" />
            </div>



            <div className="datades">
                <div className="puredata">
                <div className="heading  overflow-hidden">
                    <h2 className="title font-[f5] text-xl  ">{title}</h2>

                    <div className="project-data flex  ">
                         
                        
                        
                      <a href={git} target='_blank' >
                      <lord-icon
                        src="https://cdn.lordicon.com/fzgrewpn.json"
                      trigger="hover"
                      style={{ width: "35px", height: "35px", "paddingTop": "0px" }}>
                      </lord-icon>
                      </a>


                        <a href={link} className='mx-1 ' target='_blank' >
                        <lord-icon
                             src="https://cdn.lordicon.com/ezjqphcn.json"
                                 trigger="hover"
                                 style={{ width: "30px", height: "30px", "paddingTop": "0px" }}>
                       </lord-icon>
                        </a>

                    </div>


                </div>
                <div className="des font-[f3] leading-tight text-sm">
                {para}
                </div>
                </div>
            </div>

            </div>

        </div>
              

     

         
        
        </div>

        </div>
        
        </>
  )
}

export default Toggle2