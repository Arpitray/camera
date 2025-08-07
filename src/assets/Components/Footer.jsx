import React from 'react'
import foot from '../image1.png'

function Footer() {
  return (
    <div className='bg-[#F3E4D3] lg:h-[80vh]  flex flex-col md:flex-row w-full md:pt-30 md:items-center py-3 md:py-4 gap-6 md:gap-8 lg:gap-12 px-4 md:px-6 lg:px-8'>
     <div className="image w-full md:w-1/2 h-64 md:h-full md:flex md:items-center ">
     <img className='object-cover w-full h-full border-8 md:border-12 border-white rounded-2xl  overflow-hidden' src={foot} alt="" />
     </div>
     <div className="info w-full md:w-1/2 h-auto md:h-full flex flex-col">
     <p className='font-["strange"] text-xl md:text-2xl'>Other Models</p>
     <div className="rethink leading-0 tracking-wider">
        <h1 className='uppercase text-6xl md:text-7xl lg:text-9xl font-["bystander"] font-semibold leading-12 md:leading-16 lg:leading-20'>rethink</h1>
        <h1 className='uppercase text-6xl md:text-7xl lg:text-9xl font-["bystander"] font-semibold leading-none'>canvas</h1>
     </div>
     <p className='mt-6 md:mt-8 lg:mt-12 font-semibold text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magnam tenetur perspiciatis magni repellendus dolorem, ipsum ullam laborum ad voluptates eum, possimus officiis in! Perspiciatis ab exercitationem ratione molestiae dolorum.
     Eius excepturi iusto dicta aliquam unde eum iste. Omnis exercitationem non recusandae in maiores facere Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit atque dolorem beatae animi, facere nihil dolore id corporis adipisci illum? Cum labore soluta facere in, corporis deserunt illo similique fugit. delectus sint, dolorem esse, molestias neque, vel aspernatur. Explicabo impedit vero praesentium blanditiis repudiandae rem.</p>
     <p className='mt-6 md:mt-8 lg:mt-12 font-semibold text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, natus sed odio harum vero enim suscipit dolorum laudantium, assumenda doloremque voluptatem dolor! A voluptatibus eaque iste sit sint eius id! fuga voluptas delectus enim error reprehenderit tenetur quasi quam eaque explicabo voluptatum, mollitia exercitationem sequi a. Eius vitae est dolorem.</p>
     </div>
    </div>
  )
}

export default Footer