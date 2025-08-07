import React from 'react'
import image1 from '../image1.png'
import Image2 from '../image2.webp'
import Image3 from '../image3.png'
import Image4 from '../image4.png'

function ThirdPage() {
  return (
    <div className='third-page bg-[#F3E4D3] px-16 '>
      <h1 className='uppercase text-center w-full tracking-wider text-[250px] font-bold text-[#80320b] font-["bystander"]'>retroscope</h1>
      <div className="box1 flex justify-between">
        <div className="image w-122 h-82 ">
          <img className='w-full h-full object-cover rounded-2xl' src={image1} alt="" />
        </div>
        <div className="right w-1/4 flex flex-col gap-4">
          <p className='text-sm font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum pariatur ratione perspiciatis repudiandae repellendus consequuntur quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas quam in? Nisi, minus. Necessitatibus dolores soluta amet omnis nam, exercitationem sapiente est. Harum similique officia id amet quas numquam! facilis dolore dolorum, tempore numquam qui magnam maxime accusantium veritatis dolor? Quia, repellendus.</p>
          <h1 className='uppercase font-semibold text-black font-["bystander"] text-2xl'>Design</h1>
          <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora odio alias iure qui reprehenderit quasi, dolorem vel eaque voluptas ab fuga autem? Optio, cum reiciendis consequatur cumque eos similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus adipisci eveniet cumque eum blanditiis eius quae dicta ut laudantium iusto cum, quaerat tempora, quo error, tenetur quia magnam nam.</p>
          <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at, et corporis alias praesentium adipisci, voluptatum fugiat voluptas, asperiores iure vitae. Optio, asperiores dolor voluptate fuga facere id repellendus vel?</p>
        </div>
      </div>
     <div className="box2 flex justify-between w-full mt-20">
          <div className="image2 w-112 h-78 shadow-lg -rotate-12 overflow-hidden rounded-xl">
            <img src={Image2} alt="" className='w-full h-full object-cover rounded-xl' />
          </div>
                 <div className="image2 mt-32 w-118 h-85 shadow-lg -rotate-9 overflow-hidden rounded-2xl">
            <img src={Image3} alt="" className='w-full h-full object-cover rounded-2xl' />
          </div>
     </div>
     <div className="box mt-64 ml-62">
               <div className="image2 mt-32 w-92 h-72 shadow-lg rotate-18 overflow-hidden rounded-2xl">
            <img src={Image4} alt="" className='w-full h-full object-cover rounded-2xl' />
          </div>

     </div>
    </div>
  )
}

export default ThirdPage