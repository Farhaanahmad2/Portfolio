import React from 'react'
import Toggle2 from './toggle2'


const Project = () => {

      

  const hotel_des=`Developed a Hotel Explorer application involves using
                 Express as the server, EJS for templating, and Bootstrap 
                 for a responsive  interface. This simple
                  hotel listing site will allow users to browse a list of hotels, 
                  view details for each, and simulate a "booking" experience.`


  const food_des=`Developed a food ordering platform with real-time cart management and interactive menu updates. Configured the Stripe payment gateway for secure transactions, reducing checkout time by 20%. Created an admin dashboard to track orders, update menus, and analyze revenue trends. Utilized React.js with the Context API for state management and built a responsive UI with Tailwind CSS, improving user retention by 15%. Implemented backend APIs using Node.js, Express.js, and MongoDB to ensure reliable performance and scalability.`

     
  const senseai_des=`Sense AI is a web application built with React and Vite that leverages an advanced
                       API to enable users to search for answers to their questions, similar ChatGPT. 
                       Featuring a user-friendly interface and delivers instant, relevant responses across various topics.`


  const car_des=`Developed TravoCar, a responsive car rental platform enabling users to search, filter, and book vehicles by date and pickup location. Designed and orchestrated an admin dashboard to manage vehicles, availability, and bookings. Built the frontend with React.js and Zustand for efficient state management, and implemented REST APIs using Node.js, Express.js, and MongoDB. Integrated ImageKit for optimized image delivery, reducing load time by 35%, and deployed the application to Vercel, ensuring 99.9% uptime.`                       
                       


const auth_des=`This user authentication system is built with MERN.It provide MAIL verification by sending the EMAIL to the users account.
           .It uses JWT for secure sessions and bcryptJS for hashing passwords,Crypto generates secure hexadecimals codes, adding security against 
                  unauthorized access. Users data is managed in MongoDB
                   with Mongoose based schema.`


const portfolio_des=`A highly interactive portfolio built with modern web technologies:
React for structure and seamless component management.
GSAP and Framer Motion used for animations that bring every section to life.
Locomotive Scroll for buttery-smooth scrolling and a sleek user experience.`





const hotel_git=`https://github.com/Farhaanahmad2/Wanderlust`



const senseai_git=`https://github.com/Farhaanahmad2/SenseAI`


const game_git=`https://github.com/Farhaanahmad2/Simons_says_Game`


// const pass_git=`https://github.com/Farhaanahmad2/Portfolio`

const auth_git=`https://github.com/Farhaanahmad2/WeatherApp`

const portfolio_git=`https://github.com/Farhaanahmad2/Portfolio`

const food_git=`https://github.com/Farhaanahmad2/Food-Del`

const TravoCar_git=`https://github.com/Farhaanahmad2/TravoCar`

const TravoCar_link=`https://travo-car.vercel.app/`


const hotel_link=`https://wanderlust-1-thok.onrender.com/listings`


const senseai_link=`https://sense-ai-lilac.vercel.app/`

const portfolio_link=`https://portfolio-nine-beta-14.vercel.app/`





















  return (
    <>
 
      <div className="overflow-x-hidden mt-8">
        <div className="  flex justify-center items-center  bg-black mb-2 ">
                  
                <h1 className=' w-fit  text-5xl md:text-6xl lg:text-7xl p-3 font-[f4]     overflow-hidden text-white  font-bold'>
                  My projects</h1>
        </div>

    <main  className=' bg-black text-white w-[100vw] min-h-[180vh]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-3  sm:gap-10 sm:px-10 lg:gap-16 lg:px-16 lg:py-5 ' > 
      
        <Toggle2 className="m-2 "  inside="i3" tiltdiv="t3"  overlay="o3"  cursor="c3" color="#00BFFF" projectimg={"TravoCar.png"}    para={car_des}  title={"TRAVOCAR"} git={TravoCar_git} link={TravoCar_link}  />
       <Toggle2 className="m-2 "  inside="i4" tiltdiv="t4"  overlay="o4"  cursor="c4" color="#98FF98" projectimg={"Foodexpress.png"} para={food_des} title={"FOOD EXPRESS"} git={food_git}    />
      
        <Toggle2 className="m-2 "  inside="i6" tiltdiv="t6"  overlay="o6"  cursor="c6" color="#FF1493" projectimg={"Auth.png"} para={auth_des} title={"USER AUTH & VERIFY"} git={auth_git}    />
       
       <Toggle2 className="m-2 "  inside="i5" tiltdiv="t5"  overlay="o5"  cursor="c5" color="#20B2AA" projectimg={"portfolio.png"} para={portfolio_des} title={"MY PORTFOLIO"} git={portfolio_git} link={portfolio_link}    />

      
        <Toggle2 className="m-2 "  inside="i1" tiltdiv="t1"  overlay="o1"  cursor="c1" color="#FFA500" projectimg={"A.PNG"}    para={hotel_des} title={"A HOTEL EXPLORER"} git={hotel_git}  link={hotel_link} />

       <Toggle2 className="m-2 "  inside="i2" tiltdiv="t2"  overlay="o2"  cursor="c2" color="#BF00FF" projectimg={"S.png"}    para={senseai_des} title={"SENSE AI"} git={senseai_git}  link={senseai_link}  />


       
       
       
       {/* <Toggle2/> */}
    </main>
    </div>
    </>
  )
}

export default Project