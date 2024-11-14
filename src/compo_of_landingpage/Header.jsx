import React from 'react'
import StaggeredDropDown from './About'
import Resume from './Resume'

const Header = ({scrolltoSection}) => {
  return (
    <div className='fixed w-full h-[120px] flex items-center justify-between z-10 px-4 sm:px-8  pt-4 pb-0  '>
                 
                  <img src="../n2.png " className=' w-20 sm:w-28 md:w-36' alt="" />
                  <div className='flex items-center justify-between' >
                <Resume/>
                <StaggeredDropDown scrolltoSection={scrolltoSection}/>
                </div>
               
                               
    </div>
  )
}

export default Header