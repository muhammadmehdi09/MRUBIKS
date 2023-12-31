import React from 'react'

const Promotions = () => {
  return (
    <div className='mb-[100px] mt-[50px]'>
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl title-font text-cyan-500 mb-4 font-bold">
          Our Promotions
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-40 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      <div className='flex-none lg:flex space-x-8 place-content-center mr-14 sm:mr-28 sm:ml-14 xl:ml-0 xl:mr-0 '>
        <div className="hero min-h-[500px] bg-img-3 ml-8 xl:ml-0 hover:scale-[1.10] duration-500">
          <div className="rounded-2xl hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold text-cyan-500">Get discount on any cube!</h1>
              <p className="mb-5 text-orange-400 font-semibold">It is our 10th anniversery on <span className=' text-blue-600'>4 December 2023 </span>, Buy a cube on that day and get 20% off on any cube</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="hero min-h-[500px] bg-img-2 hover:scale-[1.10] duration-500" >
          <div className="rounded-2xl hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content place-self-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold text-cyan-500">Use a Promo Code!</h1>
              <p className="mb-5 text-orange-400 font-semibold">Use Promo code <span className=' text-blue-600'>MRUBIKS2023 </span> and get upto 15% discount on all BMW cube </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotions