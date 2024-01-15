import React from 'react'
import Image from 'next/image'

let ST = 1499.99

const Navbar = () => {
  return (
      <div className="navbar bg-cyan-500 mb-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <a href=""><li> <Image src={require("../../public/Images/Logo.png")} alt='Logo' width={100} height={100} className='block lg:hidden place-self-center' /></li></a>
              <li><a href='/Cubes/Moyu'>Moyu</a></li>
              <li><a href='/Cubes/Qiyi'>Qiyi</a></li>
              <li><a href='/Cubes/Gan'>Gan</a></li>
              <li><a href='/Cubes/All_Cubes'>All Cubes</a></li>
            </ul>
          </div>
          <a href='https://mrubiks-main.vercel.app/'>
            <Image src={require("../../public//Images/Logo.png")} alt='Logo' width={75} height={75}  className='hidden lg:block' />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href='/Cubes/Moyu' className='text-white hover:text-orange-600 duration-300'>Moyu</a></li>
              <li><a href='/Cubes/Qiyi' className='text-white hover:text-orange-600 duration-300'>Qiyi</a></li>
              <li><a href='/Cubes/Gan' className='text-white hover:text-orange-600 duration-300'>Gan</a></li>
              <li><a href='/Cubes/All_Cubes' className='text-white hover:text-orange-600 duration-300'>All Cubes</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end mr-10">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="group">
            <div className="indicator ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-orange-500 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item bg-orange-400">1</span>
          </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg text-orange-400">1 Items</span>
                <span className="text-info">Subtotal: <span className='text-cyan-700'>$</span>{Intl.NumberFormat('en-US').format(ST)}</span>
                <div className="card-actions">
                  <a href="/Cart">
                  <button className="btn btn-primary btn-block bg-cyan-400 text-white hover:text-black hover:bg-orange-400">View cart</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar