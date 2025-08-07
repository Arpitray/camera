import React from 'react'

function SecondPage() {
  return (
    <div className='second-page h-[80vh] bg-[#F3E4D3] flex justify-between px-26 py-22'>
        <div className="left w-1/5 flex flex-col gap-1">
            <div className="limited text-2xl font-semibold">
                <h1 className='font-["strange"]'>Limited version</h1>
            </div>
            <div className="intax font-['bystander'] text-7xl leading-14 flex flex-col">
                <h1 className='uppercase'>Intax</h1>
                <h1 className='uppercase'>Fujifilm</h1>
            </div>
            <p className='pt-6 leading-5 text-sm font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eligendi vel architecto nam reiciendis assumenda quam iusto ipsa rem quidem, expedita maiores, totam magni aliquid, vero sed porro quis aut?
            Quam deserunt libero dolores eum. Facere officia dolores sed doloremque voluptatum magni ea asperiores? Est porro voluptatem, voluptates incidunt quas laborum quasi repellat natus impedit eligendi fugit sequi maiores animi!</p>
            <button className='uppercase mt-5 w-1/2 py-2 text-white bg-black'>
                Buy Now
            </button>
        </div>
        <div className="right flex flex-col gap-10">
            <div className="rec1 h-38 w-82 border-4 border-black">
                <div className="flex flex-col w-full mt-4 h-full">
                    <div className="line border-b-2 mx-2 border-black">
                        <h1 className='font-semibold'>MGP</h1>
                        <h1 className='text-sm'>Megapixels</h1>
                    </div>
                    <div className="marks mx-2 flex items-center gap-6 justify-between h-[40%]">
                        <h1 className='text-5xl font-semibold'>45%</h1>
                        <p className='text-sm leading-none mt-4 font-semibold'>A 12 MP camera can produce prints up to 16 x 20 inches at high quality-which is more than enough for most photographers.</p>
                    </div>
                </div>
            </div>
                        <div className="rec1 h-38 w-82 border-4 border-black">
                <div className="flex flex-col w-full mt-4 h-full">
                    <div className="line border-b-2 mx-2 border-black">
                        <h1 className='font-semibold'>MGP</h1>
                        <h1 className='text-sm'>Megapixels</h1>
                    </div>
                    <div className="marks mx-2 flex items-center gap-6 justify-between h-[40%]">
                        <h1 className='text-5xl font-semibold'>57%</h1>
                        <p className='text-sm leading-none mt-4 font-semibold'>A 12 MP camera can produce prints up to 16 x 20 inches at high quality-which is more than enough for most photographers.</p>
                    </div>
                </div>
            </div>
                        <div className="rec1 h-38 w-82 border-4 border-black">
                <div className="flex flex-col w-full mt-4 h-full">
                    <div className="line border-b-2 mx-2 border-black">
                        <h1 className='font-semibold'>MGP</h1>
                        <h1 className='text-sm'>Megapixels</h1>
                    </div>
                    <div className="marks mx-2 flex items-center gap-6 justify-between h-[40%]">
                        <h1 className='text-5xl font-semibold'>72%</h1>
                        <p className='text-sm leading-none mt-4 font-semibold'>A 12 MP camera can produce prints up to 16 x 20 inches at high quality-which is more than enough for most photographers.</p>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default SecondPage