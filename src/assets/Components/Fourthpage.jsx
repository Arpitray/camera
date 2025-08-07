import React from 'react'
import Ccam1 from '../ccam1.png'
import Ccam3 from '../ccam3.jpg'
import Image6 from '../image6.png'

function Fourthpage() {
  return (
    <div className='fourth-page bg-[#F3E4D3] h-screen pt-44 px-24'>
        <div className="headings">
        <h1 className='text-center text-2xl font-bold font-["strange"] leading-5'>Other Models</h1>
        <h1 className='text-center text-7xl tracking-wide font-bold font-["bystander"]'>Collection</h1>
        </div>
    <div className="cameras flex gap-12 mt-21 justify-between w-full">
    <div className="image1 h-82 w-108 flex flex-col">
        <img className='object-cover h-full w-full' src={Ccam1} alt="" />
        <h1 className='text-center text-xl font-bold font-["bystander"]'>INTAX moon Eve</h1>
        <p className='text-center text-lg font-bold font-["bystander"]'>$500.00</p>
    </div>
        <div className="image2 h-82 w-98 flex flex-col">
        <img className='object-cover h-full w-full opacity-0' src={Ccam1} alt="" />
        <h1 className='text-center text-xl font-bold font-["bystander"]'>INTAX fujifilm</h1>
        <p className='text-center text-lg font-bold font-["bystander"]'>$500.00</p>
    </div>
        <div className="image3 h-112 w-98 flex flex-col mt-[-70px]">
        <img className='object-cover h-full w-full' src={Image6} alt="" />
        <h1 className='text-center text-xl font-bold font-["bystander"]'>INTAX polaroid</h1>
        <p className='text-center text-lg font-bold font-["bystander"]'>$500.00</p>
    </div>

    </div>
    </div>
  )
}

export default Fourthpage