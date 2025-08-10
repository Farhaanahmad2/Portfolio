

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DoubleSidedTriangle = () => {
  const triangleRef1 = useRef(null);
  const triangleRef2 = useRef(null);

  useEffect(() => {
    const triangleElement1 = triangleRef1.current;
    const triangleElement2 = triangleRef2.current;

    
    const length1 = triangleElement1.getTotalLength();
    const length2 = triangleElement2.getTotalLength();

    triangleElement1.style.strokeDasharray = length1;
    triangleElement1.style.strokeDashoffset = length1;  
    triangleElement2.style.strokeDasharray = length2;
    triangleElement2.style.strokeDashoffset = length2;  

   
    gsap.fromTo(
      [triangleElement1, triangleElement2],
      { strokeDashoffset: length1 }, 
      {
        strokeDashoffset: 0,         
        ease: "none",
        scrollTrigger: {
          trigger: triangleElement1,  
          start: "top 65%",         
          end: "bottom 45%",         
          scrub: true,               
          markers: false,            
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <svg className='w-[95%] sm:w-full  '
        height="450" viewBox="0 0 470 350"
      >
       
        <polygon
          ref={triangleRef1}
          points="200,50 300,200 100,200"
          style={{
            stroke: '#9B5DE5',          
            strokeWidth: 5,              
            fill: 'transparent',        
          }}
        />
        
       
        <polygon
          ref={triangleRef2}
          points="300,350 400,200 200,200"
          style={{
            stroke: '#DC143C',           
            strokeWidth: 5,              
            fill: 'transparent',         
          }}
        />
      </svg>
    </div>
  );
};

export default DoubleSidedTriangle;










