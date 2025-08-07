import React from 'react'
import image1 from '../image1.png'
import Image2 from '../image2.webp'
import Image3 from '../image3.png'
import Image4 from '../image4.png'

function ThirdPage() {
  return (
    <div className='third-page bg-[#F3E4D3] px-6 md:px-12 lg:px-16 py-18 lg:py-0'>
      <h1 className='uppercase text-center w-full tracking-wider text-[60px] pt-12 lg:pt-0 md:text-[160px] lg:text-[250px] font-bold text-[#80320b] font-["bystander"]'>retroscope</h1>
      <div className="box1 flex flex-col md:flex-row justify-between gap-6 md:gap-0">
        <div className="image w-full md:w-96 lg:w-122 h-64 md:h-72 lg:h-82 ">
          <img className='w-full h-full object-cover rounded-2xl' src={image1} alt="" />
        </div>
        <div className="right w-full md:w-2/5 lg:w-1/4 flex flex-col gap-3 md:gap-4">
          <p className='text-xs md:text-sm font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum pariatur ratione perspiciatis repudiandae repellendus consequuntur quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas quam in? Nisi, minus. Necessitatibus dolores soluta amet omnis nam, exercitationem sapiente est. Harum similique officia id amet quas numquam! facilis dolore dolorum, tempore numquam qui magnam maxime accusantium veritatis dolor? Quia, repellendus.</p>
          <h1 className='uppercase font-semibold text-black font-["bystander"] text-xl md:text-2xl'>Design</h1>
          <p className='font-semibold text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora odio alias iure qui reprehenderit quasi, dolorem vel eaque voluptas ab fuga autem? Optio, cum reiciendis consequatur cumque eos similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus adipisci eveniet cumque eum blanditiis eius quae dicta ut laudantium iusto cum, quaerat tempora, quo error, tenetur quia magnam nam.</p>
          <p className='font-semibold text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at, et corporis alias praesentium adipisci, voluptatum fugiat voluptas, asperiores iure vitae. Optio, asperiores dolor voluptate fuga facere id repellendus vel?</p>
        </div>
      </div>
     <div className="box2 flex flex-col md:flex-row justify-between w-full mt-12 md:mt-16 lg:mt-20 gap-6 md:gap-0">
          <div className="image2 w-full md:w-80 lg:w-112 h-52 md:h-64 lg:h-78 shadow-lg -rotate-6 md:-rotate-12 overflow-hidden rounded-xl">
            <img src={Image2} alt="" className='w-full h-full object-cover rounded-xl' />
          </div>
                 <div className="image2 mt-8 md:mt-24 lg:mt-32 w-full md:w-84 lg:w-118 h-56 md:h-68 lg:h-85 shadow-lg -rotate-3 md:-rotate-9 overflow-hidden rounded-2xl">
            <img src={Image3} alt="" className='w-full h-full object-cover rounded-2xl' />
          </div>
     </div>
     <div className="box mt-32 md:mt-48 lg:mt-64 ml-0 md:ml-32 lg:ml-62">
               <div className="image2 mt-16 md:mt-24 lg:mt-32 w-full md:w-72 lg:w-92 h-48 md:h-60 lg:h-72 shadow-lg rotate-12 md:rotate-18 overflow-hidden rounded-2xl">
            <img src={Image4} alt="" className='w-full h-full object-cover rounded-2xl' />
          </div>

     </div>
    </div>
  )
}

export default ThirdPage