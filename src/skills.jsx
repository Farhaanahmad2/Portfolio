import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Skillscompo = ({scrolltoSection}) => {


    
  useGSAP(() => {
       
    const t1=gsap.timeline();


       t1.from(".skils", {
          duration: 4,
          x: -250,
          delay: 0,
          opacity:0,
          ease: 'slow(0.1,0.1,false)',
          stagger:1,
          scrollTrigger: {
          trigger: ".skils",
          scroller: "body",
            // markers:"true",
          start: "top 80%",
          end: "top 40%",
          scrub: 0.5,
        },
       },"a");

    t1.from(".grid", {
            duration: 4,
            x: 250,
            delay: 0,
            opacity:0,
            ease: 'slow(0.1,0.1,false)',
            
            scrollTrigger: {
            trigger: ".grid",
            scroller: "body",
              // markers:"true",
            start: "top 80%",
            end: "top 40%",
            scrub: 0.5,
            },
         },"a");


  })


 





  return (
    <section className="w-full   px-8 py-12 grid grid-cols-1 md:grid-cols-2 bg-black items-center gap-8 max-w-6xl mx-auto">
      <div className="skill">
        <span className="skils text-purple-500 block mb-4 text-xs md:text-sm  font-medium font-[f4]">
          BETTER EVERY DAY
        </span>
        <h3 className=" skils text-4xl md:text-6xl font-semibold text-white">
           My Skills
        </h3>
    <p className=" skils text-base md:text-lg text-white my-4 md:my-6 text-white font-[f3] ">
          These are the Technologies I've worked with and used them in my projects
        </p>
        <button className="skils button  text-white font-medium py-2 px-4 rounded transition-all bg-purple-500 hover:bg-purple-600 active:scale-95"
        onClick={()=>scrolltoSection('project')}
        >
          Check my projects
        </button>
      </div>
     
      <ShuffleGrid  />
    
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "../public/three.svg",
  },
  {
    id: 2,
    src: "../public/mongo2.svg",
  },
  {
    id: 3,
    src: "../public/type.svg",
  },
  {
    id: 4,
    src: "../public/next.svg",
  },
  {
    id: 5,
    src: "../public/node.svg",
  },
  {
    id: 6,
    src: "../public/git.svg",
  },
  {
    id: 7,
    src: "../gsap.svg",
  },
  {
    id: 8,
    src: "../express.svg",
  },
  {
    id: 9,
    src: "../html.svg",
  },
  {
    id: 10,
    src: "../css.svg",
  },
  {
    id: 11,
    src: "../cpp.svg",
  },
  {
    id: 12,
    src: "../public/C.svg",
  },
  {
    id: 13,
    src: "../js.svg",
  },
  {
    id: 14,
    src: "../vite.svg",
  },
  {
    id: 15,
    src: "../react.svg",
  },
  {
    id: 16,
    src: "../public/tailwindcss.svg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 2, type: "spring" }}
      className="w-full h-full "
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition:"center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className=" grid  overflow-hidden grid-cols-4 grid-rows-4 h-[440px] gap-1 ">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Skillscompo;