import React, { forwardRef } from 'react'
import Ccam1 from '../ccam1.png'
import Ccam3 from '../ccam3.jpg'
import Image6 from '../image6.png'

const Fourthpage = forwardRef((props, intaxFujifilmRef) => (
  <div className='fourth-page bg-[#F3E4D3] lg:h-screen pt-28 md:pt-36 lg:pt-44 px-8 md:px-16 lg:px-24'>
      <div className="headings">
        <h1 className='text-center text-lg md:text-xl lg:text-2xl font-bold font-["strange"] leading-4 md:leading-5'>Other Models</h1>
        <h1 className='text-center text-4xl md:text-5xl lg:text-7xl tracking-wide font-bold font-["bystander"]'>Collection</h1>
      </div>
      <div className="cameras flex flex-wrap lg:flex-nowrap gap-6 md:gap-8 lg:gap-12 mt-12 md:mt-16 lg:mt-21 justify-center lg:justify-between w-full">
        <div className="image1 h-64 md:h-62 lg:h-88 w-full md:w-80 lg:w-108 flex flex-col">
          <img className='object-cover h-full w-full' src={Ccam1} alt="" />
          <h1 className='text-center text-lg md:text-xl font-bold font-["bystander"] mt-2'>INTAX moon Eve</h1>
          <p className='text-center text-base md:text-lg font-bold font-["bystander"]'>$500.00</p>
        </div>
        <div className="image2 h-64 md:h-72 lg:h-82 w-full md:w-72 lg:w-72 flex flex-col">
          <img className='object-cover h-full w-full opacity-0' src={Ccam1} alt="" />
          <h1 ref={intaxFujifilmRef} className='text-center text-lg md:text-xl font-bold font-["bystander"] mt-2'>INTAX fujifilm</h1>
          <p className='text-center text-base md:text-lg font-bold font-["bystander"]'>$500.00</p>
        </div>
  <div className="image3 h-72 md:h-80 lg:h-126 w-full md:w-72 lg:w-112 flex flex-col mt-0 md:mt-[-40px] lg:mt-[-70px]">
          <img className='object-cover h-full w-full' src={Image6} alt="" />
          <h1 className='text-center text-lg md:text-xl font-bold font-["bystander"] mt-2'>INTAX polaroid</h1>
          <p className='text-center text-base md:text-lg font-bold font-["bystander"]'>$500.00</p>
        </div>
      </div>
  </div>
))

export default Fourthpage