

import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Resume = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  
  const handleDownloadClick = () => {
    window.open("https://drive.google.com/file/d/12uAm3THRgHDGIC50ZQx0T5JgHbbusRYv/view", "_blank");
  };

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="relative mr-2 border-b-8 border-b-transparent"
      {...(!isMobile && {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      })}
      {...(isMobile && { onClick: toggleOpen })}
    >
      <motion.button
        className="flex items-center gap-2 px-3 py-1 rounded-[35px] text-indigo-50 bg-black hover:bg-black border-2 md:border-4  transition-colors"
        variants={swayVariants} // Apply pulse animation here
        animate="pulse" 
      >
        <span className="font-medium text-sm">Resume</span>
        <motion.span variants={iconVariants} animate={open ? "open" : "closed"}>
         <FiChevronDown />
        </motion.span>
      </motion.button>

      <AnimatePresence>
       {open && (
         <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col justify-center items-center gap-0 p-0 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%]  h-[300px] w-[190px] md:h-[380px] md:w-[260px] overflow-hidden"
            onClick={() => isMobile && setOpen(false)}
          >
            <motion.div
              variants={textVariants}
              className="font-[f5] mt-2 cursor-pointer"
              onClick={handleDownloadClick} // Open in new tab on click
            >
              Click for Open
            </motion.div>
            <motion.img
              src="../resume.jpg"
              alt="Resume"
              variants={imageVariants}
               className="cursor-pointer"
              onClick={handleDownloadClick}
           />
          </motion.ul>
         )}
      </AnimatePresence>
   </motion.div>
  );
};

export default Resume;


const tiltFloatVariants = {
    pulse: {
    boxShadow: [
            "0px 0px 0px rgba(0, 0, 0, 0)",
            "0px 0px 30px rgba(255, 255, 255, 0.7)",
            "0px 0px 0px rgba(0, 0, 0, 0)",
           ],
       y: [0, -3, 0],
       rotate: [0, 3, -3, 0],
       transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
       },
      },
   };
  

  
const swayVariants = {
      pulse: {
    boxShadow: [
            "0px 0px 0px rgba(0,0,0,0)",
            "0px 0px 45px rgba(38, 112, 168, 1)",
            "0px 0px 0px rgba(0, 0, 0, 0)",
            ],
        rotate: [0, 2, -2, 0],
        transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        },
      },
    };






// Animation variants
const wrapperVariants = {
 open: {
    scaleY: 1,
    opacity: 1,
    transition: {
    when: "beforeChildren",
    staggerChildren: 0.1,
    duration: 0.5,
    ease: "backInOut",
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "backInOut",
    },
  },
};

const iconVariants = {
  open: { rotate: 180, transition: { duration: 0.5, ease: "easeOut" } },
  closed: { rotate: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const textVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 },
  },
};

const imageVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};
