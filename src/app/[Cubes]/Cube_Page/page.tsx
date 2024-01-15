import Image from 'next/image'
import React from 'react'
import Cube from '../../../../public/Images/Moyu/21x21.webp'

const carPage = async () => {

  return (
          <section className="text-gray-600 body-font overflow-hidden container px-5 py-24 lg:w-4/5 mx-auto flex flex-wrap ml:10 lg:ml-28 xl:ml-40 2xl:ml-72">
              
              <Image
                    src={Cube}
                    alt="Cube Image"
                    width={500}
                    height={300}
                    className=""
                  />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-bold mb-3">
                    Moyu 21x21
                  </h1>
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    <span className="text-orange-400">$</span> 1499.99
                  </h2>
                  <div className='flex mt-3'>
                    <h2>Moyu</h2>
                  </div>
                  <a href="">
                    <button className=" bg-orange-400 flex py-3 px-5 lg:px-10 2xl:px-16 mt-5 text-black hover:bg-cyan-400 hover:text-white rounded-xl duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </a>
                </div>
          </section>

  )
}

export default carPage