



import { FiEdit, FiChevronDown, FiPlusSquare } from "react-icons/fi";
import { TbFileCertificate } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const StaggeredDropDown = ({scrolltoSection}) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  useEffect(() => {
   const handleResize = () => setIsMobile(window.innerWidth < 768);
   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
  }, []);


  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <motion.div
     animate={open ? "open" : "closed"}
     className="relative ml-0 border-b-8 border-b-transparent"
     {...(!isMobile && {
       onMouseEnter: () => setOpen(true),
       onMouseLeave: () => setOpen(false),
     })}
     {...(isMobile && { onClick: toggleOpen })}
    >
      <motion.button
        className="flex items-center gap-2 px-3 py-1 rounded-[35px] text-gray-50 "
        
        whileHover="hover" 
      >
        <span className="font-medium text-sm">
        <img src="../dot.svg" alt="" className=' w-5 '  />
      </span>
        

      
      </motion.button>


      <AnimatePresence>
        {open && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed" 
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-full left-1/2 mt-2  md:w-30 overflow-hidden"
          >
            <Option setOpen={setOpen} Icon={FiEdit} text="Skills" onClick={()=>scrolltoSection('skill')} />
            <Option setOpen={setOpen} Icon={FiPlusSquare} text="Project" onClick={()=>scrolltoSection('project')} />
            <Option setOpen={setOpen} Icon={TbFileCertificate} text="Certificate" onClick={()=>scrolltoSection('certificate')} />
            <Option setOpen={setOpen} Icon={MdOutlineContactPhone} text="Contact" onClick={()=>scrolltoSection('contact')} />
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Option = ({ text, Icon, setOpen,onClick }) => (
  <motion.li
    variants={itemVariants}
    onClick={() => {
      setOpen(false);
      onClick();
    }}
    className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-gray-200 text-black hover:text-gray-500 transition-colors cursor-pointer"
  >
    <motion.span variants={actionIconVariants}>
      <Icon />
    </motion.span>
    <span>{text}</span>
  </motion.li>
);

export default StaggeredDropDown;


const pulseVariants = {
 pulse: {
    scale: [1, 1.05, 1],
    transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    },
 },

};




const swayVariants = {
     pulse: {
    
       rotate: [0, 2, -2, 0],
       transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
       },
     },
   };
  

  
  const breathingVariants = {
       pulse: {
         scale: [1, 1.02, 1],
         opacity: [1, 0.95, 1],
         transition: {
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
         },
       },
     };
    


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
      

      const glowVariants = {
            pulse: {
             boxShadow: [
              "0px 0px 0px rgba(0, 0, 0, 0)",
              "0px 0px 20px rgba(255, 255, 255, 0.7)",
              "0px 0px 0px rgba(0, 0, 0, 0)",
             ],
             transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
             },
           },
          };
        





const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
    when: "beforeChildren",
    staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
    when: "afterChildren",
    staggerChildren: 0.1,
    },
  },
};



const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
     when: "beforeChildren",
    },
  },
  closed: {
   opacity: 0,
   y: -15,
   transition: {
     when: "afterChildren",
   },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
