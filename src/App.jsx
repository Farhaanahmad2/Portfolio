import React from 'react'
import Landing from './landing'
import Header from './compo_of_landingpage/Header'
import Quote1 from './quote1'
import Skillscompo from './skills'
import Quote2 from './quote2'
import Project from './projects'
import { Certificate } from './certificate'
import ContactPage from './Contact'
import { useRef } from 'react'


import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const App = () => {
    const skillRef=useRef(null);
    const projectRef=useRef(null);
    const certificateRef=useRef(null);
    const contactRef=useRef(null);
      
    const scrolltoSection=(section)=>{
      const sectionRef={
        skill:skillRef,
        project:projectRef,
        certificate:certificateRef,
        contact:contactRef
      };
      sectionRef[section]?.current.scrollIntoView({
        behavior:'smooth'
      })
    }

    



  return (
    <>
   
    <div className='bg-black overflow-x-hidden'>
    <Header scrolltoSection={scrolltoSection}  />
    <Landing />
    <Quote1/>

    <section ref={skillRef} className='overflow-x-hidden' ><Skillscompo scrolltoSection={scrolltoSection}/></section>
    <Quote2/>
    <section ref={projectRef} ><Project/> </section> 
    <section ref={certificateRef}> <Certificate/></section>
    <section ref={contactRef} >  <ContactPage/> </section>

    </div>
           
    </>
  )
}

export default App