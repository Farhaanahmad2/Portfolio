
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PentagonBorderReveal = () => {
  const pentagonRef = useRef(null);

  useEffect(() => {
    const pentagonElement = pentagonRef.current;
    
    
    const length = pentagonElement.getTotalLength();
    pentagonElement.style.strokeDasharray = length;
    pentagonElement.style.strokeDashoffset = length;

    
    gsap.fromTo(
      pentagonElement,
      { strokeDashoffset: length },  
      {
        strokeDashoffset: 0,          
        ease: "none",
        scrollTrigger: {
          trigger: pentagonElement,  
          start: "top 70%",        
          end: "top 40%",       
          scrub: true,                
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="w-[45%] sm:w-[70%] md:w-[75%] lg:w-[85%]"  
        height="auto"  
        viewBox="0 0 200 200"  
      >
        <polygon
          ref={pentagonRef}
          points="100,10 190,78 150,190 50,190 10,78"  
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

export default PentagonBorderReveal;












