import React from 'react'
import bravoImg1 from "../assets/bravoImg1.png";

export const OurStory
 = () => {
  return (
    <div className='flex flex-col gap-[30px] justify-start items-center'>
        <h1 className=''>Our Story</h1>
        <p>Take a look at how it all began</p>
        <img src={bravoImg1} alt='bravo img' className='w-[95vw] h-[80vh] ' />

    </div>
  )
}
