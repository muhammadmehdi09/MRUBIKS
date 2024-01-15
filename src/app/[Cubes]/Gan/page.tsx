import React from 'react'
import { client } from '@/lib/sanietyClient'
import {Image as IImage} from 'sanity'
import { urlForImage } from '../../../../sanity/lib/image'
import Image from "next/image"

const getCubeData = async () => {
  const response = await client.fetch(`*
  [ _type=="Gan"]{
    title,
      price,
      image,
      company
  }`)
  return response
}

interface ICube{
  title: string,
  price: number,
  image: IImage,
  company: {
    title: string,
  }
}

export default async function Gan(){

  const data:ICube[] = await getCubeData()
  
  return (
    <div className=''>
              <div className='grid grid-cols-1 xl:grid-cols-3 justify-center space-x-4 gap-y-5'>
    {data.map((item) => (
        <>
          <div className="">
            <a href= "Cube_Page">
              <div className="p-4 text-center items-center border border-gray-300 hover:scale-110 duration-500">
                <div className="w-350 h-350 inline-flex ">
                  <Image
                    src={urlForImage(item.image).url()}
                    alt="Cube Image"
                    width={500}
                    height={500}
                    className=""
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    {item.title}
                  </h2>
                  <h3 className="text-gray-900 text-lg title-font font-medium mb-3">
                    <span className="text-orange-400">$</span> {item.price}
                  </h3>
                  <a href="/Cubes/Cube_Page">
                    <button className="bg-orange-400 flex py-3 px-5 lg:px-10 2xl:px-16 m-auto text-black hover:bg-cyan-400 hover:text-white rounded-xl duration-200">
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
              </div>
            </a>
          </div>
        </>
      ))}
    </div>
    <br />
        </div>
  )
}
