import { BiCubeAlt } from 'react-icons/bi'

import React from 'react'

export const Hero = () => {
  return (

    <div className="hero min-h-[80vh] bg-img1 mt-4 bg-fixed bg-center">
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md">
          <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">Buy a Cube Now!</h1>
          <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-white">Choose a Cube and buy it instantly at cheap prices at Cube Zone </p>
          <a href="Cubes/All_Cubes">
            <button className='bg-black flex py-3 px-5 m-auto text-white hover:bg-white hover:text-black rounded-xl duration-700'>
              <BiCubeAlt className="mr-2 mt-1 h-5 w-5 " /> Get a Cube
            </button></a>
        </div>
      </div>
    </div>

  )
}

