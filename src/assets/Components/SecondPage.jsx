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
            <div className="rec1 h-38 w-82 border-2 border-black"></div>
            <div className="rec1 h-38 w-82 border-2 border-black"></div>
            <div className="rec1 h-38 w-82 border-2 border-black"></div>
            </div>
    </div>
  )
}

export default SecondPage