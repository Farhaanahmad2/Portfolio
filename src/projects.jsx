import React from 'react'
import Toggle2 from './toggle2'


const Project = () => {

      

  const hotel_des=`Developed a Hotel Explorer application involves using
                 Express as the server, EJS for templating, and Bootstrap 
                 for a responsive  interface. This simple
                  hotel listing site will allow users to browse a list of hotels, 
                  view details for each, and simulate a "booking" experience.`


  const pass_des=`This password manager is a secure web 
    application built with React with Tailwind CSS for a smooth, responsive UI and
     MongoDB to securely store and manage user credentials. This site enabling 
      users to easily store, organize, and access their credentials.`

     
  const senseai_des=`Sense AI is a web application built with React and Vite that leverages an advanced
                       API to enable users to search for answers to their questions, similar ChatGPT. 
                       Featuring a user-friendly interface and delivers instant, relevant responses across various topics.`


  const game_des=`A Simon says game provide an Intactive experiance
                   where User can test their memory skills by remembering pattern of color and It's tech stack is HTML , CSS and Java Script.`                       
                       


const auth_des=`This user authentication system is built with MERN.It provide MAIL verification by sending the EMAIL to the users account.
           .It uses JWT for secure sessions and bcryptJS for hashing passwords,Crypto generates secure hexadecimals codes, adding security against 
                  unauthorized access. Users data is managed in MongoDB
                   with Mongoose based schema.`







const hotel_git=`https://github.com/Farhaanahmad2/Wanderlust`



const senseai_git=`https://github.com/Farhaanahmad2/SenseAI`


const game_git=`https://github.com/Farhaanahmad2/Simons_says_Game`


const weather_git=`https://github.com/Farhaanahmad2/WeatherApp`

const auth_git=`https://github.com/Farhaanahmad2/WeatherApp`




const hotel_link=`https://wanderlust-1-thok.onrender.com/listings`


const senseai_link=`https://sense-ai-lilac.vercel.app/`





















  return (
    <>
 
      <div className="overflow-x-hidden mt-8">
        <div className="  flex justify-center items-center  bg-black mb-2 ">
                  
                <h1 className=' w-fit  text-5xl md:text-6xl lg:text-7xl p-3 font-[f4]     overflow-hidden text-white  font-bold'>
                  My projects</h1>
        </div>

    <main  className=' bg-black text-white w-[100vw] min-h-[180vh]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-3  sm:gap-10 sm:px-10 lg:gap-16 lg:px-16 lg:py-5 ' > 
       <Toggle2 className="m-2 "  inside="i1" tiltdiv="t1"  overlay="o1"  cursor="c1" color="#FFA500" projectimg={"A.PNG"}    para={hotel_des} title={"A HOTEL EXPLORER"} git={hotel_git}  link={hotel_link} />
       <Toggle2 className="m-2 "  inside="i2" tiltdiv="t2"  overlay="o2"  cursor="c2" color="#BF00FF" projectimg={"S.png"}    para={senseai_des} title={"SENSE AI"} git={senseai_git}  link={senseai_link}  />
       <Toggle2 className="m-2 "  inside="i6" tiltdiv="t6"  overlay="o6"  cursor="c6" color="#FF1493" projectimg={"Auth.png"} para={auth_des} title={"USER AUTH & VERIFY"} git={auth_git}    />
       <Toggle2 className="m-2 "  inside="i3" tiltdiv="t3"  overlay="o3"  cursor="c3" color="#00BFFF" projectimg={"P.png"}    para={pass_des}  title={"LOCK SHEILD"}    />
       <Toggle2 className="m-2 "  inside="i4" tiltdiv="t4"  overlay="o4"  cursor="c4" color="#98FF98" projectimg={"game2.png"} para={game_des} title={"SIMON SAYS GAME"} git={game_git}    />
       <Toggle2 className="m-2 "  inside="i5" tiltdiv="t5"  overlay="o5"  cursor="c5" color="#20B2AA" projectimg={"weather1.png"} para={senseai_des} title={"WEATHER APP"} git={weather_git}    />
       
       
       {/* <Toggle2/> */}
    </main>
    </div>
    </>
  )
}

export default Project