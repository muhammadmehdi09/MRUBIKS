import React from 'react'
import Image from 'next/image'
import Cube from '../../../public/Images/Moyu/21x21.webp'
import { BsCart4 } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'

let ST = 1499.99
let DC = 20
let TC = ST + DC

const Cart = () => {
  return (
    <div className='mb-[30px] mt-[30px] grid grid-cols-1 xl:grid-cols-3 space-y-10'>
      <div className='col-span-2'>
        <section className="text-gray-600 mt-2 sm:ml-3 ml:2 ml-5 min-[1710px]:ml-20 min-[1710px]:mt-20 flex-none sm:flex">
          <div>
            <Image
              src={Cube}
              alt="Cube Image"
              width={200}
              height={100}
              className=""
            />
          </div>
          <div className="flex xl:flex-none min-[1710px]:flex min-[1710px]:justify-between pl-2">
            <div className='space-y-2'>
              <h1 className="text-gray-900 text-xl title-font font-semibold mb-1">
                Moyu 21x21
              </h1>
              <h2 className="text-gray-900 title-font font-medium">
                <span className="text-orange-400">$</span> 1499.99
              </h2>
              <a href="">
                <button className="bg-orange-400 flex py-2 px-7 mt-2 text-black hover:bg-cyan-400 hover:text-white rounded-xl duration-300">
                  <RiDeleteBin6Line className='mt-1 mr-1' />Remove
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className='col-span-1 bg-slate-500 h-[430px]  lg:p-7 rounded-lg text-slate-100 p-4'>
        <h1 className='text-center font-bold text-2xl'>Order Summary</h1>
        <div className='divider'></div>
        <div className='flex items-center justify-between my-2'>
          <h2 className='font-semibold capitalize'>Total Items:</h2>
          <h2 className='font-semibold '>1</h2>
        </div>
        <div className='flex items-center justify-between my-2'>
          <h2 className='font-semibold capitalize'>Sub Total:</h2>
          <h2 className='font-semibold '>$ {Intl.NumberFormat('en-US').format(ST)}</h2>
        </div>
        <div className='flex items-center justify-between my-2'>
          <h2 className='font-semibold capitalize'>Devilery Charges:</h2>
          <h2 className='font-semibold '>$ {Intl.NumberFormat('en-US').format(DC)}</h2>
        </div>
        <div className='divider'></div>
        <div className='flex items-center justify-between my-2'>
          <h2 className='font-semibold capitalize'>Total Charges:</h2>
          <h2 className='font-semibold '>$ {Intl.NumberFormat('en-US').format(TC)}</h2>
        </div>
        <div className='divider'></div>
        <a href="">
          <button className='bg-black flex px-5 py-3 m-auto text-white hover:bg-white hover:text-black rounded-xl duration-500 text-sm'>
            <BsCart4 className="mr-2 mt-1 h-5 w-5 m-auto" /> Proceed to Checkout
          </button></a>

      </div>
    </div>
  )
}

export default Cart