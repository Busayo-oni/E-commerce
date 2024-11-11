import React from 'react'
import Circle from '../assets/circle-strike.png'
import Cone from '../assets/cone.png'
import Exclus from '../assets/exlus.png'

const exclusive = () => {
  return (
    <div className='bg-[#FDC3B5] h-80 flex justify-center items-center relative  m-0 md:h-96 py-8 lg:py-10 ' >
      <h1 className='text-[70px] font-vidaloka text-center  lg:leading-[0px]'>Stay<img src={Circle} className='w-20 inline lg:w-28 md:w-24' alt="" /> in  <br /><span><img src={Cone} className='w-14 inline lg:w-28 md:w-20' alt="" /></span>the<img src={Exclus} className='w-44 inline-block lg:w-60 md:w-52' alt="" /> <br />Know </h1>
    </div>
  )
}
export default exclusive