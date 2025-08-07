import React from 'react'

function SecondPage() {
  return (
    <div className='second-page h-[80vh] bg-[#F3E4D3] flex flex-col md:flex-row justify-between px-8 md:px-16 lg:px-26 py-12 md:py-16 lg:py-22 gap-8 md:gap-0'>
        <div className="left w-full md:w-2/5 lg:w-1/5 flex flex-col gap-1">
            <div className="limited text-xl md:text-2xl font-semibold">
                <h1 className='font-["strange"]'>Limited version</h1>
            </div>
            <div className="intax font-['bystander'] text-5xl md:text-6xl lg:text-7xl leading-10 md:leading-12 lg:leading-14 flex flex-col">
                <h1 className='uppercase'>Intax</h1>
                <h1 className='uppercase'>Fujifilm</h1>
            </div>
            <p className='pt-4 md:pt-6 leading-4 md:leading-5 text-xs md:text-sm font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eligendi vel architecto nam reiciendis assumenda quam iusto ipsa rem quidem, expedita maiores, totam magni aliquid, vero sed porro quis aut?
            Quam deserunt libero dolores eum. Facere officia dolores sed doloremque voluptatum magni ea asperiores? Est porro voluptatem, voluptates incidunt quas laborum quasi repellat natus impedit eligendi fugit sequi maiores animi!</p>
            <button className='uppercase mt-3 md:mt-5 w-full md:w-2/3 lg:w-1/2 py-2 text-white bg-black text-sm'>
                Buy Now
            </button>
        </div>
        <div className="right flex flex-col md:flex-col gap-6 md:gap-8 lg:gap-10 w-full md:w-auto">
            <div className="rec1 h-32 md:h-38 lg:h-38 w-full md:w-72 lg:w-82 border-2 md:border-4 border-black">
                <div className="flex flex-col w-full mt-2 md:mt-4 h-full">
                    <div className="line border-b-2 mx-2 border-black">
                        <h1 className='font-semibold text-sm md:text-base'>MGP</h1>
                        <h1 className='text-xs md:text-sm'>Megapixels</h1>
                    </div>
                    <div className="marks mx-2 flex items-center gap-4 md:gap-6 justify-between h-[40%]">
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>45%</h1>
                        <p className='text-xs md:text-sm leading-none mt-2 md:mt-4 font-semibold'>A 12 MP camera can produce prints up to 16 x 20 inches at high quality-which is more than enough for most photographers.</p>
                    </div>
                </div>
            </div>
                        <div className="rec1 h-32 md:h-36 lg:h-38 w-full md:w-72 lg:w-82 border-2 md:border-4 border-black">
                <div className="flex flex-col w-full mt-2 md:mt-4 h-full">
                    <div className="line border-b-2 mx-2 border-black">
                        <h1 className='font-semibold text-sm md:text-base'>MGP</h1>
                        <h1 className='text-xs md:text-sm'>Megapixels</h1>
                    </div>
                    <div className="marks mx-2 flex items-center gap-4 md:gap-6 justify-between h-[40%]">
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>57%</h1>
                        <p className='text-xs md:text-sm leading-none mt-2 md:mt-4 font-semibold'>A 12 MP camera can produce prints up to 16 x 20 inches at high quality-which is more than enough for most photographers.</p>
                    </div>
                </div>
            </div>
                        <div className="rec1 h-32 md:h-36 lg:h-38 w-full md:w-72 lg:w-82 border-2 md:border-4 border-black">
                <div className="flex flex-col w-full mt-2 md:mt-4 h-full">
                    <div className="line border-b-2 mx-2 border-black">
                        <h1 className='font-semibold text-sm md:text-base'>MGP</h1>
                        <h1 className='text-xs md:text-sm'>Megapixels</h1>
                    </div>
                    <div className="marks mx-2 flex items-center gap-4 md:gap-6 justify-between h-[40%]">
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>72%</h1>
                        <p className='text-xs md:text-sm leading-none mt-2 md:mt-4 font-semibold'>A 12 MP camera can produce prints up to 16 x 20 inches at high quality-which is more than enough for most photographers.</p>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default SecondPage