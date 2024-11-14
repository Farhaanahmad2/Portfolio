

import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MdOutlineContactPhone } from "react-icons/md";
import { useRef } from 'react';



gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({
   name: '',
   email: '',
   phone: '',
   message: '',
  });


const icontilt =useRef(null)

  const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({
     ...prevData,
     [name]: value,
   }));
  };

  const handleSubmit = (e) => {
   e.preventDefault();
   console.log('Form submitted:', formData);
   // Add your form submission logic here
  };















  let yval;
  if (window.innerWidth > 768) {
   yval = 500;
  } else if (window.innerWidth < 768 && window.innerWidth > 644) {
   yval = 800;
  } else {
   yval = 700;
  }

 useGSAP(() => {
   gsap.to(".contact", {
    duration: 1,
    y: -yval,
    delay: 0,
    scale: 0.90,
    ease: 'linear',
    scrollTrigger: {
     trigger: ".pare",
     scroller: "body",
        // markers:"true",
     start: "bottom 95%",
     end: "bottom 50%",
     scrub: 0.5,
     pin: true,
    },
   });
     


var instaimg=document.querySelector(".instaimg")

instaimg.addEventListener('mouseenter', () => {
  gsap.to(instaimg, { scale: 1.3,rotation: 15,  duration: 0.5, ease: "slow(0.1,0.1,false)" });
});

instaimg.addEventListener('mouseleave', () => {
  gsap.to(instaimg, { scale: 1,rotation: 0,  duration: 0.5, ease: "slow(0.1,0.1,false)" });
});

var linkimg=document.querySelector(".linkimg")

linkimg.addEventListener('mouseenter', () => {
  gsap.to(linkimg, { scale: 1.3, rotation: 15, duration: 0.5, ease: "slow(0.1,0.1,false)" });
});

linkimg.addEventListener('mouseleave', () => {
  gsap.to(linkimg, { scale: 1, rotation: 0, duration: 0.5, ease: "slow(0.1,0.1,false)" });
});


var gitimg=document.querySelector(".gitimg")

gitimg.addEventListener('mouseenter', () => {
  gsap.to(gitimg, { scale: 1.3, rotation: 15, duration: 0.5, ease: "slow(0.1,0.1,false)" });
});

gitimg.addEventListener('mouseleave', () => {
  gsap.to(gitimg, { scale: 1, rotation: 0, duration: 0.5, ease: "slow(0.1,0.1,false)" });
});









  });

  return (
   <div className="relative pare min-h-screen bg-black">
     <div className="absolute flex contact flex-col md:flex-row min-h-screen mt-2 rounded-[20px] p-6 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-200 z-10">
      {/* Left Section */}
       <div className="flex flex-col w-full md:w-1/2 md:justify-center mb-6 md:mb-0">
         <div className="flex justify-center overflow-hidden items-center mb-8 rounded-[70%]">
             <img
              src="./Contact.gif"
              alt="Placeholder"
              className="rounded-lg w-full object-cover scale-150 md:scale-125"
           />
         </div>
         <div className="flex justify-center space-x-6 my-4">
            
            
             <a href="http" target="_blank" className="   block">
              <img src="./icon1.png" alt="" className='w-8 sm:w-12 md:w-16 instaimg' />
             </a>
           
             
             
             <a href="https://www.linkedin.com/in/farhan-ahmad-83a0b6285/" target="_blank" rel="noopener noreferrer" className="text-blue-400 block text-2xl">
               <img src="./icon4.png" alt="" className='w-8 sm:w-12 md:w-16 linkimg' />
             </a>
             

             
             <a href="https://github.com/Farhaanahmad2" target="_blank" rel="noopener noreferrer" className=" block text-pink-500 text-2xl">
               <img src="./icon3.png" alt="" className='w-8 sm:w-12 md:w-16 gitimg' />
             </a>
             



        </div>
       </div>

       {/* Right Section (Contact Form) */}
       <div className="w-full md:w-1/2 flex justify-center items-center">
        <form
            action="https://formspree.io/f/mldenogn"
            method="post"
            className="w-full max-w-lg p-6 md:p-8 lg:p-10 bg-white rounded-3xl shadow-lg"
        >
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
             Get In Touch
            </h2>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
               Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
           </div>

           <div className="mb-4">
               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 Email
               </label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                 required
               />
          </div>

          {/* Phone Number Section */}
          <div className="mb-4">
               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
               </label>
               <input
                 type="tel"
                 id="phone"
                 name="phone"
                 value={formData.phone}
                 onChange={handleChange}
                 className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                 required
               />
            </div>

            <div className="mb-6">
               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                 Message
               </label>
               <textarea
                 id="message"
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                 rows="5"
                 required
               ></textarea>
        </div>

         <button
           type="submit"
           className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
           Submit
          </button>
        </form>
      </div>
    </div>

    {/* Maily Section at Bottom */}
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center z-0">
      <div className="flex-col items-center justify-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          farhanahmad32954@gmail.com
        </h1>
        <div className="flex justify-center">
          <span className="text-white text-2xl sm:text-3xl md:text-3xl">Phone: +91 8840038273</span>
        </div>
        <div className="flex justify-center">
          <span className="mt-2 text-white text-xl">Developed by Me</span>
        </div>
      </div>
     </div>
   </div>
  );
};

export default ContactPage;
